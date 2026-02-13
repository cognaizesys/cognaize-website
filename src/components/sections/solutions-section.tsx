"use client";

import Link from "next/link";
import { Scan, Calculator, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    icon: Scan,
    title: "Design Intelligence",
    tagline: "Drawing Review AI",
    description:
      "Upload an engineering drawing and get instant AI-powered analysis. Detects critical errors, missing specs, and tolerance issues across 13+ categories.",
    href: "/products/design-intelligence",
    color: "#846fbc",
    highlights: ["Error detection across 13+ categories", "Tolerance & GD&T validation", "Automated findings report"],
    stat: { value: "<15min", label: "review time per drawing" },
  },
  {
    icon: Calculator,
    title: "Manufacturing Intelligence",
    tagline: "Cost Estimation AI",
    description:
      "From drawing to quote in minutes. AI extracts specs, checks feasibility, generates job cards, and produces detailed cost breakdowns automatically.",
    href: "/products/manufacturing-intelligence",
    color: "#6ee7b7",
    highlights: ["Spec extraction & feasibility check", "Auto-generated job cards & routing", "Detailed cost breakdowns"],
    stat: { value: "10x", label: "faster cost estimation" },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function SolutionsSection() {
  return (
    <section
      id="products"
      className="py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0f 0%, #12121a 40%, #0c1a1a 70%, #0a0a0f 100%)",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(132, 111, 188, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(132, 111, 188, 0.12) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-35"
        style={{
          background: "radial-gradient(ellipse, rgba(110, 231, 183, 0.4) 0%, rgba(132, 111, 188, 0.2) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/30 border border-primary/50 mb-6">
            <span className="text-xs font-medium text-primary-light uppercase tracking-wider">
              Two Products &middot; One Platform
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-white tracking-tight">
            AI That Understands
            <br />
            Engineering Drawings
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Purpose-built models trained on real manufacturing data.
            Analyzes drawings the way your best engineer would.
          </p>
        </motion.div>

        {/* Product cards */}
        <motion.div
          className="mt-20 grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                variants={cardVariants}
                className="group relative rounded-2xl overflow-hidden"
              >
                {/* Card glow on hover */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}70, transparent 50%, ${product.color}40)`,
                  }}
                />

                {/* Entire card is a link */}
                <Link
                  href={product.href}
                  className="relative block rounded-2xl border border-white/10 group-hover:border-white/20 bg-dark-card/80 backdrop-blur-sm transition-all duration-300"
                >
                  {/* Top accent bar */}
                  <div
                    className="h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, ${product.color}, ${product.color}60, transparent)`,
                    }}
                  />

                  <div className="p-8">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border"
                        style={{
                          backgroundColor: `${product.color}30`,
                          borderColor: `${product.color}35`,
                        }}
                      >
                        <Icon
                          className="w-7 h-7"
                          style={{ color: product.color }}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {product.title}
                        </h3>
                        <p
                          className="text-sm font-medium mt-1"
                          style={{ color: product.color }}
                        >
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-sm mb-6">
                      {product.description}
                    </p>

                    {/* Highlights list */}
                    <ul className="space-y-2.5 mb-8">
                      {product.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: product.color }}
                          />
                          <span className="text-sm text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom: Stat + CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-baseline gap-2">
                        <span
                          className="text-3xl font-bold font-heading"
                          style={{ color: product.color }}
                        >
                          {product.stat.value}
                        </span>
                        <span className="text-xs text-gray-500">
                          {product.stat.label}
                        </span>
                      </div>
                      <span
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 group-hover:scale-105"
                        style={{
                          backgroundColor: product.color,
                          boxShadow: `0 4px 14px ${product.color}40`,
                        }}
                      >
                        Explore
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
    </section>
  );
}
