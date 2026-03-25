"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package,
  ArrowRight,
  PenTool,
  Calculator,
  CalendarDays,
  Settings,
  BarChart3,
  Lightbulb,
} from "lucide-react";

const products = [
  {
    stage: "Design",
    icon: PenTool,
    name: "Design Intelligence",
    description:
      "Catch drawing issues before they become problems on the shop floor",
    href: "/products/design-intelligence",
    accent: "#6ee7b7",
  },
  {
    stage: "Estimate",
    icon: Calculator,
    name: "Manufacturing Intelligence",
    description:
      "Go from drawing to accurate cost sheet in minutes, not days",
    href: "/products/manufacturing-intelligence",
    accent: "#9b89cc",
  },
  {
    stage: "Planning",
    icon: CalendarDays,
    name: "Planning Intelligence",
    description:
      "Reschedule production in seconds when priorities change on the floor",
    href: "/products/planning-intelligence",
    accent: "#60a5fa",
  },
  {
    stage: "Shop Floor",
    icon: Settings,
    name: "Execution Intelligence",
    description:
      "See what\u2019s happening on your floor right now, not yesterday",
    href: "/products/execution-intelligence",
    accent: "#f59e0b",
  },
  {
    stage: "Monitor",
    icon: BarChart3,
    name: "Downtime Intelligence",
    description:
      "Make downtime visible, traceable, and actionable before it spreads",
    href: "/products/downtime-intelligence",
    accent: "#f87171",
  },
  {
    stage: "Improve",
    icon: Lightbulb,
    name: "Quality Intelligence",
    description:
      "Digitize quality data at source and link it back to production orders",
    href: "/products/quality-intelligence",
    accent: "#34d399",
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-16 md:py-20 relative overflow-hidden"
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
              <Package className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                The Cognaize Product Suite
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
            Six Products. One Connected System.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed"
          >
            Dedicated products for every stage of manufacturing, from drawing to
            delivery.
          </motion.p>
        </div>

        {/* Product cards — 3x2 grid mirroring Section 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group rounded-xl border border-white/[0.10] bg-[#12121a]/80 p-6 hover:bg-[#1a1a28]/80 hover:border-white/[0.15] transition-all duration-300 flex flex-col"
              style={{ borderTopWidth: "2px", borderTopColor: `${product.accent}40` }}
            >
              <div className="flex items-start justify-between mb-5">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider border"
                  style={{
                    backgroundColor: `${product.accent}15`,
                    borderColor: `${product.accent}30`,
                    color: product.accent,
                  }}
                >
                  {product.stage}
                </span>
                <product.icon className="w-5 h-5 text-gray-500 group-hover:text-gray-400 transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed flex-1">
                {product.description}
              </p>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <Link
                  href={product.href}
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light hover:text-white transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
