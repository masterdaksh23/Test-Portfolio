"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Cpu, ChevronRight, Zap } from "lucide-react";

interface BootSequenceProps {
  onEnter: () => void;
}

const BOOT_LOGS = [
  { text: "DAKSH_OS v20.26 — booting…", delay: 250, type: "system" },
  { text: "[ OK ] Mounted /dev/brain", delay: 350, type: "success" },
  { text: "[ OK ] Started coffee.service", delay: 300, type: "success" },
  { text: "[ OK ] Loaded Cybersecurity modules (Top 15 National CTF)", delay: 400, type: "success" },
  { text: "[ OK ] Compiled Agri-Tech & Civic-Tech deployments", delay: 400, type: "success" },
  { text: "[ OK ] Reached target: Full-Stack Builder", delay: 350, type: "success" },
  { text: "", delay: 200, type: "break" },
  { text: "Hello, World.", delay: 300, type: "highlight" },
];

export function BootSequence({ onEnter }: BootSequenceProps) {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; type: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < BOOT_LOGS.length) {
      const currentLog = BOOT_LOGS[currentIndex];
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, { text: currentLog.text, type: currentLog.type }]);
        setCurrentIndex((prev) => prev + 1);
      }, currentLog.delay);

      return () => clearTimeout(timer);
    } else {
      const doneTimer = setTimeout(() => {
        setIsTypingComplete(true);
      }, 300);
      return () => clearTimeout(doneTimer);
    }
  }, [currentIndex]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayedLines]);

  const handleInitialize = () => {
    if (isExiting) return;
    setIsExiting(true);
    // Smooth delay for the exit animation
    setTimeout(() => {
      onEnter();
    }, 850);
  };

  // Allow pressing Enter key to initialize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isTypingComplete) {
        handleInitialize();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTypingComplete, isExiting]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="boot-sequence"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-gray-200 p-4 sm:p-8 select-none overflow-hidden"
        >
          {/* Subtle Cyber Grid Background & Glow */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-neon-yellow/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Top telemetry bar */}
          <div className="absolute top-4 left-4 right-4 max-w-4xl mx-auto flex items-center justify-between text-[11px] font-mono text-gray-400 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
              <span className="text-neon-cyan font-bold">DAKSH_OS // KERNEL BOOT</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span>HOST: Rishihood.NST</span>
              <span>ARCH: ARM64/V8</span>
              <span className="text-neon-yellow">STATUS: OPERATIONAL</span>
            </div>
            <button
              onClick={handleInitialize}
              className="text-gray-400 hover:text-neon-cyan transition-colors text-xs underline underline-offset-4"
            >
              Skip [ESC]
            </button>
          </div>

          {/* Main Terminal Window */}
          <div className="w-full max-w-2xl glass-card rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(0,229,255,0.08)] backdrop-blur-2xl">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <Terminal className="w-3.5 h-3.5 text-neon-cyan" />
                <span>bash — daksh@spatial-terminal: ~</span>
              </div>
              <div className="text-[10px] font-mono text-gray-500">v20.26</div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed min-h-[300px] flex flex-col justify-between bg-black/40">
              <div className="space-y-2">
                {displayedLines.map((line, idx) => {
                  if (line.type === "break") {
                    return <div key={idx} className="h-2" />;
                  }

                  const isOkLine = line.text.startsWith("[ OK ]");
                  const isHello = line.text === "Hello, World.";

                  return (
                    <div key={idx} className="flex items-start gap-2">
                      {isOkLine ? (
                        <>
                          <span className="text-neon-cyan font-bold tracking-wider">[ OK ]</span>
                          <span className="text-gray-200">{line.text.replace("[ OK ]", "")}</span>
                        </>
                      ) : isHello ? (
                        <div className="pt-2 text-base sm:text-lg font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-yellow">
                          {line.text}
                        </div>
                      ) : (
                        <span className="text-neon-yellow font-medium">{line.text}</span>
                      )}
                    </div>
                  );
                })}

                {/* Blinking Cursor */}
                <div className="flex items-center gap-1.5 pt-1">
                  <span className="text-neon-cyan font-bold">&gt;</span>
                  <span className="w-2.5 h-4 bg-neon-cyan animate-pulse inline-block align-middle" />
                </div>
                <div ref={terminalEndRef} />
              </div>

              {/* Action Area */}
              <div className="pt-8 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-gray-400 font-mono flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-neon-yellow" />
                  <span>
                    {isTypingComplete
                      ? "System initialized. Ready for 3D spatial entry."
                      : "Executing boot sequence..."}
                  </span>
                </div>

                <motion.button
                  onClick={handleInitialize}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isTypingComplete ? 1 : 0.6,
                    y: isTypingComplete ? 0 : 5,
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-heading font-black text-xs sm:text-sm tracking-wider uppercase text-black bg-gradient-to-r from-neon-cyan to-neon-yellow hover:brightness-110 shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_45px_rgba(255,230,0,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>[ INITIALIZE 3D ENVIRONMENT → ]</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom credit info */}
          <div className="absolute bottom-4 text-center text-[11px] font-mono text-gray-400">
            Press <span className="text-neon-cyan font-bold">ENTER</span> or click to launch
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
