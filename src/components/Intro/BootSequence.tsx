"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Cpu, ChevronRight, CheckCircle2, Zap } from "lucide-react";

interface BootSequenceProps {
  onEnter: () => void;
}

export function BootSequence({ onEnter }: BootSequenceProps) {
  // Stages: 0 = Boot & Progress, 1 = TS Compilation, 2 = Hello World Reveal, 3 = Exit Transition
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0);
  const [progress, setProgress] = useState(0);

  // Stage 0: Animate progress counter from 0 to 100% over ~3 seconds
  useEffect(() => {
    if (stage !== 0) return;

    const startTime = Date.now();
    const duration = 2800; // 2.8s

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(current);

      if (elapsed >= duration) {
        clearInterval(timer);
        setProgress(100);
        // Advance to Stage 1 after short pause
        setTimeout(() => {
          setStage(1);
        }, 350);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [stage]);

  // Stage 1: Advance to Stage 2 after compilation completes (~3 seconds)
  useEffect(() => {
    if (stage !== 1) return;

    const timer = setTimeout(() => {
      setStage(2);
    }, 3200);

    return () => clearTimeout(timer);
  }, [stage]);

  // Handle stage 3 exit transition
  const handleLaunch = () => {
    if (stage === 3) return;
    setStage(3);
  };

  // Keyboard shortcut: Allow Enter key to initialize once at Stage 2
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && stage === 2) {
        handleLaunch();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [stage]);

  return (
    <motion.div
      key="boot-sequence-overlay"
      className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-between p-6 sm:p-12 font-mono select-none overflow-hidden"
      initial={{ opacity: 1, scale: 1 }}
      animate={
        stage === 3
          ? { opacity: 0, scale: 1.1, filter: "blur(12px)" }
          : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={() => {
        if (stage === 3) {
          onEnter();
        }
      }}
    >
      {/* Background Matrix / Scanline Accent */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="scanline-overlay absolute inset-0 opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00E5FF]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#00FF41]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* TOP TELEMETRY BAR */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-between text-xs border-b border-white/10 pb-4 text-gray-400">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41] animate-ping" />
          <span className="text-[#00FF41] font-bold tracking-widest">
            DAKSH_OS v20.26
          </span>
          <span className="hidden sm:inline-block text-gray-600">|</span>
          <span className="hidden sm:inline-block text-gray-400">
            SECURE_KERNEL // 64-BIT
          </span>
        </div>

        {/* Stage Status Indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
          <span className="text-gray-300">
            {stage === 0 && "STAGE 01: SYSTEM BOOT"}
            {stage === 1 && "STAGE 02: CODE COMPILATION"}
            {(stage === 2 || stage === 3) && "STAGE 03: ENVIRONMENT INITIALIZATION"}
          </span>
        </div>

        {/* Skip button */}
        <button
          onClick={handleLaunch}
          className="text-gray-500 hover:text-[#00E5FF] transition-colors text-xs underline underline-offset-4 cursor-pointer"
        >
          [ Skip Intro ]
        </button>
      </div>

      {/* MAIN STAGE CONTAINER */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto my-auto">
        <AnimatePresence mode="wait">
          {/* ========================================================
              STAGE 0: System Boot & Progress Bar (~3 seconds)
             ======================================================== */}
          {stage === 0 && (
            <motion.div
              key="stage-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center text-center"
            >
              {/* Massive 0% to 100% Progress Counter */}
              <div className="mb-6">
                <span className="font-heading font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-[#00FF41] drop-shadow-[0_0_30px_rgba(0,255,65,0.4)]">
                  {progress}%
                </span>
                <div className="text-xs sm:text-sm text-[#00E5FF] tracking-widest mt-1 uppercase">
                  INITIALIZING QUANTUM KERNEL...
                </div>
              </div>

              {/* Sleek, Thin Animated Progress Bar */}
              <div className="w-full max-w-xl h-2 bg-black/80 rounded-full border border-white/15 overflow-hidden p-0.5 mb-8 shadow-[0_0_20px_rgba(0,255,65,0.15)]">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#00FF41] via-[#00E5FF] to-[#00FF41] shadow-[0_0_12px_#00FF41]"
                />
              </div>

              {/* Rapidly Typing Boot Logs Below Bar */}
              <div className="w-full max-w-xl text-left bg-black/60 rounded-xl p-4 sm:p-5 border border-white/10 text-xs sm:text-sm space-y-2 backdrop-blur-md">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-[#00E5FF] font-medium"
                >
                  &gt; DAKSH_OS v20.26 — initializing...
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-2 text-white"
                >
                  <span className="text-[#00FF41] font-bold">[ OK ]</span>
                  <span>Mounted /dev/brain</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                  className="flex items-center gap-2 text-white"
                >
                  <span className="text-[#00FF41] font-bold">[ OK ]</span>
                  <span>Loaded Cybersecurity modules (Top 15 National CTF)</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.9 }}
                  className="flex items-center gap-2 text-white"
                >
                  <span className="text-[#00FF41] font-bold">[ OK ]</span>
                  <span>Compiled Agri-Tech &amp; Civic-Tech deployments</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.4 }}
                  className="flex items-center gap-2 text-white"
                >
                  <span className="text-[#00FF41] font-bold">[ OK ]</span>
                  <span className="text-[#00FF41] font-semibold">
                    Reached target: Full-Stack Builder
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              STAGE 1: Code Compilation (~3 seconds)
             ======================================================== */}
          {stage === 1 && (
            <motion.div
              key="stage-1"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-2xl"
            >
              <div className="w-full glass-card rounded-2xl border border-white/15 overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.1)]">
                {/* VS Code Style Header */}
                <div className="flex items-center justify-between px-5 py-3 bg-black/80 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-3 text-xs text-gray-400 flex items-center gap-1.5 font-mono">
                      <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
                      terminal — zsh (build-task)
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-500">node v20.26</div>
                </div>

                {/* Compilation Lines */}
                <div className="p-6 sm:p-8 bg-black/60 text-xs sm:text-sm font-mono space-y-3 leading-relaxed">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#00E5FF] font-semibold"
                  >
                    $ tsc daksh_portfolio.ts --build
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-white flex items-center gap-2"
                  >
                    <span>&gt; Compiling modules...</span>
                    <span className="text-[#00FF41]">[OK]</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 }}
                    className="text-white flex items-center gap-2"
                  >
                    <span>&gt; Optimizing 3D assets...</span>
                    <span className="text-[#00FF41]">[OK]</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4 }}
                    className="text-[#00FF41] font-bold flex items-center gap-2 pt-2 border-t border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00FF41]" />
                    <span>&gt; Build successful. Zero errors. Ready for execution.</span>
                  </motion.div>

                  {/* Blinking Cursor */}
                  <div className="pt-1 flex items-center gap-1">
                    <span className="text-[#00FF41]">&gt;</span>
                    <span className="w-2.5 h-4 bg-[#00FF41] inline-block animate-pulse align-middle" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              STAGE 2: The "Hello World" Reveal (~2 seconds)
             ======================================================== */}
          {(stage === 2 || stage === 3) && (
            <motion.div
              key="stage-2"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center text-center"
            >
              {/* Glowing Hello, World. */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="text-xs sm:text-sm font-mono text-[#00FF41] tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#00FF41]" />
                  <span>3D SPATIAL KERNEL READY</span>
                </div>

                <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#00E5FF] drop-shadow-[0_0_35px_rgba(0,229,255,0.7)] text-glow-cyan">
                  Hello, World.
                </h1>

                <p className="text-xs sm:text-sm text-gray-300 font-mono mt-4 max-w-md mx-auto">
                  Spatial gallery assembled. Camera coordinates mapped to 3D axes.
                </p>
              </motion.div>

              {/* Glowing Button: [ INITIALIZE 3D ENVIRONMENT → ] */}
              <motion.button
                onClick={handleLaunch}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative group px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-heading font-black text-xs sm:text-sm tracking-wider uppercase text-black bg-gradient-to-r from-[#00FF41] via-[#00E5FF] to-[#FFE600] shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:shadow-[0_0_60px_rgba(0,255,65,0.8)] transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <span>[ INITIALIZE 3D ENVIRONMENT → ]</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>

              <div className="text-[11px] font-mono text-gray-400 mt-4">
                Press <span className="text-[#00E5FF] font-bold">ENTER</span> to initialize
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BOTTOM FOOTER TELEMETRY */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-between text-[11px] text-gray-400 border-t border-white/10 pt-4">
        <div>
          STACK: <span className="text-white">Next.js 15 • R3F • Three.js • GSAP</span>
        </div>
        <div>
          STATUS: <span className="text-[#00FF41]">ONLINE</span>
        </div>
      </div>
    </motion.div>
  );
}
