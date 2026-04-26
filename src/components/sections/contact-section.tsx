"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, CheckCircle, Check, Loader2, ArrowRight, Rocket, Users2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";

const regionalLeads = [
  {
    name: "Suneel Aiyar",
    region: "Global",
    email: "suneel@cognaizesys.com",
    image: "/images/team/suneel.png",
  },
  {
    name: "Arvindh Balakrishnan",
    region: "North America",
    email: "arvindh@cognaizesys.com",
    image: "/images/team/arvindh.png",
  },
  {
    name: "Ramalingam Lakshmanan",
    region: "West Asia · EPC & Oil & Gas",
    email: "ramalingam@cognaizesys.com",
    image: "/images/team/ramalingam.png",
  },
  {
    name: "Amit Sawarkar",
    region: "ASEAN / APAC",
    email: "amit@cognaizesys.com",
    image: "/images/team/amit.jpeg",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${COMPANY.email}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to send message");

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", company: "", message: "" });
      }, 3000);
    } catch {
      setSubmitError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #1a150e 50%, #0a0a0f 100%)" }}>
      {/* Warm amber glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Zone 1 — Full-Width CTA (centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
            <Rocket className="w-3 h-3 text-accent" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Get Started
            </span>
          </div>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-white tracking-tight">
            See Engineering Intelligence on Your Own Drawings
          </h2>
          <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed">
            Book a 30-minute demo. We&apos;ll run Cognaize Systems on a
            drawing from your factory and show you exactly what it finds.
          </p>
          <div className="mt-8">
            <a
              href="https://calendly.com/raghu-cognaizesys/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Divider — intro to Regional Contacts */}
        <div className="my-12 md:my-14 flex items-center gap-6 max-w-5xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-sm text-gray-500 whitespace-nowrap">
            Or talk to a regional lead
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Zone 2 — Regional Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45 mb-6">
            <Users2 className="w-3 h-3 text-accent" />
            <span className="text-xs font-medium text-[#E87B3A] uppercase tracking-wider">
              Regional Leads
            </span>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">
            Talk to a Regional Lead
          </h3>
          <p className="text-gray-400 mt-3 text-base leading-relaxed">
            Reach the right person directly for your region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10">
          {regionalLeads.map((lead, i) => (
            <motion.div
              key={lead.email}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 flex items-center gap-5 hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-1 ring-white/10 group-hover:ring-primary/30 transition-all duration-300">
                  <Image
                    src={lead.image}
                    alt={lead.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col min-w-0 text-left">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {lead.region}
                </span>
                <h4 className="text-white font-heading font-semibold text-base md:text-lg mt-1.5 truncate">
                  {lead.name}
                </h4>
                <a
                  href={`mailto:${lead.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors min-w-0"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="truncate">{lead.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider — intro to Form */}
        <div className="my-12 md:my-14 flex items-center gap-6 max-w-5xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-sm text-gray-500 whitespace-nowrap">
            Or send us a message
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Zone 3 — Form + Contact Info (two cards) */}
        <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-lg bg-green-900/30 border border-green-500/30 flex items-center gap-3"
              >
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <p className="text-green-400 font-medium">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 text-sm font-medium mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "bg-white/[0.07] border text-white rounded-lg px-4 py-3 w-full outline-none transition-colors placeholder:text-gray-600",
                        errors.name
                          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-white/[0.12] focus:border-primary focus:ring-2 focus:ring-primary/30"
                      )}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 text-sm font-medium mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "bg-white/[0.07] border text-white rounded-lg px-4 py-3 w-full outline-none transition-colors placeholder:text-gray-600",
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-white/[0.12] focus:border-primary focus:ring-2 focus:ring-primary/30"
                      )}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-gray-300 text-sm font-medium mb-1.5"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={cn(
                      "bg-white/[0.07] border text-white rounded-lg px-4 py-3 w-full outline-none transition-colors placeholder:text-gray-600",
                      errors.company
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-white/[0.12] focus:border-primary focus:ring-2 focus:ring-primary/30"
                    )}
                    placeholder="Your Company Name"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 text-sm font-medium mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(
                      "bg-white/[0.07] border text-white rounded-lg px-4 py-3 w-full outline-none transition-colors placeholder:text-gray-600 resize-none",
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-white/[0.12] focus:border-primary focus:ring-2 focus:ring-primary/30"
                    )}
                    placeholder="Tell us about your needs..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p className="text-sm text-red-400">{submitError}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary disabled:opacity-60 text-white w-full py-3 rounded-lg font-semibold transition-all shadow-md shadow-primary/35 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-bg inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8"
          >
            <h3 className="text-white font-heading text-lg font-semibold">
              Contact Information
            </h3>

            {/* Contact Info Items */}
            <div className="space-y-5 mt-5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{COMPANY.email}</span>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 flex-1">
                  {COMPANY.offices.map((office) => (
                    <div key={office.city}>
                      <div className="text-sm text-gray-200 leading-tight">
                        {office.city}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 tracking-wide">
                        {office.country}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={COMPANY.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5 text-[#f59e0b] flex-shrink-0" />
                <span className="text-sm">cognaizesys.com</span>
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-white/[0.08] my-6" />

            {/* Why Request a Demo */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">
                Why Request a Demo?
              </h4>
              <div className="space-y-3">
                {[
                  "See it work on your own drawings",
                  "Get a custom ROI assessment",
                  "No commitment required",
                  "Up and running in under a week",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
