"use client";

import { motion } from "framer-motion";
import { PlayCircle, FlaskConical, CheckCircle, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: PlayCircle,
    title: "Live Demo",
    description: "See the platform in action with your own drawings",
    duration: "30 min",
    color: "#846fbc",
  },
  {
    icon: FlaskConical,
    title: "Pilot",
    description: "Test with 50-100 of your real engineering drawings",
    duration: "1-2 weeks",
    color: "#6ee7b7",
  },
  {
    icon: CheckCircle,
    title: "Validate",
    description: "Compare AI results against your manual process",
    duration: "Review",
    color: "#f59e0b",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "Full deployment with your team, ready in under a week",
    duration: "<1 week",
    color: "#22c55e",
  },
];

export function PilotProcessSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #0c1a1a 40%, #1a1028 70%, #0a0a0f 100%)",
      }}
    >
      {/* Teal radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(110, 231, 183, 0.5) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-light text-sm font-semibold uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-white mt-2">
            From Demo to Production in Days
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our streamlined pilot process gets you up and running fast — no lengthy implementation cycles.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-xl border border-white/10 bg-dark-card/80 backdrop-blur-sm p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: `${step.color}40`, color: step.color }}>
                    {i + 1}
                  </div>
                  <step.icon className="w-5 h-5" style={{ color: step.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full" style={{ color: step.color, backgroundColor: `${step.color}28` }}>
                  {step.duration}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                  <ArrowRight className="w-5 h-5 text-[#6ee7b7]/60" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
