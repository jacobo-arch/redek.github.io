"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

type ClientsCopy = {
  eyebrow: string;
  clients: string[];
};

const COPY: { es: ClientsCopy; en: ClientsCopy } = {
  es: {
    eyebrow: "Organizaciones que confían en nosotros",
    clients: [
      "Ministerio de Justicia",
      "Cámara de Comercio",
      "Superintendencia de Sociedades",
      "Corte de Arbitraje",
      "Banco de Desarrollo",
      "Fiscalía General",
      "Defensoría del Pueblo",
      "Procuraduría Nacional",
    ],
  },
  en: {
    eyebrow: "Organizations that trust us",
    clients: [
      "Ministry of Justice",
      "Chamber of Commerce",
      "Superintendency of Companies",
      "Court of Arbitration",
      "Development Bank",
      "Attorney General's Office",
      "Office of the Public Defender",
      "National Inspector General",
    ],
  },
};

const STOP = new Set([
  "de", "del", "la", "el", "los", "las", "y",
  "of", "the", "and", "for",
]);
function initials(name: string) {
  const words = name
    .replace(/['’]s/g, "")
    .split(/\s+/)
    .filter((w) => w && !STOP.has(w.toLowerCase()));
  return words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Clients() {
  const t = useCopy(COPY);
  const clients = t.clients;

  return (
    <section id="confianza" className="divide-section py-16 bg-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow text-center mb-12"
        >
          {t.eyebrow}
        </motion.p>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...clients, ...clients].map((name, i) => (
            <div
              key={`${name}-${i}`}
              aria-hidden={i >= clients.length}
              className="group flex flex-shrink-0 items-center gap-3 px-8"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors duration-300 group-hover:border-brand/50 group-hover:text-brand">
                <span className="numeral text-xs font-bold tracking-tight">
                  {initials(name)}
                </span>
              </span>
              <span className="select-none whitespace-nowrap font-display text-base font-semibold tracking-tight text-muted transition-colors duration-300 group-hover:text-text">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
