import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Precision Machining - Manufacturing Intelligence",
  description:
    "For CNC job shops and precision manufacturers who compete on accuracy, speed, and cost. Cognaize turns drawing data into structured feasibility checks, routing, and cost estimates.",
  path: "/industries/precision-machining",
});

export default function PrecisionMachiningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
