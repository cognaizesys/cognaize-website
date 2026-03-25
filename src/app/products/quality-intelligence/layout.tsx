import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Quality Intelligence - Digital Inspection Tied to Production Orders",
  description:
    "Quality Intelligence: Digital inspection forms linked to production orders. Automatic form selection, approval workflows, and quality feedback that closes the loop with Design Intelligence.",
  path: "/products/quality-intelligence",
});

export default function QualityIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
