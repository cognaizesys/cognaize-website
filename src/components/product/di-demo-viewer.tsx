"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProductScreenshot } from "@/components/product/product-screenshot";
import { cn } from "@/lib/utils";

const screenshots = [
  {
    src: "/images/products/di/di-overview.png",
    alt: "AI Drawing Review Overview",
    label: "AI Drawing Review",
  },
  {
    src: "/images/products/di/di-finding-detail.png",
    alt: "Finding Detail View",
    label: "Finding Details",
  },
  {
    src: "/images/products/di/di-material-finding.png",
    alt: "Material Specification Finding",
    label: "Material Analysis",
  },
];

export function DiDemoViewer() {
  const [view, setView] = useState<"demo" | number>("demo");

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tab buttons */}
      <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
        <button
          onClick={() => setView("demo")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all",
            view === "demo"
              ? "bg-[#846fbc] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          Live Demo
        </button>
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            onClick={() => setView(index)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              view === index
                ? "bg-[#846fbc] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {screenshot.label}
          </button>
        ))}
      </div>

      {/* Content display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={String(view)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {view === "demo" ? (
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="bg-gray-100 h-10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="bg-gray-200 rounded-md h-6 flex-1 mx-4 flex items-center justify-center">
                  <span className="text-xs text-gray-400">
                    app.cognaizesys.com
                  </span>
                </div>
              </div>
              <video
                src="/images/products/di/di-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              />
            </div>
          ) : (
            <ProductScreenshot
              src={screenshots[view as number].src}
              alt={screenshots[view as number].alt}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
