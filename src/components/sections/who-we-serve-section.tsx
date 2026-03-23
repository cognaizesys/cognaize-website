"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

const profiles = [
  {
    label: "Design & Make Manufacturers",
    body: "Companies that develop their own components and carry full responsibility for cost, quality, and delivery. Engineered Intelligence begins at drawing review and extends through every downstream stage.",
    examples:
      "Auto-component manufacturers · Precision engineering companies · Industrial equipment makers",
  },
  {
    label: "Make-to-Print Manufacturers",
    body: "Companies that receive designs from OEMs, Tier 1 suppliers, or external design houses, and compete on feasibility, cost accuracy, and execution reliability. Entry point is feasibility and cost estimation — with shop floor and quality intelligence delivering compounding value over time.",
    examples:
      "Tier 2 automotive suppliers · Contract manufacturers · Specialist component makers",
  },
];

export function WhoWeServeSection() {
  return (
    <section
      id="who-we-serve"
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
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
              <Users className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                Who We Serve
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
            Manufacturers Who Take Responsibility for Outcomes
          </motion.h2>
        </div>

        {/* Profile cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {profiles.map((profile) => (
            <div
              key={profile.label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 border-l-[3px] border-l-primary-light"
            >
              <h3 className="text-lg md:text-xl font-heading font-bold text-white mb-4">
                {profile.label}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                {profile.body}
              </p>
              <p className="text-sm text-gray-500">
                {profile.examples}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
