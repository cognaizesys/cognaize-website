import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Downtime Intelligence - Real-Time Downtime Visibility & Escalation",
  description:
    "Downtime Intelligence: Real-time stoppage notifications, automatic escalations, root cause capture, and production order impact analysis. Makes downtime visible, traceable, and actionable.",
  path: "/products/downtime-intelligence",
});

export default function DowntimeIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
