"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  PenTool,
  Calculator,
  CalendarDays,
  Settings,
  BarChart3,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

const challenges = [
  {
    stage: "Design",
    icon: PenTool,
    headline: "Slow Drawing Review",
    description:
      "Manual review takes days, errors slip through to the shop floor",
  },
  {
    stage: "Estimate",
    icon: Calculator,
    headline: "Tribal Knowledge Loss",
    description:
      "Costing depends on experts who walk out the door with decades of know-how",
  },
  {
    stage: "Plan",
    icon: CalendarDays,
    headline: "Disconnected From Reality",
    description:
      "Schedules ignore floor reality; constant re-planning wastes hours every week",
  },
  {
    stage: "Execute",
    icon: Settings,
    headline: "Invisible to Decision Makers",
    description:
      "Real-time production status is unknown; decisions rely on stale, paper-based data",
  },
  {
    stage: "Track",
    icon: BarChart3,
    headline: "Hidden Downtime",
    description:
      "Stoppages go unreported, root causes stay invisible to decision-makers",
  },
  {
    stage: "Improve",
    icon: Lightbulb,
    headline: "No Path to Improvement",
    description:
      "Inspections stay on paper with no path to continuous improvement",
  },
];

const workflowStages = [
  "Design",
  "Estimate",
  "Plan",
  "Execute",
  "Track",
  "Improve",
];

export function ChallengeDifferentiatorSection() {
  return (
    <section
      id="challenge"
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
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
              <AlertTriangle className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                The Manufacturing Challenge
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
            Every Handoff Is a Missed Opportunity
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
          >
            The gaps between key stages of manufacturing are where errors,
            delays, and lost margin build up.
          </motion.p>
        </div>

        {/* Challenge cards — 3x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.stage}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 border-t-2 border-t-primary/30"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-[11px] font-medium text-primary-light uppercase tracking-wider">
                  {challenge.stage}
                </span>
                <challenge.icon className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                {challenge.headline}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Workflow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-white/[0.06]"
        >
          <p className="text-center text-xs font-medium text-gray-500 uppercase tracking-[0.3em] mb-6">
            End-to-End Manufacturing Workflow
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {workflowStages.map((stage, index) => (
              <div key={stage} className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-sm text-gray-300 font-medium min-w-[100px]">
                  {stage}
                </span>
                {index < workflowStages.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-gray-600 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
