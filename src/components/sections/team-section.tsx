"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Arvindh Balakrishnan",
    role: "GVP of a leading IT Company",
    bio: "30+ years in Sales Strategy and Value Engineering",
    image: "/images/team/arvindh.png",
  },
  {
    name: "C.V. Murali",
    role: "Management Consultant, Lead Auditor & Author",
    bio: "30+ years in Quality Process Management",
    image: "/images/team/murali.jpeg",
  },
  {
    name: "Srihari Murthy",
    role: "CEO & Founder, AI Platform Company",
    bio: "20+ years in System Design and SaaS Technologies",
    image: "/images/team/srihari.jpeg",
  },
  {
    name: "A.S. Narayan",
    role: "Ombudsman, Major NBFC",
    bio: "35+ years in Banking across Regions and Functions",
    image: "/images/team/narayan.jpg",
  },
  {
    name: "Raghu Venkatnarayan",
    role: "Business Head, Conglomerate",
    bio: "30+ years in Consulting, Manufacturing & Retail",
    image: "/images/team/raghu.png",
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
  {
    name: "Suneel Aiyer",
    role: "SaaS Leader, Manufacturing & Supply Chain",
    bio: "Ex-PwC, KPMG, EY | Co-founder, Worxogo",
    image: "/images/team/suneel.png",
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

function MemberCard({ member }: { member: (typeof teamMembers)[number] }) {
  return (
    <div className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 h-full flex flex-col items-center text-center hover:border-primary/20 transition-colors duration-300">
      <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-primary/30 transition-all duration-300 mb-4 shrink-0">
        <Image
          src={member.image}
          alt={member.name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-sm font-bold text-white whitespace-nowrap">
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
    <>
      <section
        id="team"
        className="py-32 pb-20 relative overflow-hidden"
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
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white tracking-tight">
              Our
              <span className="text-primary-light"> Experts</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              Decades of experience across manufacturing, technology, consulting, and design — guiding our vision and strategy.
            </p>
          </motion.div>

          {/* All members */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="w-[calc(50%-0.625rem)] md:w-[calc(25%-0.9375rem)]"
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats section - white background */}
      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {[
            { value: "16x", label: "Faster Than Manual Review" },
            { value: "95%+", label: "AI Detection Accuracy" },
            { value: "10x", label: "Cost Reduction Per Review" },
            { value: "<1 Week", label: "Time to Deploy" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading text-gray-900">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-2 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
