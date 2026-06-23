"use client";

import Image from "next/image";
import Link from "next/link";
import { useCopy } from "@/i18n/locale";

type NavLink = { label: string; href: string };

type FooterCopy = {
  tagline: string;
  linkedin: string;
  navHeading: string;
  legalHeading: string;
  contactHeading: string;
  navLinks: NavLink[];
  legalLinks: NavLink[];
  rights: string;
  descriptor: string;
};

const COPY: { es: FooterCopy; en: FooterCopy } = {
  es: {
    tagline:
      "Tecnología de resolución de disputas para organizaciones que exigen eficiencia sin sacrificar criterio.",
    linkedin: "LinkedIn",
    navHeading: "Navegación",
    legalHeading: "Legal",
    contactHeading: "Contacto",
    navLinks: [
      { label: "Nosotros", href: "/#nosotros" },
      { label: "Soluciones", href: "/#soluciones" },
      { label: "Casos", href: "/casos" },
      { label: "Seguridad", href: "/seguridad" },
      { label: "Precios", href: "/precios" },
      { label: "Contacto", href: "/#contacto" },
    ],
    legalLinks: [
      { label: "Política de Privacidad", href: "/privacidad" },
      { label: "Términos de Uso", href: "/terminos" },
    ],
    rights: "Todos los derechos reservados.",
    descriptor: "Soluciones Tecnológicas para Resolución de Disputas",
  },
  en: {
    tagline:
      "Dispute resolution technology for organizations that demand efficiency without sacrificing judgment.",
    linkedin: "LinkedIn",
    navHeading: "Navigation",
    legalHeading: "Legal",
    contactHeading: "Contact",
    navLinks: [
      { label: "About", href: "/#nosotros" },
      { label: "Solutions", href: "/#soluciones" },
      { label: "Cases", href: "/casos" },
      { label: "Security", href: "/seguridad" },
      { label: "Pricing", href: "/precios" },
      { label: "Contact", href: "/#contacto" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacidad" },
      { label: "Terms of Use", href: "/terminos" },
    ],
    rights: "All rights reserved.",
    descriptor: "Online Dispute Resolution Technology",
  },
};

export default function Footer() {
  const t = useCopy(COPY);

  return (
    <footer className="bg-bg text-text py-16 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/redek-logo.png"
                alt="REDEK"
                width={120}
                height={120}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted max-w-xs leading-relaxed">
              {t.tagline}
            </p>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/redek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-muted hover:text-brand transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {t.linkedin}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="eyebrow !text-text mb-4">{t.navHeading}</h4>
            <div className="flex flex-col gap-2.5">
              {t.navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="eyebrow !text-text mb-4">{t.legalHeading}</h4>
            <div className="flex flex-col gap-2.5">
              {t.legalLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted hover:text-text transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow !text-text mb-4">{t.contactHeading}</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:info@redek.co"
                className="text-sm text-muted hover:text-text transition-colors"
              >
                info@redek.co
              </a>
              <a
                href="https://redek.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors"
              >
                redek.co
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} REDEK. {t.rights}
          </p>
          <p className="text-xs text-muted">{t.descriptor}</p>
        </div>
      </div>
    </footer>
  );
}
