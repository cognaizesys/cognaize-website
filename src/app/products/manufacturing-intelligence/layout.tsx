import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Manufacturing Intelligence - AI Cost Estimation",
  description:
    "Cognaize Systems Manufacturing Intelligence: AI-powered cost estimation and production planning for manufacturing. From 14 days to 15 minutes with 95%+ accuracy.",
  path: "/products/manufacturing-intelligence",
});

export default function ManufacturingIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
