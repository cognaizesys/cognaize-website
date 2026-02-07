"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed bottom-0 right-0 top-0 z-50 w-80 max-w-full bg-white shadow-xl"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 p-6">
                <div className="flex flex-col items-start">
                  <span className="font-heading text-2xl leading-tight text-primary">
                    Cognaize
                  </span>
                  <span className="font-body text-xs leading-tight text-gray-600">
                    Systems
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="block rounded-md px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button */}
              <div className="border-t border-gray-200 p-6">
                <a
                  href="/#demo"
                  onClick={onClose}
                  className="block rounded-md bg-primary px-6 py-3 text-center text-base font-semibold text-white hover:bg-primary-dark"
                >
                  See Demo
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
