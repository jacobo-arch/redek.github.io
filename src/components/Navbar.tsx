"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import ScrollProgress from "./ScrollProgress";
import { useCopy } from "@/i18n/locale";

const navLinks = [
  { es: "Nosotros", en: "About", href: "/#nosotros", id: "nosotros" },
  { es: "Cómo funciona", en: "How it works", href: "/#como-funciona", id: "como-funciona" },
  { es: "Plataforma", en: "Platform", href: "/#plataforma", id: "plataforma" },
  { es: "Soluciones", en: "Solutions", href: "/#soluciones", id: "soluciones" },
  { es: "Equipo", en: "Team", href: "/#equipo", id: "equipo" },
  { es: "Contacto", en: "Contact", href: "/#contacto", id: "contacto" },
];

const COPY = {
  es: { cta: "Agendar demo", menu: "Menú", links: navLinks.map((l) => l.es) },
  en: { cta: "Book a demo", menu: "Menu", links: navLinks.map((l) => l.en) },
} as const;

export default function Navbar() {
  const t = useCopy(COPY);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <ScrollProgress />
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/redek-logo.png"
            alt="REDEK"
            width={120}
            height={120}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors ${
                active === link.id ? "text-text" : "text-muted hover:text-text"
              }`}
            >
              {t.links[i]}
              {active === link.id ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-brand"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : (
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brand/50 transition-transform group-hover:scale-x-100" />
              )}
            </Link>
          ))}
          <LanguageToggle />
          <ThemeToggle />
          <Link href="/#contacto" className="btn-primary !px-5 !py-2 !text-sm">
            {t.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label={t.menu}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-px w-5 bg-text transition-transform ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-text transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-text transition-transform ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-line bg-bg lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    active === link.id ? "text-brand" : "text-muted hover:text-text"
                  }`}
                >
                  {t.links[i]}
                </Link>
              ))}
              <Link
                href="/#contacto"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-2 justify-center"
              >
                {t.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
