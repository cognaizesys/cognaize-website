"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const layers = [
  {
    id: "L1",
    title: "Drawing Intelligence",
    description:
      "Extracts dimensions, tolerances, GD&T callouts, material specs, and title block data from engineering drawings across all manufacturing technologies.",
  },
  {
    id: "L2",
    title: "Standards & Process Intelligence",
    description:
      "Validates against manufacturing standards and process limits. Identifies what is missing, what is wrong, and what will cause problems before production begins.",
  },
  {
    id: "L3",
    title: "Domain Intelligence",
    description:
      "Product family and technology-specific knowledge calibrated to your components — pistons, gears, castings, forgings — not just your drawings.",
  },
  {
    id: "L4",
    title: "Operational Intelligence",
    description:
      "Captures production status, cycle times, stoppages, and quality outcomes from the floor in real time — linked directly to production orders.",
  },
  {
    id: "L5",
    title: "Feedback Intelligence",
    description:
      "Connects floor outcomes back to upstream decisions. Quality findings refine design review. Actual costs refine estimation. The loop that makes the system compound.",
  },
  {
    id: "L6",
    title: "Cross-System Intelligence",
    description:
      "Validates compatibility across drawings, revisions, mating parts, and production orders. Catches mismatches no single-product review can detect.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function IntelligenceLayersSection() {
  return (
    <section
      id="intelligence-layers"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0f 0%, #12121a 40%, #0c1a1a 70%, #0a0a0f 100%)",
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
              <Layers className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                How the Intelligence Works
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
            Six Layers of Engineered Intelligence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
          >
            From drawing data to operational feedback — every layer of the
            Cognaize Systems platform adds a dimension of manufacturing
            knowledge.
          </motion.p>
        </div>

        {/* Layer cards grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {layers.map((layer) => (
            <motion.div
              key={layer.id}
              variants={itemVariants}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/35 transition-all duration-300 p-6"
            >
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/20 border border-primary/30 text-[10px] font-bold text-primary-light uppercase tracking-wider mb-3">
                {layer.id}
              </span>
              <h3 className="text-base font-bold text-white mb-2">
                {layer.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {layer.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
