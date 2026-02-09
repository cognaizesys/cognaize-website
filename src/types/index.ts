export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  initials: string;
  color: string;
}

export interface Product {
  id: "di" | "mi";
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  features: ProductFeature[];
  screenshots: ProductScreenshot[];
  href: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductScreenshot {
  src: string;
  alt: string;
  label: string;
}

export interface Metric {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Industry {
  name: string;
  icon: string;
  description: string;
}

export interface ROIRow {
  metric: string;
  before: string;
  after: string;
  impact: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  screenshot?: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}
