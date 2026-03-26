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

interface NavChild {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}
