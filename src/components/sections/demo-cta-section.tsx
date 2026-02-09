"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function DemoCTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1028 50%, #0a0a0f 100%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(132, 111, 188, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(132, 111, 188, 0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
        style={{
          background: "radial-gradient(ellipse, rgba(132, 111, 188, 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-primary-light uppercase tracking-wider">
                Get Started
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading text-white tracking-tight leading-tight">
              Ready to See What
              <br />
              <span className="text-primary-light">AI Can Do for You?</span>
            </h2>

            <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-xl mx-auto">
              Upload your first drawing and see Cognaize in action.
              Setup takes less than a week. Results are immediate.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 text-white font-bold text-lg transition-all duration-300"
              >
                Start Free Trial
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
              <span>No credit card required</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Setup in &lt;1 week</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>SOC 2 Compliant</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
