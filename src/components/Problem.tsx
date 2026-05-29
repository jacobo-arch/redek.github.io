"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

type Pain = { figure: string; label: string };
type ProblemCopy = {
  eyebrow: string;
  headingLead: string;
  headingAccent: string;
  intro: string;
  pains: Pain[];
  bridgeLead: string;
  bridgeAccent: string;
};

const COPY: { es: ProblemCopy; en: ProblemCopy } = {
  es: {
    eyebrow: "El problema",
    headingLead: "Resolver una disputa",
    headingAccent: "no debería tomar años.",
    intro:
      "Hoy un conflicto comercial se arrastra entre instancias, audiencias que se aplazan y costos que crecen sin relación con lo que realmente está en juego. El proceso se vuelve el problema.",
    pains: [
      {
        figure: "18 meses",
        label:
          "Tiempo promedio de un litigio comercial en tribunales tradicionales.",
      },
      {
        figure: "70%",
        label:
          "De los costos de un conflicto son fricción operativa, no el fondo del caso.",
      },
      {
        figure: "Opacidad",
        label:
          "Las partes pierden trazabilidad y control sobre su propio proceso.",
      },
    ],
    bridgeLead: "REDEK convierte ese proceso en algo",
    bridgeAccent: "medible, trazable y rápido.",
  },
  en: {
    eyebrow: "The problem",
    headingLead: "Resolving a dispute",
    headingAccent: "shouldn't take years.",
    intro:
      "Today a commercial dispute drags across instances, hearings that get postponed and costs that grow out of all proportion to what's actually at stake. The process itself becomes the problem.",
    pains: [
      {
        figure: "18 months",
        label:
          "Average duration of commercial litigation in traditional courts.",
      },
      {
        figure: "70%",
        label:
          "Of a dispute's costs are operational friction, not the merits of the case.",
      },
      {
        figure: "Opacity",
        label:
          "The parties lose traceability and control over their own process.",
      },
    ],
    bridgeLead: "REDEK turns that process into something",
    bridgeAccent: "measurable, auditable and fast.",
  },
};

export default function Problem() {
  const reduce = useReducedMotion();
  const t = useCopy(COPY);

  const fadeUp = {
    hidden: { y: reduce ? 0 : 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <section
      id="problema"
      className="divide-section bg-bg py-28 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Encabezado narrativo */}
          <motion.p variants={fadeUp} className="eyebrow">
            {t.eyebrow}
          </motion.p>

          <motion.h2 variants={fadeUp} className="display-2 mt-4 max-w-3xl">
            {t.headingLead}{" "}
            <span className="text-brand">{t.headingAccent}</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-muted md:text-xl"
          >
            {t.intro}
          </motion.p>

          {/* Grilla de dolor actual */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {t.pains.map((p) => (
              <motion.div
                key={p.figure}
                variants={fadeUp}
                className="card flex flex-col p-8"
              >
                <p className="numeral text-5xl font-bold text-text md:text-6xl">
                  {p.figure}
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  {p.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Línea puente */}
          <motion.p
            variants={fadeUp}
            className="display-3 mt-16 max-w-3xl text-text"
          >
            {t.bridgeLead}{" "}
            <span className="text-brand">{t.bridgeAccent}</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
