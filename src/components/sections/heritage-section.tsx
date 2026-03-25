"use client";

import { motion } from "framer-motion";
import { History } from "lucide-react";

export function HeritageSection() {
  return (
    <section id="heritage" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
            <History className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Deployment Heritage
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            Earned on Real Factory Floors
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Cognaize Systems is built on FactriAI, a manufacturing operations
            platform deployed across automotive and industrial manufacturers
            since 2021. The knowledge in our products was structured through real
            engagements, refined against actual production outcomes, and
            validated by engineers with decades of manufacturing experience. That
            operational history is what gives the system its foundation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
