import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Execution Intelligence - Real-Time Shop Floor Production Tracking",
  description:
    "Execution Intelligence: Real-time production tracking across job status, cycle times, WIP, and output. The operational data that makes your cost estimates and planning more accurate over time.",
  path: "/products/execution-intelligence",
});

export default function ExecutionIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
