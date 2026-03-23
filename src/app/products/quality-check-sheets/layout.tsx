import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Quality Check Sheets - Digital Inspection Tied to Production Orders",
  description:
    "Quality Check Sheets: Digital inspection forms linked to production orders. Automatic form selection, approval workflows, and quality feedback that closes the loop with Design Intelligence.",
  path: "/products/quality-check-sheets",
});

export default function QualityCheckSheetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
