import {
  Car,
  Flame,
  Target,
  Wrench,
  PenTool,
  Calculator,
  CalendarDays,
  Settings,
  BarChart3,
  Lightbulb,
  FileSearch,
  Clock,
  AlertTriangle,
  DollarSign,
  Layers,
  Crosshair,
  Gauge,
  type LucideIcon,
} from "lucide-react";

// ── Industry card data (landing page) ──────────────────────────────

export interface IndustryCard {
  slug: string;
  name: string;
  oneLiner: string;
  icon: LucideIcon;
  href: string;
}

export const INDUSTRY_CARDS: IndustryCard[] = [
  {
    slug: "automotive-components",
    name: "Automotive Components",
    oneLiner:
      "Pistons, gears, powertrain components. From drawing review to production tracking.",
    icon: Car,
    href: "/industries/automotive-components",
  },
  {
    slug: "forging-and-casting",
    name: "Forging & Casting",
    oneLiner:
      "Hot forging, cold forming, die casting, sand casting. Deep process knowledge built in.",
    icon: Flame,
    href: "/industries/forging-and-casting",
  },
  {
    slug: "precision-machining",
    name: "Precision Machining",
    oneLiner:
      "CNC turning, milling, grinding, EDM. For job shops and make-to-print manufacturers.",
    icon: Target,
    href: "/industries/precision-machining",
  },
  {
    slug: "fabrication-and-welding",
    name: "Fabrication & Welding",
    oneLiner:
      "Welded structures, pressure vessels, pipe assemblies. Code-governed work (ASME, EN, IS).",
    icon: Wrench,
    href: "/industries/fabrication-and-welding",
  },
];

// ── Product reference (for "Products That Apply" sections) ─────────

export interface ProductRef {
  stage: string;
  icon: LucideIcon;
  name: string;
  description: string;
  href: string;
}

export const ALL_PRODUCTS: ProductRef[] = [
  {
    stage: "Design",
    icon: PenTool,
    name: "Design Intelligence",
    description:
      "Catch drawing issues before they become problems on the shop floor",
    href: "/products/design-intelligence",
  },
  {
    stage: "Estimate",
    icon: Calculator,
    name: "Manufacturing Intelligence",
    description:
      "Go from drawing to accurate cost sheet in minutes, not days",
    href: "/products/manufacturing-intelligence",
  },
  {
    stage: "Planning",
    icon: CalendarDays,
    name: "Planning Intelligence",
    description:
      "Reschedule production in seconds when priorities change on the floor",
    href: "/products/planning-intelligence",
  },
  {
    stage: "Shop Floor",
    icon: Settings,
    name: "Execution Intelligence",
    description:
      "See what\u2019s happening on your floor right now, not yesterday",
    href: "/products/execution-intelligence",
  },
  {
    stage: "Monitor",
    icon: BarChart3,
    name: "Downtime Intelligence",
    description:
      "Make downtime visible, traceable, and actionable before it spreads",
    href: "/products/downtime-intelligence",
  },
  {
    stage: "Improve",
    icon: Lightbulb,
    name: "Quality Intelligence",
    description:
      "Digitize quality data at source and link it back to production orders",
    href: "/products/quality-intelligence",
  },
];

// ── Industry page data ─────────────────────────────────────────────

export interface ChallengeCard {
  icon: LucideIcon;
  heading: string;
  description: string;
}

export interface ProofPoint {
  heading: string;
  items: string[];
}

export interface IndustryPageData {
  slug: string;
  name: string;
  icon: LucideIcon;
  heroSubtitle: string;
  challenges: [ChallengeCard, ChallengeCard, ChallengeCard];
  applicableProductNames: string[];
  proofPoints?: ProofPoint;
}

export const INDUSTRY_PAGES: Record<string, IndustryPageData> = {
  "automotive-components": {
    slug: "automotive-components",
    name: "Automotive Components",
    icon: Car,
    heroSubtitle:
      "Cognaize handles the full chain for auto-component manufacturers, from drawing review through shop floor tracking, across pistons, gears, connecting rods, and powertrain parts.",
    challenges: [
      {
        icon: FileSearch,
        heading: "Drawing complexity at scale",
        description:
          "Hundreds of drawings per month, each with tolerances and GD&T that need expert review. Manual review can't keep up.",
      },
      {
        icon: Clock,
        heading: "Costing under pressure",
        description:
          "RFQ turnaround times are shrinking. Estimates still depend on whoever happens to be available.",
      },
      {
        icon: AlertTriangle,
        heading: "Quality traceability gaps",
        description:
          "Rejection data stays in quality, never feeds back to the engineers who designed the part. The same issues repeat.",
      },
    ],
    applicableProductNames: [
      "Design Intelligence",
      "Manufacturing Intelligence",
      "Planning Intelligence",
      "Execution Intelligence",
      "Downtime Intelligence",
      "Quality Intelligence",
    ],
    proofPoints: {
      heading: "Built for automotive components",
      items: [
        "DI includes Piston Pack and Gear Pack with domain-specific review logic for these component families.",
        "91% faster drawing reviews compared to manual expert review.",
        "95%+ accuracy on critical finding detection across tolerance, GD&T, and material callout checks.",
      ],
    },
  },

  "forging-and-casting": {
    slug: "forging-and-casting",
    name: "Forging & Casting",
    icon: Flame,
    heroSubtitle:
      "Purpose-built intelligence for foundries and forge shops. Cognaize understands the process constraints, material behaviors, and standards specific to cast and forged components.",
    challenges: [
      {
        icon: Layers,
        heading: "Process-specific review gaps",
        description:
          "Generic tools miss what matters in forging and casting: draft angles, parting lines, shrinkage allowances, gating design implications.",
      },
      {
        icon: DollarSign,
        heading: "Estimation is an art",
        description:
          "Costing forged and cast parts depends on years of tribal knowledge about material yield, die life, and process routing.",
      },
      {
        icon: AlertTriangle,
        heading: "Disconnected quality data",
        description:
          "Defect patterns in castings and forgings repeat because quality findings don't flow back to the design or process planning stage.",
      },
    ],
    applicableProductNames: [
      "Design Intelligence",
      "Manufacturing Intelligence",
      "Quality Intelligence",
    ],
    proofPoints: {
      heading: "Deep process knowledge",
      items: [
        "DI includes ForgeReview and CastReview modules with alloy-aware review logic for casting processes.",
        "MI includes ForgeCalc and CastCalc for process-specific cost estimation.",
        "See the ForgeReview case study: Cold Formed Differential Bevel Pinion review with 3 critical findings.",
      ],
    },
  },

  "precision-machining": {
    slug: "precision-machining",
    name: "Precision Machining",
    icon: Target,
    heroSubtitle:
      "For CNC job shops and precision manufacturers who compete on accuracy, speed, and cost. Cognaize turns drawing data into structured feasibility checks, routing, and cost estimates.",
    challenges: [
      {
        icon: Layers,
        heading: "Every job is different",
        description:
          "High-mix, low-volume work means every drawing needs fresh review and costing. There's no time for deep analysis on each one.",
      },
      {
        icon: Gauge,
        heading: "Quoting speed vs accuracy",
        description:
          "Faster quotes win jobs, but rushed estimates erode margin. The tension between speed and accuracy never goes away.",
      },
      {
        icon: Crosshair,
        heading: "Machine utilization guesswork",
        description:
          "Scheduling across multiple CNC machines with varying capabilities is done manually, and re-planning happens constantly.",
      },
    ],
    applicableProductNames: [
      "Design Intelligence",
      "Manufacturing Intelligence",
      "Planning Intelligence",
      "Execution Intelligence",
    ],
    proofPoints: {
      heading: "Speed without sacrificing accuracy",
      items: [
        "Go from drawing to accurate cost sheet in minutes, not days.",
        "10x faster estimation with MI's MachineCalc module.",
        "DI's MachineReview catches feasibility issues before they reach the shop floor.",
      ],
    },
  },

  "fabrication-and-welding": {
    slug: "fabrication-and-welding",
    name: "Fabrication & Welding",
    icon: Wrench,
    heroSubtitle:
      "Engineering intelligence for fabricated structures, pressure vessels, and pipe assemblies. Built with awareness of ASME, EN, and IS code requirements.",
    challenges: [
      {
        icon: AlertTriangle,
        heading: "Code compliance is non-negotiable",
        description:
          "Fabricated components are governed by strict standards. Missing a weld specification or material requirement can mean rejection or worse.",
      },
      {
        icon: Layers,
        heading: "Multi-process complexity",
        description:
          "A single fabricated assembly involves cutting, forming, welding, machining, and inspection. Coordinating across processes is where delays hide.",
      },
      {
        icon: Clock,
        heading: "Stoppage visibility",
        description:
          "Large fabrication lines have downtime that goes unreported. Without real-time tracking, root causes stay invisible.",
      },
    ],
    applicableProductNames: [
      "Design Intelligence",
      "Manufacturing Intelligence",
      "Execution Intelligence",
      "Downtime Intelligence",
    ],
    proofPoints: {
      heading: "Proven in fabrication",
      items: [
        "SATRAC (trailer and truck body manufacturer) uses Cognaize for shop floor tracking.",
        "20% production efficiency increase with real-time execution visibility.",
        "50% WIP reduction through better scheduling and tracking.",
      ],
    },
  },
};
