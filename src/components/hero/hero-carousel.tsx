"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { name: "Design Review", src: "/images/hero/1-design-review.png", wide: true },
  { name: "Drawing Version Comparison", src: "/images/hero/2-version-comparison.png", wide: true },
  { name: "Process Advisor", src: "/images/hero/3-process-advisor.png", wide: false },
  { name: "Feasibility Analysis", src: "/images/hero/4-feasibility-analysis.png", wide: true },
  { name: "Process Cost Estimate", src: "/images/hero/5-cost-estimation.png", wide: false },
];

const SCREENSHOT_INTERVAL = 3000;

type Phase = "scan" | "screenshots";

export function HeroShowcase() {
  const [phase, setPhase] = useState<Phase>("scan");
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = useCallback(() => {
    setActiveIndex(0);
    setPhase("screenshots");
  }, []);

  useEffect(() => {
    if (phase !== "screenshots") return;
    const id = setInterval(() => {
      setActiveIndex((i) => {
        if (i >= products.length - 1) {
          setPhase("scan");
          return 0;
        }
        return i + 1;
      });
    }, SCREENSHOT_INTERVAL);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === "scan" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [phase]);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Fixed-size content area — aspect ratio matches video (1400:1082) */}
      <div className="relative bg-white" style={{ aspectRatio: "1400 / 1082" }}>
        {/* Scan video — absolutely positioned, always in DOM */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            phase === "scan" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <source src="/videos/hero-scan-web.mp4" type="video/mp4" />
        </video>

        {/* Product screenshots — absolutely positioned, same size */}
        <AnimatePresence mode="wait">
          {phase === "screenshots" && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center bg-white"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={products[activeIndex].src}
                alt={products[activeIndex].name}
                className={
                  products[activeIndex].wide
                    ? "max-w-full max-h-full object-contain scale-[1.18] origin-center"
                    : "max-w-full max-h-full object-contain"
                }
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Caption overlay — inside the fixed container, at the bottom */}
        {phase === "screenshots" && (
          <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-2 py-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-bold text-white tracking-wide drop-shadow-lg"
              >
                {products[activeIndex].name}
              </motion.span>
            </AnimatePresence>

            <div className="flex items-center gap-1.5">
              {products.map((_, i) => (
                <span
                  key={i}
                  className={`block rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 h-1.5 bg-primary-light"
                      : "w-1.5 h-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Preload all screenshots */}
      <div className="hidden">
        {products.map((p) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={p.src} src={p.src} alt="" />
        ))}
      </div>
    </div>
  );
}
