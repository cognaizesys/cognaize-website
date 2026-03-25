"use client";

import { motion } from "framer-motion";
import { RefreshCw, ArrowRight } from "lucide-react";

const loops = [
  {
    label: "Estimation \u2192 Planning",
    description:
      "Manufacturing Intelligence can check against the production plan, so sales can quote cost and delivery together instead of separately.",
  },
  {
    label: "Quality \u2192 Design",
    description:
      "Quality Intelligence findings from the floor can feed back into drawing review, so the system learns which issues actually cause problems.",
  },
  {
    label: "Execution \u2192 Estimation",
    description:
      "Actual production times and costs can feed back into Manufacturing Intelligence, so quotes get tighter with every job that runs through the system.",
  },
];

export function IntelligenceLoopSection() {
  return (
    <section
      id="intelligence-loop"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 30%, #1a1028 50%, #0f0f1a 70%, #0a0a0f 100%)",
      }}
    >
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(132, 111, 188, 0.3) 0%, transparent 70%)",
        }}
      />

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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
              <RefreshCw className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                The Real Value
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
            Standalone Products Whose Value Compounds When Connected
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed"
          >
            Built on open architecture, each product can work on its own or
            share data across stages to unlock new value.
          </motion.p>
        </div>

        {/* Loop cards — 1x3 horizontal row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {loops.map((loop, index) => (
            <motion.div
              key={loop.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="rounded-xl border-l-[3px] border-l-primary-light border border-white/[0.08] bg-white/[0.06] p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <ArrowRight className="w-4 h-4 text-primary-light" />
                <h3 className="text-base font-heading font-bold text-primary-light">
                  {loop.label}
                </h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {loop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
