"use client";

import { PERSONAL_DATA } from "@/data/portfolio";
import { ArrowDown, Code2, Sparkles, Terminal, Shield, Trophy, Rocket, Laptop } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 pt-24 pb-16 text-center select-none">
      {/* Top Cyber Status Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/30 text-xs sm:text-sm font-mono text-gray-300 mb-6 shadow-glow-cyan animate-pulse-slow">
        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
        <span className="text-neon-cyan font-semibold">SECURITY PROTOCOL ENGAGED</span>
        <span className="text-gray-500">|</span>
        <span className="text-gray-400">NEWTON SCHOOL OF TECHNOLOGY</span>
      </div>

      {/* Main Massive Heading */}
      <div className="relative mb-3">
        <h1 className="font-heading font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_10px_35px_rgba(0,229,255,0.3)]">
          DAKSH
        </h1>
        {/* Subtle Cyber Underline Glow */}
        <div className="h-1 w-32 sm:w-48 mx-auto mt-2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent rounded-full shadow-[0_0_15px_#00E5FF]" />
      </div>

      {/* Subtitle / Role */}
      <h2 className="font-heading font-bold text-base sm:text-xl md:text-2xl text-neon-yellow tracking-widest uppercase mb-4 text-glow-yellow max-w-4xl">
        {PERSONAL_DATA.heroTitle}
      </h2>

      {/* Tagline */}
      <p className="max-w-2xl text-xs sm:text-sm md:text-base text-gray-300 font-body mb-8 leading-relaxed font-light">
        {PERSONAL_DATA.tagline}
      </p>

      {/* Glassmorphic VS Code Style Card */}
      <div className="w-full max-w-xl mx-auto mb-10 text-left glass-card rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,229,255,0.08)] overflow-hidden backdrop-blur-xl group hover:border-neon-cyan/40 transition-all duration-300">
        {/* Window Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
              <Laptop className="w-3 h-3 text-neon-cyan" />
              Daksh.ts — TypeScript
            </span>
          </div>
          <div className="text-[10px] font-mono text-neon-yellow/70">UTF-8</div>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm bg-black/40 overflow-x-auto leading-relaxed">
          <pre className="text-gray-300 font-mono">
            <code>
              <span className="text-purple-400">class</span>{" "}
              <span className="text-neon-yellow font-semibold">Daksh</span>{" "}
              <span className="text-purple-400">extends</span>{" "}
              <span className="text-blue-400">Developer</span> &#123;{"\n"}
              {"  "}<span className="text-gray-400">focus</span> = [
              <span className="text-emerald-400">&quot;Full-Stack&quot;</span>,{" "}
              <span className="text-emerald-400">&quot;Cybersecurity&quot;</span>,{" "}
              <span className="text-emerald-400">&quot;AI&quot;</span>];{"\n\n"}
              {"  "}<span className="text-purple-400">async</span>{" "}
              <span className="text-blue-300">build</span>() &#123;{"\n"}
              {"    "}<span className="text-purple-400">await</span>{" "}
              <span className="text-gray-300">this</span>.<span className="text-blue-300">ship</span>(
              <span className="text-neon-cyan">&quot;Odyssey 20 (Agri-Tech)&quot;</span>);{"\n"}
              {"    "}<span className="text-purple-400">await</span>{" "}
              <span className="text-gray-300">this</span>.<span className="text-blue-300">win</span>(
              <span className="text-neon-yellow">&quot;Top 15 National CTF&quot;</span>);{"\n"}
              {"  "}&#125;{"\n"}
              &#125;
            </code>
          </pre>
        </div>
      </div>

      {/* 3 High-Impact Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full mb-10">
        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-neon-cyan/30 text-left transition-all duration-300 hover:border-neon-cyan hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-neon-cyan transition-colors">
              TOP 15
            </span>
            <Trophy className="w-5 h-5 text-neon-cyan" />
          </div>
          <div className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider">
            National CTF
          </div>
          <div className="text-[11px] font-mono text-neon-cyan mt-1">
            Codemahotsav 26 Finalist
          </div>
        </div>

        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-neon-yellow/30 text-left transition-all duration-300 hover:border-neon-yellow hover:shadow-[0_0_25px_rgba(255,230,0,0.2)] group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-neon-yellow transition-colors">
              2+
            </span>
            <Rocket className="w-5 h-5 text-neon-yellow" />
          </div>
          <div className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider">
            Live Products Shipped
          </div>
          <div className="text-[11px] font-mono text-neon-yellow mt-1">
            Agri-Tech & Civic-Tech
          </div>
        </div>

        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 text-left transition-all duration-300 hover:border-neon-cyan hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-neon-cyan transition-colors">
              8+
            </span>
            <Shield className="w-5 h-5 text-neon-cyan" />
          </div>
          <div className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider">
            Hackathons & Challenges
          </div>
          <div className="text-[11px] font-mono text-gray-400 mt-1">
            National & Global Sprints
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <button
          onClick={onExploreClick}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-black bg-neon-cyan hover:bg-white shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
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

      {/* Scroll indicator */}
      <div className="flex flex-col items-center gap-1.5 opacity-60 mt-2 pb-4">
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
