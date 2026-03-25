"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Package, CheckCircle } from "lucide-react";
import { INDUSTRY_PAGES, ALL_PRODUCTS } from "@/data/industries";

const data = INDUSTRY_PAGES["automotive-components"];
const Icon = data.icon;

const applicableProducts = ALL_PRODUCTS.filter((p) =>
  data.applicableProductNames.includes(p.name)
);

/* ── Section 1: Hero ─────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0f 0%, #12121a 40%, #0c1a1a 70%, #0a0a0f 100%)",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.07) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "800px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(132, 111, 188, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
            <Icon className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              {data.name}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight"
        >
          Engineering Intelligence for
          <br />
          <span className="text-primary-light">{data.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          {data.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://calendly.com/raghu-cognaizesys/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg px-7 py-3 text-base font-bold bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
          >
            Book a Demo
          </a>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light hover:text-white transition-colors"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
    </section>
  );
}

/* ── Section 2: The Challenge ────────────────────────────────────── */

function ChallengeSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight"
          >
            The Challenge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed"
          >
            What makes {data.name.toLowerCase()} manufacturing hard to scale
            with traditional tools.
          </motion.p>
        </div>

        {/* 3 challenge cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.challenges.map((challenge, index) => {
            const ChallengeIcon = challenge.icon;
            return (
              <motion.div
                key={challenge.heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-xl bg-white border border-gray-200 p-8 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-red-50 border border-red-100 mb-5">
                  <ChallengeIcon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">
                  {challenge.heading}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Section 3: Products That Apply ──────────────────────────────── */

function ProductsApplySection() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0f 0%, #12121a 40%, #0c1a1a 70%, #0a0a0f 100%)",
      }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.20) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.07) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
              <Package className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                Products for {data.name}
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight"
          >
            Products That Apply
          </motion.h2>
        </div>

        {/* Product cards — same format as homepage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {applicableProducts.map((product, index) => {
            const ProductIcon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.06] p-6 border-t-2 border-t-accent/30 hover:border-primary/25 hover:bg-white/[0.05] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-[11px] font-medium text-accent uppercase tracking-wider">
                    {product.stage}
                  </span>
                  <ProductIcon className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed flex-1">
                  {product.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <Link
                    href={product.href}
                    className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light hover:text-white transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
    </section>
  );
}

/* ── Section 4: Proof Points ─────────────────────────────────────── */

function ProofSection() {
  if (!data.proofPoints) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight"
          >
            {data.proofPoints.heading}
          </motion.h2>
        </div>

        <div className="space-y-4">
          {data.proofPoints.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-start gap-4 rounded-xl bg-gray-50 border border-gray-200 p-5"
            >
              <CheckCircle className="w-5 h-5 text-accent-dark mt-0.5 flex-shrink-0" />
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 5: Closing CTA ──────────────────────────────────────── */

function ClosingCTASection() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0f 0%, #140e24 50%, #0a0a0f 100%)",
      }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25 mb-6"
        >
          <Icon className="w-7 h-7 text-primary-light" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight"
        >
          Ready to bring intelligence to your {data.name.toLowerCase()}{" "}
          workflow?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed"
        >
          See how Cognaize can work for your specific processes. Book a 30-minute
          walkthrough with our team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://calendly.com/raghu-cognaizesys/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg px-7 py-3 text-base font-bold bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
          >
            Book a Demo
          </a>
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light hover:text-white transition-colors"
          >
            See All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */

export default function AutomotiveComponentsPage() {
  return (
    <div>
      <HeroSection />
      <ChallengeSection />
      <ProductsApplySection />
      <ProofSection />
      <ClosingCTASection />
    </div>
  );
}
