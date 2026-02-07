export const COMPANY = {
  name: "Cognaize Systems",
  tagline: "AI-Powered Manufacturing Intelligence",
  email: "info@cognaizesys.com",
  website: "https://cognaizesys.com",
  location: "Dubai, UAE",
  phone: "+971-XX-XXXXXXX",
};

export const NAV_LINKS = [
  { label: "Products", href: "/#products" },
  { label: "Platform", href: "/#differentiators" },
  { label: "Team", href: "/#team" },
  { label: "Demo", href: "/#demo" },
  { label: "Contact", href: "/#contact" },
] as const;

export const PRODUCT_LINKS = [
  {
    label: "Design Intelligence",
    href: "/products/design-intelligence",
  },
  {
    label: "Manufacturing Intelligence",
    href: "/products/manufacturing-intelligence",
  },
] as const;

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";
