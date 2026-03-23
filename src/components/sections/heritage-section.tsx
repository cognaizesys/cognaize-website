"use client";

import { motion } from "framer-motion";
import { History } from "lucide-react";

const stats = [
  { label: "Since 2021", descriptor: "Live manufacturing deployments" },
  { label: "India & Middle East", descriptor: "Active customer base" },
  { label: "Auto & Industrial", descriptor: "Primary sectors served" },
];

export function HeritageSection() {
  return (
    <section
      id="heritage"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #111118 0%, #16131f 50%, #111118 100%)",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 170, 240, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.12) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
            <History className="w-3 h-3 text-accent" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Deployment Heritage
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight">
            Earned on Real Factory Floors
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-3 gap-12 items-start"
        >
          {/* Left: body text (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Cognaize Systems is built on FactriAI — a manufacturing operations
              platform with deployments across automotive and industrial
              manufacturers since 2021. The knowledge in our products was not
              assembled from open data. It was structured through real
              engagements, refined against actual production outcomes, and
              validated by engineers with decades of manufacturing experience.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              That operational history is what gives Cognaize Systems its
              foundation. The intelligence we deliver has been tested in real
              manufacturing environments — and refined through what those
              environments revealed.
            </p>
          </div>

          {/* Right: stats (1/3 on desktop, 3-col row on mobile) */}
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t-[3px] border-t-primary pt-4"
              >
                <p className="text-lg md:text-xl font-bold text-white">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {stat.descriptor}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
