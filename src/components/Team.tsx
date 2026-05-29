"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

type TeamMember = { name: string; role: string; initials: string };

type TeamCopy = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: string;
  team: TeamMember[];
  joinTitle: string;
  joinSubtitle: string;
  joinAria: string;
};

const COPY: { es: TeamCopy; en: TeamCopy } = {
  es: {
    eyebrow: "Nuestro Equipo",
    titleLead: "Las personas detrás de la",
    titleAccent: "precisión",
    intro:
      "Un equipo multidisciplinario que combina derecho, tecnología y visión de negocio.",
    team: [
      { name: "Nicolás Lozada", role: "Chief Executive Officer", initials: "NL" },
      { name: "Shirlei Plaza", role: "Chief Administration Officer", initials: "SP" },
      { name: "Jordan Rojas", role: "Project & Automation Manager", initials: "JR" },
      { name: "James Daly", role: "Business Development Advisor", initials: "JD" },
      { name: "Oscar Echeverry", role: "Commercial & Processes Manager", initials: "OE" },
      { name: "Miguel Andrade", role: "Operations Manager", initials: "MA" },
      { name: "Jacobo Gómez", role: "Head of R&D", initials: "JG" },
    ],
    joinTitle: "Únete al equipo",
    joinSubtitle: "Estamos creciendo",
    joinAria: "Únete al equipo de REDEK",
  },
  en: {
    eyebrow: "Our Team",
    titleLead: "The people behind the",
    titleAccent: "precision",
    intro:
      "A multidisciplinary team blending law, technology and business vision.",
    team: [
      { name: "Nicolás Lozada", role: "Chief Executive Officer", initials: "NL" },
      { name: "Shirlei Plaza", role: "Chief Administration Officer", initials: "SP" },
      { name: "Jordan Rojas", role: "Project & Automation Manager", initials: "JR" },
      { name: "James Daly", role: "Business Development Advisor", initials: "JD" },
      { name: "Oscar Echeverry", role: "Commercial & Processes Manager", initials: "OE" },
      { name: "Miguel Andrade", role: "Operations Manager", initials: "MA" },
      { name: "Jacobo Gómez", role: "Head of R&D", initials: "JG" },
    ],
    joinTitle: "Join the team",
    joinSubtitle: "We're growing",
    joinAria: "Join the REDEK team",
  },
};

export default function Team() {
  const t = useCopy(COPY);

  return (
    <section id="equipo" className="divide-section bg-bg-soft py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-4">
            {t.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="h-display display-2 max-w-2xl">
            {t.titleLead}{" "}
            <span className="text-brand">{t.titleAccent}</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-muted"
          >
            {t.intro}
          </motion.p>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.team.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                className="card group flex items-center gap-4 px-5 py-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-bg-soft transition-colors group-hover:border-brand">
                  <span className="numeral text-xs font-semibold text-brand">
                    {m.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-text">
                    {m.name}
                  </h3>
                  <p className="truncate text-xs text-muted">{m.role}</p>
                </div>
              </motion.div>
            ))}

            {/* Join CTA card */}
            <motion.a
              href="#contacto"
              aria-label={t.joinAria}
              variants={fadeUp}
              whileTap={{ scale: 0.97 }}
              transition={{ ease: EASE_OUT_EXPO }}
              className="card group flex items-center gap-4 border-dashed px-5 py-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-brand">
                <span className="text-lg leading-none text-muted transition-colors group-hover:text-brand">
                  +
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-brand">
                  {t.joinTitle}
                </h3>
                <p className="text-xs text-muted">{t.joinSubtitle}</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
