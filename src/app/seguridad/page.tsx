import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Seguridad",
  description:
    "Cómo REDEK protege la confidencialidad, integridad y trazabilidad de cada expediente en sus plataformas de resolución electrónica de disputas (ODR).",
  alternates: { canonical: "/seguridad" },
};

const features = [
  {
    title: "Cifrado de extremo a extremo",
    desc: "La información se cifra en tránsito (TLS) y en reposo. Las comunicaciones, documentos y evidencias del expediente viajan y se almacenan protegidos frente a accesos no autorizados.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-brand"
        aria-hidden="true"
      >
        <rect x="4" y="11" width="16" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        <path d="M12 15v2" />
      </svg>
    ),
  },
  {
    title: "ISO 27001 (alineado)",
    desc: "Operamos siguiendo los controles del marco ISO/IEC 27001 para la gestión de la seguridad de la información. El proceso de certificación formal se encuentra en curso; este es un compromiso de alineación, no una certificación vigente.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-brand"
        aria-hidden="true"
      >
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Trazabilidad y bitácora auditable",
    desc: "Cada acción relevante sobre el expediente —cargas, accesos, decisiones y notificaciones— queda registrada con marca de tiempo en una bitácora inmutable, base para auditorías y para acreditar el debido proceso.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-brand"
        aria-hidden="true"
      >
        <path d="M12 8v4l2.5 1.5" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
  {
    title: "Control de acceso por roles",
    desc: "Permisos granulares por perfil (parte, apoderado, mediador, árbitro, administrador). Cada usuario ve y opera únicamente sobre lo que su rol y caso le habilitan, bajo el principio de mínimo privilegio.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-brand"
        aria-hidden="true"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <path d="M17 9l2 2 3-3" />
      </svg>
    ),
  },
  {
    title: "Residencia y respaldo de datos",
    desc: "Los datos se alojan en infraestructura con residencia definida y respaldos periódicos. Contamos con planes de recuperación ante incidentes para preservar la continuidad y la integridad del expediente.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-brand"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
        <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
      </svg>
    ),
  },
  {
    title: "Cumplimiento normativo",
    desc: "Tratamos los datos personales conforme a la normativa de protección de datos aplicable: bases de legitimación, finalidades acotadas, derechos de los titulares y deberes de confidencialidad propios de la actividad jurídica.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-brand"
        aria-hidden="true"
      >
        <path d="M12 3v16" />
        <path d="M7 7l-3 6h6z" />
        <path d="M17 7l-3 6h6z" />
        <path d="M7 7h10" />
        <path d="M9 20h6" />
      </svg>
    ),
  },
];

const principios = [
  {
    h: "Mínimo privilegio",
    p: "Cada persona y sistema accede solo a lo estrictamente necesario para cumplir su función dentro del caso.",
  },
  {
    h: "Confidencialidad por diseño",
    p: "La protección de la información se incorpora desde el diseño del producto, no como un añadido posterior.",
  },
  {
    h: "Integridad verificable",
    p: "Las evidencias y decisiones quedan selladas y son verificables, de modo que el expediente sea defendible.",
  },
  {
    h: "Transparencia con las partes",
    p: "Las partes conocen qué datos se tratan, con qué finalidad y por cuánto tiempo se conservan.",
  },
  {
    h: "Respuesta a incidentes",
    p: "Disponemos de procedimientos para detectar, contener y notificar incidentes de seguridad de forma oportuna.",
  },
  {
    h: "Mejora continua",
    p: "Revisamos controles, dependencias y accesos de forma periódica para sostener el nivel de protección en el tiempo.",
  },
];

export default function Seguridad() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="mx-auto max-w-6xl px-6 pb-24 pt-36">
        <header className="max-w-3xl">
          <p className="eyebrow mb-4">Seguridad</p>
          <h1 className="display-2">
            Tu expediente, <span className="text-brand">protegido y auditable.</span>
          </h1>
          <p className="lead mt-5 text-lg text-muted">
            En la resolución electrónica de disputas (ODR), la confianza es el
            producto. REDEK protege la confidencialidad, la integridad y la
            trazabilidad de cada caso con controles que puedes acreditar ante las
            partes y ante terceros.
          </p>
        </header>

        <section className="mt-16">
          <p className="eyebrow mb-3">Controles</p>
          <h2 className="display-3">Cómo protegemos la información</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="card elev-1 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-bg-soft">
                  {f.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-text">
                  {f.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="divide-section mt-20 pt-16">
          <p className="eyebrow mb-3">Principios</p>
          <h2 className="display-3">Los criterios que guían cada decisión</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Más allá de los controles técnicos, estos principios orientan cómo
            diseñamos, operamos y evolucionamos la plataforma.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {principios.map((pr, i) => (
              <li key={pr.h} className="flex gap-4">
                <span className="numeral mt-1 text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-text">{pr.h}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{pr.p}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <div className="card elev-1 flex flex-col items-start gap-6 bg-ink p-10 text-white md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold">
                ¿Necesitas el detalle de nuestros controles?
              </h2>
              <p className="mt-3 leading-relaxed text-white/70">
                Compartimos documentación de seguridad y respondemos los
                cuestionarios de tu área de riesgo o cumplimiento. Escríbenos y
                coordinamos una sesión técnica.
              </p>
            </div>
            <a href="/#contacto" className="btn-primary shrink-0">
              Hablar con el equipo
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
