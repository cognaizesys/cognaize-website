"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0f 0%, #12121a 40%, #0c1a1a 70%, #0a0a0f 100%)",
      }}
    >
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.07) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
              <AlertTriangle className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                The Challenge
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight"
          >
            The Judgment That Runs Your Factory Doesn&apos;t Scale
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 space-y-6"
          >
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Manufacturing expertise takes decades to build. It lives in the
              minds of your best engineers, your most experienced estimators,
              your most trusted process planners. It doesn&apos;t transfer
              easily, it doesn&apos;t multiply, and when those people leave, it
              goes with them.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              The consequences show up as drawing errors that reach the shop
              floor, cost estimates that vary by who does them, and quality
              issues that repeat because nobody connected them back to the
              source.
            </p>
            <p className="text-white font-semibold text-base md:text-lg leading-relaxed">
              Cognaize Systems was built to solve this at the root.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
