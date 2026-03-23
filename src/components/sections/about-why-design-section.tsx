"use client";

import { motion } from "framer-motion";
import { PenTool } from "lucide-react";

function WorkflowDiagram() {
  const steps = ["Design", "Estimate", "Plan", "Execute", "Track", "Improve"];

  return (
    <svg
      viewBox="0 0 640 220"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Step boxes and forward arrows */}
      {steps.map((step, i) => {
        const x = 12 + i * 105;
        const y = 80;
        const isDesign = i === 0;

        return (
          <g key={step}>
            {/* Box */}
            <rect
              x={x}
              y={y}
              width={88}
              height={40}
              rx={6}
              fill={isDesign ? "#846fbc" : "none"}
              stroke={isDesign ? "#846fbc" : "#9ca3af"}
              strokeWidth={isDesign ? 0 : 1.5}
            />
            <text
              x={x + 44}
              y={y + 24}
              textAnchor="middle"
              className="text-[13px] font-semibold"
              fill={isDesign ? "#ffffff" : "#6b7280"}
            >
              {step}
            </text>

            {/* Forward arrow */}
            {i < steps.length - 1 && (
              <line
                x1={x + 88}
                y1={y + 20}
                x2={x + 105}
                y2={y + 20}
                stroke="#9ca3af"
                strokeWidth={1.5}
                markerEnd="url(#arrowGrey)"
              />
            )}
          </g>
        );
      })}

      {/* Curved feedback arrow from Improve back to Design */}
      <path
        d="M 578 125 C 578 190, 320 200, 56 125"
        fill="none"
        stroke="#846fbc"
        strokeWidth={1.5}
        strokeDasharray="6 3"
        markerEnd="url(#arrowPurple)"
      />

      {/* Feedback label */}
      <text
        x={320}
        y={195}
        textAnchor="middle"
        className="text-[11px] italic"
        fill="#846fbc"
      >
        Feedback Intelligence
      </text>

      {/* Arrow markers */}
      <defs>
        <marker
          id="arrowGrey"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth={6}
          markerHeight={6}
          orient="auto-start-auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#9ca3af" />
        </marker>
        <marker
          id="arrowPurple"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth={6}
          markerHeight={6}
          orient="auto-start-auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#846fbc" />
        </marker>
      </defs>
    </svg>
  );
}

export function AboutWhyDesignSection() {
  return (
    <section id="why-design" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
            <PenTool className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Why We Begin at Design
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            The Highest Leverage Point in Manufacturing
          </h2>
        </motion.div>

        {/* Two-column: body text left, diagram right (desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-3 gap-12 items-start"
        >
          {/* Left: body text (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Every stage of manufacturing carries cost and risk. But not every
              stage carries equal leverage.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              The decisions made at design — tolerances, material
              specifications, process callouts, feasibility — determine most of
              your manufacturing cost, quality risk, and delivery reliability.
              They are made weeks before the floor ever sees a part. When they
              are right, everything downstream runs cleaner. When they are wrong,
              the consequences compound at every stage that follows.
            </p>

            {/* Diagram — mobile only (between para 2 and pull quote) */}
            <div className="lg:hidden py-4">
              <WorkflowDiagram />
            </div>

            {/* Pull quote — full-width centred */}
            <blockquote className="text-xl md:text-2xl font-heading italic text-primary leading-snug text-center py-4">
              &ldquo;Design is where manufacturing decisions have their highest
              return.&rdquo;
            </blockquote>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              That is why Cognaize Systems begins upstream — with drawing review,
              feasibility, and cost estimation as the primary entry points. But
              upstream intelligence alone is incomplete. Downstream operations
              must feed real outcomes back to the source. Our shop floor, line
              continuity, and quality products close that loop — so the system
              improves through actual production feedback.
            </p>
          </div>

          {/* Right: diagram (desktop only, 1/3) */}
          <div className="hidden lg:block pt-4">
            <WorkflowDiagram />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
