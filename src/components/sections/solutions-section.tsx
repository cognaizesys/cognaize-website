"use client";

import Link from "next/link";
import { Scan, Calculator } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    icon: Scan,
    title: "Design Intelligence",
    tagline: "AI-powered engineering drawing review",
    description:
      "Automatically analyze engineering drawings to detect critical errors, missing specifications, and tolerance issues before they reach production.",
    href: "/products/design-intelligence",
  },
  {
    icon: Calculator,
    title: "Manufacturing Intelligence",
    tagline: "AI-powered cost estimation from engineering drawings",
    description:
      "Upload an engineering drawing and get instant AI-powered cost estimation — material analysis, feasibility, routing, job cards, and detailed costing.",
    href: "/products/manufacturing-intelligence",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function SolutionsSection() {
  return (
    <section id="products" className="py-20 bg-[#f8f8fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[#846fbc] uppercase tracking-wide">
            Our Solutions
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Two Products. One Mission.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Eliminate costly errors and accelerate manufacturing operations with
            AI that understands engineering.
          </p>
        </div>

        {/* Product cards */}
        <motion.div
          className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                variants={cardVariants}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
              >
                {/* Purple gradient accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#846fbc] to-[#9b89cc]" />

                <div className="p-8">
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-[#846fbc]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm font-medium text-[#846fbc] mb-4">
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={product.href}
                    className="inline-flex items-center text-[#846fbc] hover:text-[#6d58a5] font-semibold transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
