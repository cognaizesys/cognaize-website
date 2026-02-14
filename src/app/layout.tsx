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
  description: "AI-powered engineering drawing review, error detection, and cost estimation for manufacturing. From 14 days to 15 minutes — 95%+ accuracy, 10x cost savings. Deploy in under 1 week.",
  verification: {
    google: "qKQv3zYDqI3WtJu6l-VtBQU5gkK1rTYczATbHDaYufc",
  },
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
