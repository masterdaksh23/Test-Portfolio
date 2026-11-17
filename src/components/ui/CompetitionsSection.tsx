"use client";

import { COMPETITIONS_DATA, CERTIFICATIONS_DATA } from "@/data/portfolio";
import { Award, CheckCircle2, TrendingUp, Sparkles, BrainCircuit, ShieldCheck, Flag, Calendar } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sleek Glowing Timeline: Competitions & Business Challenges (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading font-bold text-sm tracking-widest text-gray-400 uppercase flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-neon-cyan" />
              <span>Competitions & High-Stakes Challenges Timeline</span>
            </h3>

            {/* Vertical Glowing Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-neon-cyan/30 space-y-6 before:absolute before:top-0 before:left-[-2px] before:w-[2px] before:h-24 before:bg-gradient-to-b before:from-neon-cyan before:to-transparent">
              {COMPETITIONS_DATA.map((comp, idx) => (
                <div key={comp.id} className="relative group">
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-neon-cyan group-hover:border-neon-yellow group-hover:scale-125 transition-all duration-300 flex items-center justify-center shadow-[0_0_10px_#00E5FF]">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan group-hover:bg-neon-yellow" />
                  </div>

                  {/* Timeline Card */}
                  <div className="glass-card rounded-2xl p-5 border border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30 font-bold uppercase tracking-wider">
                        {comp.type}
                      </span>
                      <span className="text-[11px] font-mono text-neon-yellow flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>2026 Season</span>
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-neon-cyan transition-colors">
                      {comp.title}
                    </h4>

                    <div className="text-xs font-mono text-neon-yellow mb-1 font-semibold">
                      {comp.organizer}
                    </div>

                    <div className="text-xs font-mono text-gray-400 mb-3 italic">
                      {comp.event}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading font-bold text-sm tracking-widest text-gray-400 uppercase flex items-center gap-2 mb-4">
              <ShieldCheck className="w-4 h-4 text-neon-yellow" />
              <span>Verified Institutional Credentials</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="glass-card rounded-2xl p-6 border border-white/10 hover:border-neon-yellow/50 hover:shadow-[0_0_30px_rgba(255,230,0,0.18)] transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-neon-yellow/5 rounded-full blur-2xl group-hover:bg-neon-yellow/10 transition-colors" />

                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 rounded-full font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {cert.status}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-neon-yellow transition-colors">
                    {cert.title}
                  </h4>

                  <div className="text-xs font-mono text-gray-300 mb-4">
                    Issuer: <span className="text-white font-medium">{cert.issuer}</span>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span className="flex items-center gap-1 text-gray-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-neon-cyan" />
                      Verified Participant
                    </span>
                    <span className="text-neon-yellow font-bold group-hover:translate-x-1 transition-transform">
                      AUTHENTICATED // 2026
                    </span>
                  </div>
                </div>
              ))}

              {/* Status Notice Card */}
              <div className="glass-card rounded-2xl p-5 border border-neon-cyan/20 bg-neon-cyan/[0.03]">
                <div className="flex items-center gap-2 text-xs font-heading font-bold text-neon-cyan uppercase mb-2">
                  <BrainCircuit className="w-4 h-4" />
                  Continuous Up-skilling
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Actively studying and expanding certifications in Cloud Security, Zero-Trust Architecture, and Large Language Model prompt architectures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
