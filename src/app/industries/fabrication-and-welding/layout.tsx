import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Fabrication & Welding - Manufacturing Intelligence",
  description:
    "Engineering intelligence for fabricated structures, pressure vessels, and pipe assemblies. Built with awareness of ASME, EN, and IS code requirements.",
  path: "/industries/fabrication-and-welding",
});

export default function FabricationAndWeldingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
