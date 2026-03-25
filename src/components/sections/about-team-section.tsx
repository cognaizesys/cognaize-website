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
    role: "CPO & Co-Founder",
    bio: "Smart manufacturing and product leader. Serial entrepreneur. Built and deployed manufacturing technology platforms across India and the UAE.",
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

export function AboutTeamSection() {
  return (
    <section
      id="team-about"
      className="py-16 md:py-24 relative overflow-hidden"
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
            "linear-gradient(rgba(100, 170, 240, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.12) 1px, transparent 1px), linear-gradient(rgba(100, 170, 240, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 170, 240, 0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(132, 111, 188, 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
            <Users2 className="w-3 h-3 text-accent" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              The Team
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight">
            Built by People Who Have Done This
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
            Our founders combine manufacturing domain expertise, enterprise
            software experience, and operational technology capability.
          </p>
        </motion.div>

        {/* Founders — 2×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {founders.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex gap-5">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-lg overflow-hidden ring-1 ring-white/10 group-hover:ring-primary/30 transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={140}
                      height={140}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center min-w-0">
                  <h4 className="text-base md:text-lg font-bold text-white font-heading">
                    {member.name}
                  </h4>
                  <p className="text-primary-light text-sm font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mt-2.5 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-14 flex items-center gap-6 max-w-4xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <h3 className="text-lg font-heading font-semibold text-gray-400 tracking-wide">
            Advisors
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Advisors — 4-column row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {advisors.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-1 ring-white/10 mb-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-sm font-bold text-white">{member.name}</h4>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center text-gray-500 text-base leading-relaxed max-w-2xl mx-auto"
        >
          The company was built by people who have spent careers in
          manufacturing, which is the only way to build manufacturing
          intelligence that actually works.
        </motion.p>
      </div>
    </section>
  );
}
