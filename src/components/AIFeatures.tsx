"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

type Feature = {
  abbr: string;
  title: string;
  description: string;
  metric: string;
};

type AIFeaturesCopy = {
  eyebrow: string;
  title: { pre: string; accent: string; post: string };
  intro: string;
  features: Feature[];
};

const COPY: { es: AIFeaturesCopy; en: AIFeaturesCopy } = {
  es: {
    eyebrow: "Inteligencia Artificial",
    title: {
      pre: "IA que amplifica el ",
      accent: "criterio jurídico",
      post: ".",
    },
    intro:
      "No reemplazamos abogados. Les damos superpoderes. Nuestra IA procesa la complejidad para que los humanos tomen mejores decisiones.",
    features: [
      {
        abbr: "AL",
        title: "Automatización Legal (RPA)",
        description:
          "Procesos repetitivos gestionados por agentes inteligentes que reducen errores y aceleran resoluciones.",
        metric: "Reduce tiempos de gestión hasta 70%",
      },
      {
        abbr: "AP",
        title: "Análisis Predictivo",
        description:
          "Machine learning aplicado a patrones de conflicto para anticipar resultados y optimizar estrategias.",
        metric: "94% de precisión en predicción de resultados",
      },
      {
        abbr: "CD",
        title: "Clasificación Documental",
        description:
          "Procesamiento avanzado de expedientes legales con clasificación automática por relevancia y tipo.",
        metric: "Procesa +10,000 documentos por hora",
      },
      {
        abbr: "PC",
        title: "Prevención de Conflictos",
        description:
          "Detección temprana de patrones de riesgo para intervenir antes de que los conflictos escalen.",
        metric: "Detección temprana en el 89% de los casos",
      },
    ],
  },
  en: {
    eyebrow: "Artificial Intelligence",
    title: {
      pre: "AI that amplifies ",
      accent: "legal judgment",
      post: ".",
    },
    intro:
      "We don't replace lawyers. We give them superpowers. Our AI processes complexity so humans can make better decisions.",
    features: [
      {
        abbr: "LA",
        title: "Legal Automation (RPA)",
        description:
          "Repetitive workflows handled by intelligent agents that reduce errors and speed up resolutions.",
        metric: "Cuts case-handling time by up to 70%",
      },
      {
        abbr: "PA",
        title: "Predictive Analytics",
        description:
          "Machine learning applied to dispute patterns to anticipate outcomes and optimize strategy.",
        metric: "94% accuracy in outcome prediction",
      },
      {
        abbr: "DC",
        title: "Document Classification",
        description:
          "Advanced processing of legal case files with automatic classification by relevance and type.",
        metric: "Processes 10,000+ documents per hour",
      },
      {
        abbr: "CP",
        title: "Conflict Prevention",
        description:
          "Early detection of risk patterns to intervene before disputes escalate.",
        metric: "Early detection in 89% of cases",
      },
    ],
  },
};

export default function AIFeatures() {
  const t = useCopy(COPY);

  return (
    <section className="divide-section py-28 md:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Left intro */}
            <div className="md:col-span-2">
              <motion.p variants={fadeUp} className="eyebrow mb-4">
                {t.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="h-display display-2">
                {t.title.pre}
                <span className="text-brand">{t.title.accent}</span>
                {t.title.post}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-muted text-lg leading-relaxed"
              >
                {t.intro}
              </motion.p>
            </div>

            {/* Right — 2x2 feature cards */}
            <div className="md:col-span-3 grid sm:grid-cols-2 gap-5">
              {t.features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  whileTap={{ scale: 0.97 }}
                  className="card p-6"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand text-white text-[10px] font-semibold tracking-wide mb-4 font-display">
                    {f.abbr}
                  </span>
                  <h3 className="text-base font-semibold text-text mb-2 font-display tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    {f.description}
                  </p>
                  <p className="text-xs font-semibold text-brand">{f.metric}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
