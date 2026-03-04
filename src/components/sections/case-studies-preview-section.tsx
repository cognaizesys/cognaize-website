"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileSearch, ArrowRight, Cpu } from "lucide-react";
import CASE_STUDIES from "@/data/case-studies";
import type { Finding } from "@/data/case-studies";

const featured = CASE_STUDIES.slice(-2).reverse();

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

function SeverityBadge({ severity }: { severity: Finding["severity"] }) {
  const styles =
    severity === "CRITICAL"
      ? "bg-red-500/20 text-red-400 border-red-500/30"
      : "bg-amber-500/20 text-amber-400 border-amber-500/30";
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${styles}`}
    >
      {severity}
    </span>
  );
}

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
                Case Studies
              </span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-heading text-white tracking-tight"
          >
            Engineering Intelligence in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Real findings on real drawings from our design intelligence
            platform.
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
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/35 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Card header */}
              <div className="p-6 border-b border-white/[0.06]">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/20 border border-primary/30 text-[10px] font-bold text-primary-light uppercase tracking-wider mb-3">
                  {study.moduleTag}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {study.title}
                </h3>
                <p className="text-xs text-gray-400">{study.subtitle}</p>
                <p className="mt-2 text-[11px] text-gray-500 font-mono">
                  {study.summary}
                </p>
              </div>

              {/* First 2 findings */}
              <div className="px-6 py-4 flex-1">
                <div className="flex flex-col gap-3">
                  {study.findings.slice(0, 2).map((f) => (
                    <div key={f.id} className="flex items-start gap-3">
                      <span className="text-[10px] font-mono text-gray-500 mt-0.5 shrink-0 w-8">
                        {f.id}
                      </span>
                      <div className="min-w-0">
                        <div className="mb-1">
                          <SeverityBadge severity={f.severity} />
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {f.finding}
                        </p>
                      </div>
                    </div>
                  ))}
                  {study.findings.length > 2 && (
                    <p className="text-xs text-gray-500 pl-11">
                      +{study.findings.length - 2} more finding
                      {study.findings.length - 2 > 1 ? "s" : ""}
                    </p>
                  )}
                </div>
              </div>

              {/* Powered By */}
              <div className="px-6 py-4 border-t border-white/[0.06] bg-white/[0.01]">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-primary-light shrink-0" />
                  <span className="text-[11px] font-semibold text-primary-light">
                    Powered by {study.poweredBy.name}
                  </span>
                </div>
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
