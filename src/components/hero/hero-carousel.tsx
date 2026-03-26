"use client";

import { Fragment, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { heroProducts } from "@/data/products";

const AUTO_ADVANCE_MS = 4500;

type Phase = "scan" | "carousel";

export function ProductCardCarousel() {
  const [phase, setPhase] = useState<Phase>("scan");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFirstSlide, setIsFirstSlide] = useState(false);
  const isPausedRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = useCallback(() => {
    setIsFirstSlide(true);
    setPhase("carousel");
  }, []);

  // Replay video when phase switches back to scan
  useEffect(() => {
    if (phase === "scan" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [phase]);

  // Reset isFirstSlide when advancing past the first carousel item
  useEffect(() => {
    if (activeIndex !== 0) {
      setIsFirstSlide(false);
    }
  }, [activeIndex]);

  // Auto-advance — only when in carousel phase
  useEffect(() => {
    if (phase !== "carousel") return;
    const id = setInterval(() => {
      if (isPausedRef.current) return;
      setActiveIndex((i) => {
        if (i >= heroProducts.length - 1) {
          // Last product → replay scan video
          setPhase("scan");
          return 0;
        }
        return i + 1;
      });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [phase]);

  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  const handleStageClick = useCallback((index: number) => {
    if (phase === "scan" && videoRef.current) {
      videoRef.current.pause();
    }
    setPhase("carousel");
    setActiveIndex(index);
  }, [phase]);

  const product = heroProducts[activeIndex];

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        <div
          className="relative bg-white"
          style={{ aspectRatio: "16 / 10" }}
        >
          {/* Scan video — plays at start of each loop */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-cover ${
              phase === "scan"
                ? "opacity-100 transition-opacity duration-300"
                : "opacity-0 pointer-events-none transition-none"
            }`}
          >
            <source src="/videos/hero-scan-web.mp4?v=2" type="video/mp4" />
          </video>

          {/* Product screenshots — visible during carousel phase */}
          <AnimatePresence mode="wait">
            {phase === "carousel" && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: isFirstSlide ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: isFirstSlide ? 0 : 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Workflow stage navigation — responsive: hide chevrons & tighten pills below xl */}
      <div className="flex flex-wrap items-center justify-center gap-1 xl:gap-1.5 mt-4">
        {heroProducts.map((p, i) => {
          const isActive = phase === "carousel" && i === activeIndex;
          return (
            <Fragment key={p.name}>
              {i > 0 && (
                <ChevronRight className="w-3 h-3 text-white/20 shrink-0 hidden xl:block" />
              )}
              <button
                onClick={() => handleStageClick(i)}
                className={`px-2 xl:px-3 py-1 rounded-full text-[10px] xl:text-[11px] font-medium uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-white bg-primary/30 border border-primary/50"
                    : "text-white/50 border border-white/10 hover:border-white/25 hover:text-white/70"
                }`}
                aria-label={`View ${p.name}`}
              >
                {p.stage}
              </button>
            </Fragment>
          );
        })}
      </div>

      {/* Preload images */}
      <div className="hidden">
        {heroProducts.map((p) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={p.image} src={p.image} alt="" />
        ))}
      </div>
    </div>
  );
}
