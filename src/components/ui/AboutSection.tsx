"use client";

import { PERSONAL_DATA } from "@/data/portfolioData";
import { Terminal, ShieldCheck, Cpu, Code2, Award, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 py-24">
      <div className="max-w-5xl w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-0.5 bg-neon-cyan shadow-[0_0_8px_#00E5FF]" />
          <span className="font-mono text-xs tracking-widest text-neon-cyan uppercase">
            02 // IDENTITY & BACKGROUND
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Main Glassmorphic Dossier Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 relative overflow-hidden backdrop-blur-2xl">
          {/* Subtle Ambient Glow Behind Card */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-neon-yellow/10 rounded-full blur-3xl pointer-events-none" />

          {/* Dossier Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-neon-yellow mb-1">
                <Terminal className="w-4 h-4" />
                <span>OPERATIVE DOSSIER // DAKSH</span>
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-wide">
                Architecting Secure Spatial Systems
              </h2>
            </div>

            {/* University Tag */}
            <div className="glass-card px-4 py-2.5 rounded-xl border border-neon-cyan/30 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-neon-cyan" />
              <div className="text-left">
                <div className="text-[11px] font-mono text-gray-400">Undergraduate</div>
                <div className="text-xs font-bold text-white">Newton School of Technology</div>
                <div className="text-[10px] text-gray-400">Rishihood University</div>
              </div>
            </div>
          </div>

          {/* Solid Introduction Paragraph (Verbatim from prompt) */}
          <div className="mb-10 text-gray-200 text-base sm:text-lg leading-relaxed font-light border-l-2 border-neon-cyan pl-4 sm:pl-6 bg-gradient-to-r from-neon-cyan/5 to-transparent py-2 rounded-r-lg">
            <p>{PERSONAL_DATA.bio}</p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cybersecurity & CTF */}
            <div className="p-5 rounded-xl bg-black/40 border border-white/5 hover:border-neon-cyan/40 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-neon-cyan">
                <ShieldCheck className="w-4 h-4" />
                <h3 className="text-xs font-heading font-bold uppercase tracking-wider">
                  Cybersecurity & Exploitation
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_DATA.skills.cybersecurity.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Full-Stack & 3D Web */}
            <div className="p-5 rounded-xl bg-black/40 border border-white/5 hover:border-neon-yellow/40 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-neon-yellow">
                <Code2 className="w-4 h-4" />
                <h3 className="text-xs font-heading font-bold uppercase tracking-wider">
                  Frontend, 3D & Creative Dev
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_DATA.skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-neon-yellow/10 text-neon-yellow border border-neon-yellow/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & Cloud Systems */}
            <div className="p-5 rounded-xl bg-black/40 border border-white/5 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-gray-200">
                <Cpu className="w-4 h-4 text-neon-cyan" />
                <h3 className="text-xs font-heading font-bold uppercase tracking-wider">
                  Backend, Cloud & Infrastructure
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_DATA.skills.backendAndCloud.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Systems & Prototyping */}
            <div className="p-5 rounded-xl bg-black/40 border border-white/5 hover:border-neon-yellow/40 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-neon-yellow">
                <Award className="w-4 h-4" />
                <h3 className="text-xs font-heading font-bold uppercase tracking-wider">
                  AI Orchestration & Telemetry
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_DATA.skills.aiAndTools.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-neon-yellow/10 text-gray-200 border border-neon-yellow/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

