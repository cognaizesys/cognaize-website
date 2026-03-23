"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  Crosshair,
  Brain,
  Factory,
  Shield,
  Boxes,
  BookOpen,
  ClipboardList,
  RefreshCw,
  Rocket,
  Scan,
} from "lucide-react";
import Image from "next/image";

/* ─── SECTION 1: HERO ────────────────────────────────── */

const heroStats = [
  { value: "10\u00d7", label: "Faster than manual estimation" },
  { value: "75%+", label: "Reduction in estimation cost" },
  { value: "Full", label: "Audit trail on every quote" },
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
              <Calculator className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                Manufacturing Intelligence
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6 leading-[1.1]">
              From Drawing to Accurate Cost Sheet — in Minutes, Not Days
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              Engineered Intelligence for Feasibility &amp; Cost Estimation —
              structured feasibility validation, process routing, job card
              generation, and cost breakdown directly from your engineering
              drawings.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-8 mb-10">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-[3px] border-l-accent pl-3"
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
                href="https://calendly.com/raghu-cognaizesys/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://calendly.com/raghu-cognaizesys/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-accent/30 hover:border-accent/50 hover:bg-white/5 text-white px-7 py-3.5 rounded-lg font-semibold transition-all"
              >
                See It on Your Drawing
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
                    app.cognaizesys.com/estimate
                  </div>
                </div>
              </div>
              <Image
                src="/images/products/mi/mi-costing.png"
                alt="Manufacturing Intelligence — Quotation Sheet"
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
  "Extracts dimensions, tolerances, material specs, and process requirements directly from engineering drawings",
  "Validates feasibility against process and machine limits — catches geometry conflicts, out-of-range tolerances, and missing process callouts before quoting",
  "Generates process routing and job cards per operation — turning, milling, grinding, inspection, coating, and more",
  "Produces itemised cost breakdown by material, process, and overhead — calibrated to your facility, your machines, your rates",
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
            Drawing In. Accurate Cost Sheet Out.
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            Manufacturing Intelligence extracts drawing data, validates
            manufacturing feasibility, routes processes to machines, generates
            job cards, and calculates cost — deterministically and
            automatically. It catches impossible combinations before the quote
            goes out, and gets more accurate with every job completed.
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
            {whatItDoesPoints.map((point, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed">{point}</p>
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
                src="/images/products/mi/mi-costing.png"
                alt="Manufacturing Intelligence quotation sheet"
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
    icon: Factory,
    title: "Facility Calibration",
    body: "Cost outputs are calibrated to your specific facility — your machines, your overhead rates, your labour costs. Not industry averages.",
  },
  {
    icon: Shield,
    title: "Pre-Feasibility Package",
    body: "Catches expensive missing processes and geometry conflicts early — before the drawing is fully reviewed and before the quote is committed.",
  },
  {
    icon: Boxes,
    title: "Raw Material Analysis",
    body: "Full material cost analysis including four scrap recovery streams — so material cost is accurate, not estimated.",
  },
  {
    icon: Scan,
    title: "Similar Parts Panel",
    body: "Identifies previously costed parts with similar geometry and specifications — gets smarter with every job added to the system.",
  },
  {
    icon: ClipboardList,
    title: "Job Card Generation",
    body: "Produces structured job cards and routing sheets per operation — ready for the shop floor directly from the cost estimation output.",
  },
  {
    icon: RefreshCw,
    title: "Learning Loop",
    body: "Actual production times and costs feed back into the estimation system. Every completed job makes future quotes more accurate.",
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
            What Manufacturing Intelligence Delivers
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
              Every Job Makes the Next Quote More Accurate
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
              Manufacturing Intelligence sits at the centre of the Cognaize
              Systems intelligence loop. Design Intelligence feeds it verified
              drawing data upstream. DataWiz feeds it actual production times
              and costs from the floor downstream. SkyPlanner feeds it real
              scheduling outcomes and capacity realities. Every cycle, the
              estimation gets tighter. Tribal knowledge is replaced by verified,
              continuously updated intelligence.
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
              viewBox="0 0 400 360"
              className="w-full max-w-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* MI box (centre) */}
              <rect
                x="120"
                y="140"
                width="160"
                height="60"
                rx="12"
                stroke="#846fbc"
                strokeWidth="2.5"
                fill="#846fbc20"
              />
              <text
                x="200"
                y="167"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="13"
                fontWeight="700"
              >
                Manufacturing
              </text>
              <text
                x="200"
                y="185"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="13"
                fontWeight="700"
              >
                Intelligence
              </text>

              {/* DI box (top) */}
              <rect
                x="120"
                y="20"
                width="160"
                height="50"
                rx="10"
                stroke="#846fbc"
                strokeWidth="1.5"
                fill="#846fbc10"
              />
              <text
                x="200"
                y="50"
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="12"
                fontWeight="600"
              >
                Design Intelligence
              </text>

              {/* DataWiz box (bottom-left) */}
              <rect
                x="20"
                y="280"
                width="140"
                height="50"
                rx="10"
                stroke="#E87B3A"
                strokeWidth="1.5"
                fill="#E87B3A10"
              />
              <text
                x="90"
                y="310"
                textAnchor="middle"
                fill="#fbbf7a"
                fontSize="12"
                fontWeight="600"
              >
                DataWiz
              </text>

              {/* SkyPlanner box (bottom-right) */}
              <rect
                x="240"
                y="280"
                width="140"
                height="50"
                rx="10"
                stroke="#6ee7b7"
                strokeWidth="1.5"
                fill="#6ee7b710"
              />
              <text
                x="310"
                y="310"
                textAnchor="middle"
                fill="#6ee7b7"
                fontSize="12"
                fontWeight="600"
              >
                SkyPlanner
              </text>

              {/* DI → MI */}
              <line
                x1="200"
                y1="70"
                x2="200"
                y2="140"
                stroke="#846fbc"
                strokeWidth="2"
                markerEnd="url(#arrowPurple)"
              />
              <text
                x="214"
                y="110"
                fill="#a78bfa"
                fontSize="9"
              >
                Upstream
              </text>

              {/* DataWiz → MI */}
              <path
                d="M90 280 Q90 200 140 170"
                stroke="#E87B3A"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 3"
                markerEnd="url(#arrowOrange)"
              />
              <text
                x="60"
                y="230"
                fill="#fbbf7a"
                fontSize="9"
              >
                Floor Actuals
              </text>

              {/* SkyPlanner → MI */}
              <path
                d="M310 280 Q310 200 260 170"
                stroke="#6ee7b7"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 3"
                markerEnd="url(#arrowGreen)"
              />
              <text
                x="305"
                y="230"
                fill="#6ee7b7"
                fontSize="9"
              >
                Scheduling
              </text>

              {/* Arrow markers */}
              <defs>
                <marker
                  id="arrowPurple"
                  markerWidth="8"
                  markerHeight="6"
                  refX="7"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L8,3 L0,6" fill="#846fbc" />
                </marker>
                <marker
                  id="arrowOrange"
                  markerWidth="8"
                  markerHeight="6"
                  refX="7"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L8,3 L0,6" fill="#E87B3A" />
                </marker>
                <marker
                  id="arrowGreen"
                  markerWidth="8"
                  markerHeight="6"
                  refX="7"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L8,3 L0,6" fill="#6ee7b7" />
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

const keyOutputs = [
  {
    label: "Material",
    value: "AISI 4145 \u00b7 Weight: 0.18 kg \u00b7 Hardness: 110 KSI MIN",
  },
  {
    label: "Feasibility",
    value:
      "95% \u00b7 Machine limits OK \u00b7 Constraints OK \u00b7 Process availability OK",
  },
  {
    label: "Routing",
    value:
      "8 operations \u2014 Saw Cutting, Final Turning, Inspection, Final Milling, Phosphate Coating, Final Inspection, Packing",
  },
  { label: "Unit Price", value: "187.87 AED" },
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
            <Calculator className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              In Practice
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            A Quote That Reflects Reality
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Split Ring &middot; AISI 4145 &middot; Machined Component
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: key outputs + body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {keyOutputs.map((out) => (
              <div
                key={out.label}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-primary">
                  {out.label}
                </span>
                <p className="text-gray-800 text-sm mt-1 font-medium">
                  {out.value}
                </p>
              </div>
            ))}

            <p className="text-gray-600 text-base leading-relaxed pt-2">
              From drawing upload to a structured, approvable quotation sheet —
              with full process routing, feasibility validation, and itemised
              cost breakdown. In minutes.
            </p>

            <a
              href="https://calendly.com/raghu-cognaizesys/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
            >
              Book a Demo to See This on Your Parts
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Right: MI quotation sheet screenshot */}
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
                src="/images/products/mi/mi-costing.png"
                alt="Manufacturing Intelligence quotation sheet output"
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
          See Manufacturing Intelligence on Your Own Drawing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
        >
          Book a 30-minute demo. We&apos;ll run Manufacturing Intelligence on a
          drawing from your factory and produce a live cost estimate.
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

export default function ManufacturingIntelligencePage() {
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
