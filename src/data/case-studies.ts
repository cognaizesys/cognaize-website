export interface Finding {
  id: string;
  severity: "CRITICAL" | "MAJOR";
  finding: string;
  implication: string;
}

export interface Outcome {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  moduleTag: string;
  moduleDisplay: string;
  title: string;
  subtitle: string;
  summary: string;
  industry: string;
  accent: string;
  productLink: string;
  outcomes: Outcome[];
  findings: Finding[];
  poweredBy: {
    name: string;
    description: string;
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "assembly-pharma",
    moduleTag: "Assembly Review",
    moduleDisplay: "Assembly Review",
    title: "GMP Pharmaceutical Filter Assembly",
    subtitle:
      "0.34m² Product Filter · SS316L · 15 parts · Design pressure 4 kg/cm²",
    summary:
      "J-clamp closure · SS316L primary · GMP + Pressure Vessel domain · EXTENDED Mode",
    industry: "Pharmaceutical",
    accent: "#6ee7b7",
    productLink: "/products/design-intelligence",
    outcomes: [
      { value: "4", label: "Critical defects caught" },
      { value: "600 kg", label: "Weight discrepancy flagged" },
      { value: "100%", label: "Compliance gaps identified" },
    ],
    findings: [
      {
        id: "F-1",
        severity: "CRITICAL",
        finding: "O-ring squeeze ratio 6.2% (required 15–25%)",
        implication:
          "Seal will leak under operating pressure. Groove depth/seal cross-section mismatch — redesign required.",
      },
      {
        id: "SA-1",
        severity: "CRITICAL",
        finding: "No pressure test specification on drawing",
        implication:
          "Cannot commission without documented hydrotest. Missing test pressure, duration, medium, acceptance criteria. ASME/PED non-compliance.",
      },
      {
        id: "SA-3",
        severity: "CRITICAL",
        finding: "Hinge structural adequacy undocumented",
        implication:
          "Heavy lid on pressurised GMP vessel with no load rating, weld spec, or pin sizing. Operator safety risk during maintenance.",
      },
      {
        id: "B-1",
        severity: "CRITICAL",
        finding:
          "600 kg weight discrepancy (BOM vs component drawing)",
        implication:
          "973 kg on BOM vs 373 kg on component drawing. Lifting provisions, foundation loads, and transport planning all affected.",
      },
    ],
    poweredBy: {
      name: "Assembly Interface Mapping",
      description:
        "The system extracts every component-to-component interface, classifies each by type (geometric, tolerance, load, fastening, sequence), and identifies the critical 20% where failures propagate furthest.",
    },
  },
  {
    id: "assembly-autopump",
    moduleTag: "Assembly Review",
    moduleDisplay: "Assembly Review",
    title: "Automotive Oil Pump Assembly",
    subtitle: "Gerotor Oil Pump · OEM Platform · 25+ parts",
    summary:
      "Chain-driven gerotor · ISO 16232 cleanliness · Assembly-only review · EXTENDED Mode",
    industry: "Automotive",
    accent: "#6ee7b7",
    productLink: "/products/design-intelligence",
    outcomes: [
      { value: "4", label: "Major findings at drawing stage" },
      { value: "Rev J", label: "Mature revision with gaps" },
      { value: "20–40%", label: "Preload variance risk" },
    ],
    findings: [
      {
        id: "P-1",
        severity: "MAJOR",
        finding:
          "Performance test parameters marked TBD at Rev J",
        implication:
          "Multiple test conditions unconfirmed at a mature revision. Cold start, relief valve, and boothing time specs incomplete — blocks validation sign-off.",
      },
      {
        id: "P-3",
        severity: "MAJOR",
        finding: "Chain drive kinematic specification gaps",
        implication:
          "Tensioner and lubrication provisions undocumented. Chain wear and timing drift risk in service.",
      },
      {
        id: "P-6",
        severity: "MAJOR",
        finding:
          "Centre distance tolerance tight for chain length",
        implication:
          "Worst-case stackup leaves <0.2mm adjustment range. Tensioner may not compensate. Assembly yield risk.",
      },
      {
        id: "P-13",
        severity: "MAJOR",
        finding:
          "Torque spec incomplete — no lubrication condition",
        implication:
          "Dry vs oiled changes achieved preload by 20–40%. Critical for pressure-containing joints.",
      },
    ],
    poweredBy: {
      name: "Assembly Interface Mapping",
      description:
        "The system extracts every component-to-component interface, classifies each by type (geometric, tolerance, load, fastening, sequence), and identifies the critical 20% where failures propagate furthest.",
    },
  },
  {
    id: "machine-piston",
    moduleTag: "Machine Review",
    moduleDisplay: "Machine Review",
    title: "Automotive Diesel Piston",
    subtitle:
      "DI Diesel Piston · 3-Ring Configuration · Complex geometry",
    summary: "Cam-turned oval skirt · DOP table present · STANDARD Mode",
    industry: "Automotive",
    accent: "#9b89cc",
    productLink: "/products/design-intelligence",
    outcomes: [
      { value: "3", label: "Major findings identified" },
      { value: "CNC", label: "Silent error risk flagged" },
      { value: "CR", label: "Compression ratio at risk" },
    ],
    findings: [
      {
        id: "P-1",
        severity: "MAJOR",
        finding:
          "No cam program reference or complete profile data",
        implication:
          "Skirt cam profile is the most critical machined feature. Without a referenced cam program, the manufacturer cannot verify skirt geometry. CNC errors propagate silently through production.",
      },
      {
        id: "P-2",
        severity: "MAJOR",
        finding: "Oil drain hole positional tolerance absent",
        implication:
          "Without positional tolerance, hole breakout into ring groove lands or skirt wall is uncontrolled. Mislocated holes reduce oil drainage, increasing oil consumption.",
      },
      {
        id: "P-3",
        severity: "MAJOR",
        finding: "Combustion bowl volume not specified",
        implication:
          "Bowl volume directly controls compression ratio on a DI diesel piston. No incoming inspection method — CR verification requires reverse-engineering from CAD. Emissions compliance at risk.",
      },
    ],
    poweredBy: {
      name: "Product Family Intelligence",
      description:
        "The system identifies the product family — diesel/petrol, ring count, bowl type, skirt profile — and activates domain-specific checks across six modules, calibrating severity to manufacturing reality.",
    },
  },
  {
    id: "forge-bevel",
    moduleTag: "Forge Review",
    moduleDisplay: "Forge Review",
    title: "Cold Formed Differential Bevel Pinion",
    subtitle:
      "Straight Bevel Pinion · Differential Application · Complex geometry",
    summary:
      "Net-formed teeth · Case carburised · Spline bore · Mating gear cross-check · STANDARD Mode",
    industry: "Automotive / Drivetrain",
    accent: "#60a5fa",
    productLink: "/products/design-intelligence",
    outcomes: [
      { value: "3", label: "Major findings identified" },
      { value: ">2%", label: "Pitch diameter error" },
      { value: "Cross-dwg", label: "Mating gear mismatch caught" },
    ],
    findings: [
      {
        id: "P-1",
        severity: "MAJOR",
        finding:
          "Gear data block inconsistency: pitch diameter vs module × teeth exceeds 2%",
        implication:
          "Pitch diameter does not match PD = Module × Teeth by >2%. Data transcription error corrupts backlash, contact ratio, and mating gear compatibility. Manufacturing to incorrect data produces scrap.",
      },
      {
        id: "P-2",
        severity: "MAJOR",
        finding:
          "Mating gear cone distance mismatch (cross-drawing check)",
        implication:
          "Outer cone distance differs >0.1mm vs mating side gear. Produces incorrect tooth contact pattern, concentrated loading at one end of face, and accelerated wear. Only detectable by reviewing both drawings together.",
      },
      {
        id: "P-3",
        severity: "MAJOR",
        finding:
          "Case depth not differentiated between tooth root and flank",
        implication:
          "Single case depth for entire tooth. Root and flank have different failure modes — bending fatigue vs contact fatigue. Depth adequate for flank may be insufficient at root, or excessive at tip causing brittle fracture.",
      },
    ],
    poweredBy: {
      name: "Product Family Intelligence",
      description:
        "Classifies gear type and application context, activates nine domain check modules. When both mating gears are uploaded, detects the relationship and validates compatibility across drawings — catching mismatches no single-drawing review can detect.",
    },
  },
  {
    id: "drawing-comparison",
    moduleTag: "Drawing Comparison",
    moduleDisplay: "Drawing Comparison",
    title: "Steering System Flange — Revision Comparison",
    subtitle:
      "Safety-Critical Flange · V1 vs V2 · Manufacturer of Steering Components for Automotive OEMs",
    summary:
      "49 changes detected: 3 Critical, 16 Major, 30 Minor · NOT INTERCHANGEABLE · Safety-critical steering load path",
    industry: "Automotive / Steering",
    accent: "#f59e0b",
    productLink: "/products/design-intelligence",
    outcomes: [
      { value: "49", label: "Changes detected" },
      { value: "3", label: "Critical changes" },
      { value: "NOT", label: "Interchangeable" },
    ],
    findings: [
      {
        id: "C-1",
        severity: "CRITICAL",
        finding:
          "Central bore ø135.00 → ø134.00 (−1.00 mm)",
        implication:
          "V1/V2 parts physically non-interchangeable. Requires CNC program update, tooling change, and new first article inspection.",
      },
      {
        id: "C-2",
        severity: "MAJOR",
        finding:
          "M24x3 thread tolerance class 6H removed in V2",
        implication:
          "Fastener fit unspecified on safety-critical steering joint. Affects inspection criteria and may impact clamping force under dynamic loads.",
      },
      {
        id: "C-4",
        severity: "MAJOR",
        finding:
          "Positional tolerance zone: ø0.2 → 0.2 (ø symbol removed)",
        implication:
          "Zone changes from cylindrical to width (parallel planes) for all bolt holes. Fundamentally different GD&T interpretation — affects CMM programs.",
      },
      {
        id: "C-5",
        severity: "MAJOR",
        finding:
          "Zinc plating note renumbered N3 → N2; title block still references N3",
        implication:
          "Broken cross-reference for surface treatment. Downstream process sheets and inspection plans now misaligned. Compliance documentation risk.",
      },
    ],
    poweredBy: {
      name: "Engineering Change Intelligence",
      description:
        "Extracts every dimension, tolerance, note, GD&T callout, and title block field from both revisions, performs structured comparison across seven categories, classifies each change by severity, and assesses interchangeability impact.",
    },
  },
];

export default CASE_STUDIES;
