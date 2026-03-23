import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "DataWiz - Real-Time Shop Floor Production Tracking",
  description:
    "DataWiz: Real-time production tracking across job status, cycle times, WIP, and output. The operational data that makes your cost estimates and planning more accurate over time.",
  path: "/products/datawiz",
});

export default function DataWizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
