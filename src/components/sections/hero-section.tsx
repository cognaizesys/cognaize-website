"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Scan, CheckCircle, Zap, ArrowRight, Sparkles } from "lucide-react";
import { heroMetrics } from "@/data/metrics";

const analysisSteps = [
  { text: "Parsing drawing dimensions...", icon: Scan, delay: 0 },
  { text: "Checking GD&T callouts...", icon: Scan, delay: 1.2 },
  { text: "Validating material specs...", icon: Scan, delay: 2.4 },
  { text: "3 issues found. Generating report...", icon: CheckCircle, delay: 3.6 },
];

const findings = [
  { severity: "Critical", label: "Missing surface finish on bore diameter", color: "#ef4444" },
  { severity: "Major", label: "Tolerance stack-up exceeds ±0.05mm", color: "#f59e0b" },
  { severity: "Minor", label: "Missing datum reference on Profile callout", color: "#3b82f6" },
];

export function HeroSection() {
  const [analysisPhase, setAnalysisPhase] = useState(0);
  const [showFindings, setShowFindings] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Cycle through analysis steps
    timers.push(setTimeout(() => setAnalysisPhase(1), 1500));
    timers.push(setTimeout(() => setAnalysisPhase(2), 2700));
    timers.push(setTimeout(() => setAnalysisPhase(3), 3900));
    timers.push(setTimeout(() => setShowFindings(true), 5100));

    // Reset and loop
    timers.push(
      setTimeout(() => {
        setAnalysisPhase(0);
        setShowFindings(false);
      }, 11000)
    );

    const interval = setInterval(() => {
      setAnalysisPhase(0);
      setShowFindings(false);
      setTimeout(() => setAnalysisPhase(1), 1500);
      setTimeout(() => setAnalysisPhase(2), 2700);
      setTimeout(() => setAnalysisPhase(3), 3900);
      setTimeout(() => setShowFindings(true), 5100);
    }, 11000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #12121a 40%, #1a1028 70%, #0a0a0f 100%)",
      }}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(132, 111, 188, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(132, 111, 188, 0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow behind demo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(132, 111, 188, 0.3) 0%, transparent 60%)",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary-light/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-[1.1]"
            >
              Upload a Drawing.
              <br />
              <span className="text-primary-light">Get AI Insights</span>
              <br />
              in Seconds.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-lg text-gray-400 max-w-lg leading-relaxed"
            >
              Cognaize analyzes engineering drawings 100x faster with 95%+
              accuracy — catching errors, estimating costs, and accelerating
              reviews that used to take days.
            </motion.p>

            {/* Metrics row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-8"
            >
              {heroMetrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white font-heading">
                    {metric.value}
                  </span>
                  <span className="text-sm text-gray-500">{metric.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-12 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold transition-all duration-300"
              >
                Explore Products
              </a>
            </motion.div>
          </div>

          {/* Right: Interactive Demo Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            {/* Demo Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-card/80 backdrop-blur-xl shadow-2xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-dark-surface/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/5 rounded-md px-3 py-1.5 text-xs text-gray-500 text-center">
                    app.cognaizesys.com/review
                  </div>
                </div>
              </div>

              {/* Demo content area */}
              <div className="p-6 min-h-[380px] relative">
                {/* Upload area / Drawing preview */}
                <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-6 mb-4 relative overflow-hidden">
                  {/* Simulated drawing preview */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Upload className="w-7 h-7 text-primary-light" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">shaft_assembly_rev3.pdf</p>
                      <p className="text-xs text-gray-500 mt-1">Engineering Drawing &middot; 2.4 MB</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs text-accent font-medium px-2 py-1 rounded-full bg-accent/10">
                        Uploaded
                      </span>
                    </div>
                  </div>

                  {/* Scan line overlay */}
                  {analysisPhase > 0 && analysisPhase < 4 && !showFindings && (
                    <motion.div
                      className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                      animate={{ top: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </div>

                {/* Analysis log */}
                <div className="space-y-2 mb-4">
                  {analysisSteps.map((step, i) => {
                    const Icon = step.icon;
                    const isActive = analysisPhase > i;
                    const isCurrent = analysisPhase === i + 1;
                    return (
                      <AnimatePresence key={i}>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-3"
                          >
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              i === 3 ? "bg-accent/20" : "bg-primary/20"
                            }`}>
                              <Icon className={`w-3 h-3 ${
                                i === 3 ? "text-accent" : "text-primary-light"
                              }`} />
                            </div>
                            <span className={`text-xs ${
                              isCurrent ? "text-gray-300" : "text-gray-500"
                            }`}>
                              {step.text}
                            </span>
                            {isCurrent && (
                              <span className="w-1.5 h-4 bg-primary-light/60 animate-cursor ml-0.5" />
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    );
                  })}
                </div>

                {/* Findings cards */}
                <AnimatePresence>
                  {showFindings && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-white uppercase tracking-wide">
                          Findings
                        </span>
                        <span className="text-xs text-gray-500">3 issues detected</span>
                      </div>
                      {findings.map((finding, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5"
                        >
                          <span
                            className="shrink-0 mt-0.5 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded"
                            style={{
                              color: finding.color,
                              backgroundColor: `${finding.color}15`,
                            }}
                          >
                            {finding.severity}
                          </span>
                          <span className="text-xs text-gray-400 leading-relaxed">
                            {finding.label}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Floating accent cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2.5 rounded-lg bg-dark-card border border-white/10 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold text-white">100x Faster</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-lg bg-dark-card border border-white/10 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold text-white">95%+ Accuracy</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
