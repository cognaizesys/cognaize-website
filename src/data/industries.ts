import {
  Car,
  Cog,
  Fuel,
  FlaskConical,
  Hammer,
  Factory,
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
  Thermometer,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

// ── Industry card data (landing page) ──────────────────────────────

interface IndustryCard {
  slug: string;
  name: string;
  oneLiner: string;
  icon: LucideIcon;
  href: string;
}

export const INDUSTRY_CARDS: IndustryCard[] = [
  {
    slug: "automotive",
    name: "Automotive",
    oneLiner:
      "OEMs and Tier 1 suppliers. Design validation through assembly line tracking, all connected.",
    icon: Car,
    href: "/industries/automotive",
  },
  {
    slug: "auto-components",
    name: "Auto Components",
    oneLiner:
      "Pistons, gears, powertrain parts. Drawing review through production tracking in one system.",
    icon: Cog,
    href: "/industries/auto-components",
  },
  {
    slug: "oil-and-gas",
    name: "Oil & Gas",
    oneLiner:
      "Upstream equipment, refinery components, pipeline assemblies. Safety-critical, code-governed work.",
    icon: Fuel,
    href: "/industries/oil-and-gas",
  },
  {
    slug: "chemical-processing-equipment",
    name: "Chemical Processing Equipment",
    oneLiner:
      "Reactors, heat exchangers, pressure vessels. Built around ASME, PED, and TEMA standards.",
    icon: FlaskConical,
    href: "/industries/chemical-processing-equipment",
  },
  {
    slug: "heavy-engineering",
    name: "Heavy Engineering",
    oneLiner:
      "Large-scale fabrication, structural steel, mining equipment. Tonnage meets tight tolerances.",
    icon: Hammer,
    href: "/industries/heavy-engineering",
  },
  {
    slug: "industrial-equipment",
    name: "Industrial Equipment",
    oneLiner:
      "Material handling, packaging lines, custom machinery. Engineered-to-order complexity made manageable.",
    icon: Factory,
    href: "/industries/industrial-equipment",
  },
];

// ── Product reference (for "Products That Apply" sections) ─────────

interface ProductRef {
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

interface ChallengeCard {
  icon: LucideIcon;
  heading: string;
  description: string;
}

interface ProofPoint {
  heading: string;
  items: string[];
}

interface IndustryPageData {
  slug: string;
  name: string;
  icon: LucideIcon;
  heroSubtitle: string;
  challenges: [ChallengeCard, ChallengeCard, ChallengeCard];
  applicableProductNames: string[];
  proofPoints?: ProofPoint;
}

export const INDUSTRY_PAGES: Record<string, IndustryPageData> = {
  automotive: {
    slug: "automotive",
    name: "Automotive",
    icon: Car,
    heroSubtitle:
      "Cognaize brings engineering intelligence to automotive OEMs and Tier 1 suppliers, covering design validation, cost estimation, production scheduling, shop floor tracking, and quality feedback loops.",
    challenges: [
      {
        icon: Layers,
        heading: "Multi-tier design complexity",
        description:
          "Vehicle programs involve thousands of drawings across sub-assemblies. Manual review slows down launches and lets tolerance conflicts slip through undetected.",
      },
      {
        icon: Clock,
        heading: "Shrinking program timelines",
        description:
          "SOP deadlines stay fixed while development cycles get shorter. Estimation, planning, and quality loops need to keep pace without sacrificing precision.",
      },
      {
        icon: AlertTriangle,
        heading: "Quality issues cascade across tiers",
        description:
          "A component-level defect surfaces as a line stoppage at the OEM. Without closed-loop traceability, the root cause stays buried across the supply chain.",
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
      heading: "Built for automotive scale",
      items: [
        "Handles multi-assembly drawing sets with cross-reference validation across sub-systems.",
        "Estimation modules tuned for automotive production volumes and multi-process routing.",
        "Closed-loop quality tracking that connects shop floor findings back to design, across all tiers.",
      ],
    },
  },

  "auto-components": {
    slug: "auto-components",
    name: "Auto Components",
    icon: Cog,
    heroSubtitle:
      "Cognaize covers the full chain for auto-component manufacturers: drawing review, cost estimation, production planning, shop floor tracking, and quality feedback across pistons, gears, connecting rods, and powertrain parts.",
    challenges: [
      {
        icon: FileSearch,
        heading: "Drawing complexity at scale",
        description:
          "Hundreds of drawings land every month, each packed with tolerances and GD&T that need expert review. Manual processes can't keep pace with the volume.",
      },
      {
        icon: Clock,
        heading: "Costing under pressure",
        description:
          "RFQ turnaround times keep shrinking. Estimates still depend on whoever happens to be available, and the backlog only grows.",
      },
      {
        icon: AlertTriangle,
        heading: "Quality traceability gaps",
        description:
          "Rejection data stays locked in quality departments. It never reaches the engineers who designed the part, so the same problems keep recurring.",
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

  "oil-and-gas": {
    slug: "oil-and-gas",
    name: "Oil & Gas",
    icon: Fuel,
    heroSubtitle:
      "Engineering intelligence for upstream equipment fabricators, refinery component manufacturers, and pipeline assembly shops where safety codes and material traceability are non-negotiable.",
    challenges: [
      {
        icon: ShieldCheck,
        heading: "Strict code compliance requirements",
        description:
          "Every component must meet API, ASME, or NACE standards. One missed material spec or weld procedure error means costly rework or complete rejection.",
      },
      {
        icon: DollarSign,
        heading: "High-value, low-volume estimation",
        description:
          "Each job is different. Costing depends on exotic alloys, special welding procedures, and extensive NDE requirements that off-the-shelf tools miss entirely.",
      },
      {
        icon: Layers,
        heading: "End-to-end traceability demands",
        description:
          "Material test reports, weld maps, and inspection records must link back to every component. Paper-based systems leave gaps that audits quickly expose.",
      },
    ],
    applicableProductNames: [
      "Design Intelligence",
      "Manufacturing Intelligence",
      "Execution Intelligence",
      "Downtime Intelligence",
      "Quality Intelligence",
    ],
    proofPoints: {
      heading: "Purpose-built for oil & gas fabrication",
      items: [
        "Drawing review modules that understand API, ASME Section VIII, and NACE material requirements.",
        "Estimation logic that accounts for exotic alloys, post-weld heat treatment, and NDE coverage.",
        "Quality Intelligence connects MTRs, weld records, and inspection data to production orders end-to-end.",
      ],
    },
  },

  "chemical-processing-equipment": {
    slug: "chemical-processing-equipment",
    name: "Chemical Processing Equipment",
    icon: FlaskConical,
    heroSubtitle:
      "Cognaize supports manufacturers of reactors, heat exchangers, columns, and pressure vessels with intelligence tuned for ASME, PED, and TEMA code requirements across every stage of production.",
    challenges: [
      {
        icon: Thermometer,
        heading: "Design governed by process conditions",
        description:
          "Temperature, pressure, and corrosion dictate material selection and wall thickness. Review errors here only surface at hydro-test, or worse, in the field.",
      },
      {
        icon: DollarSign,
        heading: "Complex, multi-stage costing",
        description:
          "A single vessel involves plate rolling, welding, machining, NDE, heat treatment, and surface finishing. Accurate estimates demand deep process knowledge.",
      },
      {
        icon: Clock,
        heading: "Long lead times, hard milestones",
        description:
          "Delivery timelines stretch months, but every stage (procurement, fabrication, inspection) has firm gates. A delay at one stage compounds through the rest.",
      },
    ],
    applicableProductNames: [
      "Design Intelligence",
      "Manufacturing Intelligence",
      "Planning Intelligence",
      "Execution Intelligence",
      "Quality Intelligence",
    ],
    proofPoints: {
      heading: "Engineered for process equipment",
      items: [
        "Drawing review that understands ASME Section VIII Div. 1 & 2, PED, and TEMA standards.",
        "Estimation modules built for multi-stage fabrication routing across vessels and exchangers.",
        "Planning Intelligence manages long-cycle production with stage-gate milestone tracking throughout.",
      ],
    },
  },

  "heavy-engineering": {
    slug: "heavy-engineering",
    name: "Heavy Engineering",
    icon: Hammer,
    heroSubtitle:
      "Engineering intelligence for heavy fabrication shops, structural steel manufacturers, and mining equipment builders where scale, weight, and weld quality define every job.",
    challenges: [
      {
        icon: Gauge,
        heading: "Scale creates unique constraints",
        description:
          "Components weigh tons and tolerances stay tight despite the size. Handling logistics affect every step, from plate cutting through final assembly.",
      },
      {
        icon: Crosshair,
        heading: "Every job is a prototype",
        description:
          "Engineered-to-order work means little repetition. Each drawing set needs fresh review, new process routing, and a unique cost estimate from scratch.",
      },
      {
        icon: Workflow,
        heading: "Coordinating across large shop floors",
        description:
          "Multiple bays, cranes, and work centers need to stay in sync. Without real-time visibility, bottlenecks build up and go unnoticed for days at a time.",
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
      heading: "Proven in heavy fabrication",
      items: [
        "Drawing review handles large-format assembly drawings with weld joint and material callout validation.",
        "Estimation tuned for heavy plate, structural sections, and multi-process fabrication routing.",
        "Real-time shop floor tracking across multiple bays and work centers with crane and resource visibility.",
      ],
    },
  },

  "industrial-equipment": {
    slug: "industrial-equipment",
    name: "Industrial Equipment",
    icon: Factory,
    heroSubtitle:
      "Cognaize powers intelligence for manufacturers of material handling systems, packaging lines, and custom machinery where engineered-to-order complexity meets tight delivery pressure.",
    challenges: [
      {
        icon: Layers,
        heading: "High mix, deep BOMs",
        description:
          "Every machine is a unique configuration with hundreds of parts. Drawing review and estimation effort multiplies with every variant and option combination.",
      },
      {
        icon: DollarSign,
        heading: "Margins depend on estimation accuracy",
        description:
          "Custom equipment pricing is built on process routing assumptions. Get the estimate wrong and the margin disappears by the time the machine ships out.",
      },
      {
        icon: Clock,
        heading: "Delivery dates drive everything",
        description:
          "Customers plan facility layouts and production starts around your delivery commitment. Late equipment means penalties, lost trust, and lost repeat business.",
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
      heading: "Built for equipment manufacturers",
      items: [
        "Drawing review handles complex assembly drawings with multi-level BOM validation built in.",
        "Estimation logic for mixed-process routing: machining, fabrication, assembly, and testing stages.",
        "Planning and execution intelligence manages parallel work streams across sub-assemblies to hit delivery dates.",
      ],
    },
  },
};
