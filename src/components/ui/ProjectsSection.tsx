"use client";

import { PROJECTS_DATA } from "@/data/portfolioData";
import { ExternalLink, Github, Sparkles, Sprout, Building2, Cpu, ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 py-24">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-neon-cyan shadow-[0_0_8px_#00E5FF]" />
          <span className="font-mono text-xs tracking-widest text-neon-cyan uppercase">
            04 // DEPLOYED ARTIFACTS
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Websites & Deployed Apps
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-2 font-light max-w-xl">
              High-impact solutions engineered for precision agriculture and civic infrastructure transparency.
            </p>
          </div>
        </div>

        {/* Featured Project Cards (Spatial 3D Pop-out) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => {
            const isYellow = project.accentColor === "yellow";

            return (
              <div
                key={project.id}
                className={`group glass-card rounded-2xl p-6 sm:p-8 border relative transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between ${
                  isYellow
                    ? "border-neon-yellow/30 hover:border-neon-yellow hover:shadow-[0_20px_50px_rgba(255,230,0,0.2)]"
                    : "border-neon-cyan/30 hover:border-neon-cyan hover:shadow-[0_20px_50px_rgba(0,229,255,0.2)]"
                }`}
              >
                {/* Background Ambient Cyber Gradient */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-40 ${
                    isYellow ? "bg-neon-yellow" : "bg-neon-cyan"
                  }`}
                />

                {/* Top Badge & Category */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                        isYellow
                          ? "bg-neon-yellow/15 text-neon-yellow border border-neon-yellow/40"
                          : "bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/40"
                      }`}
                    >
                      {isYellow ? (
                        <Sprout className="w-3.5 h-3.5" />
                      ) : (
                        <Building2 className="w-3.5 h-3.5" />
                      )}
                      <span>{project.category}</span>
                    </span>

                    <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      PRODUCTION LIVE
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white group-hover:text-white transition-colors mb-2">
                    {project.title}
                  </h3>
                  <div
                    className={`text-xs font-mono mb-4 ${
                      isYellow ? "text-neon-yellow" : "text-neon-cyan"
                    }`}
                  >
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics highlight */}
                  {project.metrics && (
                    <div className="mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-gray-300 flex items-center gap-2">
                      <Sparkles
                        className={`w-4 h-4 shrink-0 ${
                          isYellow ? "text-neon-yellow" : "text-neon-cyan"
                        }`}
                      />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-black/50 text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-black transition-all duration-300 ${
                      isYellow
                        ? "bg-neon-yellow hover:bg-white shadow-[0_0_20px_rgba(255,230,0,0.4)]"
                        : "bg-neon-cyan hover:bg-white shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                    }`}
                  >
                    <span>Launch Live System</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      className="p-3 rounded-xl glass-card text-gray-300 hover:text-white border border-white/10 hover:border-white/30 transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

