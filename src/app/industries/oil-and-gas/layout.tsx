import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Oil & Gas - Manufacturing Intelligence",
  description:
    "Engineering intelligence for upstream equipment fabricators, refinery component manufacturers, and pipeline assembly shops. Safety codes and material traceability built in.",
  path: "/industries/oil-and-gas",
});

export default function OilAndGasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
