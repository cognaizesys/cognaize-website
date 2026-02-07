import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { LayoutShell } from "@/components/layout/layout-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: `${COMPANY.name} - ${COMPANY.tagline}`,
  description: "Transform your manufacturing operations with AI-powered design and manufacturing intelligence. From CAD analysis to production optimization, Cognaize Systems delivers cutting-edge solutions for modern manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
