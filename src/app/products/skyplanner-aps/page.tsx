"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Clock,
  Lock,
  RotateCcw,
  Plug,
  Brain,
  RefreshCw,
  Rocket,
  BarChart3,
  GanttChart,
  Timer,
} from "lucide-react";

/* ─── SECTION 1: HERO ────────────────────────────────── */

const heroStats = [
  { value: "52%", label: "Reduced lead time" },
  { value: "34%", label: "Increased capacity utilisation" },
  { value: "80%", label: "Time saved in scheduling" },
];

function HeroSection() {
  return (
    <section
      className="relative pt-24 md:pt-32 pb-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0f 0%, #0c1a1a 40%, #1a1028 70%, #0a0a0f 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.07) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/35 mb-8">
            <GanttChart className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              SkyPlanner APS
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6 leading-[1.1]">
            Reschedule Your Production Plan in Seconds, Not Hours
          </h1>

          <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Engineered Intelligence for Production Planning — AI-powered
            scheduling that optimises job allocation across your machines and
            capacity constraints, and reschedules instantly when priorities
            change.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mb-10">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-[3px] border-l-accent pl-3 text-left"
              >
                <div className="text-xl md:text-2xl font-bold font-heading text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap justify-center mb-6">
            <a
              href="https://skyplanner.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
            >
              Explore SkyPlanner APS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://calendly.com/raghu-cognaizesys/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent/30 hover:border-accent/50 hover:bg-white/5 text-white px-7 py-3.5 rounded-lg font-semibold transition-all"
            >
              Book a Demo with Cognaize Systems
            </a>
          </div>

          {/* Partner note */}
          <p className="text-xs text-gray-500">
            SkyPlanner APS is delivered through SkyPlanner.AI, our production
            planning partner.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: WHAT IT DOES ────────────────────────── */

const whatItDoesPoints = [
  {
    icon: Zap,
    text: "Optimises job allocation across machines, workcentres, and capacity constraints automatically",
  },
  {
    icon: GanttChart,
    text: "Drag-and-drop Gantt timeline with automatic dependency updates — reschedule manually or let the AI handle it",
  },
  {
    icon: RotateCcw,
    text: "King Button — one-click AI reschedule when customer priorities, urgent orders, or machine availability change",
  },
  {
    icon: Timer,
    text: "Time tracking for operators via web and mobile — actual times feed back into the system",
  },
];

function WhatItDoesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
            <Brain className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              What It Does
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            Optimise. Reschedule. Execute.
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            SkyPlanner APS is an AI-powered Advanced Planning and Scheduling
            system that optimises job allocation across machines with capacity
            constraints — and reschedules the entire production plan in seconds
            when priorities shift.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: capability list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {whatItDoesPoints.map((point, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Right: subtle background graphic */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-full max-w-sm aspect-square rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="w-48 h-48 opacity-30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylised Gantt bars */}
                <rect x="20" y="30" width="120" height="14" rx="4" fill="#846fbc" opacity="0.6" />
                <rect x="50" y="55" width="90" height="14" rx="4" fill="#846fbc" opacity="0.4" />
                <rect x="30" y="80" width="140" height="14" rx="4" fill="#846fbc" opacity="0.5" />
                <rect x="60" y="105" width="80" height="14" rx="4" fill="#E87B3A" opacity="0.4" />
                <rect x="20" y="130" width="110" height="14" rx="4" fill="#846fbc" opacity="0.35" />
                <rect x="40" y="155" width="100" height="14" rx="4" fill="#6ee7b7" opacity="0.4" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: KEY CAPABILITIES ────────────────────── */

const capabilityCards = [
  {
    icon: Zap,
    title: "AI Scheduling Engine",
    body: "Optimises job sequencing across machines and capacity constraints — producing schedules that maximise throughput and minimise lead time.",
  },
  {
    icon: Clock,
    title: "Instant Reschedule",
    body: "When priorities change, the King Button reschedules the entire production plan in seconds — no manual replanning, no hours lost.",
  },
  {
    icon: Lock,
    title: "Lock & Unlock",
    body: "Lock near-term schedules to protect committed work while the AI optimises the rest. Unlock to reschedule as conditions change.",
  },
  {
    icon: RotateCcw,
    title: "Rework Handling",
    body: "Handles complete and partial rework jobs within the scheduling logic — so rework doesn\u2019t disrupt the broader production plan.",
  },
  {
    icon: Plug,
    title: "ERP Integration",
    body: "Integrates with your existing ERP system via REST API — so scheduling data flows in both directions without manual transfer.",
  },
];

function KeyCapabilitiesSection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundColor: "#f8f9fb",
        backgroundImage:
          "linear-gradient(rgba(70, 110, 170, 0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 110, 170, 0.22) 1px, transparent 1px), linear-gradient(rgba(70, 110, 170, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 110, 170, 0.08) 1px, transparent 1px)",
        backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
            <BarChart3 className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Key Capabilities
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            What SkyPlanner APS Delivers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`bg-white rounded-xl border border-gray-200 p-6 border-t-[3px] border-t-primary hover:shadow-lg transition-shadow ${
                i >= 3 ? "lg:col-span-1 lg:last:col-start-2" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: HOW IT FITS THE LOOP ────────────────── */

function IntelligenceLoopFitSection() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #111118 0%, #16131f 50%, #111118 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 170, 240, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.12) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
              <RefreshCw className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                The Intelligence Loop
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight mb-6">
              Planning That Feeds Back to Estimation
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              SkyPlanner APS connects to the Cognaize Systems intelligence loop
              through Manufacturing Intelligence. Actual scheduling outcomes —
              real capacity utilisation, sequencing constraints, and lead time
              variances — feed back into cost estimation. Quotes are grounded
              not just in process knowledge but in your facility&apos;s real
              capacity picture. The more your factory runs through SkyPlanner,
              the more accurate your estimates become.
            </p>
          </motion.div>

          {/* Right: loop diagram SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <svg
              viewBox="0 0 360 220"
              className="w-full max-w-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SkyPlanner box (left) */}
              <rect
                x="20"
                y="80"
                width="140"
                height="60"
                rx="12"
                stroke="#6ee7b7"
                strokeWidth="2"
                fill="#6ee7b710"
              />
              <text
                x="90"
                y="107"
                textAnchor="middle"
                fill="#6ee7b7"
                fontSize="13"
                fontWeight="700"
              >
                SkyPlanner
              </text>
              <text
                x="90"
                y="125"
                textAnchor="middle"
                fill="#6ee7b7"
                fontSize="13"
                fontWeight="700"
              >
                APS
              </text>

              {/* MI box (right) */}
              <rect
                x="220"
                y="80"
                width="120"
                height="60"
                rx="12"
                stroke="#846fbc"
                strokeWidth="2.5"
                fill="#846fbc20"
              />
              <text
                x="280"
                y="107"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="12"
                fontWeight="700"
              >
                Manufacturing
              </text>
              <text
                x="280"
                y="125"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="12"
                fontWeight="700"
              >
                Intelligence
              </text>

              {/* Arrow: SkyPlanner → MI */}
              <line
                x1="160"
                y1="110"
                x2="220"
                y2="110"
                stroke="#846fbc"
                strokeWidth="2"
                markerEnd="url(#arrowPurpleSP)"
              />

              {/* Label */}
              <text
                x="190"
                y="100"
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="9"
              >
                Scheduling
              </text>
              <text
                x="190"
                y="112"
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="9"
              >
                Feedback
              </text>

              <defs>
                <marker
                  id="arrowPurpleSP"
                  markerWidth="8"
                  markerHeight="6"
                  refX="7"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L8,3 L0,6" fill="#846fbc" />
                </marker>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: PROOF ───────────────────────────────── */

const proofStats = [
  { value: "52%", label: "Reduction in production lead time" },
  { value: "34%", label: "Increase in capacity utilisation" },
  { value: "80%", label: "Reduction in time spent on scheduling" },
];

function ProofSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
            <BarChart3 className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              In Practice
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            What Changes When Scheduling Is Optimised
          </h2>
        </motion.div>

        {/* Stat cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {proofStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Body + link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            SkyPlanner APS is live in manufacturing facilities across Europe and
            Asia. For full case studies and detailed proof points, visit
            SkyPlanner.AI.
          </p>
          <a
            href="https://skyplanner.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
          >
            Visit SkyPlanner.AI
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: CLOSING CTA ────────────────────────── */

function ClosingCTASection() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0f 0%, #1a1028 50%, #0a0a0f 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.07) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-25"
        style={{
          background:
            "radial-gradient(ellipse, rgba(132, 111, 188, 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
            <Rocket className="w-3 h-3 text-accent" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Get Started
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
          Add Production Planning to Your Cognaize Systems Suite
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
        >
          SkyPlanner APS integrates with Manufacturing Intelligence to close
          the estimation loop. Book a demo with Cognaize Systems to see how
          the full suite works together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://skyplanner.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
          >
            Explore SkyPlanner APS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="https://calendly.com/raghu-cognaizesys/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-primary/30 hover:border-primary/50 hover:bg-white/5 text-white font-semibold transition-all duration-300"
          >
            Book a Demo
          </a>
        </motion.div>

        {/* Partner note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-xs text-gray-500"
        >
          SkyPlanner APS is delivered through SkyPlanner.AI.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────── */

export default function SkyPlannerAPSPage() {
  return (
    <div>
      <HeroSection />
      <WhatItDoesSection />
      <KeyCapabilitiesSection />
      <IntelligenceLoopFitSection />
      <ProofSection />
      <ClosingCTASection />
    </div>
  );
}
