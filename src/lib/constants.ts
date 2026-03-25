import type { NavLink } from "@/types";

export const COMPANY = {
  name: "Cognaize Systems",
  tagline: "Engineered Intelligence for Manufacturing",
  email: "info@cognaizesys.com",
  website: "https://cognaizesys.com",
  location: "Chennai | Bangalore | Dubai | Asheville, NC",
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
    label: "Automotive Components",
    href: "/industries/automotive-components",
  },
  {
    label: "Forging & Casting",
    href: "/industries/forging-and-casting",
  },
  {
    label: "Precision Machining",
    href: "/industries/precision-machining",
  },
  {
    label: "Fabrication & Welding",
    href: "/industries/fabrication-and-welding",
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "/#products", children: PRODUCT_LINKS },
  { label: "Industries", href: "/industries", children: INDUSTRY_LINKS },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];
