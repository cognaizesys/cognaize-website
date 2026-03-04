import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Join Cognaize Systems and build AI-powered manufacturing intelligence solutions. View open positions in Chennai, Bangalore, Dubai, and Charlotte, NC.",
  path: "/careers",
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
