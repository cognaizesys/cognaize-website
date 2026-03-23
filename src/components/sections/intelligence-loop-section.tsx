"use client";

import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const loopCards = [
  {
    label: "Quality → Design",
    mechanism:
      "Every quality finding on the floor is linked to the drawing that originated it.",
    outcome:
      "Design review gets more precise with every rejection resolved.",
  },
  {
    label: "Shop Floor & Planning → Estimation",
    mechanism:
      "Actual production times, costs, and scheduling outcomes feed back continuously into cost estimation.",
    outcome:
      "Every quote gets tighter as verified operational data replaces tribal knowledge.",
  },
];

export function IntelligenceLoopSection() {
  return (
    <section
      id="intelligence-loop"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0f 0%, #140e24 50%, #0a0a0f 100%)",
      }}
    >
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

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
        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
              <RefreshCw className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                The Differentiator
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
            The System Improves With Every Production Cycle
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Point solutions improve individual steps. Cognaize Systems improves
            the whole — because our products share knowledge across every stage
            of manufacturing. Every outcome on the floor feeds back to the
            source. The intelligence compounds over time.
          </motion.p>
        </div>

        {/* Loop Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {loopCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8"
            >
              <h3 className="text-lg md:text-xl font-heading font-bold text-primary-light mb-4">
                {card.label}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    Mechanism
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {card.mechanism}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    Outcome
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {card.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center text-xl md:text-2xl italic text-gray-300 max-w-3xl mx-auto"
        >
          The value is not in any single product. It is in the loop.
        </motion.p>
      </div>
    </section>
  );
}
