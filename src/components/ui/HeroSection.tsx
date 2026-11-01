"use client";

import { PERSONAL_DATA } from "@/data/portfolioData";
import { ArrowDown, Shield, Sparkles, Terminal, Code2 } from "lucide-react";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 pt-20 pb-16 text-center select-none">
      {/* Top Cyber Status Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/30 text-xs sm:text-sm font-mono text-gray-300 mb-6 shadow-glow-cyan animate-pulse-slow">
        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
        <span className="text-neon-cyan font-semibold">SECURITY PROTOCOL ENGAGED</span>
        <span className="text-gray-500">|</span>
        <span className="text-gray-400">NEWTON SCHOOL OF TECHNOLOGY</span>
      </div>

      {/* Main Massive Heading */}
      <div className="relative mb-4">
        <h1 className="font-heading font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_10px_35px_rgba(0,229,255,0.25)]">
          DAKSH
        </h1>
        {/* Subtle Cyber Underline Glow */}
        <div className="h-1 w-32 sm:w-48 mx-auto mt-2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent rounded-full shadow-[0_0_15px_#00E5FF]" />
      </div>

      {/* Subtitle / Role */}
      <h2 className="font-heading font-bold text-lg sm:text-2xl md:text-3xl text-neon-yellow tracking-widest uppercase mb-6 text-glow-yellow max-w-4xl">
        {PERSONAL_DATA.heroTitle}
      </h2>

      {/* Tagline */}
      <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 font-body mb-10 leading-relaxed font-light">
        {PERSONAL_DATA.tagline}
      </p>

      {/* Quick Hero Stat Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl w-full mb-12">
        {PERSONAL_DATA.quickStats.map((stat, i) => (
          <div
            key={i}
            className="glass-card p-3 sm:p-4 rounded-xl border border-white/5 hover:border-neon-cyan/40 text-left transition-all group"
          >
            <div className="text-xl sm:text-2xl font-heading font-black text-white group-hover:text-neon-cyan transition-colors">
              {stat.value}
            </div>
            <div className="text-xs font-mono text-gray-400 mt-1">{stat.label}</div>
            <div className="text-[10px] font-mono text-neon-yellow mt-0.5">
              {stat.highlight}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <button
          onClick={onExploreClick}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider text-black bg-neon-cyan hover:bg-white shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all duration-300 transform hover:-translate-y-1"
        >
          <span>Explore Spatial Journey</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
        </button>

        <a
          href="https://github.com/masterdaksh23"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-4 rounded-xl glass-card font-heading font-medium text-xs uppercase tracking-wider text-gray-300 hover:text-neon-yellow border border-white/10 hover:border-neon-yellow/40 transition-all duration-300"
        >
          <Code2 className="w-4 h-4 text-neon-yellow" />
          <span>GitHub Operations</span>
        </a>
      </div>

      {/* Scroll indicator (in natural flex flow with ample margin) */}
      <div className="flex flex-col items-center gap-1.5 opacity-60 mt-4 sm:mt-6 pb-4">
        <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
          Scroll To Traverse Space
        </span>
        <div className="w-4 h-7 rounded-full border border-gray-500/60 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-bounce" />
        </div>
      </div>
    </div>
  );
}

