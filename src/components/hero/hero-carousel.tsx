"use client";

import { Fragment, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { heroProducts } from "@/data/products";

const AUTO_ADVANCE_MS = 4500;

export function ProductCardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isPausedRef = useRef(false);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      if (isPausedRef.current) return;
      setActiveIndex((i) => (i + 1) % heroProducts.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false;
  }, []);

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
          {/* Product image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Workflow stage navigation */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {heroProducts.map((p, i) => {
          const isActive = i === activeIndex;
          return (
            <Fragment key={p.name}>
              {i > 0 && (
                <ChevronRight className="w-3 h-3 text-white/20 shrink-0" />
              )}
              <button
                onClick={() => setActiveIndex(i)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all duration-300 ${
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
