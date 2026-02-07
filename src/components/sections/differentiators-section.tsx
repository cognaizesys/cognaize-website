"use client";

import { motion } from "framer-motion";
import { Brain, Users, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const differentiators = [
  {
    icon: Brain,
    title: "Purpose-Built AI",
    description:
      "Unlike generic OCR or document AI, our models are trained specifically on engineering drawings and manufacturing data. We understand GD&T, tolerancing, and shop floor operations.",
  },
  {
    icon: Users,
    title: "Built by Engineers, for Engineers",
    description:
      "Our team combines decades of manufacturing experience with cutting-edge AI expertise. We speak your language because we've worked on your shop floor.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Your engineering drawings contain your competitive advantage. Our platform ensures your intellectual property stays protected with enterprise-grade security.",
  },
];

interface DifferentiatorCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}

function DifferentiatorCard({
  icon: Icon,
  title,
  description,
  index,
}: DifferentiatorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300"
    >
      <Icon className="w-12 h-12 text-white mb-4" />
      <h3 className="text-xl font-bold text-white mb-3 font-heading">
        {title}
      </h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function DifferentiatorsSection() {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3"
          >
            Why Cognaize
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading text-white mb-4"
          >
            Not Just Another OCR Tool
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/90"
          >
            Purpose-built AI that truly understands engineering drawings and
            manufacturing processes
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {differentiators.map((item, index) => (
            <DifferentiatorCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
