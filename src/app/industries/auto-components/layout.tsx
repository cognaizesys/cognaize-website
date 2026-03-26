import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Auto Components - Manufacturing Intelligence",
  description:
    "Engineering intelligence for auto-component manufacturers. From drawing review to shop floor tracking across pistons, gears, connecting rods, and powertrain components.",
  path: "/industries/auto-components",
});

export default function AutoComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
