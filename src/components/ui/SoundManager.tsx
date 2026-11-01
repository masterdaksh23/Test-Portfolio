"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function SoundManager() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;

    if (isPlaying) {
      if (gainNodeRef.current && ctx) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(
          0.0001,
          ctx.currentTime + 0.5
        );
        setTimeout(() => {
          oscillatorRef.current?.stop();
          oscillatorRef.current?.disconnect();
          oscillatorRef.current = null;
        }, 500);
      }
      setIsPlaying(false);
    } else {
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Generate a warm, low ambient futuristic sci-fi drone (root ~55Hz A1)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(55, ctx.currentTime);

      // Low pass filter for warm resonance
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(180, ctx.currentTime);

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 1.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      try {
        oscillatorRef.current?.stop();
        audioCtxRef.current?.close();
      } catch {
        // cleanup safe
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute Cyber Ambience" : "Play Cyber Ambience"}
      aria-label="Toggle Sound"
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider bg-zinc-900/80 border border-white/10 hover:border-neon-cyan/50 text-gray-300 hover:text-neon-cyan transition-all duration-200"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-neon-cyan animate-pulse" />
          <span className="text-neon-cyan font-bold">Audio [ON]</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-gray-400" />
          <span>Audio [OFF]</span>
        </>
      )}
    </button>
  );
}

