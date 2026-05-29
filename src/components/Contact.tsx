"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

const COPY = {
  es: {
    eyebrow: "Contacto",
    titleLead: "Hablemos de lo que",
    titleAccent: "necesitas resolver.",
    intro:
      "Agenda una demo privada y descubre cómo REDEK puede transformar la gestión de disputas en tu organización.",
    statValue: "14 días",
    statLabel:
      "Resolución promedio vs. 18 meses en tribunales tradicionales",
    email: "info@redek.co",
    site: "redek.co",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre completo",
    emailLabel: "Email corporativo",
    emailPlaceholder: "tu@empresa.com",
    phoneLabel: "Teléfono",
    phonePlaceholder: "+57 300 000 0000",
    challengeLabel: "¿Cuál es tu mayor desafío?",
    challengePlaceholder:
      "Ej: Necesitamos reducir los tiempos de resolución de disputas comerciales...",
    submit: "Enviar Mensaje",
  },
  en: {
    eyebrow: "Contact",
    titleLead: "Let's talk about what you",
    titleAccent: "need to resolve.",
    intro:
      "Book a private demo and discover how REDEK can transform dispute management across your organization.",
    statValue: "14 days",
    statLabel:
      "Average resolution time vs. 18 months in traditional courts",
    email: "info@redek.co",
    site: "redek.co",
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Work email",
    emailPlaceholder: "you@company.com",
    phoneLabel: "Phone",
    phonePlaceholder: "+57 300 000 0000",
    challengeLabel: "What's your biggest challenge?",
    challengePlaceholder:
      "E.g. We need to cut resolution times for commercial disputes...",
    submit: "Send Message",
  },
} as const;

export default function Contact() {
  const t = useCopy(COPY);

  return (
    <section id="contacto" className="divide-section bg-bg py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-16 md:grid-cols-2"
        >
          {/* Left */}
          <div>
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              {t.eyebrow}
            </motion.p>
            <motion.h2 variants={fadeUp} className="display-2">
              {t.titleLead}{" "}
              <span className="text-brand">{t.titleAccent}</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-muted"
            >
              {t.intro}
            </motion.p>

            {/* Impact stat */}
            <motion.div variants={fadeUp} className="card mt-10 p-6">
              <p className="numeral text-3xl font-bold text-text">
                {t.statValue}
              </p>
              <p className="mt-1 text-sm text-muted">{t.statLabel}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3">
              <a
                href="mailto:info@redek.co"
                className="text-sm text-muted transition-colors hover:text-brand"
              >
                {t.email}
              </a>
              <a
                href="https://redek.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-brand"
              >
                {t.site}
              </a>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="contact-nombre"
                className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted"
              >
                {t.nameLabel}
              </label>
              <input
                id="contact-nombre"
                type="text"
                required
                placeholder={t.namePlaceholder}
                className="w-full border-b border-line bg-transparent py-3 text-text placeholder:text-muted/50 transition-colors focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted"
              >
                {t.emailLabel}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder={t.emailPlaceholder}
                className="w-full border-b border-line bg-transparent py-3 text-text placeholder:text-muted/50 transition-colors focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="contact-telefono"
                className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted"
              >
                {t.phoneLabel}
              </label>
              <input
                id="contact-telefono"
                type="tel"
                placeholder={t.phonePlaceholder}
                className="w-full border-b border-line bg-transparent py-3 text-text placeholder:text-muted/50 transition-colors focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="contact-desafio"
                className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted"
              >
                {t.challengeLabel}
              </label>
              <textarea
                id="contact-desafio"
                rows={4}
                required
                placeholder={t.challengePlaceholder}
                className="w-full resize-none border-b border-line bg-transparent py-3 text-text placeholder:text-muted/50 transition-colors focus:border-brand focus:outline-none"
              />
            </div>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              transition={{ ease: EASE_OUT_EXPO }}
              className="btn-primary group mt-4 self-start"
            >
              {t.submit}
              <span className="transition-transform group-hover:translate-x-1">
                &#8594;
              </span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
