import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Automotive Components - Manufacturing Intelligence",
  description:
    "Engineering intelligence for auto-component manufacturers. From drawing review to shop floor tracking across pistons, gears, connecting rods, and powertrain components.",
  path: "/industries/automotive-components",
});

export default function AutomotiveComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
