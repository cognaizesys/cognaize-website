import type { Metric, ROIRow } from "@/types";

export const heroMetrics: Metric[] = [
  {
    value: "91%",
    numericValue: 91,
    suffix: "%",
    label: "Faster Reviews",
    description: "Drawing review time reduction",
  },
  {
    value: "50%",
    numericValue: 50,
    suffix: "%",
    label: "Shorter Lead Times",
    description: "Production lead time reduction",
  },
  {
    value: "8×",
    numericValue: 8,
    suffix: "×",
    label: "Rework Avoidance",
    description: "Reduction in rework exposure",
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
