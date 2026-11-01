"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navigation } from "@/components/ui/Navigation";
import { HeroSection } from "@/components/ui/HeroSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { HackathonsSection } from "@/components/ui/HackathonsSection";
import { ProjectsSection } from "@/components/ui/ProjectsSection";
import { CompetitionsSection } from "@/components/ui/CompetitionsSection";
import { ContactSection } from "@/components/ui/ContactSection";

// Dynamically import 3D Canvas Scene
const Scene = dynamic(
  () => import("@/components/canvas/Scene").then((mod) => mod.Scene),
  {
    ssr: false,
    loading: () => <SceneLoader />,
  }
);

function SceneLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-white select-none">
      {/* Central Rotating Loader Ring */}
      <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-neon-cyan/20 border-t-neon-cyan animate-spin" />
        <div className="absolute inset-2 rounded-full border-2 border-neon-yellow/20 border-b-neon-yellow animate-spin [animation-direction:reverse] [animation-duration:1.5s]" />
        <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan shadow-[0_0_12px_#00E5FF] animate-ping" />
      </div>

      {/* Cyber Text Sequence */}
      <div className="font-heading font-black tracking-widest text-lg sm:text-xl text-white mb-2">
        INITIALIZING SPATIAL CORE
      </div>
      <div className="font-mono text-xs text-neon-cyan flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
        <span>SYNCING 3D ENVIRONMENT // DAKSH</span>
      </div>

      {/* Progress Line */}
      <div className="w-48 h-0.5 bg-zinc-800 rounded-full mt-6 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-neon-cyan to-neon-yellow animate-pulse" />
      </div>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const scrollProgressRef = useRef(0);

  // Mounted state check to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync scroll position with 3D camera rig & active navigation state
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      scrollProgressRef.current = progress;

      const sec = Math.min(Math.floor(progress * 5.99), 5);
      setActiveSection(sec);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [mounted]);

  const handleNavigate = (sectionIndex: number) => {
    const el = document.getElementById(`section-${sectionIndex}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) {
    return <SceneLoader />;
  }

  return (
    <div className="relative w-full min-h-screen bg-background overflow-x-hidden selection:bg-neon-cyan selection:text-black">
      {/* Custom Cyber Dual-Ring Cursor */}
      <CustomCursor />

      {/* Fixed HUD Navigation */}
      <Navigation onNavigate={handleNavigate} activeSection={activeSection} />

      {/* 3D Background Canvas */}
      <Scene progressRef={scrollProgressRef} />

      {/* HTML Content Overlay */}
      <main className="relative z-10 w-full pointer-events-auto">
        <section id="section-0" className="w-full min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <HeroSection onExploreClick={() => handleNavigate(1)} />
          </motion.div>
        </section>

        <section id="section-1" className="w-full min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <AboutSection />
          </motion.div>
        </section>

        <section id="section-2" className="w-full min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <HackathonsSection />
          </motion.div>
        </section>

        <section id="section-3" className="w-full min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <ProjectsSection />
          </motion.div>
        </section>

        <section id="section-4" className="w-full min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <CompetitionsSection />
          </motion.div>
        </section>

        <section id="section-5" className="w-full min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <ContactSection />
          </motion.div>
        </section>
      </main>
    </div>
  );
}
