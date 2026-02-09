import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { COMPANY } from "@/lib/constants";
import { LayoutShell } from "@/components/layout/layout-shell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
});

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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
