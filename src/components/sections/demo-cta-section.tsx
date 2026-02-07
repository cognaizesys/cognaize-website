"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function DemoCTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Purple Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, #846fbc 0%, #6d58a5 50%, #5a4591 100%)",
        }}
      />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-white/20"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-white/20"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-white/20"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-20 right-[25%] w-2 h-2 rounded-full bg-white/20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Ready to Transform Your Manufacturing?
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-xl text-white/80 leading-relaxed">
              Join leading manufacturers who've eliminated costly errors and
              accelerated their operations with Cognaize AI
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-[#846fbc] hover:bg-gray-100 font-bold text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6d58a5]"
              >
                Book a Demo
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/40 hover:bg-white/10 text-white font-bold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#6d58a5]"
              >
                Start Free Trial
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
