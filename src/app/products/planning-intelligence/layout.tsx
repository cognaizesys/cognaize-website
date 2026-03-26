import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Planning Intelligence - AI Production Planning & Scheduling",
  description:
    "Planning Intelligence: AI-powered Advanced Planning and Scheduling. Optimise job allocation across machines and capacity constraints, and reschedule your entire production plan in seconds.",
  path: "/products/planning-intelligence",
});

export default function PlanningIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
