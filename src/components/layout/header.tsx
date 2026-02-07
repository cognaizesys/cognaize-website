"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
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
          <Link href="/" className="flex flex-col items-start">
            <span
              className={cn(
                "font-heading text-2xl leading-tight transition-colors duration-300",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              Cognaize
            </span>
            <span
              className={cn(
                "font-body text-xs leading-tight transition-colors duration-300",
                isScrolled ? "text-gray-600" : "text-white/90"
              )}
            >
              Systems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
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
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                isScrolled
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "bg-white text-primary hover:bg-gray-50"
              )}
            >
              Request Demo
            </a>
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
