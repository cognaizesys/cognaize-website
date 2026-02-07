"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DiDemoViewer } from "@/components/product/di-demo-viewer";
import { MiDemoViewer } from "@/components/product/mi-demo-viewer";
import { cn } from "@/lib/utils";

type ProductTab = "di" | "mi";

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<ProductTab>("di");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold text-[#846fbc] uppercase tracking-wide">
            See It In Action
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Product Showcase
          </h2>
        </div>

        {/* Tab bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1 gap-2">
            <button
              onClick={() => setActiveTab("di")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === "di"
                  ? "bg-white shadow-sm text-[#846fbc] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              Design Intelligence
            </button>
            <button
              onClick={() => setActiveTab("mi")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === "mi"
                  ? "bg-white shadow-sm text-[#846fbc] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              Manufacturing Intelligence
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "di" ? <DiDemoViewer /> : <MiDemoViewer />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
