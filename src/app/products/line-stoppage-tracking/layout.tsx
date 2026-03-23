import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Line Stoppage Tracking - Real-Time Downtime Visibility & Escalation",
  description:
    "Line Stoppage Tracking: Real-time stoppage notifications, automatic escalations, root cause capture, and production order impact analysis. Makes downtime visible, traceable, and actionable.",
  path: "/products/line-stoppage-tracking",
});

export default function LineStoppageTrackingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
