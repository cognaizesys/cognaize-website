import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Automotive - Manufacturing Intelligence",
  description:
    "Engineering intelligence for automotive OEMs and Tier 1 suppliers. From design validation and cost estimation through production scheduling and quality feedback loops.",
  path: "/industries/automotive",
});

export default function AutomotiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
