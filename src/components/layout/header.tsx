"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "./container";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onMobileMenuOpen: () => void;
}

export function Header({ onMobileMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-gray-200 bg-white shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/cognaize-icon.png"
              alt="Cognaize"
              width={36}
              height={36}
              className={cn(
                "h-9 w-auto transition-all duration-300",
                isScrolled ? "" : "brightness-0 invert"
              )}
            />
            <span className="flex items-baseline gap-1">
              <span
                className={cn(
                  "font-heading text-xl font-bold leading-tight transition-colors duration-300",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                Cognaize
              </span>
              <span
                className={cn(
                  "font-body text-xl font-normal leading-tight transition-colors duration-300",
                  isScrolled ? "text-gray-500" : "text-white/80"
                )}
              >
                Systems
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300",
                      isScrolled
                        ? "text-gray-700 hover:text-primary"
                        : "text-white hover:text-primary-light"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 -translate-x-1/2">
                    <div className="w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    isScrolled
                      ? "text-gray-700 hover:text-primary"
                      : "text-white hover:text-primary-light"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/#demo"
              className={cn(
                "inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                isScrolled
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "bg-white text-primary hover:bg-gray-50"
              )}
            >
              See Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuOpen}
            className={cn(
              "rounded-md p-2 transition-colors duration-300 md:hidden",
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Open mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Container>
    </header>
  );
}
