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

export interface HeroProduct {
  name: string;
  stage: string;
  image: string;
  accentColor: string;
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

export interface NavChild {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}
