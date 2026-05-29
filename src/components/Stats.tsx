"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

const COPY = {
  es: {
    stats: [
      { value: "20+", label: "Años de experiencia combinada" },
      { value: "50+", label: "Plataformas ODR implementadas" },
      { value: "12", label: "Países con operaciones activas" },
      { value: "98%", label: "Tasa de resolución efectiva" },
    ],
  },
  en: {
    stats: [
      { value: "20+", label: "Years of combined experience" },
      { value: "50+", label: "ODR platforms deployed" },
      { value: "12", label: "Countries with active operations" },
      { value: "98%", label: "Effective resolution rate" },
    ],
  },
};

// Separa un valor como "98%" en prefijo, número y sufijo.
// Si no contiene un número, target queda en null y se muestra tal cual.
function parseValue(value: string) {
  const match = value.match(/-?\d+(?:[.,]\d+)?/);
  if (!match || match.index === undefined) {
    return { prefix: value, target: null as number | null, suffix: "", decimals: 0 };
  }
  const numStr = match[0];
  const normalized = numStr.replace(",", ".");
  const target = parseFloat(normalized);
  const decimals = normalized.includes(".") ? normalized.split(".")[1].length : 0;
  return {
    prefix: value.slice(0, match.index),
    target,
    suffix: value.slice(match.index + numStr.length),
    decimals,
  };
}

function StatValue({ value, play }: { value: string; play: boolean }) {
  const reduceMotion = useReducedMotion();
  const { prefix, target, suffix, decimals } = parseValue(value);
  const [display, setDisplay] = useState<string>(
    target === null || reduceMotion ? value : `${prefix}0${suffix}`,
  );

  useEffect(() => {
    // No numérico o reduced-motion: mostrar el valor final sin animar.
    if (target === null || reduceMotion) {
      setDisplay(value);
      return;
    }
    if (!play) return;

    const controls = animate(0, target, {
      duration: 1.4,
      ease: EASE_OUT_EXPO,
      onUpdate: (latest) => {
        setDisplay(`${prefix}${latest.toFixed(decimals)}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [play, target, prefix, suffix, decimals, value, reduceMotion]);

  return (
    <p className="numeral text-4xl font-bold text-brand md:text-5xl">
      {display}
    </p>
  );
}

export default function Stats() {
  const t = useCopy(COPY);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="divide-section border-b border-line bg-bg py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-0"
        >
          {t.stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className={`text-center ${i > 0 ? "lg:border-l lg:border-line" : ""}`}
            >
              <StatValue value={s.value} play={inView} />
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
