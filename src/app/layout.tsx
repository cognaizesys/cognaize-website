import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { COMPANY } from "@/lib/constants";
import { LayoutShell } from "@/components/layout/layout-shell";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cognaize Systems",
  url: "https://www.cognaizesys.com",
  logo: "https://www.cognaizesys.com/images/logo/cognaize-icon.png",
  description:
    "AI for Engineering Design Review and Manufacturing Costing. Purpose-built for automotive and industrial manufacturers.",
  foundingLocation: "Chennai, India",
  areaServed: ["India", "United Arab Emirates", "United States"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@cognaizesys.com",
    contactType: "sales",
  },
  sameAs: [],
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
  "Cognaize Systems builds AI for engineering design review and manufacturing cost estimation. Upload drawings, detect errors, estimate costs. 95%+ accuracy. Deploy in days. Chennai | Bangalore | Dubai.";

export const metadata: Metadata = {
  title: `${COMPANY.name} | AI Engineering Drawing Review & Cost Estimation`,
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
    title: `${COMPANY.name} | AI Engineering Drawing Review & Cost Estimation`,
    description: siteDescription,
    url: COMPANY.website,
    siteName: COMPANY.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | AI Engineering Drawing Review & Cost Estimation`,
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
      <head>
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
      </head>
      <body className="antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
