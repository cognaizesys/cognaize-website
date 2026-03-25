import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Forging & Casting - Manufacturing Intelligence",
  description:
    "Purpose-built intelligence for foundries and forge shops. Cognaize understands process constraints, material behaviors, and standards specific to cast and forged components.",
  path: "/industries/forging-and-casting",
});

export default function ForgingAndCastingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
