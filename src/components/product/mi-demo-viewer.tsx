"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { ProductScreenshot } from "@/components/product/product-screenshot";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: 1,
    label: "Upload",
    src: "/images/products/mi/mi-upload.png",
    alt: "Upload Drawing",
  },
  {
    step: 2,
    label: "Review",
    src: "/images/products/mi/mi-review.png",
    alt: "Review Specs",
  },
  {
    step: 3,
    label: "Feasibility",
    src: "/images/products/mi/mi-feasibility.png",
    alt: "Feasibility Check",
  },
  {
    step: 4,
    label: "Routing",
    src: "/images/products/mi/mi-feasibility.png",
    alt: "Generate Routing",
  },
  {
    step: 5,
    label: "Job Card",
    src: "/images/products/mi/mi-jobcard.png",
    alt: "Job Card",
  },
  {
    step: 6,
    label: "Costing",
    src: "/images/products/mi/mi-costing.png",
    alt: "Cost Breakdown",
  },
];

export function MiDemoViewer() {
  const [activeStep, setActiveStep] = useState(1);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current % steps.length) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  const currentScreenshot = steps.find((s) => s.step === activeStep);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Stepper */}
      <div className="mb-12 px-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.step} className="flex items-center flex-1">
              {/* Step circle */}
              <button
                onClick={() => handleStepClick(step.step)}
                className="relative flex flex-col items-center group cursor-pointer"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all border-2",
                    activeStep === step.step
                      ? "bg-[#846fbc] text-white border-[#846fbc]"
                      : activeStep > step.step
                        ? "bg-[#846fbc]/20 text-[#846fbc] border-[#846fbc]/20"
                        : "bg-gray-200 text-gray-400 border-gray-200"
                  )}
                >
                  {activeStep > step.step ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    step.step
                  )}
                </div>

                {/* Label */}
                <span
                  className={cn(
                    "mt-2 text-xs font-medium transition-all",
                    activeStep === step.step
                      ? "text-gray-900 font-semibold"
                      : "text-gray-500"
                  )}
                >
                  {step.label}
                </span>
              </button>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-0.5 flex-1 mx-2 transition-all",
                    activeStep > step.step
                      ? "bg-[#846fbc]"
                      : "bg-gray-200"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Screenshot display */}
      {currentScreenshot && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ProductScreenshot
              src={currentScreenshot.src}
              alt={currentScreenshot.alt}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
