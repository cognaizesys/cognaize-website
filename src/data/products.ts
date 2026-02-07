import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "di",
    name: "Design Intelligence",
    fullName: "Design Intelligence (DI)",
    tagline: "AI-powered engineering drawing review",
    description:
      "Automatically analyze engineering drawings to detect critical errors, missing specifications, and tolerance issues before they reach production. Reduce review time from hours to minutes.",
    features: [
      {
        title: "AI Drawing Analysis",
        description: "Automatically detect errors across 13+ categories including tolerancing, material specs, and GD&T callouts",
        icon: "Scan",
      },
      {
        title: "Severity Classification",
        description: "Issues classified as Critical, Major, or Minor with confidence scores for prioritized review",
        icon: "AlertTriangle",
      },
      {
        title: "Annotation Tools",
        description: "Built-in measurement, text, and arrow tools for collaborative review directly on drawings",
        icon: "PenTool",
      },
      {
        title: "PDF Export & Reporting",
        description: "Export detailed findings reports with annotated drawings for stakeholder review",
        icon: "FileDown",
      },
    ],
    screenshots: [
      {
        src: "/images/products/di/di-overview.png",
        alt: "Design Intelligence - AI Drawing Review Overview",
        label: "AI Drawing Review",
      },
      {
        src: "/images/products/di/di-finding-detail.png",
        alt: "Design Intelligence - Finding Detail View",
        label: "Finding Details",
      },
      {
        src: "/images/products/di/di-material-finding.png",
        alt: "Design Intelligence - Material Specification Finding",
        label: "Material Analysis",
      },
    ],
    href: "/products/design-intelligence",
  },
  {
    id: "mi",
    name: "Manufacturing Intelligence",
    fullName: "Manufacturing Intelligence (MI)",
    tagline: "AI-powered cost estimation from engineering drawings",
    description:
      "Upload an engineering drawing and get instant AI-powered cost estimation. From drawing to quote in minutes — including material analysis, feasibility checks, routing, job cards, and detailed costing.",
    features: [
      {
        title: "Drawing Upload & Analysis",
        description: "Upload PNG, JPG, or PDF drawings and extract key specifications automatically",
        icon: "Upload",
      },
      {
        title: "Feasibility Assessment",
        description: "AI checks material availability, machine capability, and tolerance achievability",
        icon: "CheckCircle",
      },
      {
        title: "Auto Job Card Generation",
        description: "Generate complete job cards with operations, machines, setup/run times",
        icon: "ClipboardList",
      },
      {
        title: "Detailed Cost Breakdown",
        description: "Material, process, and outsource costs with full transparency",
        icon: "Calculator",
      },
    ],
    screenshots: [
      {
        src: "/images/products/mi/mi-upload.png",
        alt: "Manufacturing Intelligence - Drawing Upload",
        label: "Upload Drawing",
      },
      {
        src: "/images/products/mi/mi-review.png",
        alt: "Manufacturing Intelligence - Key Specifications Review",
        label: "Review Specs",
      },
      {
        src: "/images/products/mi/mi-feasibility.png",
        alt: "Manufacturing Intelligence - Feasibility Analysis",
        label: "Feasibility Check",
      },
      {
        src: "/images/products/mi/mi-jobcard.png",
        alt: "Manufacturing Intelligence - Job Card Generation",
        label: "Job Card",
      },
      {
        src: "/images/products/mi/mi-costing.png",
        alt: "Manufacturing Intelligence - Cost Breakdown",
        label: "Cost Breakdown",
      },
    ],
    href: "/products/manufacturing-intelligence",
  },
];
