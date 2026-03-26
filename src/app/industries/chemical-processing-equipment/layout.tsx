import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Chemical Processing Equipment - Manufacturing Intelligence",
  description:
    "Engineering intelligence for manufacturers of reactors, heat exchangers, columns, and pressure vessels. Tuned for ASME, PED, and TEMA code requirements.",
  path: "/industries/chemical-processing-equipment",
});

export default function ChemicalProcessingEquipmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
