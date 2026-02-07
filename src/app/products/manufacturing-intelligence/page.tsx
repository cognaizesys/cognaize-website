"use client";

import { motion } from "framer-motion";
import {
  Upload,
  CheckCircle,
  ClipboardList,
  Calculator,
  ArrowLeft,
  ArrowRight,
  Clock,
  DollarSign,
  Gauge,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const features = [
  {
    icon: Upload,
    title: "Drawing Upload & Spec Extraction",
    description:
      "Upload PNG, JPG, or PDF engineering drawings. AI automatically extracts key specifications, dimensions, material, tolerances, and component type.",
  },
  {
    icon: CheckCircle,
    title: "Feasibility Assessment",
    description:
      "AI checks material availability, machine capability, and tolerance achievability against your shop's actual equipment and inventory.",
  },
  {
    icon: ClipboardList,
    title: "Auto Job Card Generation",
    description:
      "Generate complete job cards with operations, machine assignments, setup/run times, and instructions — ready for the shop floor.",
  },
  {
    icon: Calculator,
    title: "Detailed Cost Breakdown",
    description:
      "Get transparent cost breakdowns: material cost, process cost per operation, outsource costs, and final unit price.",
  },
];

const workflowSteps = [
  {
    step: 1,
    title: "Upload Drawing",
    description: "Upload your engineering drawing in PNG, JPG, or PDF format",
    src: "/images/products/mi/mi-upload.png",
    alt: "Upload Drawing Interface",
  },
  {
    step: 2,
    title: "Review Extracted Specs",
    description:
      "AI extracts key specifications, dimensions, material, and component details",
    src: "/images/products/mi/mi-review.png",
    alt: "Key Specifications Review",
  },
  {
    step: 3,
    title: "Feasibility Check",
    description:
      "Automated feasibility analysis against your shop capabilities",
    src: "/images/products/mi/mi-feasibility.png",
    alt: "Feasibility Analysis",
  },
  {
    step: 4,
    title: "Job Card",
    description:
      "Auto-generated job card with all operations, machines, and timings",
    src: "/images/products/mi/mi-jobcard.png",
    alt: "Job Card Generation",
  },
  {
    step: 5,
    title: "Cost Breakdown",
    description:
      "Complete cost breakdown with material, process, and outsource costs",
    src: "/images/products/mi/mi-costing.png",
    alt: "Detailed Cost Breakdown",
  },
];

export default function ManufacturingIntelligencePage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1028 50%, #0a0a0f 100%)",
        }}
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(132, 111, 188, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(132, 111, 188, 0.12) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text content - centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/25 mb-8">
              <Calculator className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium text-accent uppercase tracking-wider">
                Manufacturing Intelligence
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6 leading-[1.1]">
              Drawing to <span className="text-accent">Quote in Minutes</span>
            </h1>

            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              AI extracts specs, checks feasibility, generates job cards, and produces detailed cost breakdowns — turning days of estimation into minutes.
            </p>

            <div className="flex items-center justify-center gap-8 mb-10">
              {[
                { value: "10x", label: "Faster Quoting" },
                { value: "75%", label: "Cost Reduction" },
                { value: "95%+", label: "Accuracy" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold font-heading text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#workflow"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-7 py-3.5 rounded-lg font-semibold transition-all"
              >
                See the Workflow
              </a>
            </div>
          </motion.div>

          {/* Full-width screenshot below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="bg-dark-surface/80 h-9 flex items-center px-4 gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/5 rounded-md px-3 py-1 text-[10px] text-gray-500 text-center">
                    app.cognaizesys.com/estimate
                  </div>
                </div>
              </div>
              <Image
                src="/images/products/mi/mi-costing.png"
                alt="Manufacturing Intelligence - Cost Breakdown"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
              End-to-End Cost Estimation Pipeline
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-5 p-6 rounded-xl bg-light-bg border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Walkthrough */}
      <section id="workflow" className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
              5-Step Intelligent Pipeline
            </h2>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-12 flex-wrap">
            {workflowSteps.map((ws, i) => (
              <button
                key={ws.step}
                onClick={() => setActiveStep(i)}
                className="flex items-center gap-2"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    i === activeStep
                      ? "bg-primary text-white scale-110"
                      : i < activeStep
                        ? "bg-green-700/20 text-green-700"
                        : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {i < activeStep ? <CheckCircle size={18} /> : ws.step}
                </div>
                <span
                  className={`hidden md:inline text-sm font-medium ${
                    i === activeStep ? "text-primary" : "text-text-secondary"
                  }`}
                >
                  {ws.title}
                </span>
                {i < workflowSteps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="text-gray-300 hidden md:inline"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Screenshot */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-heading text-text-primary">
                    Step {workflowSteps[activeStep].step}:{" "}
                    {workflowSteps[activeStep].title}
                  </h3>
                  <p className="text-text-secondary mt-1">
                    {workflowSteps[activeStep].description}
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                  <div className="bg-gray-100 h-10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="bg-gray-200 rounded-md h-6 flex-1 mx-4 flex items-center justify-center">
                      <span className="text-xs text-gray-400">
                        app.cognaizesys.com
                      </span>
                    </div>
                  </div>
                  <Image
                    src={workflowSteps[activeStep].src}
                    alt={workflowSteps[activeStep].alt}
                    width={1200}
                    height={800}
                    className="w-full"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Cross-sell + CTA */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1028 50%, #0a0a0f 100%)",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
              Stop Quoting in the Dark
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              See how Manufacturing Intelligence can generate accurate quotes
              from engineering drawings in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products/design-intelligence"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Explore Design Intelligence
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
