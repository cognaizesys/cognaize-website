import type { NavLink } from "@/types";

export const COMPANY = {
  name: "Cognaize Systems",
  tagline: "Engineered Intelligence for Manufacturing",
  email: "info@cognaizesys.com",
  website: "https://cognaizesys.com",
  offices: [
    { city: "Chennai", country: "India" },
    { city: "Bangalore", country: "India" },
    { city: "Dubai", country: "UAE" },
    { city: "Singapore", country: "Singapore" },
    { city: "Asheville", country: "NC, USA" },
  ],
};

export const PRODUCT_LINKS = [
  {
    label: "Design Intelligence",
    href: "/products/design-intelligence",
  },
  {
    label: "Manufacturing Intelligence",
    href: "/products/manufacturing-intelligence",
  },
  {
    label: "Planning Intelligence",
    href: "/products/planning-intelligence",
  },
  {
    label: "Execution Intelligence",
    href: "/products/execution-intelligence",
  },
  {
    label: "Downtime Intelligence",
    href: "/products/downtime-intelligence",
  },
  {
    label: "Quality Intelligence",
    href: "/products/quality-intelligence",
  },
];

export const INDUSTRY_LINKS = [
  {
    label: "Automotive",
    href: "/industries/automotive",
  },
  {
    label: "Auto Components",
    href: "/industries/auto-components",
  },
  {
    label: "Oil & Gas",
    href: "/industries/oil-and-gas",
  },
  {
    label: "Chemical Processing Equipment",
    href: "/industries/chemical-processing-equipment",
  },
  {
    label: "Heavy Engineering",
    href: "/industries/heavy-engineering",
  },
  {
    label: "Industrial Equipment",
    href: "/industries/industrial-equipment",
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "/#products", children: PRODUCT_LINKS },
  { label: "Industries", href: "/#who-we-serve", children: INDUSTRY_LINKS },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];
