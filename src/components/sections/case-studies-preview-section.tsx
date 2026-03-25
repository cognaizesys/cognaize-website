"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileSearch, ArrowRight } from "lucide-react";

const featured = [
  {
    id: "forge-review-bevel-pinion",
    moduleTag: "Forge Review",
    accent: "#60a5fa",
    title: "Cold Formed Differential Bevel Pinion",
    subtitle: "Gear Family · Complex Geometry",
    body: "Three major findings caught at drawing stage — including a gear data block inconsistency that would have corrupted backlash and mating gear compatibility.",
    href: "/case-studies",
  },
  {
    id: "shop-floor-tracking",
    moduleTag: "Execution Intelligence",
    accent: "#f59e0b",
    title: "Shop Floor Tracking & Visibility",
    subtitle: "Major Trailer & Truck Body Manufacturer · Since April 2021",
    body: "20% increase in production efficiency. 50% reduction in WIP. 75% reduction in data capture time.",
    href: "/case-studies",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CaseStudiesPreviewSection() {
  return (
    <section
      id="case-studies-preview"
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
              <FileSearch className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                In Practice
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
            Engineered Intelligence in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Real findings on real drawings and real factory floors.
          </motion.p>
        </div>

        {/* Featured cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featured.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 overflow-hidden flex flex-col"
              style={{ borderLeftWidth: "3px", borderLeftColor: study.accent }}
            >
              <div className="p-6 flex flex-col flex-1">
                <span
                  className="inline-flex self-start items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-3 border"
                  style={{
                    backgroundColor: `${study.accent}15`,
                    borderColor: `${study.accent}30`,
                    color: study.accent,
                  }}
                >
                  {study.moduleTag}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {study.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3">{study.subtitle}</p>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">
                  {study.body}
                </p>
                <Link
                  href={study.href}
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light hover:text-white transition-colors mt-4"
                >
                  Read case study
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-light hover:text-white transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
