"use client";

import { useState } from "react";
import { HACKATHONS_DATA } from "@/data/portfolioData";
import { Trophy, Shield, Flame, Terminal, CheckCircle2, ChevronRight, Layers } from "lucide-react";

export function HackathonsSection() {
  const [filter, setFilter] = useState<"all" | "ctf" | "hackathon">("all");

  const filteredItems = HACKATHONS_DATA.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 py-24">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-0.5 bg-neon-yellow shadow-[0_0_8px_#FFE600]" />
              <span className="font-mono text-xs tracking-widest text-neon-yellow uppercase">
                03 // COMPETITIVE ARENA
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Hackathons & Cyber Operations
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 glass-card p-1.5 rounded-full border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                filter === "all"
                  ? "bg-white text-black font-bold shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All ({HACKATHONS_DATA.length})
            </button>
            <button
              onClick={() => setFilter("ctf")}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                filter === "ctf"
                  ? "bg-neon-cyan text-black font-bold shadow-[0_0_12px_rgba(0,229,255,0.5)]"
                  : "text-gray-400 hover:text-neon-cyan"
              }`}
            >
              CTFs & Security (3)
            </button>
            <button
              onClick={() => setFilter("hackathon")}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                filter === "hackathon"
                  ? "bg-neon-yellow text-black font-bold shadow-[0_0_12px_rgba(255,230,0,0.5)]"
                  : "text-gray-400 hover:text-neon-yellow"
              }`}
            >
              Hackathons (5)
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => {
            const isWinner = item.highlight;
            const isCtf = item.type === "ctf";

            return (
              <div
                key={item.id}
                className={`group glass-card rounded-2xl p-6 border relative transition-all duration-300 flex flex-col justify-between ${
                  isWinner
                    ? "border-neon-yellow/40 bg-zinc-950/70 shadow-[0_0_20px_rgba(255,230,0,0.1)] hover:border-neon-yellow hover:shadow-[0_0_30px_rgba(255,230,0,0.25)]"
                    : "border-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]"
                }`}
              >
                {/* Highlight Ribbon */}
                {item.achievement && (
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase ${
                        isWinner
                          ? "bg-neon-yellow text-black shadow-[0_0_10px_#FFE600]"
                          : isCtf
                          ? "bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30"
                          : "bg-white/10 text-gray-300 border border-white/10"
                      }`}
                    >
                      {isWinner ? (
                        <Trophy className="w-3 h-3 text-black" />
                      ) : isCtf ? (
                        <Shield className="w-3 h-3 text-neon-cyan" />
                      ) : (
                        <Flame className="w-3 h-3 text-neon-yellow" />
                      )}
                      <span>{item.achievement}</span>
                    </span>

                    <span className="text-[10px] font-mono text-gray-500 uppercase">
                      {item.type}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-neon-cyan transition-colors mb-2">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-gray-400 mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                    <span>Role: {item.role}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tags Footer */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

