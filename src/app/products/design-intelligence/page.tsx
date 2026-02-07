"use client";

import { motion } from "framer-motion";
import {
  Scan,
  AlertTriangle,
  PenTool,
  FileDown,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: Scan,
    title: "AI Drawing Analysis",
    description:
      "Automatically detect errors across 13+ categories including tolerancing, material specs, GD&T callouts, and surface finish requirements.",
  },
  {
    icon: AlertTriangle,
    title: "Severity Classification",
    description:
      "Every finding is classified as Critical, Major, or Minor with AI confidence scores, enabling prioritized review workflows.",
  },
  {
    icon: PenTool,
    title: "Built-in Annotation Tools",
    description:
      "Measure, annotate, and markup directly on drawings with built-in select, text, arrow, and measurement tools.",
  },
  {
    icon: FileDown,
    title: "PDF Export & Reporting",
    description:
      "Generate comprehensive findings reports with annotated drawings for stakeholder review and audit trails.",
  },
];

const screenshots = [
  {
    src: "/images/products/di/di-overview.png",
    alt: "AI Drawing Review showing detected issues",
    title: "AI-Powered Drawing Review",
    description:
      "Upload any engineering drawing and get instant AI analysis across 13+ error categories. Critical issues are highlighted directly on the drawing.",
  },
  {
    src: "/images/products/di/di-finding-detail.png",
    alt: "Detailed finding with tolerance analysis",
    title: "Detailed Finding Analysis",
    description:
      "Click any finding to see full details — error ID, category, severity, location, and specific current vs expected values with confidence scores.",
  },
  {
    src: "/images/products/di/di-material-finding.png",
    alt: "Material specification finding",
    title: "Material Specification Review",
    description:
      "Identify missing or incomplete material specifications, ensuring every drawing meets manufacturing requirements before hitting the shop floor.",
  },
];

const categories = [
  "Tolerancing",
  "Material Specs",
  "GD&T Callouts",
  "Surface Finish",
  "Dimensional Accuracy",
  "Thread Specifications",
  "Weld Symbols",
  "Title Block Compliance",
  "Reference Standards",
  "Section Views",
  "Bill of Materials",
  "Assembly Notes",
  "Revision Control",
];

export default function DesignIntelligencePage() {
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
              Design Intelligence
            </span>
            <h1 className="text-4xl md:text-6xl font-heading text-white mb-6">
              AI-Powered Engineering Drawing Review
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Automatically analyze engineering drawings to detect critical
              errors, missing specifications, and tolerance issues — reducing
              review time from hours to minutes.
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

      {/* Demo GIF */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Watch It Work
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
              From Upload to AI Findings in Seconds
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
              <video
                src="/images/products/di/di-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
              What Design Intelligence Does
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

      {/* Screenshots */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Product Tour
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
              See Design Intelligence In Action
            </h2>
          </div>
          <div className="space-y-24">
            {screenshots.map((screenshot, i) => (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 md:gap-12 items-center`}
              >
                <div className="md:w-3/5">
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
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={1200}
                      height={800}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="md:w-2/5">
                  <h3 className="text-2xl font-heading text-text-primary mb-4">
                    {screenshot.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {screenshot.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2 mb-12">
            13+ Error Categories Analyzed
          </h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {categories.map((cat, i) => (
              <motion.span
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="inline-flex items-center gap-2 bg-primary/5 text-text-primary border border-primary/20 px-4 py-2 rounded-full text-sm"
              >
                <CheckCircle size={14} className="text-primary" />
                {cat}
              </motion.span>
            ))}
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
              Stop Missing Critical Drawing Errors
            </h2>
            <p className="text-xl text-white/80 mb-10">
              See how Design Intelligence can analyze your engineering drawings
              in minutes, not hours.
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
