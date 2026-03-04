"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileSearch, Sparkles, Cpu } from "lucide-react";
import CASE_STUDIES from "@/data/case-studies";
import type { CaseStudy, Finding } from "@/data/case-studies";

const reversed = [...CASE_STUDIES].reverse();

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

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-white/[0.06]">
        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/20 border border-primary/30 text-[10px] font-bold text-primary-light uppercase tracking-wider mb-4">
          {study.moduleTag}
        </span>
        <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
          {study.title}
        </h3>
        <p className="text-sm text-gray-400">{study.subtitle}</p>
        <p className="mt-2 text-xs text-gray-500 font-mono">{study.summary}</p>
      </div>

      {/* Findings table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06]">
              <th className="px-6 md:px-8 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider w-16">
                #
              </th>
              <th className="py-3 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider w-24">
                Severity
              </th>
              <th className="py-3 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                Finding
              </th>
              <th className="py-3 pr-6 md:pr-8 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                Manufacturing Implication
              </th>
            </tr>
          </thead>
          <tbody>
            {study.findings.map((f) => (
              <tr
                key={f.id}
                className="border-b border-white/[0.04] last:border-0"
              >
                <td className="px-6 md:px-8 py-4 text-xs font-mono text-gray-500 align-top">
                  {f.id}
                </td>
                <td className="py-4 align-top">
                  <SeverityBadge severity={f.severity} />
                </td>
                <td className="py-4 pr-4 text-gray-300 leading-relaxed align-top">
                  {f.finding}
                  {/* Show implication inline on mobile */}
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed md:hidden">
                    {f.implication}
                  </p>
                </td>
                <td className="py-4 pr-6 md:pr-8 text-gray-400 text-xs leading-relaxed align-top hidden md:table-cell">
                  {f.implication}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Powered By footer */}
      <div className="px-6 md:px-8 py-5 border-t border-white/[0.06] bg-white/[0.01]">
        <div className="flex items-start gap-3">
          <Cpu className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
          <div>
            <span className="text-xs font-semibold text-primary-light">
              Powered by {study.poweredBy.name}
            </span>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              {study.poweredBy.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  return (
    <main
      className="min-h-screen relative"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0f 0%, #12121a 30%, #0c1a1a 60%, #0a0a0f 100%)",
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

      <div className="relative z-10">
        {/* Page header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
                <FileSearch className="w-3 h-3 text-accent" />
                <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                  Design Intelligence in Action
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
                Case Studies
              </h1>
              <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
                Real findings on real drawings. Drawings are truncated to
                protect client confidentiality. Findings are authentic.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case studies list */}
        <section className="pb-20 md:pb-28">
          <motion.div
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {reversed.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </motion.div>
        </section>

        {/* Bottom CTA */}
        <section className="relative overflow-hidden">
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
                  Ready to Run This on
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
