"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Arvindh Balakrishnan",
    role: "Founder & CEO",
    experience: "15+ years in manufacturing technology and AI",
    initials: "AB",
    color: "#846fbc",
  },
  {
    name: "Pradeep Kumar",
    role: "CTO",
    experience: "12+ years in AI/ML and enterprise systems",
    initials: "PK",
    color: "#6d58a5",
  },
  {
    name: "Rajesh Venkataraman",
    role: "VP Engineering",
    experience: "18+ years in software architecture",
    initials: "RV",
    color: "#9b89cc",
  },
  {
    name: "Syed Ahmed",
    role: "Head of AI Research",
    experience: "10+ years in computer vision and NLP",
    initials: "SA",
    color: "#7c6bb0",
  },
  {
    name: "Deepa Krishnan",
    role: "Head of Product",
    experience: "14+ years in manufacturing operations",
    initials: "DK",
    color: "#8b77c4",
  },
  {
    name: "Mohammed Al Rashidi",
    role: "Business Development Director",
    experience: "12+ years in enterprise sales",
    initials: "MR",
    color: "#745fb3",
  },
  {
    name: "Arun Nair",
    role: "Lead Solutions Architect",
    experience: "10+ years in enterprise integration",
    initials: "AN",
    color: "#9282c0",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">
            Our Team
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-heading text-gray-900 tracking-tight">
            Industry Experts & Technologists
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A team that combines deep manufacturing expertise with cutting-edge
            AI capabilities
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center"
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: member.color }}
              >
                <span className="text-white text-2xl font-bold">
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-semibold text-lg text-gray-900">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mt-1">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mt-2">{member.experience}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
