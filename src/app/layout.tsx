import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { COMPANY } from "@/lib/constants";
import { LayoutShell } from "@/components/layout/layout-shell";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cognaize Systems",
  alternateName: [
    "CognaizeSys",
    "Cognaize",
    "Cognaize System",
    "Cognaize Systems Pvt Ltd",
  ],
  url: "https://cognaizesys.com",
  logo: "https://cognaizesys.com/images/logo.png",
  description:
    "Cognaize Systems is an AI-powered manufacturing intelligence company specializing in engineering drawing review, error detection, and cost estimation.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@cognaizesys.com",
    contactType: "sales",
  },
  sameAs: [],
  foundingLocation: {
    "@type": "Place",
    name: "Chennai, India",
  },
  areaServed: ["IN", "AE"],
  knowsAbout: [
    "AI-powered manufacturing",
    "engineering drawing review",
    "manufacturing intelligence",
    "design intelligence",
    "cost estimation",
    "error detection",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cognaize Systems",
  alternateName: ["CognaizeSys", "Cognaize"],
  url: "https://cognaizesys.com",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
});

const siteDescription =
  "Cognaize Systems (CognaizeSys) delivers AI-powered engineering drawing review, error detection, and cost estimation for manufacturing. From 14 days to 15 minutes — 95%+ accuracy, 10x cost savings.";

export const metadata: Metadata = {
  title: `${COMPANY.name} - ${COMPANY.tagline}`,
  description: siteDescription,
  keywords: [
    "Cognaize Systems",
    "CognaizeSys",
    "Cognaize",
    "cognaize system",
    "AI manufacturing intelligence",
    "engineering drawing review",
    "AI cost estimation",
    "design intelligence",
    "manufacturing AI",
  ],
  metadataBase: new URL(COMPANY.website),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${COMPANY.name} - ${COMPANY.tagline}`,
    description: siteDescription,
    url: COMPANY.website,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} - ${COMPANY.tagline}`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
