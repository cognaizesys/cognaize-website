"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  FileSearch,
  Sparkles,
  Cpu,
  ChevronDown,
  Factory,
  AlertTriangle,
  Shield,
} from "lucide-react";
import Link from "next/link";
import CASE_STUDIES from "@/data/case-studies";
import type { CaseStudy, Finding } from "@/data/case-studies";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const MODULE_FILTERS = [
  { label: "All", value: "all", accent: "#846fbc" },
  { label: "Assembly Review", value: "Assembly Review", accent: "#6ee7b7" },
  { label: "Machine Review", value: "Machine Review", accent: "#9b89cc" },
  { label: "Forge Review", value: "Forge Review", accent: "#60a5fa" },
  { label: "Drawing Comparison", value: "Drawing Comparison", accent: "#f59e0b" },
];


/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function SeverityBadge({ severity }: { severity: Finding["severity"] }) {
  const isCritical = severity === "CRITICAL";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
        isCritical
          ? "bg-red-500/15 text-red-400 border-red-500/25"
          : "bg-amber-500/15 text-amber-400 border-amber-500/25"
      }`}
    >
      {isCritical ? (
        <AlertTriangle className="w-3 h-3" />
      ) : (
        <Shield className="w-3 h-3" />
      )}
      {severity}
    </span>
  );
}

function FindingCard({ finding, index }: { finding: Finding; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 md:p-5"
    >
      <div className="flex items-start gap-3 mb-2">
        <span className="text-[11px] font-mono text-gray-500 mt-1 shrink-0">
          {finding.id}
        </span>
        <SeverityBadge severity={finding.severity} />
      </div>
      <p className="text-sm text-gray-200 leading-relaxed mb-2">
        {finding.finding}
      </p>
      <p className="text-xs text-gray-500 leading-relaxed pl-0 border-l-2 border-white/[0.06] ml-0 pl-3">
        {finding.implication}
      </p>
    </motion.div>
  );
}

function OutcomeMetric({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent: string;
}) {
  return (
    <div
      className="border-l-[3px] pl-3"
      style={{ borderLeftColor: accent }}
    >
      <div className="text-lg md:text-xl font-heading font-bold text-white">
        {value}
      </div>
      <div className="text-[11px] text-gray-400 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CaseStudyCard                                                      */
/* ------------------------------------------------------------------ */

function CaseStudyCard({
  study,
  isExpanded,
  onToggle,
}: {
  study: CaseStudy;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      variants={itemVariants}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden transition-colors duration-300 hover:bg-white/[0.06] hover:border-white/[0.12]"
      style={{
        borderLeftWidth: "3px",
        borderLeftColor: study.accent,
      }}
    >
      {/* Collapsed header — always visible */}
      <div className="p-5 md:p-7">
        {/* Top row: badge + industry */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border"
            style={{
              backgroundColor: `${study.accent}15`,
              borderColor: `${study.accent}30`,
              color: study.accent,
            }}
          >
            {study.moduleDisplay}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-wider">
            <Factory className="w-3 h-3" />
            {study.industry}
          </span>
        </div>

        {/* Title block */}
        <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-1.5">
          {study.title}
        </h3>
        <p className="text-sm text-gray-400 mb-1">{study.subtitle}</p>

        {/* Summary callout */}
        <div className="mt-3 px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-gray-400 leading-relaxed">
          {study.summary}
        </div>

        {/* Outcomes row */}
        <div className="mt-5 flex flex-wrap gap-5 md:gap-8">
          {study.outcomes.map((o) => (
            <OutcomeMetric
              key={o.label}
              value={o.value}
              label={o.label}
              accent={study.accent}
            />
          ))}
        </div>

        {/* Expand trigger */}
        <button
          onClick={onToggle}
          className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 cursor-pointer"
          style={{ color: study.accent }}
        >
          {isExpanded ? "Hide Findings" : "View Findings"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/[0.06]">
              {/* Finding cards */}
              <div className="p-5 md:p-7 flex flex-col gap-3">
                {study.findings.map((f, i) => (
                  <FindingCard key={f.id} finding={f} index={i} />
                ))}
              </div>

              {/* Powered By block */}
              <div className="mx-5 md:mx-7 mb-5 md:mb-7 rounded-xl p-4 md:p-5 border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent">
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${study.accent}15` }}
                  >
                    <Cpu className="w-4 h-4" style={{ color: study.accent }} />
                  </div>
                  <div>
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: study.accent }}
                    >
                      Powered by {study.poweredBy.name}
                    </span>
                    <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                      {study.poweredBy.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06]">
                  <Link
                    href={study.productLink}
                    className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    Learn about Design Intelligence
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const reversed = [...CASE_STUDIES].reverse();
  const filtered =
    activeFilter === "all"
      ? reversed
      : reversed.filter((s) => s.moduleTag === activeFilter);

  return (
    <main
      className="min-h-screen relative"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0f 0%, #12121a 30%, #0c1a1a 60%, #0a0a0f 100%)",
      }}
    >
      {/* Grid background — toned down */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 170, 240, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.12) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-25"
        style={{
          background:
            "radial-gradient(ellipse, rgba(132, 111, 188, 0.3) 0%, rgba(110, 231, 183, 0.08) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* ---- Hero Section ---- */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
                <FileSearch className="w-3 h-3 text-accent" />
                <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                  Design Intelligence in Action
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight leading-[1.15]">
                Real Findings. Real Drawings.
                <br />
                <span className="text-primary-light">Real Impact.</span>
              </h1>
              <p className="mt-5 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Every finding below was caught by our AI on real engineering
                drawings. We&apos;ve redacted the drawings to protect client
                confidentiality, but the findings are unedited.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ---- Filter Bar ---- */}
        <section className="pb-8 md:pb-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide"
            >
              {MODULE_FILTERS.map((f) => {
                const isActive = activeFilter === f.value;
                return (
                  <button
                    key={f.value}
                    onClick={() => {
                      setActiveFilter(f.value);
                      setExpandedId(null);
                    }}
                    className={`shrink-0 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12]"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: `${f.accent}20`,
                            borderColor: `${f.accent}40`,
                            color: f.accent,
                          }
                        : undefined
                    }
                  >
                    {f.label}
                  </button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ---- Case Studies List ---- */}
        <section className="pb-20 md:pb-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {filtered.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  isExpanded={expandedId === study.id}
                  onToggle={() =>
                    setExpandedId(expandedId === study.id ? null : study.id)
                  }
                />
              ))}

              {filtered.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 text-gray-500"
                >
                  No case studies in this category yet.
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ---- Bottom CTA ---- */}
        <section className="relative overflow-hidden">
          {/* Top divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(132, 111, 188, 0.40) 0%, rgba(110, 231, 183, 0.18) 50%, transparent 70%)",
            }}
          />
          <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-8">
                  <Sparkles className="w-3 h-3 text-accent" />
                  <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                    Get Started
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
                  What Would We Find on
                  <br />
                  <span className="text-primary-light">Your Drawings?</span>
                </h2>
                <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-xl mx-auto">
                  Start with a pilot — 50 drawings, 1 week, measurable results.
                </p>
                <div className="mt-10">
                  <a
                    href="https://calendly.com/raghu-cognaizesys/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/45"
                    style={{
                      background: "linear-gradient(135deg, #846fbc, #6ee7b7)",
                    }}
                  >
                    Book a Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
