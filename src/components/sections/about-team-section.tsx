"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users2 } from "lucide-react";

const founders = [
  {
    name: "Raghu Venkatnarayan",
    role: "CEO & Co-Founder",
    bio: "Serial entrepreneur with experience across electric drives, digitisation, costing, and pricing strategies. Built engineering teams across India and Japan.",
    image: "/images/team/raghu.png",
  },
  {
    name: "Suneel Aiyer",
    role: "COO & Co-Founder",
    bio: "SaaS and manufacturing industry leader. Background in strategy and operations consulting across PwC, KPMG, and EY. Co-founder of Worxogo.",
    image: "/images/team/suneel.png",
  },
  {
    name: "Arvindh Balakrishnan",
    role: "CRO & Co-Founder",
    bio: "Enterprise software and AI sales leader. Founded MetricStream. Held senior go-to-market roles at Oracle, Infor, o9 Solutions, and Symphony AI.",
    image: "/images/team/arvindh.png",
  },
  {
    name: "Srihari Murthy",
    role: "CTO & Co-Founder",
    bio: "Digital transformation and smart manufacturing leader. Serial entrepreneur. Built and deployed manufacturing technology platforms across India and the UAE.",
    image: "/images/team/srihari.jpeg",
  },
];

const advisors = [
  {
    name: "C.V. Murali",
    role: "Management Consultant, Lead Auditor & Author",
    image: "/images/team/murali.jpeg",
  },
  {
    name: "A.S. Narayan",
    role: "Ombudsman, Major NBFC",
    image: "/images/team/narayan.jpg",
  },
  {
    name: "Britto Edward Victor",
    role: "CEO, Electronics & Software Company",
    image: "/images/team/britto.jpg",
  },
  {
    name: "Malaiappan Vishwanathan",
    role: "Founder, Design & Prototyping Services",
    image: "/images/team/malaiappan.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AboutTeamSection() {
  return (
    <section id="team-about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6">
            <Users2 className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              The Team
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-gray-900 tracking-tight">
            Built by People Who Have Done This
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
            Our founders combine manufacturing domain expertise, enterprise
            software experience, and operational technology capability. Our
            advisors bring depth across automotive powertrain, quality systems,
            semiconductor design, and financial operations.
          </p>
        </motion.div>

        {/* Founders — 2×2 grid */}
        <h3 className="text-xl md:text-2xl font-heading text-gray-900 text-center mb-6">
          Founders
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {founders.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-primary/30 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-sm font-bold text-gray-900">
                {member.name}
              </h4>
              <p className="text-primary text-xs font-medium mt-1">
                {member.role}
              </p>
              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Advisors — 4-column row */}
        <h3 className="text-xl md:text-2xl font-heading text-gray-900 text-center mt-14 mb-6">
          Advisors
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {advisors.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-2 ring-gray-200 mb-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-sm font-bold text-gray-900">
                {member.name}
              </h4>
              <p className="text-gray-500 text-xs mt-1">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center text-gray-500 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          The company was built by people who have spent careers in
          manufacturing — which is the only way to build manufacturing
          intelligence that actually works.
        </motion.p>
      </div>
    </section>
  );
}
