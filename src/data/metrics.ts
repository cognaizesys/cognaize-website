import type { Metric, ROIRow } from "@/types";

export const heroMetrics: Metric[] = [
  {
    value: "16x",
    numericValue: 16,
    suffix: "x",
    label: "Faster",
    description: "From hours to minutes per drawing",
  },
  {
    value: "95%+",
    numericValue: 95,
    suffix: "%+",
    label: "Accuracy",
    description: "AI detection rate",
  },
  {
    value: "10x",
    numericValue: 10,
    suffix: "x",
    label: "Savings",
    description: "Cost avoidance on rework",
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
