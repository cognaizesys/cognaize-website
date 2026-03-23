import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "SkyPlanner APS - AI Production Planning & Scheduling",
  description:
    "SkyPlanner APS: AI-powered Advanced Planning and Scheduling. Optimise job allocation across machines and capacity constraints, and reschedule your entire production plan in seconds.",
  path: "/products/skyplanner-aps",
});

export default function SkyPlannerAPSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
