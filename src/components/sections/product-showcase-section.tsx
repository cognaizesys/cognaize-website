"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DiDemoViewer } from "@/components/product/di-demo-viewer";
import { MiDemoViewer } from "@/components/product/mi-demo-viewer";
import { Scan, Calculator, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductTab = "di" | "mi";

const tabs = [
  {
    id: "di" as const,
    label: "Design Intelligence",
    icon: Scan,
    description: "AI drawing review & error detection",
  },
  {
    id: "mi" as const,
    label: "Manufacturing Intelligence",
    icon: Calculator,
    description: "AI cost estimation pipeline",
  },
];

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<ProductTab>("di");

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8f8fa 50%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/15 mb-6">
            <Play className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Live Product Demo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading text-gray-900 tracking-tight">
            See the AI in Action
          </h2>
          <p className="mt-3 text-gray-500">
            Watch how Cognaize processes engineering drawings end-to-end
          </p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1 border border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative flex items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer",
                    isActive
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-gray-400")} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.id === "di" ? "DI" : "MI"}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "di" ? <DiDemoViewer /> : <MiDemoViewer />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
