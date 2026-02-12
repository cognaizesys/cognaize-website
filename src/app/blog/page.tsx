"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <section
        className="relative min-h-[80vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0f 0%, #1a1028 50%, #0a0a0f 100%)",
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

        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/25 mb-8">
              <BookOpen className="w-3.5 h-3.5 text-primary-light" />
              <span className="text-xs font-medium text-primary-light uppercase tracking-wider">
                Blog
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-[1.1]">
              Insights on{" "}
              <span className="text-primary-light">Manufacturing AI</span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Deep dives into engineering AI, manufacturing quality, and how
              we&apos;re rethinking design review and cost estimation. Articles
              coming soon.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-colors"
              >
                Get Notified
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-7 py-3.5 rounded-lg font-semibold transition-all"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
