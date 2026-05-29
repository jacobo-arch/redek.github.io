import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description:
    "Términos y condiciones de uso del sitio y los servicios de REDEK.",
  alternates: { canonical: "/terminos" },
};

const sections = [
  {
    h: "1. Aceptación",
    p: "Al acceder y usar este sitio aceptas estos Términos de Uso. Si no estás de acuerdo, te pedimos abstenerte de utilizar el sitio. El uso de las plataformas y servicios de REDEK puede estar sujeto, además, a un contrato específico.",
  },
  {
    h: "2. Uso del sitio",
    p: "El contenido de este sitio tiene fines informativos. Te comprometes a usarlo de forma lícita, sin vulnerar derechos de terceros ni interferir con su funcionamiento o seguridad.",
  },
  {
    h: "3. Propiedad intelectual",
    p: "La marca REDEK, el sitio, su diseño y sus contenidos están protegidos por derechos de propiedad intelectual. No se concede licencia alguna para reproducirlos sin autorización previa y por escrito.",
  },
  {
    h: "4. Sin asesoría legal",
    p: "La información del sitio no constituye asesoría jurídica. Las cifras, casos y ejemplos mostrados son ilustrativos. Para decisiones legales, consulta a un profesional o contáctanos para una evaluación específica.",
  },
  {
    h: "5. Limitación de responsabilidad",
    p: "El sitio se ofrece “tal cual”. En la medida permitida por la ley, REDEK no será responsable por daños derivados del uso o la imposibilidad de uso del sitio.",
  },
  {
    h: "6. Ley aplicable",
    p: "Estos términos se rigen por la legislación aplicable en la jurisdicción de operación de REDEK. Cualquier controversia se resolverá conforme a dicha normativa.",
  },
];

export default function Terminos() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="display-2">Términos de Uso</h1>
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
