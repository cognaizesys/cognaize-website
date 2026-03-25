"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  Users,
  DoorOpen,
  PenTool,
  Calculator,
  ClipboardList,
  Play,
  BarChart3,
  RefreshCw,
  Database,
  Wrench,
  TrendingUp,
} from "lucide-react";

/* ─────────────────────────────────────────────
   PROBLEM CARDS DATA
   ───────────────────────────────────────────── */
const problems = [
  {
    icon: BrainCircuit,
    title: "Trapped in Heads",
    description:
      "The judgment that matters most, which tolerances hold, which designs cost more than they should, sits with a handful of experienced engineers and estimators. It's never been written down in a way that's actually usable.",
  },
  {
    icon: Users,
    title: "Can't Scale",
    description:
      "That knowledge works fine when you've got one shift and one plant. Try running it across locations, new hires, or faster production cycles. It breaks down.",
  },
  {
    icon: DoorOpen,
    title: "Walks Out the Door",
    description:
      "When those experienced people retire or move on, decades of hard-won judgment leave with them. No handover document captures what they actually know.",
  },
];

/* ─────────────────────────────────────────────
   PROCESS STEPS DATA
   ───────────────────────────────────────────── */
const processSteps = [
  { icon: PenTool, label: "Design", desc: "Drawing review & feasibility", highlight: true },
  { icon: Calculator, label: "Estimate", desc: "Cost & process estimation" },
  { icon: ClipboardList, label: "Plan", desc: "Production planning" },
  { icon: Play, label: "Execute", desc: "Shop floor operations" },
  { icon: BarChart3, label: "Track", desc: "Line continuity & downtime" },
  { icon: RefreshCw, label: "Improve", desc: "Quality & feedback loops" },
];

/* ─────────────────────────────────────────────
   VALUE CARDS DATA
   ───────────────────────────────────────────── */
const values = [
  {
    icon: Database,
    title: "Domain Over Data",
    description:
      "We start with what experienced engineers actually know, not what a generic model guesses. The knowledge is built rule by rule through real deployments.",
  },
  {
    icon: Wrench,
    title: "Built by Engineers",
    description:
      "Our team has spent careers on factory floors, in design offices, and in estimation rooms. The system reflects that firsthand understanding.",
  },
  {
    icon: TrendingUp,
    title: "Compounding Intelligence",
    description:
      "Every production cycle feeds real outcomes back into the system. The longer you run it, the sharper it gets.",
  },
];

/* ─────────────────────────────────────────────
   SECTION COMPONENT
   ───────────────────────────────────────────── */
export function AboutStorySection() {
  return (
    <section id="our-story" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── BLOCK 1: Header + Problem Cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
            <BookOpen className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Our Story
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight max-w-2xl">
            Making Engineering Judgment Permanent
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Your most valuable manufacturing knowledge doesn&apos;t live in any
            system. It lives in people.
          </p>
        </motion.div>

        {/* Problem cards — 3-column grid */}
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {problems.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t-[3px] border-t-primary bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 font-heading">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── BLOCK 2: Two-Column — Conviction + Process ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16"
        >
          {/* Left: Conviction narrative */}
          <div className="space-y-6">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We started Cognaize because we believed that judgment could be
              structured. Not replaced by AI, not approximated with generic
              data, but captured rule by rule from the people who actually know,
              and made into a system that works consistently whether
              they&apos;re in the room or not.
            </p>

            <blockquote className="border-l-[3px] border-l-primary pl-5 py-2">
              <p className="text-xl md:text-2xl font-heading italic text-primary leading-snug">
                &ldquo;Design is where manufacturing decisions have their
                highest return.&rdquo;
              </p>
            </blockquote>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We begin at design because that&apos;s where the leverage is
              highest. Tolerances, material specifications, feasibility
              decisions: these get locked in weeks before the shop floor ever
              sees a part. But upstream intelligence alone isn&apos;t enough.
              Our execution, quality, and line continuity products close that
              loop, so the system gets sharper through your factory&apos;s
              actual production outcomes.
            </p>
          </div>

          {/* Right: Vertical process steps */}
          <div className="relative">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
              The Manufacturing Workflow
            </h3>

            {/* Vertical connector line */}
            <div className="absolute left-5 top-14 bottom-16 w-px bg-gray-300" />

            <div className="space-y-2">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                const isHighlight = step.highlight;
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`relative flex items-center gap-4 p-3 rounded-lg transition-colors duration-200 ${
                      isHighlight
                        ? "bg-primary/5 border border-primary/15"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {/* Icon dot */}
                    <div
                      className={`relative z-10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        isHighlight
                          ? "bg-primary text-white"
                          : "bg-white border border-gray-200 text-gray-500"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Text */}
                    <div>
                      <p
                        className={`text-sm font-semibold ${
                          isHighlight ? "text-primary" : "text-gray-900"
                        }`}
                      >
                        {step.label}
                      </p>
                      <p className="text-xs text-gray-500">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Feedback loop indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 flex items-center gap-2 pl-3"
            >
              <RefreshCw className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary italic">
                Feedback Intelligence: Improve feeds back to Design
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── BLOCK 3: Value Cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-5"
        >
          {values.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1 font-heading">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
