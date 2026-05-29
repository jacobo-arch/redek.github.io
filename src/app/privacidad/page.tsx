import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo REDEK recolecta, usa y protege los datos personales en sus plataformas de resolución electrónica de disputas (ODR).",
  alternates: { canonical: "/privacidad" },
};

const sections = [
  {
    h: "1. Responsable del tratamiento",
    p: "REDEK es responsable del tratamiento de los datos personales recolectados a través de este sitio y de sus plataformas de resolución electrónica de disputas (ODR). Para cualquier consulta sobre privacidad puedes escribir a info@redek.co.",
  },
  {
    h: "2. Datos que recolectamos",
    p: "Recolectamos los datos que nos proporcionas voluntariamente (nombre, correo corporativo, teléfono y el detalle de tu consulta), así como datos técnicos de navegación necesarios para operar el sitio (por ejemplo, preferencias de idioma y tema). No vendemos datos personales.",
  },
  {
    h: "3. Finalidad",
    p: "Usamos los datos para responder tus solicitudes, agendar demostraciones, prestar y mejorar nuestros servicios, y cumplir obligaciones legales. El tratamiento se realiza con base en tu consentimiento y en nuestro interés legítimo de operar el servicio.",
  },
  {
    h: "4. Conservación y seguridad",
    p: "Conservamos los datos solo durante el tiempo necesario para las finalidades descritas o el que exija la ley. Aplicamos medidas técnicas y organizativas razonables —incluido cifrado en tránsito y en reposo— para proteger la información.",
  },
  {
    h: "5. Tus derechos",
    p: "Puedes ejercer tus derechos de acceso, rectificación, actualización, supresión y oposición escribiendo a info@redek.co. Atenderemos tu solicitud conforme a la normativa de protección de datos aplicable.",
  },
  {
    h: "6. Cambios",
    p: "Podemos actualizar esta política para reflejar cambios legales u operativos. Publicaremos la versión vigente en esta página con su fecha de actualización.",
  },
];

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="display-2">Política de Privacidad</h1>
        <p className="mt-4 text-sm text-muted">Última actualización: mayo de 2026.</p>
        <div className="mt-12 flex flex-col gap-8">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-lg font-semibold text-text">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-muted">{s.p}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
