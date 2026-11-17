"use client";

import { ArrowDown, Code2, Trophy, Rocket, Shield, Laptop } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 text-center select-none">
      {/* Top Cyber Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-neon-cyan/30 text-[11px] sm:text-xs font-mono text-gray-300 mb-4 shadow-glow-cyan animate-pulse-slow">
        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
        <span className="text-neon-cyan font-semibold tracking-wider">SECURITY PROTOCOL ENGAGED</span>
        <span className="text-gray-600">|</span>
        <span className="text-gray-400">NEWTON SCHOOL OF TECHNOLOGY</span>
      </div>

      {/* Main Heading */}
      <div className="relative mb-2">
        <h1 className="font-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-500 drop-shadow-[0_10px_35px_rgba(0,229,255,0.3)]">
          DAKSH
        </h1>
        <div className="h-1 w-28 sm:w-40 mx-auto mt-1.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent rounded-full shadow-[0_0_15px_#00E5FF]" />
      </div>

      {/* Subtitle / Role */}
      <h2 className="font-heading font-bold text-sm sm:text-lg md:text-xl text-neon-yellow tracking-widest uppercase mb-2 text-glow-yellow max-w-3xl">
        CREATIVE DEVELOPER &amp; CYBERSECURITY SPECIALIST
      </h2>

      {/* Tagline */}
      <p className="max-w-2xl text-xs sm:text-sm text-gray-300 font-body mb-6 leading-relaxed font-light">
        Bridging spatial 3D web engineering, secure cloud architecture, and competitive cyber operations.
      </p>

      {/* CENTER STAGE: VS Code Editor Card */}
      <div className="w-full max-w-xl mx-auto mb-6 text-left rounded-xl bg-black/50 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-xl group hover:border-neon-cyan/40 transition-all duration-300">
        {/* macOS Window Controls & Tab Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-black/70 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block shadow-[0_0_8px_rgba(255,95,86,0.4)]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block shadow-[0_0_8px_rgba(255,189,46,0.4)]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block shadow-[0_0_8px_rgba(39,201,63,0.4)]" />
            <span className="ml-3 text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
              <Laptop className="w-3 h-3 text-neon-cyan" />
              Daksh.ts
            </span>
          </div>
          <div className="text-[10px] font-mono text-neon-yellow/80">TypeScript</div>
        </div>

        {/* Syntax-Highlighted Code Body */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm bg-black/40 overflow-x-auto leading-relaxed">
          <pre className="text-gray-300 font-mono">
            <code>
              <span className="text-purple-400">class</span>{" "}
              <span className="text-neon-yellow font-bold">Daksh</span>{" "}
              <span className="text-purple-400">extends</span>{" "}
              <span className="text-blue-400">Developer</span> &#123;{"\n"}
              {"  "}<span className="text-gray-300">focus</span> = [
              <span className="text-[#00FF41]">&quot;Full-Stack&quot;</span>,{" "}
              <span className="text-[#00FF41]">&quot;Cybersecurity&quot;</span>,{" "}
              <span className="text-[#00FF41]">&quot;AI&quot;</span>];{"\n\n"}
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

      {/* 3 DISTINCT STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl w-full mb-8">
        {/* Card 1: TOP 15 */}
        <div className="glass-card p-4 rounded-xl border border-neon-cyan/30 text-left transition-all duration-300 hover:border-neon-cyan hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-neon-cyan transition-colors">
              TOP 15
            </span>
            <Trophy className="w-5 h-5 text-neon-cyan" />
          </div>
          <div className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider">
            National CTF
          </div>
          <div className="text-[11px] font-mono text-neon-cyan mt-0.5">
            Codemahotsav 26 Finalist
          </div>
        </div>

        {/* Card 2: 2+ Products */}
        <div className="glass-card p-4 rounded-xl border border-neon-yellow/30 text-left transition-all duration-300 hover:border-neon-yellow hover:shadow-[0_0_25px_rgba(255,230,0,0.25)] group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-neon-yellow transition-colors">
              2+
            </span>
            <Rocket className="w-5 h-5 text-neon-yellow" />
          </div>
          <div className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider">
            Live Products Shipped
          </div>
          <div className="text-[11px] font-mono text-neon-yellow mt-0.5">
            Agri-Tech &amp; Civic-Tech
          </div>
        </div>

        {/* Card 3: 8+ Hackathons */}
        <div className="glass-card p-4 rounded-xl border border-white/10 text-left transition-all duration-300 hover:border-neon-cyan hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-2xl sm:text-3xl font-heading font-black text-white group-hover:text-neon-cyan transition-colors">
              8+
            </span>
            <Shield className="w-5 h-5 text-neon-cyan" />
          </div>
          <div className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider">
            Hackathons &amp; Competitions
          </div>
          <div className="text-[11px] font-mono text-gray-400 mt-0.5">
            National &amp; Global Sprints
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <button
          onClick={onExploreClick}
          className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-black bg-neon-cyan hover:bg-white shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Explore Spatial Journey</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
        </button>

        <a
          href="https://github.com/masterdaksh23"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-card font-heading font-medium text-xs uppercase tracking-wider text-gray-300 hover:text-neon-yellow border border-white/10 hover:border-neon-yellow/40 transition-all duration-300"
        >
          <Code2 className="w-4 h-4 text-neon-yellow" />
          <span>GitHub Operations</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="flex flex-col items-center gap-1.5 opacity-60 pb-2">
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
