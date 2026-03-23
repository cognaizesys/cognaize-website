"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  AlertTriangle,
  Bell,
  Timer,
  MessageSquare,
  Link2,
  Brain,
  RefreshCw,
  Rocket,
  BarChart3,
  Activity,
  Search,
  Shield,
} from "lucide-react";

/* ─── SECTION 1: HERO ────────────────────────────────── */

const heroStats = [
  { value: "Real-time", label: "Stoppage notifications" },
  { value: "Automatic", label: "Escalations triggered by time" },
  { value: "Full", label: "Trend analysis across plants and lines" },
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
            <AlertTriangle className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              Line Stoppage Tracking
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6 leading-[1.1]">
            Stop Downtime from Going Unnoticed and Unresolved
          </h1>

          <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Engineered Intelligence for Line Continuity — makes stoppages from
            equipment failures, quality holds, and supply gaps visible,
            traceable, and actionable the moment they occur.
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
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://factri.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://calendly.com/raghu-cognaizesys/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent/30 hover:border-accent/50 hover:bg-white/5 text-white px-7 py-3.5 rounded-lg font-semibold transition-all"
            >
              Book a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: WHAT IT DOES ────────────────────────── */

const whatItDoesPoints = [
  {
    icon: AlertTriangle,
    text: "Operators report stoppages in seconds — blocking or non-blocking — from any device on the floor",
  },
  {
    icon: Timer,
    text: "Time-based escalation triggers automatic notifications to the right people at the right time",
  },
  {
    icon: MessageSquare,
    text: "Discussion threads per stoppage with resolution tracking — so nothing falls through the cracks",
  },
  {
    icon: Link2,
    text: "Links every stoppage to affected production orders — quantifying the impact on delivery and output",
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
            Every Stoppage Visible. Every Root Cause Captured.
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Line Stoppage Tracking makes stoppages — from machine breakdowns,
            quality holds, and supply gaps — visible and resolvable the moment
            they occur. Operators report in seconds. Escalations trigger
            automatically. Root causes are captured and linked to production
            orders, so recurring disruptions can be understood and reduced.
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
                {/* Stylised line status indicators */}
                <rect x="20" y="30" width="160" height="20" rx="6" stroke="#6ee7b7" strokeWidth="2" fill="#6ee7b710" />
                <circle cx="38" cy="40" r="5" fill="#6ee7b7" />
                <text x="52" y="44" fill="#6ee7b7" fontSize="10" fontWeight="600">Line 1 — Running</text>

                <rect x="20" y="65" width="160" height="20" rx="6" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b10" />
                <circle cx="38" cy="75" r="5" fill="#f59e0b" />
                <text x="52" y="79" fill="#f59e0b" fontSize="10" fontWeight="600">Line 2 — At Risk</text>

                <rect x="20" y="100" width="160" height="20" rx="6" stroke="#ef4444" strokeWidth="2" fill="#ef444410" />
                <circle cx="38" cy="110" r="5" fill="#ef4444" />
                <text x="52" y="114" fill="#ef4444" fontSize="10" fontWeight="600">Line 3 — Stopped</text>

                <rect x="20" y="135" width="160" height="20" rx="6" stroke="#6ee7b7" strokeWidth="2" fill="#6ee7b710" />
                <circle cx="38" cy="145" r="5" fill="#6ee7b7" />
                <text x="52" y="149" fill="#6ee7b7" fontSize="10" fontWeight="600">Line 4 — Running</text>

                <rect x="20" y="170" width="160" height="20" rx="6" stroke="#6ee7b7" strokeWidth="2" fill="#6ee7b710" />
                <circle cx="38" cy="180" r="5" fill="#6ee7b7" />
                <text x="52" y="184" fill="#6ee7b7" fontSize="10" fontWeight="600">Line 5 — Running</text>
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
    icon: Bell,
    title: "Real-Time Notifications",
    body: "The moment a stoppage is reported, the right people are notified — no waiting for shift handover reports or end-of-day summaries.",
  },
  {
    icon: Timer,
    title: "Automatic Escalations",
    body: "If a stoppage is not resolved within a configurable time threshold, escalation triggers automatically — ensuring no blocking stoppage goes unaddressed.",
  },
  {
    icon: Search,
    title: "Root Cause Capture",
    body: "Configurable reason codes per site, area, and line — so every stoppage is categorised, not just logged. Recurring causes become visible over time.",
  },
  {
    icon: Link2,
    title: "Production Order Impact",
    body: "Every stoppage is linked to the production orders it affects — so the delivery impact is quantified immediately, not discovered later.",
  },
  {
    icon: Activity,
    title: "Line Status Visibility",
    body: "Live line status cards — green, yellow, red — give plant and operations leaders a real-time view of what is running, what is at risk, and what is stopped.",
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
            <Shield className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Key Capabilities
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            What Line Stoppage Tracking Delivers
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
              className="bg-white rounded-xl border border-gray-200 p-6 border-t-[3px] border-t-primary hover:shadow-lg transition-shadow"
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
              Continuity Data That Feeds Back to Planning and Estimation
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Line Stoppage Tracking feeds operational reality back into the
              Cognaize Systems intelligence loop. Stoppage patterns — by
              machine, by line, by reason code — inform capacity planning and
              production scheduling. Actual availability data makes future
              estimates more realistic and future schedules more reliable.
              Downtime that was previously invisible becomes a source of
              intelligence.
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
              viewBox="0 0 380 220"
              className="w-full max-w-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Line Stoppage box (left) */}
              <rect
                x="10"
                y="75"
                width="150"
                height="70"
                rx="12"
                stroke="#ef4444"
                strokeWidth="2"
                fill="#ef444410"
              />
              <text
                x="85"
                y="105"
                textAnchor="middle"
                fill="#fca5a5"
                fontSize="12"
                fontWeight="700"
              >
                Line Stoppage
              </text>
              <text
                x="85"
                y="123"
                textAnchor="middle"
                fill="#fca5a5"
                fontSize="12"
                fontWeight="700"
              >
                Tracking
              </text>

              {/* Planning / Estimation box (right) */}
              <rect
                x="220"
                y="55"
                width="150"
                height="50"
                rx="10"
                stroke="#846fbc"
                strokeWidth="1.5"
                fill="#846fbc10"
              />
              <text
                x="295"
                y="85"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="11"
                fontWeight="600"
              >
                Planning &amp; Estimation
              </text>

              {/* Arrow */}
              <line
                x1="160"
                y1="100"
                x2="220"
                y2="80"
                stroke="#846fbc"
                strokeWidth="2"
                strokeDasharray="6 3"
                markerEnd="url(#arrowPurpleLST)"
              />

              {/* Label */}
              <text
                x="190"
                y="80"
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="9"
              >
                Continuity
              </text>
              <text
                x="190"
                y="92"
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="9"
              >
                Data
              </text>

              <defs>
                <marker
                  id="arrowPurpleLST"
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

const proofCards = [
  {
    bold: "Stoppages reported within seconds",
    body: "Stoppages that previously went unreported for hours are now visible within seconds of occurrence.",
  },
  {
    bold: "Escalations that are automatic and auditable",
    body: "Escalation paths that previously depended on who happened to walk past are now automatic and auditable.",
  },
  {
    bold: "Root cause patterns made visible",
    body: "Root cause patterns that were previously unknown are now visible across plants, lines, and reason codes.",
  },
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
            From Invisible Downtime to Actionable Data
          </h2>
        </motion.div>

        {/* Statement cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {proofCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6"
            >
              <p className="text-gray-900 font-bold text-base mb-2">
                {card.bold}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.body}
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
            Line Stoppage Tracking is live across manufacturing facilities in
            India. For full deployment details, visit FactriAI.
          </p>
          <a
            href="https://factri.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
          >
            Learn More at FactriAI
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
          Make Your Line Stoppages Visible and Resolvable
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
        >
          Book a 30-minute demo to see how Line Stoppage Tracking connects
          floor continuity to your production intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://factri.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
          >
            Learn More at FactriAI
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
          Line Stoppage Tracking is part of the FactriAI platform, offered
          through Cognaize Systems.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────── */

export default function LineStoppageTrackingPage() {
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
