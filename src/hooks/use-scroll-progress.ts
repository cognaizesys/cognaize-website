"use client";

import { useEffect, useState } from "react";

export function useScrollProgress(): number {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateScrollProgress = () => {
      // Get scroll position
      const scrollTop = window.scrollY;

      // Get total scrollable height
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScroll = docHeight - winHeight;

      // Calculate progress (0 to 1)
      const progress = totalScroll > 0 ? scrollTop / totalScroll : 0;

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    // Set initial value
    updateScrollProgress();

    // Use RAF for performance
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return scrollProgress;
}
