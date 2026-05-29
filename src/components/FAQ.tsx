"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

type FaqItem = {
  question: string;
  answer: string;
};

const COPY = {
  es: {
    eyebrow: "Preguntas frecuentes",
    titleLead: "Todo lo que necesitas",
    titleAccent: "saber.",
    intro:
      "Resolvemos las dudas más comunes sobre la plataforma de resolución de disputas en línea. ¿Te queda algo pendiente? Escríbenos.",
    faqs: [
      {
        question: "¿Qué es un sistema ODR?",
        answer:
          "ODR (Online Dispute Resolution) es la resolución electrónica de disputas: lleva la negociación, la mediación y el arbitraje a un entorno en línea. Las partes interactúan desde una sola plataforma, con cada etapa estructurada, asistida y trazable de principio a fin.",
      },
      {
        question: "¿En cuánto tiempo se implementa la plataforma?",
        answer:
          "En semanas, no en meses. El plazo depende del modelo: la versión manejada por REDEK queda operativa muy rápido, mientras que una implementación a la medida —con tus flujos, marca e integraciones propias— requiere un acompañamiento algo mayor. En ambos casos definimos un cronograma claro desde el primer día.",
      },
      {
        question: "¿Cómo garantizan la seguridad y confidencialidad?",
        answer:
          "Ciframos la información de extremo a extremo (E2E), operamos bajo prácticas alineadas con ISO 27001 y dejamos cada actuación registrada en una trazabilidad auditable. Solo las partes autorizadas acceden a cada caso, y todo movimiento queda documentado como evidencia verificable.",
      },
      {
        question: "¿Se integra con nuestros sistemas actuales?",
        answer:
          "Sí. REDEK se conecta con tus sistemas mediante una API abierta e integraciones a medida, de modo que el flujo de disputas se acopla a tu operación —CRM, ERP, gestores de casos o canales de atención— sin duplicar trabajo ni migraciones forzadas.",
      },
      {
        question: "¿Qué tipos de disputa resuelven?",
        answer:
          "Atendemos disputas comerciales, de consumo y contractuales, entre otras. La plataforma se adapta a distintos sectores y niveles de complejidad, desde reclamos masivos de bajo monto hasta conflictos contractuales que requieren mediación o arbitraje especializado.",
      },
      {
        question: "¿La IA reemplaza al criterio humano?",
        answer:
          "No. La IA ordena, prioriza y resume la información para que el proceso avance con claridad, pero las personas siguen decidiendo. El criterio humano —de las partes, mediadores y árbitros— permanece en el centro de cada resolución.",
      },
    ],
  },
  en: {
    eyebrow: "Frequently asked questions",
    titleLead: "Everything you need to",
    titleAccent: "know.",
    intro:
      "We answer the most common questions about the online dispute resolution platform. Still wondering about something? Reach out.",
    faqs: [
      {
        question: "What is an ODR system?",
        answer:
          "ODR (Online Dispute Resolution) is the electronic resolution of disputes: it brings negotiation, mediation and arbitration into an online environment. The parties interact from a single platform, with every stage structured, assisted and traceable from start to finish.",
      },
      {
        question: "How long does it take to deploy the platform?",
        answer:
          "Weeks, not months. The timeline depends on the model: the REDEK-managed version goes live very quickly, while a tailored deployment —with your own workflows, branding and integrations— takes a bit more onboarding. In both cases we define a clear schedule from day one.",
      },
      {
        question: "How do you ensure security and confidentiality?",
        answer:
          "We encrypt information end to end (E2E), operate under practices aligned with ISO 27001 and record every action in an auditable trail. Only authorized parties can access each case, and every movement is documented as verifiable evidence.",
      },
      {
        question: "Does it integrate with our current systems?",
        answer:
          "Yes. REDEK connects to your systems through an open API and tailored integrations, so the dispute workflow fits your operation —CRM, ERP, case management or support channels— without duplicating work or forcing migrations.",
      },
      {
        question: "What types of dispute do you resolve?",
        answer:
          "We handle commercial, consumer and contractual disputes, among others. The platform adapts to different sectors and levels of complexity, from high-volume low-value claims to contractual conflicts that require specialized mediation or arbitration.",
      },
      {
        question: "Does AI replace human judgment?",
        answer:
          "No. AI organizes, prioritizes and summarizes information so the process moves forward with clarity, but people remain the decision-makers. Human judgment —from the parties, mediators and arbitrators— stays at the center of every resolution.",
      },
    ],
  },
} as const;

export default function FAQ() {
  const t = useCopy(COPY);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section id="faq" className="divide-section bg-bg-soft py-28 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Header */}
          <motion.p variants={fadeUp} className="eyebrow">
            {t.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-2 mt-4">
            {t.titleLead}{" "}
            <span className="text-brand">{t.titleAccent}</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-muted"
          >
            {t.intro}
          </motion.p>

          {/* Accordion */}
          <motion.div
            variants={fadeUp}
            className="mt-14 border-t border-line"
          >
            {t.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const buttonId = `${baseId}-faq-button-${index}`;
              const panelId = `${baseId}-faq-panel-${index}`;

              return (
                <div key={faq.question} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                      className="group flex w-full items-center gap-5 py-6 text-left md:py-7"
                    >
                      <span className="numeral text-sm text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display flex-1 text-lg font-semibold tracking-tight text-text transition-colors group-hover:text-brand md:text-xl">
                        {faq.question}
                      </span>
                      <motion.span
                        aria-hidden="true"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                        className={[
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors",
                          isOpen
                            ? "border-brand text-brand"
                            : "border-line text-muted group-hover:border-brand group-hover:text-brand",
                        ].join(" ")}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 5.5 7 9.5l4-4" />
                        </svg>
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pl-[2.75rem] pr-4 text-base leading-relaxed text-muted">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
