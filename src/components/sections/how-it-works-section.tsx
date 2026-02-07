"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Zap,
  FileCheck,
  FileText,
  CheckCircle,
  Route,
  ClipboardList,
  DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";

const diSteps = [
  {
    step: 1,
    icon: Upload,
    title: "Upload Drawing",
    description: "Drop your engineering drawing in any standard format",
  },
  {
    step: 2,
    icon: Zap,
    title: "AI Analysis",
    description: "Advanced AI scans for errors, tolerances, and missing specs",
  },
  {
    step: 3,
    icon: FileCheck,
    title: "Review & Export",
    description: "Get detailed findings report and actionable insights",
  },
];

const miSteps = [
  {
    step: 1,
    icon: Upload,
    title: "Upload Drawing",
    description: "Upload your engineering drawing for instant analysis",
  },
  {
    step: 2,
    icon: FileText,
    title: "Review Specs",
    description: "AI extracts dimensions, materials, and specifications",
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Feasibility Check",
    description: "Automated manufacturability and process validation",
  },
  {
    step: 4,
    icon: Route,
    title: "Generate Routing",
    description: "Create optimized manufacturing process routing",
  },
  {
    step: 5,
    icon: ClipboardList,
    title: "Job Card",
    description: "Detailed job card with operations and parameters",
  },
  {
    step: 6,
    icon: DollarSign,
    title: "Cost Breakdown",
    description: "Comprehensive cost analysis with material and labor",
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

interface StepTimelineProps {
  steps: typeof diSteps;
  title: string;
}

function StepTimeline({ steps, title }: StepTimelineProps) {
  return (
    <div className="mb-16 last:mb-0">
      {/* Section heading */}
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h3>

      {/* Timeline */}
      <motion.div
        className={cn(
          "grid gap-8",
          steps.length > 4
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        )}
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
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 border-t-2 border-dashed border-gray-300" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#846fbc] text-white flex items-center justify-center mb-4 shadow-md">
                <Icon className="w-7 h-7" strokeWidth={2} />
              </div>

              {/* Title */}
              <h4 className="font-semibold text-gray-900 mb-2">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-[#f8f8fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#846fbc] uppercase tracking-wide">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            From Drawing to Insight in Minutes
          </h2>
        </div>

        {/* Design Intelligence workflow */}
        <StepTimeline steps={diSteps} title="Design Intelligence" />

        {/* Manufacturing Intelligence workflow */}
        <StepTimeline steps={miSteps} title="Manufacturing Intelligence" />
      </div>
    </section>
  );
}
