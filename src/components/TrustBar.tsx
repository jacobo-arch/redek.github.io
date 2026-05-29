"use client";

import { motion } from "framer-motion";
import { useCopy } from "@/i18n/locale";
import { fadeUp } from "@/lib/motion";

const COPY = {
  es: {
    eyebrow: "Confianza y cumplimiento",
    badges: [
      {
        title: "ISO 27001",
        description: "Seguridad certificada",
      },
      {
        title: "Cifrado E2E",
        description: "Datos protegidos en tránsito y reposo",
      },
      {
        title: "GDPR Ready",
        description: "Cumplimiento normativo global",
      },
      {
        title: "99.9% Uptime",
        description: "Disponibilidad garantizada",
      },
    ],
  },
  en: {
    eyebrow: "Trust & compliance",
    badges: [
      {
        title: "ISO 27001",
        description: "Certified security",
      },
      {
        title: "E2E Encryption",
        description: "Data protected in transit and at rest",
      },
      {
        title: "GDPR Ready",
        description: "Global regulatory compliance",
      },
      {
        title: "99.9% Uptime",
        description: "Guaranteed availability",
      },
    ],
  },
};

const badgeIcons = [
  (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 9.75c0 .746-.092 1.472-.264 2.165M3.264 11.915A8.96 8.96 0 013 9.75c0-.746.092-1.472.264-2.168" />
    </svg>
  ),
  (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
];

export default function TrustBar() {
  const t = useCopy(COPY);

  return (
    <section className="bg-bg-soft border-y border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow mb-8 text-center"
        >
          {t.eyebrow}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4"
        >
          {t.badges.map((b, i) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              className="flex items-start gap-3 bg-bg p-6 transition-colors hover:bg-bg-soft"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-bg text-brand">
                {badgeIcons[i]}
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-text">
                  {b.title}
                </h4>
                <p className="mt-0.5 text-xs text-muted">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
