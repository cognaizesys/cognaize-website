"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
  TrendingUp,
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/35 mb-8">
              <AlertTriangle className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                Downtime Intelligence
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6 leading-[1.1]">
              Stop Downtime from Going Unnoticed and Unresolved
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              Engineered Intelligence for Line Continuity — makes stoppages from
              equipment failures, quality holds, and supply gaps visible,
              traceable, and actionable the moment they occur.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-10 mb-10">
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
            <div className="flex gap-4 flex-wrap">
              <a
                href="/#contact"
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

          {/* Right: app placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="bg-dark-surface/80 h-9 flex items-center px-4 gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/5 rounded-md px-3 py-1 text-[10px] text-gray-500 text-center">
                    app.cognaizesys.com/stoppages
                  </div>
                </div>
              </div>
              <Image
                src="/images/products/dti/dti-hero.png"
                alt="Downtime Intelligence — Line Stoppage Tracking"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: WHAT IT DOES ────────────────────────── */

const whatItDoesPoints = [
  {
    icon: AlertTriangle,
    title: "Instant Reporting",
    text: "Operators report stoppages in seconds — blocking or non-blocking — from any device on the floor",
  },
  {
    icon: Timer,
    title: "Smart Escalation",
    text: "Time-based escalation triggers automatic notifications to the right people at the right time",
  },
  {
    icon: MessageSquare,
    title: "Resolution Tracking",
    text: "Discussion threads per stoppage with resolution tracking — so nothing falls through the cracks",
  },
  {
    icon: Link2,
    title: "Order Impact",
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
            Downtime Intelligence makes stoppages — from machine breakdowns,
            quality holds, and supply gaps — visible and resolvable the moment
            they occur. Operators report in seconds. Escalations trigger
            automatically. Root causes are captured and linked to production
            orders, so recurring disruptions can be understood and reduced.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {whatItDoesPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
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
  {
    icon: TrendingUp,
    title: "Trend Analytics",
    body: "Stoppage data aggregated across plants, lines, and time periods — so recurring patterns surface and reduction targets are grounded in what's actually happening on the floor.",
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
            What Downtime Intelligence Delivers
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
              Downtime Intelligence feeds operational reality back into the
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
              viewBox="0 0 400 300"
              className="w-full max-w-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="arrowDTI"
                  markerWidth="10"
                  markerHeight="8"
                  refX="9"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,0 L10,4 L0,8" fill="#a78bfa" />
                </marker>
                <linearGradient id="arrowGradDTI" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#846fbc" stopOpacity="0.8" />
                </linearGradient>
                <radialGradient id="glowDTI" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="glowTargetDTI" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#846fbc" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#846fbc" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Decorative dots */}
              <circle cx="30" cy="80" r="2" fill="#ef4444" opacity="0.12" />
              <circle cx="22" cy="92" r="1.5" fill="#ef4444" opacity="0.08" />
              <circle cx="375" cy="200" r="2" fill="#846fbc" opacity="0.12" />
              <circle cx="368" cy="212" r="1.5" fill="#846fbc" opacity="0.08" />

              {/* Faint return arc suggesting the broader loop */}
              <path
                d="M310 205 C310 260, 90 260, 90 205"
                stroke="#a78bfa"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.08"
                fill="none"
              />

              {/* Glow behind left node */}
              <ellipse cx="95" cy="145" rx="95" ry="48" fill="url(#glowDTI)" />

              {/* Left node — Downtime Intelligence (slightly higher) */}
              <rect
                x="15"
                y="115"
                width="160"
                height="60"
                rx="14"
                stroke="#ef4444"
                strokeWidth="2"
                fill="#ef444414"
              />
              <text
                x="95"
                y="140"
                textAnchor="middle"
                fill="#fca5a5"
                fontSize="13"
                fontWeight="700"
              >
                Downtime
              </text>
              <text
                x="95"
                y="158"
                textAnchor="middle"
                fill="#fca5a5"
                fontSize="13"
                fontWeight="700"
              >
                Intelligence
              </text>

              {/* Glow behind right node */}
              <ellipse cx="305" cy="155" rx="95" ry="48" fill="url(#glowTargetDTI)" />

              {/* Right node — Planning & Estimation (slightly lower) */}
              <rect
                x="225"
                y="125"
                width="160"
                height="60"
                rx="14"
                stroke="#846fbc"
                strokeWidth="2"
                fill="#846fbc14"
              />
              <text
                x="305"
                y="150"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="13"
                fontWeight="700"
              >
                Planning &amp;
              </text>
              <text
                x="305"
                y="168"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="13"
                fontWeight="700"
              >
                Estimation
              </text>

              {/* Glow behind arrow path */}
              <path
                d="M175 130 C195 70, 260 65, 225 125"
                stroke="url(#arrowGradDTI)"
                strokeWidth="8"
                fill="none"
                opacity="0.12"
              />

              {/* S-curve arrow: source → target */}
              <path
                d="M175 130 C195 70, 260 65, 225 125"
                stroke="#a78bfa"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
                markerEnd="url(#arrowDTI)"
              />

              {/* Arrow label pill at S-curve inflection point */}
              <rect
                x="180"
                y="62"
                width="80"
                height="24"
                rx="12"
                fill="#846fbc20"
                stroke="#846fbc"
                strokeWidth="1"
              />
              <text
                x="220"
                y="78"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="10"
                fontWeight="600"
              >
                Continuity Data
              </text>
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
            Downtime Intelligence is live across manufacturing facilities in
            India.
          </p>
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
          Make Your Downtime Visible and Resolvable
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
        >
          Book a 30-minute demo to see how Downtime Intelligence connects
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
            href="/#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
          >
            Learn More
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
          Downtime Intelligence is offered by Cognaize Systems.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────── */

export default function DowntimeIntelligencePage() {
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
