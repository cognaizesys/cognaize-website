import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Cognaize Systems builds Engineered Intelligence for manufacturing — expert judgment structured into systems that scale across your organisation and improve with every production cycle.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
