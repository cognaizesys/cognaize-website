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
    bio: "30+ years in Quality Process Management",
    image: "/images/team/murali.jpeg",
  },
  {
    name: "A.S. Narayan",
    role: "Ombudsman, Major NBFC",
    bio: "35+ years in Banking across Regions and Functions",
    image: "/images/team/narayan.jpg",
  },
  {
    name: "Britto Edward Victor",
    role: "CEO, Electronics & Software Company",
    bio: "20+ years in Hardware Design and Manufacturing",
    image: "/images/team/britto.jpg",
  },
  {
    name: "Malaiappan Vishwanathan",
    role: "Founder, Design & Prototyping Services",
    bio: "40+ years in Automotive Design across Asia & NA",
    image: "/images/team/malaiappan.png",
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

function MemberCard({ member }: { member: (typeof founders)[number] }) {
  return (
    <div className="group rounded-2xl border border-white/15 bg-white/[0.03] p-5 h-full flex flex-col items-center text-center hover:border-primary/20 transition-colors duration-300">
      <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-primary/35 group-hover:ring-primary/70 transition-all duration-300 mb-4 shrink-0">
        <Image
          src={member.image}
          alt={member.name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm font-bold text-white">
        {member.name}
      </h3>
      <p className="text-primary-light/80 text-xs mt-1.5 min-h-[2.5rem] flex items-center text-center">
        {member.role}
      </p>
      <p className="text-gray-500 text-xs mt-1">
        {member.bio}
      </p>
    </div>
  );
}

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-20 md:py-32 md:pb-20 relative overflow-hidden bg-[#0a0a0f]"
    >
      {/* Blueprint grid */}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
            <Users2 className="w-3 h-3 text-accent" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              The Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
            Built by People Who Have Done This
          </h2>
          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            Our founders combine manufacturing domain expertise, enterprise
            software experience, and operational technology capability.
          </p>
        </motion.div>

        {/* Founders */}
        <h3 className="text-xl md:text-2xl font-heading text-white text-center mb-6">Founders</h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto"
        >
          {founders.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="w-[calc(50%-0.625rem)] md:w-[calc(25%-0.9375rem)]"
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </motion.div>

        {/* Advisors */}
        <h3 className="text-xl md:text-2xl font-heading text-white text-center mt-12 mb-6">Advisors</h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto"
        >
          {advisors.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="w-[calc(50%-0.625rem)] md:w-[calc(25%-0.9375rem)]"
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          The company was built by people who have spent careers in
          manufacturing — which is the only way to build manufacturing
          intelligence that actually works.
        </motion.p>
      </div>
    </section>
  );
}
