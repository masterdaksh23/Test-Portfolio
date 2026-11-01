"use client";

import { useState } from "react";
import { SoundManager } from "./SoundManager";
import { Menu, X, Shield, Terminal, Sparkles, Send } from "lucide-react";

interface NavigationProps {
  onNavigate?: (sectionIndex: number) => void;
  activeSection?: number;
}

const NAV_LINKS = [
  { label: "Hero", index: 0, tag: "01" },
  { label: "About", index: 1, tag: "02" },
  { label: "Hackathons & CTF", index: 2, tag: "03" },
  { label: "Projects", index: 3, tag: "04" },
  { label: "Competitions", index: 4, tag: "05" },
  { label: "Contact", index: 5, tag: "06" },
];

export function Navigation({ onNavigate, activeSection = 0 }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (index: number) => {
    if (onNavigate) {
      onNavigate(index);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none px-4 sm:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand / Logo */}
        <div
          onClick={() => handleClick(0)}
          className="group cursor-pointer flex items-center gap-3 glass-card px-4 py-2 rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan shadow-[0_0_10px_#00E5FF] group-hover:scale-125 transition-transform duration-300" />
          <span className="font-heading font-black tracking-widest text-lg text-white group-hover:text-neon-cyan transition-colors">
            DAKSH
          </span>
          <span className="text-xs font-mono text-neon-yellow px-1.5 py-0.5 rounded bg-neon-yellow/10 border border-neon-yellow/30 hidden sm:inline-block">
            TOP 15 CTF
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border border-white/10">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.index;
            return (
              <button
                key={link.label}
                onClick={() => handleClick(link.index)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-black bg-neon-cyan font-bold shadow-[0_0_15px_rgba(0,229,255,0.6)]"
                    : "text-gray-300 hover:text-neon-cyan hover:bg-white/5"
                }`}
              >
                <span className="opacity-50 text-[10px] mr-1">{link.tag}</span>
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Utilities */}
        <div className="flex items-center gap-3">
          <SoundManager />

          {/* Quick Contact CTA */}
          <button
            onClick={() => handleClick(5)}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-black bg-neon-yellow hover:bg-white shadow-[0_0_20px_rgba(255,230,0,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all duration-300"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Connect</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden glass-card p-2.5 rounded-xl border border-white/10 text-gray-200 hover:text-neon-cyan"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto fixed inset-x-4 top-20 glass-card p-6 rounded-2xl border border-neon-cyan/30 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-gray-400">
            <span>SPATIAL NAVIGATION</span>
            <span className="text-neon-cyan flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
              ONLINE
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.index)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono text-left transition-all ${
                  activeSection === link.index
                    ? "bg-neon-cyan/20 border border-neon-cyan text-neon-cyan font-bold"
                    : "bg-white/5 border border-white/5 text-gray-200 hover:bg-white/10"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs opacity-60">[{link.tag}]</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleClick(5)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-heading font-bold uppercase tracking-wider text-black bg-neon-yellow hover:bg-white shadow-[0_0_20px_rgba(255,230,0,0.4)]"
          >
            <Send className="w-4 h-4" />
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
}

