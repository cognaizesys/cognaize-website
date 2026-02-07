import Link from "next/link";
import { COMPANY, PRODUCT_LINKS } from "@/lib/constants";
import { Container } from "./container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border bg-dark-bg">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex flex-col items-start">
                <span className="font-heading text-2xl leading-tight text-white">
                  Cognaize
                </span>
                <span className="font-body text-xs leading-tight text-text-on-dark">
                  Systems
                </span>
              </div>
              <p className="text-sm leading-relaxed text-text-on-dark">
                {COMPANY.tagline}. Transforming manufacturing operations through intelligent automation and data-driven insights.
              </p>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Products
              </h3>
              <ul className="space-y-2">
                {PRODUCT_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-on-dark hover:text-primary-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-sm text-text-on-dark hover:text-primary-light"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-sm text-text-on-dark hover:text-primary-light"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-text-on-dark hover:text-primary-light"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Contact
              </h3>
              <ul className="space-y-2 text-sm text-text-on-dark">
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="hover:text-primary-light"
                  >
                    {COMPANY.email}
                  </a>
                </li>
                <li>{COMPANY.location}</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-dark-border">
        <Container>
          <div className="py-6 text-center text-sm text-text-on-dark">
            <p>© {currentYear} {COMPANY.name}. All rights reserved.</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
