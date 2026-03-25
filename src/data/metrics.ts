import type { Metric, ROIRow } from "@/types";

export const heroMetrics: Metric[] = [
  {
    value: "6",
    numericValue: 6,
    suffix: "",
    label: "Products",
    description: "Six dedicated products",
  },
  {
    value: "3",
    numericValue: 3,
    suffix: "",
    label: "Closed Loops",
    description: "Three feedback loops",
  },
  {
    value: "1",
    numericValue: 1,
    suffix: "",
    label: "System",
    description: "One connected system",
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
