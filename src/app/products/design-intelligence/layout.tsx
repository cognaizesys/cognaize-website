import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Design Intelligence - AI Engineering Drawing Review",
  description:
    "Cognaize Systems Design Intelligence: AI-powered engineering drawing review and error detection. Automatically scan drawings for compliance issues, annotation errors, and design flaws.",
  path: "/products/design-intelligence",
});

export default function DesignIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
