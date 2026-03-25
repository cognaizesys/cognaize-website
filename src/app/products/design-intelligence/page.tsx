"use client";

import { motion } from "framer-motion";
import {
  Scan,
  ArrowRight,
  AlertTriangle,
  Brain,
  DollarSign,
  BookOpen,
  ArrowLeftRight,
  Layers,
  Factory,
  Rocket,
  Crosshair,
  RefreshCw,
} from "lucide-react";
import Image from "next/image";

/* ─── SECTION 1: HERO ────────────────────────────────── */

const heroStats = [
  { value: "<15 mins", label: "Review time per drawing" },
  { value: "13+", label: "Error categories covered" },
  { value: "95%+", label: "Detection accuracy" },
];

function HeroSection() {
  return (
    <section
      className="relative pt-24 md:pt-32 pb-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0f 0%, #1a1028 40%, #0c1a1a 70%, #0a0a0f 100%)",
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/35 mb-8">
              <Scan className="w-3.5 h-3.5 text-primary-light" />
              <span className="text-xs font-medium text-primary-light uppercase tracking-wider">
                Design Intelligence
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6 leading-[1.1]">
              Catch What&apos;s Easy to Miss — Before It Reaches the Shop Floor
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              Engineered Intelligence for Design Review — structured analysis of
              engineering drawings against manufacturing standards, process
              knowledge, and product family logic. In under 15 minutes.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-8 mb-10">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-[3px] border-l-primary pl-3"
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
                className="inline-flex items-center gap-2 border border-primary/30 hover:border-primary/50 hover:bg-white/5 text-white px-7 py-3.5 rounded-lg font-semibold transition-all"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>

          {/* Right: screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
                    app.cognaizesys.com/review
                  </div>
                </div>
              </div>
              <Image
                src="/images/products/di/di-hero-pptx.png"
                alt="Design Intelligence — AI Drawing Review"
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

const capabilities = [
  "Reviews drawings across seven manufacturing technologies: Machining, Casting, Forging, Fabrication, Sheet Metal, Assembly, and Version Comparison",
  "Identifies errors across 13+ categories — from GD&T and tolerance issues to missing callouts and material specification gaps",
  "Flags manufacturing consequences on every finding — not just what is wrong, but what it will cost if it reaches the floor",
  "Compares drawing versions to identify and classify every change — critical, major, and minor",
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
            <Crosshair className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              What It Does
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            Seven Technology Branches. One Structured Review.
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Design Intelligence reviews 2D engineering drawings against
            manufacturing standards and process knowledge — identifying what is
            wrong, what will happen on the floor if it proceeds, and what needs
            to change.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: capability list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {capabilities.map((cap, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed">{cap}</p>
              </div>
            ))}
          </motion.div>

          {/* Right: screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
              <div className="bg-gray-100 h-9 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="bg-gray-200 rounded-md h-5 flex-1 mx-4 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400">
                    app.cognaizesys.com
                  </span>
                </div>
              </div>
              <Image
                src="/images/hero/1-design-review.png"
                alt="Design Intelligence review interface"
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

/* ─── SECTION 3: KEY CAPABILITIES ────────────────────── */

const capabilityCards = [
  {
    icon: AlertTriangle,
    title: "Manufacturing Consequence Intelligence",
    body: "Every finding includes a consequence statement — what will happen on the shop floor if this issue is not resolved before production begins.",
  },
  {
    icon: Factory,
    title: "Product Family Intelligence",
    body: "Domain-specific checks calibrated to your component type — pistons, gears, crankshafts, connecting rods, cams, and more. Not just generic drawing rules.",
  },
  {
    icon: DollarSign,
    title: "Cost & Complexity Flags",
    body: "Identifies design decisions that will drive up manufacturing cost or process complexity — before the drawing reaches the estimator.",
  },
  {
    icon: BookOpen,
    title: "Institutional Knowledge Capture",
    body: "The review logic encodes the process knowledge your most experienced engineers carry — and makes it available on every drawing, regardless of who does the review.",
  },
  {
    icon: ArrowLeftRight,
    title: "Version Comparison",
    body: "Upload two drawing revisions and get a structured comparison — every change classified by severity, with manufacturing implications called out.",
  },
  {
    icon: Layers,
    title: "Cross-Drawing Validation",
    body: "Checks compatibility across mating parts and assembly interfaces — catches mismatches that single-drawing review cannot detect.",
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
            <Brain className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Key Capabilities
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            What Design Intelligence Delivers
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
              Design Intelligence Is Where the Loop Begins — and Where It
              Returns
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Design Intelligence is the first product in the Cognaize Systems
              intelligence loop — and the one that benefits most from it.
              Quality findings captured on the floor by Quality Intelligence
              feed back into Design Intelligence, so the review logic improves
              with every rejection resolved. The system learns what actually
              causes problems in production — and sharpens its checks
              accordingly.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              The result is a design review that gets more precise the longer
              your factory runs.
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
                  id="arrowDIPurple"
                  markerWidth="10"
                  markerHeight="8"
                  refX="9"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,0 L10,4 L0,8" fill="#a78bfa" />
                </marker>
                <marker
                  id="arrowDIOrange"
                  markerWidth="10"
                  markerHeight="8"
                  refX="9"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,0 L10,4 L0,8" fill="#fbbf7a" />
                </marker>
                <radialGradient id="glowDICenter" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#846fbc" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#846fbc" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="glowDITop" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#846fbc" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#846fbc" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Central ambient glow */}
              <ellipse cx="195" cy="160" rx="130" ry="90" fill="url(#glowDICenter)" />

              {/* Glow behind DI hero node */}
              <ellipse cx="195" cy="42" rx="90" ry="40" fill="url(#glowDITop)" />

              {/* Decorative dots */}
              <circle cx="200" cy="155" r="2" fill="#846fbc" opacity="0.1" />
              <circle cx="190" cy="165" r="1.5" fill="#846fbc" opacity="0.07" />
              <circle cx="212" cy="148" r="1" fill="#846fbc" opacity="0.09" />

              {/* ─── NODES ─── */}

              {/* Top-center — Design Intelligence */}
              <rect
                x="125"
                y="15"
                width="140"
                height="55"
                rx="14"
                stroke="#846fbc"
                strokeWidth="2"
                fill="#846fbc14"
              />
              <text
                x="195"
                y="38"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="13"
                fontWeight="700"
              >
                Design
              </text>
              <text
                x="195"
                y="55"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="13"
                fontWeight="700"
              >
                Intelligence
              </text>

              {/* Bottom-right — Shop Floor */}
              <rect
                x="230"
                y="215"
                width="140"
                height="55"
                rx="14"
                stroke="#846fbc"
                strokeWidth="2"
                fill="#846fbc14"
              />
              <text
                x="300"
                y="248"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="13"
                fontWeight="700"
              >
                Shop Floor
              </text>

              {/* Bottom-left — Quality Intelligence */}
              <rect
                x="20"
                y="215"
                width="140"
                height="55"
                rx="14"
                stroke="#6ee7b7"
                strokeWidth="2"
                fill="#6ee7b714"
              />
              <text
                x="90"
                y="238"
                textAnchor="middle"
                fill="#6ee7b7"
                fontSize="13"
                fontWeight="700"
              >
                Quality
              </text>
              <text
                x="90"
                y="255"
                textAnchor="middle"
                fill="#6ee7b7"
                fontSize="13"
                fontWeight="700"
              >
                Intelligence
              </text>

              {/* ─── ARROWS (clockwise) ─── */}

              {/* 1. DI → Shop Floor (right edge, curving down-right) */}
              <path
                d="M265 60 Q335 135, 300 215"
                stroke="#a78bfa"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
                markerEnd="url(#arrowDIPurple)"
              />

              {/* Pill: Forward */}
              <rect
                x="290"
                y="118"
                width="62"
                height="24"
                rx="12"
                fill="#846fbc20"
                stroke="#846fbc"
                strokeWidth="1"
              />
              <text
                x="321"
                y="134"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="10"
                fontWeight="600"
              >
                Forward
              </text>

              {/* 2. Shop Floor → Quality (bottom, curving slightly down) */}
              <path
                d="M230 248 Q195 282, 160 248"
                stroke="#a78bfa"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
                markerEnd="url(#arrowDIPurple)"
              />

              {/* 3. Quality → DI (left edge, curving up-left — Feedback) */}
              <path
                d="M90 215 Q55 135, 125 60"
                stroke="#fbbf7a"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
                markerEnd="url(#arrowDIOrange)"
              />

              {/* Pill: Feedback */}
              <rect
                x="38"
                y="118"
                width="72"
                height="24"
                rx="12"
                fill="#E87B3A20"
                stroke="#E87B3A"
                strokeWidth="1"
              />
              <text
                x="74"
                y="134"
                textAnchor="middle"
                fill="#fbbf7a"
                fontSize="10"
                fontWeight="600"
              >
                Feedback
              </text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: PROOF ───────────────────────────────── */

const findings = [
  {
    severity: "Major",
    title:
      "Gear data block inconsistency: pitch diameter vs module \u00d7 teeth exceeds 2%",
    consequence:
      "Data transcription error corrupts backlash, contact ratio, and mating gear compatibility.",
  },
  {
    severity: "Major",
    title: "Mating gear cone distance mismatch — cross-drawing check",
    consequence:
      "Outer cone distance differs >0.1mm vs mating side gear. Produces incorrect tooth contact pattern.",
  },
  {
    severity: "Major",
    title: "Case depth not differentiated between tooth root and flank",
    consequence:
      "Root and flank have different failure modes. Depth adequate for flank may be insufficient at root.",
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
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
            <Scan className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              In Practice
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            Real Findings on a Real Drawing
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Cold Formed Differential Bevel Pinion &middot; Gear Family &middot;
            ForgeReview &middot; STANDARD Mode
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: finding cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {findings.map((f, i) => (
              <div
                key={i}
                className="border-l-4 border-l-red-500 bg-red-50/60 rounded-r-lg p-5"
              >
                <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wide bg-red-100 text-red-700 mb-2">
                  {f.severity}
                </span>
                <h4 className="text-sm font-bold text-gray-900 mb-1.5">
                  {f.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {f.consequence}
                </p>
              </div>
            ))}

            <a
              href="/case-studies/forge-review-bevel-pinion"
              className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline mt-2"
            >
              View Full Case Study
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Right: drawing image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl">
              <div className="bg-gray-100 h-9 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="bg-gray-200 rounded-md h-5 flex-1 mx-4 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400">
                    app.cognaizesys.com
                  </span>
                </div>
              </div>
              <Image
                src="/images/products/di/di-finding-detail.png"
                alt="Design Intelligence finding detail view"
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
          See Design Intelligence on Your Own Drawing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
        >
          Book a 30-minute demo. We&apos;ll run Design Intelligence on a
          drawing from your factory and show you exactly what it finds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://calendly.com/raghu-cognaizesys/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="/#products"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-primary/30 hover:border-primary/50 hover:bg-white/5 text-white font-semibold transition-all duration-300"
          >
            See All Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PAGE ───────────────────────────────────────────── */

export default function DesignIntelligencePage() {
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
