"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Factory } from "lucide-react";
import { INDUSTRY_CARDS } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <div>
      {/* Hero + Cards — single dark section */}
      <section
        className="relative min-h-screen overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
        style={{
          background:
            "linear-gradient(180deg, #0a0a0f 0%, #12121a 30%, #0c1a1a 60%, #12121a 85%, #0a0a0f 100%)",
        }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.07) 1px, transparent 1px)",
            backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
          }}
        />

        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
          style={{
            width: "800px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center, rgba(132, 111, 188, 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
                <Factory className="w-3 h-3 text-accent" />
                <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                  By Industry
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight"
            >
              Industries We Serve
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-gray-300 text-base md:text-lg leading-relaxed"
            >
              Engineering intelligence built for discrete manufacturing, with
              deep expertise across processes and sectors.
            </motion.p>
          </div>

          {/* Industry cards — 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {INDUSTRY_CARDS.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + 0.1 * index }}
                >
                  <Link
                    href={industry.href}
                    className="group block rounded-xl border border-white/[0.08] bg-white/[0.04] p-8 md:p-10 border-t-2 border-t-accent/30 hover:border-primary/25 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    {/* Icon container */}
                    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    {/* Content */}
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-3">
                      {industry.name}
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
                      {industry.oneLiner}
                    </p>

                    {/* Link */}
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light group-hover:text-white transition-colors">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom gradient divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </section>
    </div>
  );
}
