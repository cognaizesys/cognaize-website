"use client";

import { motion } from "framer-motion";
import { Brain, Users, Shield, Cpu, ChevronRight } from "lucide-react";

const differentiators = [
  {
    icon: Brain,
    title: "Purpose-Built AI Models",
    description:
      "Trained specifically on engineering drawings and manufacturing data. Understands GD&T, tolerancing, material specs, and shop floor operations.",
    highlight: "Manufacturing-native",
    color: "#846fbc",
  },
  {
    icon: Users,
    title: "Built by Engineers",
    description:
      "Our team combines decades of manufacturing floor experience with cutting-edge AI research. We speak your language because we've lived it.",
    highlight: "Domain expertise",
    color: "#6ee7b7",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Your drawings are your competitive advantage. SOC 2 compliant, on-premises deployment options, and zero data retention policies.",
    highlight: "Your IP, protected",
    color: "#f59e0b",
  },
];

export function DifferentiatorsSection() {
  return (
    <section
      id="differentiators"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #0c1a1a 50%, #0a0a0f 100%)",
      }}
    >
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(110, 231, 183, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 231, 183, 0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
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
              <Cpu className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-primary-light uppercase tracking-wider">
                Why Cognaize
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
            Built by Engineers.
            <br />
            <span className="text-primary-light">Real AI for Manufacturing.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative rounded-2xl p-7 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/35 transition-all duration-300"
              >
                {/* Colored left accent */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: item.color }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors"
                  style={{ backgroundColor: `${item.color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>

                {/* Highlight tag */}
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider mb-3" style={{ color: item.color }}>
                  {item.highlight}
                </span>

                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
