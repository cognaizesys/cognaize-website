"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { AboutStorySection } from "@/components/sections/about-story-section";

import { AboutTeamSection } from "@/components/sections/about-team-section";
import { AboutClosingCTASection } from "@/components/sections/about-closing-cta-section";

/* ─────────────────────────────────────────────
   HERITAGE STATS
   ───────────────────────────────────────────── */
const heroStats = [
  { value: "Domain-First", label: "Built on manufacturing expertise, not generic AI" },
  { value: "Rule by Rule", label: "Structured from real engineering judgment" },
  { value: "Compounding", label: "Gets sharper with every production cycle" },
];

/* ─────────────────────────────────────────────
   PRECISION INTELLIGENCE DIAGRAM
   Engineering-drawing aesthetic with concentric
   rings, dimension lines, and knowledge callouts
   ───────────────────────────────────────────── */
function PrecisionDiagram() {
  const cx = 220;
  const cy = 200;
  const R = 120; // outer ring radius

  // Callout nodes positioned around the rings (hexagonal layout)
  const callouts = [
    { label: "EXPERIENCE", x: 220, y: 42, anchor: "middle" as const },
    { label: "KNOWLEDGE", x: 385, y: 100, anchor: "start" as const },
    { label: "SYSTEMS", x: 385, y: 300, anchor: "start" as const },
    { label: "OUTCOMES", x: 220, y: 370, anchor: "middle" as const },
    { label: "SCALE", x: 55, y: 300, anchor: "end" as const },
    { label: "PEOPLE", x: 55, y: 100, anchor: "end" as const },
  ];

  // Points on the outer ring where callout lines connect (hexagon vertices)
  const connectionPoints = [
    { x: 220, y: 80 },   // EXPERIENCE — top
    { x: 324, y: 140 },  // KNOWLEDGE — upper right
    { x: 324, y: 260 },  // SYSTEMS — lower right
    { x: 220, y: 320 },  // OUTCOMES — bottom
    { x: 116, y: 260 },  // SCALE — lower left
    { x: 116, y: 140 },  // PEOPLE — upper left
  ];

  return (
    <svg
      viewBox="-10 0 530 400"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Central glow */}
        <radialGradient id="coreGlow" cx="50%" cy="47.6%" r="25%">
          <stop offset="0%" stopColor="#846fbc" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#846fbc" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#846fbc" stopOpacity="0" />
        </radialGradient>

        {/* Outer atmosphere */}
        <radialGradient id="outerAtmo" cx="50%" cy="47.6%" r="45%">
          <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0" />
        </radialGradient>

        {/* Pulse animation filter */}
        <filter id="glowFilter">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Atmosphere */}
      <circle cx={cx} cy={cy} r={200} fill="url(#outerAtmo)" />
      <circle cx={cx} cy={cy} r={100} fill="url(#coreGlow)" />

      {/* Concentric measurement rings */}
      {[R, R * 0.75, R * 0.46].map((r, i) => (
        <motion.circle
          key={`ring-${r}`}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#846fbc"
          strokeOpacity={0.12 + i * 0.04}
          strokeWidth={0.8}
          strokeDasharray={i === 0 ? "none" : i === 1 ? "8 4" : "3 3"}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
        />
      ))}

      {/* Tick marks on outer ring — like a precision gauge */}
      {Array.from({ length: 72 }).map((_, i) => {
        const angle = (i * 5 * Math.PI) / 180;
        const isMajor = i % 12 === 0;
        const innerR = isMajor ? R - 7 : R - 4;
        const outerR = R;
        return (
          <line
            key={`tick-${i}`}
            x1={cx + innerR * Math.cos(angle)}
            y1={cy + innerR * Math.sin(angle)}
            x2={cx + outerR * Math.cos(angle)}
            y2={cy + outerR * Math.sin(angle)}
            stroke="#846fbc"
            strokeOpacity={isMajor ? 0.3 : 0.12}
            strokeWidth={isMajor ? 1 : 0.5}
          />
        );
      })}

      {/* Crosshair at center */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <line x1={cx - 18} y1={cy} x2={cx - 6} y2={cy} stroke="#846fbc" strokeOpacity="0.4" strokeWidth="0.8" />
        <line x1={cx + 6} y1={cy} x2={cx + 18} y2={cy} stroke="#846fbc" strokeOpacity="0.4" strokeWidth="0.8" />
        <line x1={cx} y1={cy - 18} x2={cx} y2={cy - 6} stroke="#846fbc" strokeOpacity="0.4" strokeWidth="0.8" />
        <line x1={cx} y1={cy + 6} x2={cx} y2={cy + 18} stroke="#846fbc" strokeOpacity="0.4" strokeWidth="0.8" />
        <circle cx={cx} cy={cy} r="3" fill="none" stroke="#846fbc" strokeOpacity="0.5" strokeWidth="0.8" />
      </motion.g>

      {/* Dimension annotation arcs between nodes */}
      <motion.path
        d={`M ${cx + R * Math.cos(-Math.PI / 2)} ${cy + R * Math.sin(-Math.PI / 2)} A ${R} ${R} 0 0 1 ${cx + R * Math.cos(-0.35)} ${cy + R * Math.sin(-0.35)}`}
        fill="none"
        stroke="#6ee7b7"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
      />

      <motion.path
        d={`M ${cx + R * Math.cos(0.35)} ${cy + R * Math.sin(0.35)} A ${R} ${R} 0 0 1 ${cx + R * Math.cos(Math.PI / 2)} ${cy + R * Math.sin(Math.PI / 2)}`}
        fill="none"
        stroke="#6ee7b7"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 1.3 }}
      />

      {/* Connection lines from ring to callout labels */}
      {callouts.map((callout, i) => {
        const cp = connectionPoints[i];
        // Elbow line: from connection point to label
        const elbowX = callout.anchor === "start" ? cp.x + 15 : callout.anchor === "end" ? cp.x - 15 : cp.x;
        const elbowY = callout.y > cy + 100 || callout.y < cy - 100 ? callout.y - (callout.y > cy ? 16 : -16) : cp.y;

        return (
          <motion.g
            key={callout.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
          >
            {/* Dot on ring */}
            <circle cx={cp.x} cy={cp.y} r="3" fill="#846fbc" fillOpacity="0.7" />
            <circle cx={cp.x} cy={cp.y} r="6" fill="none" stroke="#846fbc" strokeOpacity="0.3" strokeWidth="0.8" />

            {/* Leader line */}
            <line
              x1={cp.x}
              y1={cp.y}
              x2={elbowX}
              y2={elbowY}
              stroke="#846fbc"
              strokeOpacity="0.35"
              strokeWidth="0.8"
            />

            {/* Horizontal tick at label */}
            {callout.anchor !== "middle" && (
              <line
                x1={elbowX}
                y1={elbowY}
                x2={callout.anchor === "start" ? callout.x - 4 : callout.x + 4}
                y2={callout.y - 4}
                stroke="#846fbc"
                strokeOpacity="0.35"
                strokeWidth="0.8"
              />
            )}
          </motion.g>
        );
      })}

      {/* Callout labels */}
      {callouts.map((callout, i) => (
        <motion.g
          key={`label-${callout.label}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 + i * 0.12 }}
        >
          <text
            x={callout.x}
            y={callout.y}
            textAnchor={callout.anchor}
            fill="#9b89cc"
            className="text-[11px] tracking-[0.15em]"
            fontWeight="500"
          >
            {callout.label}
          </text>
          {/* Small dimension-style underline */}
          {callout.anchor === "start" && (
            <line
              x1={callout.x}
              y1={callout.y + 4}
              x2={callout.x + callout.label.length * 7.5}
              y2={callout.y + 4}
              stroke="#846fbc"
              strokeOpacity="0.2"
              strokeWidth="0.6"
            />
          )}
          {callout.anchor === "end" && (
            <line
              x1={callout.x - callout.label.length * 7.5}
              y1={callout.y + 4}
              x2={callout.x}
              y2={callout.y + 4}
              stroke="#846fbc"
              strokeOpacity="0.2"
              strokeWidth="0.6"
            />
          )}
        </motion.g>
      ))}

      {/* Pentagon connecting the 5 node points on the ring */}
      <motion.polygon
        points={connectionPoints.map((p) => `${p.x},${p.y}`).join(" ")}
        fill="none"
        stroke="#846fbc"
        strokeOpacity="0.15"
        strokeWidth="0.8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      {/* Rotating scan line — like a radar sweep */}
      <motion.line
        x1={cx}
        y1={cy}
        x2={cx + R}
        y2={cy}
        stroke="url(#scanGrad)"
        strokeWidth="1"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <defs>
        <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0" />
          <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Center label */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          fill="#846fbc"
          fillOpacity="0.6"
          className="text-[9px] tracking-[0.2em] uppercase"
          fontWeight="600"
        >
          Engineered
        </text>
        <text
          x={cx}
          y={cy + 8}
          textAnchor="middle"
          fill="#846fbc"
          fillOpacity="0.6"
          className="text-[9px] tracking-[0.2em] uppercase"
          fontWeight="600"
        >
          Intelligence
        </text>
      </motion.g>

      {/* Small coordinate annotations in corners — blueprint feel */}
      <text x="12" y="16" fill="#846fbc" fillOpacity="0.15" className="text-[8px]" fontFamily="monospace">
        X: 0.000
      </text>
      <text x="12" y="26" fill="#846fbc" fillOpacity="0.15" className="text-[8px]" fontFamily="monospace">
        Y: 0.000
      </text>
      <text x="488" y="392" fill="#846fbc" fillOpacity="0.15" className="text-[8px]" fontFamily="monospace" textAnchor="end">
        REV 2.1
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────── */
function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative min-h-[60vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0f 0%, #12121a 35%, #1a1028 60%, #0c1a1a 85%, #0a0a0f 100%)",
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

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(132, 111, 188, 0.3) 0%, rgba(110, 231, 183, 0.05) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — text + stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
                <BookOpen className="w-3 h-3 text-accent" />
                <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                  About Cognaize
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-[1.1]"
            >
              Where Engineering Judgment Becomes{" "}
              <span className="text-primary-light">
                Engineered Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 md:mt-8 text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              We build systems that capture your organisation&apos;s engineering
              judgment and make it permanent, scalable, and continuously
              improving.
            </motion.p>

            {/* Heritage stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 grid grid-cols-3 gap-6"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.value}
                  className="border-l-[3px] border-l-primary pl-3"
                >
                  <p className="text-sm font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — precision intelligence diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <PrecisionDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE COMPOSITION
   ───────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStorySection />
      <AboutTeamSection />
      <AboutClosingCTASection />
    </>
  );
}
