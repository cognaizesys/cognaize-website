import type { NavLink } from "@/types";

export const COMPANY = {
  name: "Cognaize Systems",
  tagline: "AI-Powered Manufacturing Intelligence",
  email: "info@cognaizesys.com",
  website: "https://cognaizesys.com",
  location: "Chennai | Bangalore | Dubai",
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
];

export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "/#products", children: PRODUCT_LINKS },
  { label: "Platform", href: "/#differentiators" },
  { label: "Team", href: "/#team" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Demo", href: "/#demo" },
  { label: "Contact", href: "/#contact" },
];
