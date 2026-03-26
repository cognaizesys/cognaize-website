import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Heavy Engineering - Manufacturing Intelligence",
  description:
    "Engineering intelligence for heavy fabrication shops, structural steel manufacturers, and mining equipment builders. Where tonnage meets tight tolerances.",
  path: "/industries/heavy-engineering",
});

export default function HeavyEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
