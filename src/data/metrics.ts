import type { Metric, ROIRow } from "@/types";

export const heroMetrics: Metric[] = [
  {
    value: "75%",
    numericValue: 75,
    suffix: "%",
    label: "Cost Reduction",
    description: "In drawing review costs",
  },
  {
    value: "16x",
    numericValue: 16,
    suffix: "x",
    label: "Faster Reviews",
    description: "Engineering review speed",
  },
  {
    value: "10x",
    numericValue: 10,
    suffix: "x",
    label: "Faster Quoting",
    description: "Cost estimation speed",
  },
  {
    value: "10x",
    numericValue: 10,
    suffix: "x",
    label: "Cost Avoidance",
    description: "Rework cost avoidance",
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
  {
    metric: "Implementation Time",
    before: "3-6 months",
    after: "<1 week",
    impact: ">10x faster",
  },
];
