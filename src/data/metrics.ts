import type { Metric, ROIRow } from "@/types";

export const heroMetrics: Metric[] = [
  {
    value: "91%",
    numericValue: 91,
    suffix: "%",
    label: "Reduction in Review Time",
    description: "Reduction in review time",
  },
  {
    value: "95%+",
    numericValue: 95,
    suffix: "%+",
    label: "Detection Accuracy",
    description: "AI detection accuracy",
  },
  {
    value: "6",
    numericValue: 6,
    suffix: "",
    label: "Products. One Connected System.",
    description: "6 products in one connected system",
  },
];

export const roiData: ROIRow[] = [
  {
    metric: "Review Speed",
    before: "2-4 hours",
    after: "<15 minutes",
    impact: "10-16x faster",
  },
  {
    metric: "Cost per Review",
    before: "$150-300",
    after: "$5-10",
    impact: "10x cheaper",
  },
  {
    metric: "Error Detection Rate",
    before: "~70%",
    after: ">95%",
    impact: "3-5x fewer escapes",
  },
  {
    metric: "Rework Exposure",
    before: "12.5% of product value",
    after: "<1.5%",
    impact: "8-10x cost avoidance",
  },
];
