"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on fine pointers (desktop mouse)
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("cursor-pointer"))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let animationFrameId: number;

    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pos, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Center sharp dot */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_#00E5FF] transition-opacity duration-200"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />

      {/* Trailing larger ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ease-out ${
          isPointer
            ? "w-10 h-10 border-neon-yellow shadow-[0_0_15px_rgba(255,230,0,0.4)] scale-125 bg-neon-yellow/10"
            : "w-7 h-7 border-neon-cyan/40 shadow-[0_0_10px_rgba(0,229,255,0.2)]"
        }`}
        style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
      />
    </div>
  );
}

