"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Arvindh Balakrishnan",
    role: "Founder & CEO",
    bio: "15+ years in manufacturing technology and AI. Pioneering the intersection of domain expertise and deep learning.",
    initials: "AB",
    gradient: "from-[#846fbc] to-[#6d58a5]",
  },
  {
    name: "Pradeep Kumar",
    role: "CTO",
    bio: "12+ years in AI/ML and enterprise systems. Architecting scalable AI pipelines for mission-critical manufacturing workflows.",
    initials: "PK",
    gradient: "from-[#6d58a5] to-[#5a4690]",
  },
  {
    name: "Rajesh Venkataraman",
    role: "VP Engineering",
    bio: "18+ years in software architecture. Building robust, high-availability platforms that manufacturing teams rely on daily.",
    initials: "RV",
    gradient: "from-[#9b89cc] to-[#846fbc]",
  },
  {
    name: "Syed Ahmed",
    role: "Head of AI Research",
    bio: "10+ years in computer vision and NLP. Pushing boundaries in document understanding and engineering drawing analysis.",
    initials: "SA",
    gradient: "from-[#7c6bb0] to-[#6558a0]",
  },
  {
    name: "Deepa Krishnan",
    role: "Head of Product",
    bio: "14+ years in manufacturing operations. Translating shop-floor challenges into intuitive AI-powered solutions.",
    initials: "DK",
    gradient: "from-[#8b77c4] to-[#7460b0]",
  },
  {
    name: "Mohammed Al Rashidi",
    role: "Business Development Director",
    bio: "12+ years in enterprise sales. Driving strategic partnerships across the GCC manufacturing ecosystem.",
    initials: "MR",
    gradient: "from-[#745fb3] to-[#5d4a9a]",
  },
  {
    name: "Arun Nair",
    role: "Lead Solutions Architect",
    bio: "10+ years in enterprise integration. Designing seamless deployment architectures for complex manufacturing environments.",
    initials: "AN",
    gradient: "from-[#9282c0] to-[#7b6bab]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
        style={{
          background: "radial-gradient(ellipse, rgba(132, 111, 188, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-white tracking-tight">
            The Team Behind
            <br />
            <span className="text-primary-light">Cognaize</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            Deep manufacturing domain expertise meets cutting-edge AI research.
            We&apos;ve worked on the shop floor, and we build for it.
          </p>
        </motion.div>

        {/* Team grid - all same size */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-5xl mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div
                  className={`w-36 h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center ring-4 ring-white/5 group-hover:ring-primary/20 transition-all duration-500 shadow-2xl`}
                >
                  <span className="text-white text-3xl md:text-4xl font-heading font-bold tracking-wide">
                    {member.initials}
                  </span>
                </div>
                {/* Glow ring on hover */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                  style={{ background: "rgba(132, 111, 188, 0.2)" }}
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-heading text-white tracking-wide">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-primary-light text-sm font-semibold mt-1.5 uppercase tracking-wider">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-[220px]">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 flex flex-wrap items-center justify-center gap-12 md:gap-20 pt-16 border-t border-white/5"
        >
          {[
            { value: "90+", label: "Years Combined Experience" },
            { value: "4", label: "Countries" },
            { value: "3", label: "Patents Filed" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-heading text-white font-bold">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-2 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
