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
    title: "Drawing Upload & Analysis",
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
    title: "Review Specs",
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

const benefits = [
  {
    icon: Clock,
    stat: "10x",
    label: "Faster Quoting",
    description: "From days to minutes per quote",
  },
  {
    icon: DollarSign,
    stat: "75%",
    label: "Cost Reduction",
    description: "In estimation process costs",
  },
  {
    icon: Gauge,
    stat: "95%+",
    label: "Accuracy",
    description: "AI-powered precision",
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
      <section className="bg-gradient-to-br from-dark-bg via-[#1a1028] to-dark-bg pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-primary/20 text-primary-light px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Manufacturing Intelligence
            </span>
            <h1 className="text-4xl md:text-6xl font-heading text-white mb-6">
              AI-Powered Cost Estimation from Drawings
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Upload an engineering drawing and get instant AI-powered cost
              estimation — from drawing to quote in minutes, not days.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/#contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Request a Demo
              </Link>
              <Link
                href="/#products"
                className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                See It In Action
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-primary py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div key={b.label} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold">{b.stat}</div>
              <div className="text-sm text-white/80 mt-1">{b.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
              From Drawing to Quote, Automatically
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 p-6 rounded-xl bg-light-bg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Walkthrough */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
              5-Step Intelligent Workflow
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
                        ? "bg-primary/20 text-primary"
                        : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {i < activeStep ? (
                    <CheckCircle size={18} />
                  ) : (
                    ws.step
                  )}
                </div>
                <span
                  className={`hidden md:inline text-sm font-medium ${
                    i === activeStep
                      ? "text-primary"
                      : "text-text-secondary"
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-[#5a4591]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">
              Stop Quoting in the Dark
            </h2>
            <p className="text-xl text-white/80 mb-10">
              See how Manufacturing Intelligence can generate accurate quotes
              from engineering drawings in minutes.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
