"use client";

import { motion } from "framer-motion";
import { heroMetrics } from "@/data/metrics";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #0f0f0f 0%, #1a1028 50%, #0f0f0f 100%)",
      }}
    >
      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(132, 111, 188, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary-light">
              AI-Powered Manufacturing Intelligence
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-5xl md:text-7xl font-heading text-white text-center tracking-tight"
        >
          Accelerate.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Transform engineering reviews and manufacturing cost estimation with
          purpose-built AI that understands technical drawings.
        </motion.p>

        {/* Metric Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {heroMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="group relative"
            >
              <div className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-white font-heading">
                    {metric.value}
                  </span>
                  <span className="text-xs md:text-sm text-gray-300 whitespace-nowrap">
                    {metric.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
          >
            Request a Demo
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white/30 hover:bg-white/10 text-white font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-dark-bg"
          >
            Watch Overview
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #f8f8fa, transparent)",
        }}
      />
    </section>
  );
}
