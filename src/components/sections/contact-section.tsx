"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, CheckCircle, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple client-side validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and show success
    setErrors({});
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
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
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <h2 className="font-heading text-3xl text-white">Get In Touch</h2>
            <p className="text-gray-400 mt-2">
              Ready to see how Cognaize can transform your operations? Fill out
              the form and we'll get back to you within 24 hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-6 rounded-lg bg-green-900/30 border border-green-500/30 flex items-center gap-3"
              >
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <p className="text-green-400 font-medium">
                  Thank you! We'll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm font-medium mb-1"
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
                      "bg-white/10 border text-white rounded-lg px-4 py-3 w-full outline-none transition-colors placeholder:text-gray-500",
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-white/20 focus:border-primary focus:ring-1 focus:ring-primary"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-sm font-medium mb-1"
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
                      "bg-white/10 border text-white rounded-lg px-4 py-3 w-full outline-none transition-colors placeholder:text-gray-500",
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-white/20 focus:border-primary focus:ring-1 focus:ring-primary"
                    )}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-gray-300 text-sm font-medium mb-1"
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
                      "bg-white/10 border text-white rounded-lg px-4 py-3 w-full outline-none transition-colors placeholder:text-gray-500",
                      errors.company
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-white/20 focus:border-primary focus:ring-1 focus:ring-primary"
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
                    className="block text-gray-300 text-sm font-medium mb-1"
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
                      "bg-white/10 border text-white rounded-lg px-4 py-3 w-full outline-none transition-colors placeholder:text-gray-500 resize-none",
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-white/20 focus:border-primary focus:ring-1 focus:ring-primary"
                    )}
                    placeholder="Tell us about your needs..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white w-full py-3 rounded-lg font-semibold mt-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column - Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h3 className="text-white font-heading text-xl">
              Contact Information
            </h3>

            {/* Contact Info Items */}
            <div className="space-y-6 mt-6">
              <a
                href="mailto:info@cognaizesys.com"
                className="flex items-start gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>info@cognaizesys.com</span>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Dubai, UAE</span>
              </div>

              <a
                href="https://cognaizesys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>cognaizesys.com</span>
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-8" />

            {/* Why Request a Demo */}
            <div>
              <h4 className="text-white font-semibold text-base mb-4">
                Why Request a Demo?
              </h4>
              <div className="space-y-3">
                {[
                  "See AI analysis on your own drawings",
                  "Get a custom ROI assessment",
                  "No commitment required",
                  "Up and running in under a week",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
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
