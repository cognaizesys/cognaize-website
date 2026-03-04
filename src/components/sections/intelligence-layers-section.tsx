"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const layers = [
  {
    label: "L1",
    name: "Drawing Parsing",
    description:
      "Extracts every dimension, tolerance, GD&T callout, note, title block field, and BOM item from your engineering drawing.",
  },
  {
    label: "L2",
    name: "Standards Intelligence",
    description:
      "Validates against ISO, ASME, DIN, BIS, and customer-specific drawing standards. Knows what\u2019s missing and what\u2019s wrong.",
  },
  {
    label: "L3",
    name: "Product Family Intelligence",
    description:
      "Identifies your product family \u2014 piston, gear, housing, bracket \u2014 and activates domain-specific checks calibrated to manufacturing reality.",
  },
  {
    label: "L4",
    name: "Assembly Interface Mapping",
    description:
      "Maps every component-to-component interface, classifies each by type (geometric, tolerance, load, fastening, sequence), and identifies the critical 20% where failures propagate furthest.",
  },
  {
    label: "L5",
    name: "Cross-Drawing Intelligence",
    description:
      "Validates compatibility across mating parts and revision histories. Catches mismatches that no single-drawing review can detect.",
  },
];

const layerColors = ["#846fbc", "#9b89cc", "#6ee7b7", "#f59e0b", "#E87B3A"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
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
            className="text-2xl md:text-4xl font-heading text-white tracking-tight"
          >
            Five Layers of Engineering Intelligence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Generic AI reads what&apos;s on the drawing. Our layered
            architecture understands what it means &mdash; and what it will cost
            you if it&apos;s wrong.
          </motion.p>
        </div>

        {/* Layer rows */}
        <motion.div
          className="flex flex-col gap-4 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {layers.map((layer, index) => {
            const color = layerColors[index];
            return (
              <motion.div
                key={layer.label}
                variants={itemVariants}
                className="group relative rounded-2xl p-5 md:p-6 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/35 transition-all duration-300"
              >
                {/* Colored left accent */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: color }}
                />

                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                  {/* Label badge */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold"
                    style={{ backgroundColor: `${color}30`, color }}
                  >
                    {layer.label}
                  </div>

                  {/* Name and description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {layer.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
