"use client";

import { motion } from "framer-motion";
import {
  Scan,
  AlertTriangle,
  PenTool,
  FileDown,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  TrendingDown,
  ArrowLeftRight,
  Layers,
  Compass,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SecuritySection } from "@/components/sections/security-section";

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
    src: "/images/hero/3-process-advisor.png",
    alt: "AI Process Advisor recommendation",
    title: "Process Advisor",
    description:
      "Upload a drawing and let AI recommend the optimal manufacturing process — Cast, Forge, Fabricate, or Machine — based on geometry, material, and tolerance requirements.",
  },
  {
    src: "/images/hero/1-design-review.png",
    alt: "AI Design Review with findings panel",
    title: "Design Review",
    description:
      "Upload any engineering drawing and get instant AI analysis across 13+ error categories. Issues are classified by severity — Critical, Major, and Minor — with confidence scores and grid references.",
  },
  {
    src: "/images/hero/2-version-comparison.png",
    alt: "Side-by-side drawing version comparison",
    title: "Drawing Version Comparison",
    description:
      "Compare two drawing revisions side-by-side. AI detects changes in dimensions, tolerances, GD&T, geometry, and materials — with risk assessment for each modification.",
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

const impactMetrics = [
  {
    icon: Zap,
    value: "16x",
    label: "Faster Reviews",
    detail: "2-4 hours → <15 minutes per drawing",
  },
  {
    icon: Target,
    value: ">95%",
    label: "Detection Rate",
    detail: "Up from ~70% with manual review",
  },
  {
    icon: TrendingDown,
    value: "8-10x",
    label: "Rework Avoidance",
    detail: "12.5% rework exposure → <1.5%",
  },
];

export default function DesignIntelligencePage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/25 mb-8">
              <Scan className="w-3.5 h-3.5 text-primary-light" />
              <span className="text-xs font-medium text-primary-light uppercase tracking-wider">
                Design Intelligence
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-6 leading-[1.1]">
              AI-Powered <span className="text-primary-light">Drawing Review</span>
            </h1>

            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Detect tolerance issues, missing specs, and GD&T errors across 13+ categories in seconds — catching what manual review misses.
            </p>

            <div className="flex items-center justify-center gap-8 mb-10">
              {[
                { value: "<15min", label: "Review Time" },
                { value: "13+", label: "Error Categories" },
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
                href="#product-tour"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-7 py-3.5 rounded-lg font-semibold transition-all"
              >
                See Product Tour
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
                    app.cognaizesys.com/review
                  </div>
                </div>
              </div>
              <Image
                src="/images/products/di/di-overview.png"
                alt="Design Intelligence - AI Drawing Review"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="py-24 bg-light-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Watch It Work
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
              From Upload to Findings in Seconds
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
                  <span className="text-xs text-gray-400">app.cognaizesys.com</span>
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

      {/* Analysis Modules Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Analysis Modules
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
              Four Ways to Analyze Your Drawings
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Each module targets a specific engineering review need — from individual component checks to full assembly validation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Scan,
                title: "Component Analysis",
                description:
                  "Dimensional accuracy, GD&T compliance, tolerancing, datum references, and manufacturing considerations. Validated against ASME Y14.5 standards with 13+ error categories and 3-tier severity classification.",
              },
              {
                icon: ArrowLeftRight,
                title: "Comparative Analysis",
                description:
                  "Compare two drawing versions side-by-side. Detects changes in dimensions, tolerances, GD&T, geometry, and materials with risk assessment and interchangeability analysis.",
              },
              {
                icon: Layers,
                title: "Assembly Analysis",
                description:
                  "BOM completeness, component fit verification, stack-up tolerance analysis, assembly sequence feasibility, and interface compatibility checks.",
              },
              {
                icon: Compass,
                title: "Process Advisor",
                description:
                  "Upload a drawing and let AI recommend the optimal manufacturing process — Cast, Forge, Fabricate, or Machine — based on geometry, material, and tolerances.",
              },
            ].map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <mod.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{mod.title}</h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {mod.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Tour Screenshots */}
      <section id="product-tour" className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Product Tour
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
              See Every Detail
            </h2>
          </div>
          <div className="space-y-28">
            {screenshots.map((screenshot, i) => (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-10 md:gap-14 items-center`}
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
      <section className="py-24">
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

      {/* Impact Metrics Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1028 50%, #0a0a0f 100%)",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-light text-sm font-semibold uppercase tracking-wider">
              Measured Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-white mt-2">
              Results That Speak for Themselves
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {impactMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center rounded-2xl border border-white/10 bg-dark-card/80 backdrop-blur-sm p-8"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-7 h-7 text-primary-light" />
                </div>
                <div className="text-4xl font-bold font-heading text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-primary-light mb-2">
                  {metric.label}
                </div>
                <p className="text-sm text-gray-400">{metric.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <SecuritySection />

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
              Stop Missing Critical Drawing Errors
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              See how Design Intelligence can analyze your engineering drawings
              in minutes, not hours.
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
                href="/products/manufacturing-intelligence"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Explore Manufacturing Intelligence
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
