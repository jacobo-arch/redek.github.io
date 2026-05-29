"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp, pressable } from "@/lib/motion";
import { useCopy } from "@/i18n/locale";

/* ------------------------------------------------------------------ */
/* Copy bilingüe (ES/EN) — única fuente del texto visible             */
/* ------------------------------------------------------------------ */

const COPY = {
  es: {
    eyebrow: "La plataforma",
    titleA: "Tu sala de resolución,",
    titleAccent: "en un solo lugar.",
    intro:
      "Una consola pensada para mediadores y equipos legales: ordena cada disputa, conversa con las partes, custodia la evidencia y mide el desempeño sin saltar entre herramientas.",

    capacidades: [
      {
        titulo: "Bandeja única de casos",
        desc: "Cada disputa, su estado y sus plazos en un solo flujo.",
      },
      {
        titulo: "Mediación asistida",
        desc: "Hilos estructurados entre partes con propuestas de acuerdo.",
      },
      {
        titulo: "Evidencia verificada",
        desc: "Documentos con sello de integridad y trazabilidad completa.",
      },
      {
        titulo: "Métricas en vivo",
        desc: "Tiempos, tasas de acuerdo y carga del equipo en tiempo real.",
      },
    ],

    consoleNavLabel: "Navegación de la consola",
    tabs: {
      Casos: "Casos",
      Mediación: "Mediación",
      Evidencia: "Evidencia",
      Métricas: "Métricas",
    },

    estado: {
      mediacion: "En mediación",
      resuelto: "Resuelto",
      revision: "En revisión",
    },

    casos: {
      heading: "Casos recientes",
      count: "5 de 34",
      thId: "ID",
      thPartes: "Partes",
      thEstado: "Estado",
      thFecha: "Fecha",
      rows: [
        { partes: "Rivera vs. Logística Andina", fecha: "28 may" },
        { partes: "Mendoza vs. Seguros Pacífico", fecha: "26 may" },
        { partes: "Cooperativa El Roble vs. Téllez", fecha: "24 may" },
        { partes: "Castro vs. Inmobiliaria Sur", fecha: "21 may" },
        { partes: "Duarte vs. TecnoServicios S.A.", fecha: "19 may" },
      ],
    },

    mediacion: {
      heading: "CASO-2041 · Mediación",
      sub: "Rivera vs. Logística Andina",
      badge: "En mediación",
      roles: {
        Demandante: "Demandante",
        Demandado: "Demandado",
        Mediador: "Mediador",
      },
      thread: [
        {
          autor: "L. Rivera",
          rol: "Demandante",
          texto: "Adjunté la factura original y el comprobante de entrega tardía.",
          hora: "09:14",
        },
        {
          autor: "Mediador REDEK",
          rol: "Mediador",
          texto:
            "Recibido. Propongo revisar la cláusula 7 antes de plantear cifras concretas.",
          hora: "09:21",
        },
        {
          autor: "Logística Andina",
          rol: "Demandado",
          texto: "De acuerdo. Aceptamos un reembolso parcial del 60% del flete.",
          hora: "09:35",
        },
      ],
      ctaText: "¿Listo para formalizar? Genera un borrador de acuerdo.",
      ctaButton: "Proponer acuerdo",
    },

    evidencia: {
      heading: "Evidencia del expediente",
      count: "4 documentos",
      verified: "Verificado",
      docs: [
        { nombre: "contrato_marco.pdf", tamano: "1.8 MB" },
        { nombre: "factura_2041.pdf", tamano: "240 KB" },
        { nombre: "comprobante_entrega.pdf", tamano: "512 KB" },
        { nombre: "peritaje_tecnico.pdf", tamano: "3.1 MB" },
      ],
    },

    metricas: {
      heading: "Métricas del equipo",
      window: "Últimos 30 días",
      kpis: [
        { label: "Tiempo promedio", valor: "12", sub: "días por caso" },
        { label: "Tasa de acuerdo", valor: "87%", sub: "últimos 90 días" },
        { label: "Casos activos", valor: "34", sub: "en curso ahora" },
      ],
      chartTitle: "Casos resueltos / semana",
      chartDelta: "+18%",
    },
  },
  en: {
    eyebrow: "The platform",
    titleA: "Your resolution room,",
    titleAccent: "in one place.",
    intro:
      "A console built for mediators and legal teams: organize every dispute, talk to the parties, safeguard the evidence and measure performance without jumping between tools.",

    capacidades: [
      {
        titulo: "Unified case inbox",
        desc: "Every dispute, its status and its deadlines in a single flow.",
      },
      {
        titulo: "Assisted mediation",
        desc: "Structured threads between parties with settlement proposals.",
      },
      {
        titulo: "Verified evidence",
        desc: "Documents with an integrity seal and full auditability.",
      },
      {
        titulo: "Live metrics",
        desc: "Cycle times, settlement rates and team load in real time.",
      },
    ],

    consoleNavLabel: "Console navigation",
    tabs: {
      Casos: "Cases",
      Mediación: "Mediation",
      Evidencia: "Evidence",
      Métricas: "Metrics",
    },

    estado: {
      mediacion: "In mediation",
      resuelto: "Settled",
      revision: "Under review",
    },

    casos: {
      heading: "Recent cases",
      count: "5 of 34",
      thId: "ID",
      thPartes: "Parties",
      thEstado: "Status",
      thFecha: "Date",
      rows: [
        { partes: "Rivera v. Logística Andina", fecha: "May 28" },
        { partes: "Mendoza v. Seguros Pacífico", fecha: "May 26" },
        { partes: "Cooperativa El Roble v. Téllez", fecha: "May 24" },
        { partes: "Castro v. Inmobiliaria Sur", fecha: "May 21" },
        { partes: "Duarte v. TecnoServicios S.A.", fecha: "May 19" },
      ],
    },

    mediacion: {
      heading: "CASE-2041 · Mediation",
      sub: "Rivera v. Logística Andina",
      badge: "In mediation",
      roles: {
        Demandante: "Claimant",
        Demandado: "Respondent",
        Mediador: "Mediator",
      },
      thread: [
        {
          autor: "L. Rivera",
          rol: "Demandante",
          texto:
            "I've attached the original invoice and the proof of late delivery.",
          hora: "09:14",
        },
        {
          autor: "Mediador REDEK",
          rol: "Mediador",
          texto:
            "Received. I suggest we review clause 7 before putting concrete figures on the table.",
          hora: "09:21",
        },
        {
          autor: "Logística Andina",
          rol: "Demandado",
          texto: "Agreed. We accept a partial refund of 60% of the freight.",
          hora: "09:35",
        },
      ],
      ctaText: "Ready to formalize? Generate a draft settlement.",
      ctaButton: "Propose settlement",
    },

    evidencia: {
      heading: "Case file evidence",
      count: "4 documents",
      verified: "Verified",
      docs: [
        { nombre: "master_agreement.pdf", tamano: "1.8 MB" },
        { nombre: "invoice_2041.pdf", tamano: "240 KB" },
        { nombre: "delivery_receipt.pdf", tamano: "512 KB" },
        { nombre: "expert_report.pdf", tamano: "3.1 MB" },
      ],
    },

    metricas: {
      heading: "Team metrics",
      window: "Last 30 days",
      kpis: [
        { label: "Average time", valor: "12", sub: "days per case" },
        { label: "Settlement rate", valor: "87%", sub: "last 90 days" },
        { label: "Active cases", valor: "34", sub: "in progress now" },
      ],
      chartTitle: "Cases settled / week",
      chartDelta: "+18%",
    },
  },
};

type CopyT = (typeof COPY)["es"];

/* ------------------------------------------------------------------ */
/* Datos estructurales (no traducibles): ids, claves de estado        */
/* ------------------------------------------------------------------ */

type Estado = "mediacion" | "resuelto" | "revision";

const estadoMeta: Record<Estado, { className: string; dot: string }> = {
  mediacion: { className: "bg-brand/10 text-brand", dot: "bg-brand" },
  resuelto: { className: "bg-success/10 text-success", dot: "bg-success" },
  revision: { className: "bg-warning/10 text-warning", dot: "bg-warning" },
};

const casosIds: { id: string; estado: Estado }[] = [
  { id: "CASO-2041", estado: "mediacion" },
  { id: "CASO-2038", estado: "resuelto" },
  { id: "CASO-2035", estado: "revision" },
  { id: "CASO-2030", estado: "mediacion" },
  { id: "CASO-2027", estado: "resuelto" },
];

const hiloSides: ("left" | "right")[] = ["left", "right", "left"];

const sparkline = [14, 18, 12, 22, 19, 27, 24, 31, 29, 36];

const capacidadDots = ["bg-brand", "bg-accent", "bg-brand", "bg-accent"];

const sidebar = ["Casos", "Mediación", "Evidencia", "Métricas"] as const;
type Tab = (typeof sidebar)[number];

/* ------------------------------------------------------------------ */
/* Iconos sidebar (inline, theme-aware vía currentColor)               */
/* ------------------------------------------------------------------ */

function NavIcon({ name }: { name: Tab }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "Casos":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 14h8M8 17h5" />
        </svg>
      );
    case "Mediación":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M21 11.5a8.4 8.4 0 0 1-9 8 9.1 9.1 0 0 1-4-1l-5 1 1.5-4a8 8 0 0 1-1-4 8.4 8.4 0 0 1 9-8 8.4 8.4 0 0 1 8.5 8z" />
        </svg>
      );
    case "Evidencia":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
        </svg>
      );
    case "Métricas":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M3 3v18h18" />
          <path d="M7 14l3-4 3 3 4-6" />
        </svg>
      );
  }
}

/* ------------------------------------------------------------------ */
/* Paneles por tab                                                     */
/* ------------------------------------------------------------------ */

function CasosPanel({ t }: { t: CopyT }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-base text-text">
          {t.casos.heading}
        </h3>
        <span className="text-xs text-muted">{t.casos.count}</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-bg-soft text-[0.7rem] uppercase tracking-wider text-muted">
              <th className="px-3 py-2 font-semibold">{t.casos.thId}</th>
              <th className="px-3 py-2 font-semibold">{t.casos.thPartes}</th>
              <th className="px-3 py-2 font-semibold">{t.casos.thEstado}</th>
              <th className="px-3 py-2 font-semibold text-right">
                {t.casos.thFecha}
              </th>
            </tr>
          </thead>
          <tbody>
            {casosIds.map((c, i) => {
              const m = estadoMeta[c.estado];
              const row = t.casos.rows[i];
              return (
                <motion.tr
                  key={c.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: EASE_OUT_EXPO }}
                  className="border-b border-line last:border-0 hover:bg-bg-soft/70 transition-colors"
                >
                  <td className="px-3 py-2.5">
                    <span className="numeral text-xs text-brand">{c.id}</span>
                  </td>
                  <td className="px-3 py-2.5 text-text">{row.partes}</td>
                  <td className="px-3 py-2.5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${m.className}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${m.dot}`} />
                      {t.estado[c.estado]}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right text-xs text-muted">
                    {row.fecha}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MediacionPanel({ t }: { t: CopyT }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-semibold text-base text-text">
            {t.mediacion.heading}
          </h3>
          <p className="text-xs text-muted">{t.mediacion.sub}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {t.mediacion.badge}
        </span>
      </div>

      <div className="space-y-3">
        {t.mediacion.thread.map((m, i) => {
          const side = hiloSides[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3, ease: EASE_OUT_EXPO }}
              className={`flex ${
                side === "right" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm ${
                  side === "right"
                    ? "bg-brand text-white"
                    : "border border-line bg-bg-soft text-text"
                }`}
              >
                <div
                  className={`mb-1 flex items-center gap-2 text-[0.68rem] ${
                    side === "right" ? "text-white/75" : "text-muted"
                  }`}
                >
                  <span className="font-semibold">{m.autor}</span>
                  <span>·</span>
                  <span>
                    {t.mediacion.roles[m.rol as keyof CopyT["mediacion"]["roles"]]}
                  </span>
                  <span className="ml-auto">{m.hora}</span>
                </div>
                <p className="leading-snug">{m.texto}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-line bg-bg-soft px-3.5 py-3">
        <p className="text-xs text-muted">{t.mediacion.ctaText}</p>
        <button
          type="button"
          className="btn-primary shrink-0 !px-4 !py-2 !text-xs"
        >
          {t.mediacion.ctaButton}
        </button>
      </div>
    </div>
  );
}

function EvidenciaPanel({ t }: { t: CopyT }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-base text-text">
          {t.evidencia.heading}
        </h3>
        <span className="text-xs text-muted">{t.evidencia.count}</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {t.evidencia.docs.map((d, i) => (
          <motion.div
            key={d.nombre}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3, ease: EASE_OUT_EXPO }}
            className="group rounded-xl border border-line bg-bg-soft p-3.5 transition-colors hover:border-brand/45"
          >
            <div className="mb-3 flex items-start justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                  <path d="M14 3v5h5" />
                </svg>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[0.65rem] font-medium text-success">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {t.evidencia.verified}
              </span>
            </div>
            <p className="truncate text-sm font-medium text-text">{d.nombre}</p>
            <p className="text-xs text-muted">{d.tamano}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MetricasPanel({ t }: { t: CopyT }) {
  const max = Math.max(...sparkline);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-base text-text">
          {t.metricas.heading}
        </h3>
        <span className="text-xs text-muted">{t.metricas.window}</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {t.metricas.kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3, ease: EASE_OUT_EXPO }}
            className="rounded-xl border border-line bg-bg-soft p-3.5"
          >
            <p className="text-[0.68rem] uppercase tracking-wide text-muted">
              {k.label}
            </p>
            <p className="numeral mt-1 text-2xl font-bold text-text">
              {k.valor}
            </p>
            <p className="text-[0.7rem] text-muted">{k.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-line bg-bg-soft p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-medium text-text">
            {t.metricas.chartTitle}
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 17l6-6 4 4 7-7" />
              <path d="M21 8v5h-5" />
            </svg>
            {t.metricas.chartDelta}
          </span>
        </div>
        <div className="flex h-20 items-end gap-1.5" aria-hidden="true">
          {sparkline.map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${(v / max) * 100}%` }}
              transition={{ delay: i * 0.04, duration: 0.4, ease: EASE_OUT_EXPO }}
              className={`flex-1 rounded-t-sm ${
                i === sparkline.length - 1 ? "bg-brand" : "bg-brand/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ActivePanel({ tab, t }: { tab: Tab; t: CopyT }) {
  switch (tab) {
    case "Casos":
      return <CasosPanel t={t} />;
    case "Mediación":
      return <MediacionPanel t={t} />;
    case "Evidencia":
      return <EvidenciaPanel t={t} />;
    case "Métricas":
      return <MetricasPanel t={t} />;
  }
}

/* ------------------------------------------------------------------ */
/* Componente principal                                                */
/* ------------------------------------------------------------------ */

export default function PlatformShowcase() {
  const t = useCopy(COPY);
  const [tab, setTab] = useState<Tab>("Casos");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    let next = idx;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (idx + 1) % sidebar.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft")
      next = (idx - 1 + sidebar.length) % sidebar.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = sidebar.length - 1;
    else return;
    e.preventDefault();
    setTab(sidebar[next]);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="plataforma"
      className="divide-section bg-bg-soft py-28 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Columna intro */}
          <div>
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              {t.eyebrow}
            </motion.p>
            <motion.h2 variants={fadeUp} className="display-2">
              {t.titleA}{" "}
              <span className="text-brand">{t.titleAccent}</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-base leading-relaxed text-muted"
            >
              {t.intro}
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-8 space-y-4">
              {t.capacidades.map((cap, i) => (
                <li key={cap.titulo} className="flex gap-3">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${capacidadDots[i]}`}
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-medium text-text">{cap.titulo}</span>
                    <span className="block text-sm text-muted">{cap.desc}</span>
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Columna mockup */}
          <motion.div variants={fadeUp}>
            <div className="card overflow-hidden !rounded-2xl">
              {/* Barra de ventana */}
              <div className="flex items-center gap-2 border-b border-line bg-bg-soft px-4 py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-danger/80" />
                  <span className="h-3 w-3 rounded-full bg-warning/80" />
                  <span className="h-3 w-3 rounded-full bg-success/80" />
                </div>
                <div className="mx-auto flex items-center gap-1.5 rounded-md border border-line bg-bg px-3 py-1 text-xs text-muted">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                  app.redek.co
                </div>
                <span className="w-[42px]" aria-hidden="true" />
              </div>

              {/* Cuerpo app */}
              <div className="grid grid-cols-[auto_1fr] bg-bg">
                {/* Sidebar */}
                <nav
                  aria-label={t.consoleNavLabel}
                  className="flex flex-col gap-1 border-r border-line bg-bg-soft/60 p-2.5"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div className="mb-2 hidden items-center gap-2 px-2 py-1 sm:flex">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand text-[0.7rem] font-bold text-white">
                      R
                    </span>
                    <span className="font-display text-sm font-semibold text-text">
                      REDEK
                    </span>
                  </div>
                  {sidebar.map((item, idx) => {
                    const active = tab === item;
                    return (
                      <motion.button
                        key={item}
                        type="button"
                        role="tab"
                        id={`tab-${item}`}
                        aria-selected={active}
                        aria-controls={`panel-${item}`}
                        tabIndex={active ? 0 : -1}
                        ref={(el) => {
                          tabRefs.current[idx] = el;
                        }}
                        {...pressable}
                        onKeyDown={(e) => onTabKeyDown(e, idx)}
                        onClick={() => setTab(item)}
                        className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-colors sm:px-3 ${
                          active
                            ? "bg-brand/10 text-brand"
                            : "text-muted hover:bg-bg hover:text-text"
                        }`}
                      >
                        <NavIcon name={item} />
                        <span className="hidden sm:inline">{t.tabs[item]}</span>
                      </motion.button>
                    );
                  })}
                </nav>

                {/* Área principal */}
                <div className="min-h-[360px] p-4 sm:p-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab}
                      role="tabpanel"
                      id={`panel-${tab}`}
                      aria-labelledby={`tab-${tab}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                    >
                      <ActivePanel tab={tab} t={t} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
