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
    label: "SkyPlanner APS",
    href: "https://skyplanner.ai",
    external: true,
  },
  {
    label: "DataWiz",
    href: "https://factri.ai",
    external: true,
  },
  {
    label: "Line Stoppage Tracking",
    href: "https://factri.ai",
    external: true,
  },
  {
    label: "Quality Check Sheets",
    href: "https://factri.ai",
    external: true,
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "/#products", children: PRODUCT_LINKS },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];
