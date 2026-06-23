"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
};

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
      { name: "Nicolás Lozada", role: "Chief Executive Officer", initials: "NL", photo: "/team/nicolas-lozada.jpeg" },
      { name: "Shirlei Plaza", role: "Chief Administration Officer", initials: "SP", photo: "/team/shirlei-plaza.jpeg" },
      { name: "Jacobo Gómez", role: "Head of R&D", initials: "JG", photo: "/team/jacobo-gomez.JPG" },
      { name: "Juan Camilo Girón", role: "Equipo REDEK", initials: "JC", photo: "/team/juan-camilo-giron.jpeg" },
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
      { name: "Nicolás Lozada", role: "Chief Executive Officer", initials: "NL", photo: "/team/nicolas-lozada.jpeg" },
      { name: "Shirlei Plaza", role: "Chief Administration Officer", initials: "SP", photo: "/team/shirlei-plaza.jpeg" },
      { name: "Jacobo Gómez", role: "Head of R&D", initials: "JG", photo: "/team/jacobo-gomez.JPG" },
      { name: "Juan Camilo Girón", role: "REDEK Team", initials: "JC", photo: "/team/juan-camilo-giron.jpeg" },
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
                className="card group overflow-hidden"
              >
                {m.photo ? (
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg-soft">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center bg-bg-soft">
                    <span className="numeral text-4xl font-semibold text-brand/70">
                      {m.initials}
                    </span>
                  </div>
                )}
                <div className="px-5 py-4">
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
              className="card group flex flex-col overflow-hidden border-dashed"
            >
              <div className="flex aspect-[4/5] w-full items-center justify-center bg-bg-soft/40">
                <span className="grid h-16 w-16 place-items-center rounded-full border border-line text-3xl leading-none text-muted transition-colors group-hover:border-brand group-hover:text-brand">
                  +
                </span>
              </div>
              <div className="px-5 py-4">
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
