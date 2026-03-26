"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Wrench, FileInput } from "lucide-react";
import { INDUSTRY_CARDS } from "@/data/industries";

const profiles = [
  {
    label: "Design & Make Manufacturers",
    icon: Wrench,
    body: "Companies that develop their own products and carry full responsibility for cost, quality, and delivery. Engineered Intelligence begins at drawing review and extends through every downstream stage.",
    examples:
      "Automotive OEMs · Auto-component manufacturers · Industrial equipment builders · Heavy engineering firms",
  },
  {
    label: "Make-to-Print Manufacturers",
    icon: FileInput,
    body: "Companies that receive designs from OEMs or external design houses and compete on cost accuracy and delivery speed. Intelligence starts at estimation and compounds as production and quality data feed back.",
    examples:
      "Oil & gas equipment fabricators · Chemical processing vessel manufacturers · Contract manufacturers",
  },
];

export function WhoWeServeSection() {
  return (
    <section
      id="who-we-serve"
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "#0a0a0f",
      }}
    >
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 170, 240, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.10) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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
              className="rounded-2xl border border-white/[0.10] bg-[#12121a]/60 p-6 md:p-8 border-l-[3px] border-l-primary-light"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <profile.icon className="w-5 h-5 text-primary-light" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-white">
                  {profile.label}
                </h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                {profile.body}
              </p>
              <p className="text-sm text-gray-400">
                {profile.examples}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Industry badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">
            Industries We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRY_CARDS.map((industry) => (
              <Link
                key={industry.slug}
                href={industry.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-[#12121a]/60 px-4 py-2 text-sm text-gray-300 hover:border-primary/30 hover:bg-primary/5 hover:text-white transition-colors duration-200"
              >
                <industry.icon className="w-4 h-4 text-primary-light" />
                {industry.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
