"use client";

import { motion } from "framer-motion";
import { Brain, Users, Shield, Cpu, ChevronRight } from "lucide-react";

const differentiators = [
  {
    icon: Brain,
    title: "Purpose-Built AI Models",
    description:
      "Trained specifically on engineering drawings and manufacturing data. Understands GD&T, tolerancing, material specs, and shop floor operations.",
    highlight: "Not generic OCR",
  },
  {
    icon: Users,
    title: "Built by Engineers",
    description:
      "Our team combines decades of manufacturing floor experience with cutting-edge AI research. We speak your language because we've lived it.",
    highlight: "Domain expertise",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Your drawings are your competitive advantage. SOC 2 compliant, on-premises deployment options, and zero data retention policies.",
    highlight: "Your IP, protected",
  },
];

export function DifferentiatorsSection() {
  return (
    <section
      id="differentiators"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a1028 50%, #0a0a0f 100%)",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(132, 111, 188, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(132, 111, 188, 0.12) 1px, transparent 1px)",
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
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
            Not Another OCR Tool.
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
                className="group relative rounded-2xl p-7 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-6 h-6 text-primary-light" />
                </div>

                {/* Highlight tag */}
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent mb-3">
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
