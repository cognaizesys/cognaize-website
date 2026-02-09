"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

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
                <Link href="/" onClick={onClose} className="flex items-center gap-2">
                  <Image
                    src="/images/logo/cognaize-icon.png"
                    alt="Cognaize"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                  <span className="flex items-baseline gap-1">
                    <span className="font-heading text-lg font-bold leading-tight text-primary">
                      Cognaize
                    </span>
                    <span className="font-body text-lg font-normal leading-tight text-gray-500">
                      Systems
                    </span>
                  </span>
                </Link>
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
                  {NAV_LINKS.map((link) =>
                    link.children ? (
                      <li key={link.href}>
                        <button
                          onClick={() =>
                            setExpandedItem(
                              expandedItem === link.label ? null : link.label
                            )
                          }
                          className="flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary"
                        >
                          {link.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              expandedItem === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {expandedItem === link.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {link.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className="block border-l-2 border-primary/30 py-2.5 pl-8 pr-4 text-sm text-gray-600 hover:border-primary hover:text-primary"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="block rounded-md px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>

              {/* CTA Button */}
              <div className="border-t border-gray-200 p-6">
                <Link
                  href="/#demo"
                  onClick={onClose}
                  className="block rounded-md bg-primary px-6 py-3 text-center text-base font-semibold text-white hover:bg-primary-dark"
                >
                  See Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
