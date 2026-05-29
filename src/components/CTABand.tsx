"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

const COPY = {
  es: {
    titleLead: "¿Listo para transformar la gestión de disputas en tu",
    titleAccent: "organización",
    titleTrail: "?",
    subtitle:
      "Agenda una conversación con nuestro equipo y descubre el modelo ideal para tu operación.",
    cta: "Agendar Demo Privada",
  },
  en: {
    titleLead: "Ready to transform dispute management across your",
    titleAccent: "organization",
    titleTrail: "?",
    subtitle:
      "Book a conversation with our team and find the ideal model for your operation.",
    cta: "Book a Private Demo",
  },
} as const;

export default function CTABand() {
  const t = useCopy(COPY);

  return (
    <section className="divide-section bg-bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="display-2 mx-auto max-w-2xl"
          >
            {t.titleLead}{" "}
            <span className="text-brand">{t.titleAccent}</span>
            {t.titleTrail}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-lg text-muted"
          >
            {t.subtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <a href="#contacto" className="btn-primary group">
              {t.cta}
              <span className="transition-transform group-hover:translate-x-1">
                &#8594;
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
