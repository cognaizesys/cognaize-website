"use client";

import { motion } from "framer-motion";
import { Shield, Database, Lock, Bot } from "lucide-react";

const securityItems = [
  {
    icon: Shield,
    title: "Pluggable Auth & SSO",
    description: "Enterprise-grade authentication with SAML/OIDC SSO support for seamless integration with your identity provider.",
    color: "#846fbc",
  },
  {
    icon: Database,
    title: "Zero Data Persistence",
    description: "Drawings and extracted data are processed in-memory and never stored on our servers beyond the active session.",
    color: "#6ee7b7",
  },
  {
    icon: Lock,
    title: "Encrypted at Rest & Transit",
    description: "All data is encrypted with AES-256 at rest and TLS 1.3 in transit, meeting SOC 2 and ISO 27001 standards.",
    color: "#f59e0b",
  },
  {
    icon: Bot,
    title: "Zero-Retention AI",
    description: "Powered by Anthropic Claude with zero data retention — your drawings are never used to train AI models.",
    color: "#846fbc",
  },
];

export function SecuritySection() {
  return (
    <section className="py-24" style={{ backgroundColor: "#f8f9fb", backgroundImage: "linear-gradient(rgba(70, 110, 170, 0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 110, 170, 0.22) 1px, transparent 1px), linear-gradient(rgba(70, 110, 170, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 110, 170, 0.08) 1px, transparent 1px)", backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Security & Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-text-primary mt-2">
            Enterprise-Grade Security
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Your engineering data is your competitive advantage. We protect it with the highest standards.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
              style={{ borderLeftWidth: '4px', borderLeftColor: item.color }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}28` }}>
                <item.icon style={{ color: item.color }} size={22} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
