import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Industrial Equipment - Manufacturing Intelligence",
  description:
    "Engineering intelligence for manufacturers of material handling systems, packaging lines, and custom machinery. Engineered-to-order complexity, simplified.",
  path: "/industries/industrial-equipment",
});

export default function IndustrialEquipmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
