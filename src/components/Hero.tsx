"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import NodeNetwork from "./NodeNetwork";
import RotatingWord from "./RotatingWord";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

const COPY = {
  es: {
    eyebrowPrefix: "ODR para",
    rotating: ["conciliación", "mediación", "arbitraje", "negociación"],
    titleA: "Precisión algorítmica.",
    titleB: "Criterio humano.",
    body: "Transformamos la complejidad jurídica en resoluciones simples. Tecnología que ordena los datos para que tu equipo decida lo que importa.",
    ctaPrimary: "Agendar demo privada",
    ctaSecondary: "Ver soluciones",
    trust1: "ODR en operación en 12 países",
    trust2: "98% de resolución efectiva",
    scroll: "Scroll",
  },
  en: {
    eyebrowPrefix: "ODR for",
    rotating: ["conciliation", "mediation", "arbitration", "negotiation"],
    titleA: "Algorithmic precision.",
    titleB: "Human judgment.",
    body: "We turn legal complexity into simple resolutions. Technology that organizes the data so your team decides what matters.",
    ctaPrimary: "Book a private demo",
    ctaSecondary: "See solutions",
    trust1: "ODR live in 12 countries",
    trust2: "98% effective resolution rate",
    scroll: "Scroll",
  },
} as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// LCP-safe: el above-the-fold NO se oculta con opacity (evita h1 invisible
// hasta hidratar). Solo desliza en Y; el texto pinta en SSR de inmediato.
const fadeUp = {
  hidden: { y: 16 },
  visible: {
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

export default function Hero() {
  const t = useCopy(COPY);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const netY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-bg"
    >
      {/* Subtle grid backdrop — parallax */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 bg-grid bg-grid-fade"
      />

      {/* Living node network — right half (parallax) */}
      <motion.div style={{ y: netY }} className="absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-full md:w-[62%]">
          <NodeNetwork />
        </div>
        {/* fade the network into the text on the left */}
        <div className="absolute inset-y-0 left-0 hidden md:block w-[46%] bg-gradient-to-r from-bg via-bg/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-32 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp} className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-brand" />
            <span className="eyebrow flex gap-[0.4em]">
              {t.eyebrowPrefix}{" "}
              <RotatingWord words={[...t.rotating]} className="text-brand" />
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="display-1">
            {t.titleA}
            <br />
            <span className="brand-sweep text-brand">{t.titleB}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="lead mt-7 max-w-lg text-lg leading-relaxed text-muted md:text-xl"
          >
            {t.body}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#contacto" className="btn-primary group">
              {t.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-0.5">
                &#8594;
              </span>
            </a>
            <a href="#soluciones" className="btn-secondary">
              {t.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex items-center gap-6 text-sm text-muted"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t.trust1}
            </span>
            <span className="hidden h-4 w-px bg-line sm:block" />
            <span className="hidden sm:inline">{t.trust2}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted/80">
          {t.scroll}
        </span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={
            reduce
              ? undefined
              : { repeat: Infinity, duration: 1.8, ease: "easeInOut" as const }
          }
          className="h-6 w-px bg-gradient-to-b from-muted/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
