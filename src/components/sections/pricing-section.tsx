"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$250",
    period: "/month",
    description: "Get started with one module on the cloud",
    features: [
      "1 module (Costing or Feasibility)",
      "Cloud-hosted",
      "Up to 250 drawings/month",
      "Email support",
      "Setup in <1 week",
    ],
    cta: "Start Free Pilot",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Unlimited access with on-prem deployment option",
    features: [
      "Unlimited modules",
      "2+ modules (Costing, Routing, Feasibility)",
      "Cloud or On-Premise deployment",
      "Dedicated success manager",
      "Setup in 2-4 weeks",
    ],
    cta: "Talk to Sales",
    highlighted: true,
  },
];

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Start small with a pilot, scale when you&apos;re ready.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-2 border-primary bg-primary/5 shadow-lg"
                  : "border border-gray-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold font-heading">{plan.price}</span>
                {plan.period && (
                  <span className="text-text-secondary text-sm">{plan.period}</span>
                )}
              </div>
              <p className="mt-2 text-text-secondary text-sm">{plan.description}</p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors text-sm ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "border border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
