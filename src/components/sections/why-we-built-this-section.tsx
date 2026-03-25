"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Factory, PenLine, RefreshCw, Compass } from "lucide-react";

const reasons = [
  {
    icon: BrainCircuit,
    heading: "Judgment Doesn\u2019t Scale",
    description:
      "Your best engineers carry decades of expertise in their heads. When they\u2019re unavailable, that knowledge is gone.",
  },
  {
    icon: Factory,
    heading: "Domain First, Not Data First",
    description:
      "We\u2019re built by engineers who\u2019ve spent careers on factory floors. The intelligence comes from domain expertise, not generic models.",
  },
  {
    icon: PenLine,
    heading: "Start at the Drawing",
    description:
      "The drawing stage is where cost, quality, and delivery get decided. What you miss there compounds at every step after.",
  },
  {
    icon: RefreshCw,
    heading: "The System Compounds",
    description:
      "Our products share what they learn across stages. Every job that runs through the system makes the next one sharper.",
  },
];

export function WhyWeBuiltThisSection() {
  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "#0f0f17",
      }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      {/* Subtle noise texture instead of grid */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
            <Compass className="w-3 h-3 text-accent" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Our Approach
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight">
            Why We Built This
          </h2>
        </motion.div>

        {/* 2x2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 * index }}
              className="group flex gap-5 p-6 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300"
            >
              {/* Icon container */}
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary-light" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-heading font-bold text-white mb-1.5">
                  {reason.heading}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
