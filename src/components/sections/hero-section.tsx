"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, ArrowRight } from "lucide-react";
import { heroMetrics } from "@/data/metrics";
import { HeroShowcase } from "@/components/hero/hero-carousel";

export function HeroSection() {

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #12121a 35%, #1a1028 60%, #0c1a1a 85%, #0a0a0f 100%)",
      }}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(132, 111, 188, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 231, 183, 0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow behind demo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(132, 111, 188, 0.3) 0%, rgba(110, 231, 183, 0.05) 50%, transparent 70%)",
        }}
      />

      {/* Secondary teal glow on right */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(110, 231, 183, 0.3) 0%, transparent 60%)",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            backgroundColor: i % 2 === 0 ? "rgba(155, 137, 204, 0.5)" : "rgba(110, 231, 183, 0.4)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-[1.1]"
            >
              Upload a Drawing.
              <br />
              <span className="text-primary-light">Get AI Insights</span>
              <br />
              in Seconds.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-lg text-gray-400 max-w-lg leading-relaxed"
            >
              Cognaize analyzes engineering drawings 16x faster with 95%+
              accuracy — catching errors, estimating costs, and accelerating
              reviews that used to take hours.
            </motion.p>

            {/* Metrics row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-8"
            >
              {heroMetrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white font-heading">
                    {metric.value}
                  </span>
                  <span className="text-sm text-gray-500">{metric.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-12 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-primary/30 hover:border-primary/50 hover:bg-white/5 text-white font-semibold transition-all duration-300"
              >
                Explore Products
              </a>
            </motion.div>
          </div>

          {/* Right: Scan Animation Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <HeroShowcase />

            {/* Floating accent cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2.5 rounded-lg bg-dark-card border border-accent/25 backdrop-blur-sm"
              style={{ boxShadow: "0 8px 20px rgba(0,0,0,0.4)" }}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold text-white">16x Faster</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 -left-4 px-4 py-2.5 rounded-lg bg-dark-card border border-primary/25 backdrop-blur-sm"
              style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold text-white">95%+ Accuracy</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
