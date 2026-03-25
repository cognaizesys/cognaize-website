import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Industries - Manufacturing Intelligence by Sector",
  description:
    "Engineering intelligence built for discrete manufacturing. Cognaize serves automotive components, forging & casting, precision machining, and fabrication & welding.",
  path: "/industries",
});

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
