"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroMetrics } from "@/data/metrics";
import { ProductCardCarousel } from "@/components/hero/hero-carousel";

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
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.07) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 md:mt-10 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-[1.1]"
            >
              Making Engineering
              <br />
              Judgment{" "}
              <span className="text-primary-light">Scalable</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 md:mt-8 text-lg text-gray-300 max-w-lg leading-relaxed"
            >
              The judgment that runs your factory shouldn&apos;t depend on who&apos;s
              in the room. We structure decades of engineering expertise into AI
              that&apos;s always available and gets better with every production cycle.
            </motion.p>

            {/* Metrics row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 md:mt-10 grid grid-cols-3 gap-6"
            >
              {heroMetrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="border-l-[3px] border-l-primary pl-3">
                  <p className="text-sm font-bold text-white">{metric.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{metric.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="https://calendly.com/raghu-cognaizesys/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
              >
                Book a Demo
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
            <ProductCardCarousel />
          </motion.div>
        </div>

      </div>

    </section>
  );
}
