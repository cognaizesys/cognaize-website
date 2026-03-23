"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe2, Building2 } from "lucide-react";

/* ─────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────── */
function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative min-h-[60vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0f 0%, #12121a 35%, #1a1028 60%, #0c1a1a 85%, #0a0a0f 100%)",
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

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(132, 111, 188, 0.3) 0%, rgba(110, 231, 183, 0.05) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
              <BookOpen className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
                Our Story
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-[1.1]"
          >
            Where Engineering Judgment Becomes{" "}
            <span className="text-primary-light">Engineered Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-8 text-lg text-gray-400 max-w-2xl leading-relaxed"
          >
            Cognaize Systems was built on one conviction: the engineering
            judgment your organisation has accumulated over decades is your most
            valuable and most fragile asset. We build systems that make it
            permanent, scalable, and continuously improving.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 text-xs text-gray-500"
          >
            Powered by FactriAI
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 2 — THE WORLDVIEW
   ───────────────────────────────────────────── */
function WorldviewSection() {
  return (
    <section id="worldview" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
            <Globe2 className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              The Worldview
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            Making Engineering Judgment Scalable
          </h2>
        </motion.div>

        {/* Desktop: two-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Left column — pull quote (desktop only) */}
          <div className="hidden lg:flex items-start">
            <blockquote className="text-2xl md:text-3xl font-heading italic text-primary leading-snug">
              &ldquo;The judgment that drives your factory was built for a time
              when experience stayed in the same hands for decades. That time is
              passing.&rdquo;
            </blockquote>
          </div>

          {/* Right column — body paragraphs */}
          <div className="space-y-6">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Manufacturing companies have spent decades building something that
              does not appear on any balance sheet — engineering judgment. The
              knowledge of which tolerances cause trouble on the floor. Which
              designs cost more than they should. Which combinations fail in
              service.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              This knowledge lives in the minds of experienced engineers and
              estimators. It does not transfer easily. It does not scale. And
              when those people leave, it goes with them.
            </p>

            {/* Pull quote — mobile only */}
            <blockquote className="lg:hidden text-xl font-heading italic text-primary leading-snug text-center py-4">
              &ldquo;The judgment that drives your factory was built for a time
              when experience stayed in the same hands for decades. That time is
              passing.&rdquo;
            </blockquote>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Cognaize Systems was built to address that directly. We take the
              engineering judgment your organisation has accumulated, structure it
              into a system, and make it permanently available across your
              manufacturing workflow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 3 — WHO WE ARE
   ───────────────────────────────────────────── */
const highlights = [
  {
    title: "Domain Expertise",
    descriptor:
      "Not generic data — manufacturing knowledge built rule by rule through real deployments",
  },
  {
    title: "Built by Engineers",
    descriptor:
      "Our team has spent careers on factory floors, in design offices, and in estimation rooms",
  },
  {
    title: "Improves Over Time",
    descriptor:
      "Every production cycle feeds back — the system gets sharper with your factory's actual outcomes",
  },
];

function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[720px] mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
            <Building2 className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Who We Are
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            Cognaize Systems
          </h2>
        </motion.div>

        {/* Body paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 max-w-[720px] mx-auto space-y-6 text-center"
        >
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Cognaize Systems is an Engineering Intelligence company. We build
            Engineered Intelligence by structuring expert manufacturing knowledge
            into systems that can operate consistently at scale.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our foundation is domain knowledge, not generic data. It is built by
            engineers who have spent careers in design offices, estimation rooms,
            and on factory floors — structured into rules, consequence maps, and
            process logic through real deployments. Technology delivers it
            efficiently. The domain expertise drives it.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            The outcome is a system that codifies expert judgment, scales it
            across your organisation, and improves through operational feedback.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {highlights.map((card) => (
            <div
              key={card.title}
              className="border-t-[3px] border-t-primary bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.descriptor}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WorldviewSection />
      <WhoWeAreSection />
    </>
  );
}
