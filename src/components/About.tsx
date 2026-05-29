"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

const COPY = {
  es: {
    eyebrow: "Conoce a REDEK",
    titleLead: "Pionera en soluciones jurídicas",
    titleAccent: "digitales.",
    lead:
      "Somos especialistas en sistemas de resolución electrónica de disputas (ODR). Combinamos profundo conocimiento legal con tecnología de vanguardia para transformar la forma en que las organizaciones resuelven conflictos.",
    pillars: [
      {
        number: "01",
        title: "Experiencia Probada",
        description:
          "Más de 20 años de expertise combinado en resolución de disputas y tecnología jurídica.",
      },
      {
        number: "02",
        title: "Enfoque al Cliente",
        description:
          "Soluciones personalizadas que se adaptan a las necesidades específicas de cada organización.",
      },
      {
        number: "03",
        title: "Innovación Continua",
        description:
          "Investigación y desarrollo permanente en inteligencia artificial aplicada al derecho.",
      },
      {
        number: "04",
        title: "Eficiencia Medible",
        description:
          "Reducción comprobable en tiempos y costos de resolución de conflictos.",
      },
    ],
  },
  en: {
    eyebrow: "Meet REDEK",
    titleLead: "Pioneers in digital legal",
    titleAccent: "solutions.",
    lead:
      "We specialize in Online Dispute Resolution (ODR) systems. We combine deep legal expertise with cutting-edge technology to transform the way organizations resolve disputes.",
    pillars: [
      {
        number: "01",
        title: "Proven Experience",
        description:
          "Over 20 years of combined expertise in dispute resolution and legal technology.",
      },
      {
        number: "02",
        title: "Client Focus",
        description:
          "Tailored solutions that adapt to the specific needs of each organization.",
      },
      {
        number: "03",
        title: "Continuous Innovation",
        description:
          "Ongoing research and development in artificial intelligence applied to law.",
      },
      {
        number: "04",
        title: "Measurable Efficiency",
        description:
          "Demonstrable reductions in dispute resolution time and cost.",
      },
    ],
  },
} as const;

export default function About() {
  const t = useCopy(COPY);

  return (
    <section id="nosotros" className="divide-section bg-bg-soft py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid items-start gap-16 md:grid-cols-2"
        >
          {/* Left — sticky */}
          <div className="md:sticky md:top-28">
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
              {t.lead}
            </motion.p>
          </div>

          {/* Right — Pillars */}
          <div className="grid gap-6">
            {t.pillars.map((p) => (
              <motion.div
                key={p.number}
                variants={fadeUp}
                whileTap={{ scale: 0.97 }}
                className="card flex gap-5 px-6 py-5"
              >
                <span className="numeral mt-0.5 shrink-0 text-sm text-brand">
                  {p.number}
                </span>
                <div>
                  <h3 className="font-display mb-1 text-base font-semibold text-text">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
