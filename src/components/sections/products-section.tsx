"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Package, ArrowRight, ExternalLink } from "lucide-react";

const products = [
  {
    name: "Design Intelligence",
    tagline: "Engineered Intelligence for Design Review",
    description:
      "Structured review of engineering drawings against manufacturing standards and process knowledge — before issues reach the floor.",
    href: "/products/design-intelligence",
    external: false,
  },
  {
    name: "Manufacturing Intelligence",
    tagline: "Engineered Intelligence for Feasibility & Cost Estimation",
    description:
      "Feasibility validation, process routing, and cost estimation directly from engineering drawings — in minutes, not days.",
    href: "/products/manufacturing-intelligence",
    external: false,
  },
  {
    name: "SkyPlanner APS",
    tagline: "Engineered Intelligence for Production Planning",
    description:
      "AI-powered production scheduling that optimises job allocation and reschedules in seconds when priorities change. Delivered through SkyPlanner.AI.",
    href: "https://skyplanner.ai",
    external: true,
  },
  {
    name: "DataWiz",
    tagline: "Engineered Intelligence for Shop Floor Visibility",
    description:
      "Real-time production tracking across job status, cycle times, and work-in-progress — connected to your estimation loop.",
    href: "https://factri.ai",
    external: true,
  },
  {
    name: "Line Stoppage Tracking",
    tagline: "Engineered Intelligence for Line Continuity",
    description:
      "Makes stoppages from equipment failures, quality holds, and supply gaps visible, traceable, and actionable.",
    href: "https://factri.ai",
    external: true,
  },
  {
    name: "Quality Check Sheets",
    tagline: "Engineered Intelligence for Quality",
    description:
      "Digital inspection tied directly to production orders — with quality outcomes feeding back into design review.",
    href: "https://factri.ai",
    external: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProductsSection() {
  return (
    <section
      id="products"
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
              <Package className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                What We Build
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
            className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Each product delivers Engineered Intelligence in its domain.
            Together they form a system where every output informs the next.
          </motion.p>
        </div>

        {/* Product cards grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/35 transition-all duration-300 p-6 flex flex-col"
            >
              <h3 className="text-lg font-bold text-white mb-1">
                {product.name}
              </h3>
              <p className="text-sm font-medium text-primary-light mb-3">
                {product.tagline}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed flex-1">
                {product.description}
              </p>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                {product.external ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light hover:text-white transition-colors"
                  >
                    Learn more
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    href={product.href}
                    className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light hover:text-white transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
