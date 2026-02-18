"use client";

import { motion } from "framer-motion";
import { Upload, ScanLine, ClipboardList, Zap, ArrowRight } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Upload,
    title: "Upload Your Drawing",
    description:
      "Upload any engineering drawing in PDF or image format. Supports 2D mechanical drawings across casting, forging, machining, and fabrication.",
  },
  {
    step: 2,
    icon: ScanLine,
    title: "AI Analyzes the Drawing",
    description:
      "Our AI reviews GD&T, tolerances, surface finish callouts, material specs, and 13+ other categories simultaneously.",
  },
  {
    step: 3,
    icon: ClipboardList,
    title: "Review the Findings",
    description:
      "Get a structured findings report highlighting errors, missing specs, and risk areas — the way your best engineer would flag them.",
  },
  {
    step: 4,
    icon: Zap,
    title: "Act on Insights",
    description:
      "Export the report, share with your team, or feed into your cost estimation workflow using Manufacturing Intelligence.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function HomepageHowItWorksSection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        backgroundColor: "#f8f9fb",
        backgroundImage:
          "linear-gradient(rgba(70, 110, 170, 0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 110, 170, 0.22) 1px, transparent 1px), linear-gradient(rgba(70, 110, 170, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 110, 170, 0.08) 1px, transparent 1px)",
        backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-heading text-gray-900 tracking-tight">
            From Drawing Upload to Engineering Review
            <br />
            in Under 15 Minutes
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector line + arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)]">
                    <div className="h-0.5 border-t-2 border-dashed border-primary/30" />
                    <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-primary/40" />
                  </div>
                )}

                {/* Icon circle */}
                <div
                  className="relative z-10 w-16 h-16 rounded-full text-white flex items-center justify-center mb-5 shadow-lg shadow-primary/25"
                  style={{ background: "linear-gradient(135deg, #846fbc, #6d58a5)" }}
                >
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>

                {/* Step label */}
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                  Step {step.step}
                </span>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
