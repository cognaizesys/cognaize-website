"use client";

import { useState } from "react";
import { Header } from "./header";
import { MobileNav } from "./mobile-nav";
import { Footer } from "./footer";

interface LayoutShellProps {
  children: React.ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header onMobileMenuOpen={() => setMobileMenuOpen(true)} />
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
