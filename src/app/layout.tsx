import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/i18n/locale";

// Geist — neo-grotesca limpia (estilo Vercel/Pinecone). Una familia para
// display y body; exponemos ambas variables apuntando a la misma fuente.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE = "https://redek-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "REDEK — Precisión Algorítmica. Criterio Humano.",
    template: "%s · REDEK",
  },
  description:
    "Pionera en soluciones jurídicas digitales. Transformamos la complejidad jurídica en resoluciones simples con tecnología inteligente y sistemas ODR.",
  applicationName: "REDEK",
  keywords: [
    "REDEK",
    "ODR",
    "resolución de disputas",
    "LegalTech",
    "tecnología jurídica",
    "arbitraje digital",
    "conciliación en línea",
    "mediación digital",
  ],
  authors: [{ name: "REDEK" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "REDEK — Precisión Algorítmica. Criterio Humano.",
    description:
      "Transformamos la complejidad jurídica en resoluciones simples. Tecnología de resolución de disputas (ODR) para organizaciones.",
    url: SITE,
    siteName: "REDEK",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "REDEK — Precisión Algorítmica. Criterio Humano.",
    description:
      "Tecnología de resolución de disputas (ODR) para organizaciones que exigen eficiencia sin sacrificar criterio.",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('redek-theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "REDEK",
  url: SITE,
  description:
    "Pionera en soluciones jurídicas digitales y sistemas de resolución electrónica de disputas (ODR).",
  email: "info@redek.co",
  sameAs: ["https://www.linkedin.com/company/redek"],
  areaServed: "LatAm",
  knowsAbout: [
    "Online Dispute Resolution",
    "Mediación digital",
    "Arbitraje",
    "LegalTech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={geist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Sin JS: nunca dejar contenido invisible (estados initial de framer) */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
