"use client";

import { motion } from "framer-motion";
import { Car, Plane, Factory, Fuel } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface Industry {
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

const industries: Industry[] = [
  {
    name: "Automotive",
    icon: Car,
    description:
      "Precision parts review and cost estimation for automotive component manufacturers",
    color: "#846fbc",
  },
  {
    name: "Aerospace & Defense",
    icon: Plane,
    description:
      "High-tolerance drawing analysis for aerospace-grade components",
    color: "#6ee7b7",
  },
  {
    name: "General Manufacturing",
    icon: Factory,
    description:
      "End-to-end manufacturing intelligence for CNC, casting, and fabrication shops",
    color: "#f59e0b",
  },
  {
    name: "Oil & Gas",
    icon: Fuel,
    description:
      "Critical equipment drawing review for energy sector components",
    color: "#ef4444",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f3eeff 50%, #ffffff 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[#846fbc]">
            Industries We Serve
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl font-heading text-gray-900 tracking-tight">
            Built for Precision Manufacturing
          </h2>
        </motion.div>

        {/* Industries Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="rounded-xl p-6 sm:p-8 text-center hover:shadow-md transition-all duration-300 h-full flex flex-col relative overflow-hidden" style={{ backgroundColor: `${industry.color}15` }}>
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${industry.color}, ${industry.color}65, transparent)` }} />

                  {/* Icon Container */}
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: `${industry.color}28` }}>
                      <IconComponent
                        style={{ color: industry.color }}
                        size={32}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="mt-4 text-lg font-heading font-semibold text-gray-900">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
