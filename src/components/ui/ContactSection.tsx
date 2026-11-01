"use client";

import { useState } from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { Mail, Linkedin, Github, Send, Copy, Check, Terminal, Sparkles, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
    receiptId?: string;
  } | null>(null);

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_DATA.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatusMessage({
          type: "success",
          text: data.message || "Message dispatched successfully!",
          receiptId: data.receiptId,
        });

        // Trigger celebratory confetti burst!
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#FFE600", "#00E5FF", "#FFFFFF"],
        });

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage({
          type: "error",
          text: data.error || "Failed to deliver message. Please retry.",
        });
      }
    } catch (err) {
      setStatusMessage({
        type: "error",
        text: "Network transmission error. Please reach out via email directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between px-4 sm:px-8 pt-24 pb-12">
      <div className="max-w-5xl w-full mx-auto my-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-0.5 bg-neon-cyan shadow-[0_0_8px_#00E5FF]" />
          <span className="font-mono text-xs tracking-widest text-neon-cyan uppercase">
            06 // INITIATE TRANSMISSION
          </span>
        </div>
        <div className="mb-10">
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 font-light max-w-xl">
            Open for software engineering roles, hackathon teaming, cybersecurity challenges, and innovative product builds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Direct Links & Info (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-neon-yellow mb-3">
                <Terminal className="w-4 h-4" />
                <span>DIRECT CHANNELS</span>
              </div>

              {/* Copyable Email Card */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 mb-4 group">
                <div className="text-[11px] font-mono text-gray-400 mb-1">
                  Primary Dispatch Email
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs sm:text-sm text-neon-cyan truncate">
                    {PERSONAL_DATA.contact.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-neon-cyan hover:text-black transition-all text-gray-300 shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <div className="text-[10px] font-mono text-emerald-400 mt-1.5 animate-in fade-in">
                    ✓ Copied to clipboard!
                  </div>
                )}
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <a
                  href={PERSONAL_DATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-neon-cyan/40 text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-neon-cyan group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono">LinkedIn Profile</span>
                  </div>
                  <span className="text-xs font-mono text-neon-cyan">/in/daksh →</span>
                </a>

                <a
                  href={PERSONAL_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-neon-yellow/40 text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-neon-yellow group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono">GitHub Profile</span>
                  </div>
                  <span className="text-xs font-mono text-neon-yellow">@masterdaksh23 →</span>
                </a>
              </div>
            </div>

            {/* Availability Badge Card */}
            <div className="glass-card rounded-2xl p-5 border border-neon-cyan/20 bg-neon-cyan/[0.03]">
              <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan mb-2">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
                <span>OPERATIONAL STATUS: ACTIVE</span>
              </div>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Currently exploring high-velocity software engineering roles, hackathon sponsorships, and strategic cybersecurity collaborations.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              <h3 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-neon-yellow" />
                <span>Send Encrypted Message</span>
              </h3>

              {statusMessage && (
                <div
                  className={`mb-6 p-4 rounded-xl text-xs font-mono flex items-start gap-3 ${
                    statusMessage.type === "success"
                      ? "bg-emerald-950/60 border border-emerald-500/40 text-emerald-200"
                      : "bg-rose-950/60 border border-rose-500/40 text-rose-200"
                  }`}
                >
                  {statusMessage.type === "success" ? (
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div>{statusMessage.text}</div>
                    {statusMessage.receiptId && (
                      <div className="mt-1 text-[11px] opacity-75">
                        Receipt Token: {statusMessage.receiptId}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none text-sm text-white placeholder-gray-600 font-mono transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none text-sm text-white placeholder-gray-600 font-mono transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Project Inquiry / Hackathon Teaming"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-neon-yellow focus:ring-1 focus:ring-neon-yellow outline-none text-sm text-white placeholder-gray-600 font-mono transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase">
                    Transmission Payload (Message) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Let's build something phenomenal together..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan outline-none text-sm text-white placeholder-gray-600 font-mono transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-black bg-neon-cyan hover:bg-white disabled:opacity-50 shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.7)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Encrypting & Dispatching...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Transmission</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Futuristic Cyber Footer */}
      <footer className="mt-16 pt-8 border-t border-white/10 max-w-5xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-cyan" />
          <span className="text-gray-400">DAKSH // PRODUCTION SYSTEM 2026</span>
        </div>
        <div>
          Next.js App Router • Three.js / R3F • GSAP • Tailwind CSS
        </div>
        <div className="text-gray-500">
          Designed with ⚡ Electric Yellow & Sky Cyan
        </div>
      </footer>
    </div>
  );
}

