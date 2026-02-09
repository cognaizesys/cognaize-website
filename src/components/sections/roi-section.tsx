"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ROIMetric {
  metric: string;
  before: string;
  after: string;
  impact: string;
}

const roiData: ROIMetric[] = [
  {
    metric: "Review Speed",
    before: "2-4 hours",
    after: "<15 minutes",
    impact: "10-16x faster",
  },
  {
    metric: "Cost per Review",
    before: "$150-300",
    after: "$5-10",
    impact: "10x cheaper",
  },
  {
    metric: "Error Detection Rate",
    before: "~70%",
    after: ">95%",
    impact: "3-5x fewer escapes",
  },
  {
    metric: "Rework Exposure",
    before: "12.5% of value",
    after: "<1.5%",
    impact: "8-10x avoidance",
  },
];

const keySummaryStats = [
  { value: "75%", label: "cost reduction" },
  { value: "16x", label: "faster reviews" },
  { value: "95%+", label: "detection rate" },
];

export function ROISection() {
  return (
    <section className="bg-[#0f0f0f] py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-4xl font-heading text-white tracking-tight">
            Measurable <span className="text-primary-light">Impact</span>
          </h2>
        </motion.div>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 hidden md:block"
        >
          <div className="border border-white/10 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 bg-white/5 px-6 py-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Metric
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Before
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                After
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Impact
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/10">
              {roiData.map((row, index) => (
                <motion.div
                  key={row.metric}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-white/5 transition-colors"
                >
                  <div className="text-sm font-medium text-white">
                    {row.metric}
                  </div>
                  <div className="text-sm text-gray-400">{row.before}</div>
                  <div className="text-sm font-semibold text-[#22c55e]">
                    {row.after}
                  </div>
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#846fbc]/20 text-[#9b89cc] text-sm font-medium">
                      {row.impact}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Card View */}
        <div className="mt-12 md:hidden space-y-4">
          {roiData.map((row, index) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-lg p-5"
            >
              <h3 className="text-base font-semibold text-white">
                {row.metric}
              </h3>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wide text-gray-400">
                    Before
                  </span>
                  <span className="text-sm text-gray-400">{row.before}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wide text-gray-400">
                    After
                  </span>
                  <span className="text-sm font-semibold text-[#22c55e]">
                    {row.after}
                  </span>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#846fbc]/20 text-[#9b89cc] text-sm font-medium">
                    {row.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
        >
          {keySummaryStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white font-heading">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
