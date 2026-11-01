"use client";

import { COMPETITIONS_DATA, CERTIFICATIONS_DATA } from "@/data/portfolioData";
import { Award, CheckCircle2, TrendingUp, Sparkles, BrainCircuit, ShieldCheck, Flag } from "lucide-react";

export function CompetitionsSection() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 py-24">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-neon-yellow shadow-[0_0_8px_#FFE600]" />
          <span className="font-mono text-xs tracking-widest text-neon-yellow uppercase">
            05 // STRATEGIC RECON & CREDENTIALS
          </span>
        </div>
        <div className="mb-10">
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Competitions & Certifications
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 font-light max-w-xl">
            National business simulations, multi-modal AI prompt engineering trials, and verified institutional credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Competitions & Business Challenges (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-widest text-gray-400 uppercase flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-neon-cyan" />
              <span>Competitions & High-Stakes Challenges</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COMPETITIONS_DATA.map((comp) => (
                <div
                  key={comp.id}
                  className="glass-card rounded-2xl p-5 border border-white/10 hover:border-neon-cyan/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                        {comp.type}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500">
                        2026
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-base text-white mb-1">
                      {comp.title}
                    </h4>
                    <div className="text-xs font-mono text-neon-yellow mb-2">
                      {comp.organizer}
                    </div>
                    <div className="text-[11px] font-mono text-gray-400 mb-3 italic">
                      {comp.event}
                    </div>

                    <p className="text-xs text-gray-300 font-light leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (1 col) */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm tracking-widest text-gray-400 uppercase flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-neon-yellow" />
              <span>Verified Credentials</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-card rounded-2xl p-6 border border-white/10 hover:border-neon-yellow/40 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-neon-yellow/5 rounded-full blur-2xl group-hover:bg-neon-yellow/10 transition-colors" />

                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      {cert.status}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-neon-yellow transition-colors">
                    {cert.title}
                  </h4>

                  <div className="text-xs font-mono text-gray-300 mb-4">
                    Issuer: {cert.issuer}
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>Cryptographic Verification</span>
                    <span className="text-neon-cyan group-hover:translate-x-1 transition-transform">
                      VALID // 2026 →
                    </span>
                  </div>
                </div>
              ))}

              {/* Status Notice Card */}
              <div className="glass-card rounded-2xl p-5 border border-neon-cyan/20 bg-neon-cyan/[0.02]">
                <div className="flex items-center gap-2 text-xs font-heading font-bold text-neon-cyan uppercase mb-2">
                  <BrainCircuit className="w-4 h-4" />
                  Continuous Up-skilling
                </div>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Actively studying and expanding certifications in Cloud Security, Zero-Trust Architecture, and Large Language Model fine-tuning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

