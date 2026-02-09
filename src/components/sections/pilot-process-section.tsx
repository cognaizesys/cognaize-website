"use client";

import { motion } from "framer-motion";
import { PlayCircle, FlaskConical, CheckCircle, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: PlayCircle,
    title: "Live Demo",
    description: "See the platform in action with your own drawings",
    duration: "30 min",
  },
  {
    icon: FlaskConical,
    title: "Pilot",
    description: "Test with 50-100 of your real engineering drawings",
    duration: "1-2 weeks",
  },
  {
    icon: CheckCircle,
    title: "Validate",
    description: "Compare AI results against your manual process",
    duration: "Review",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "Full deployment with your team, ready in under a week",
    duration: "<1 week",
  },
];

export function PilotProcessSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a1028 50%, #0a0a0f 100%)",
      }}
    >
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
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary-light">
                    {i + 1}
                  </div>
                  <step.icon className="w-5 h-5 text-primary-light" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <span className="inline-block text-xs font-medium text-primary-light bg-primary/10 px-3 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                  <ArrowRight className="w-5 h-5 text-white/20" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
