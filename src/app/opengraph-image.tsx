import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "REDEK — Precisión Algorítmica. Criterio Humano.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05103a",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#1452f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div style={{ color: "#fff", fontSize: 30, fontWeight: 700, letterSpacing: -1 }}>
            REDEK
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#7aa2ff",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Resolución de disputas · ODR
          </div>
          <div
            style={{
              color: "#fff",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Precisión algorítmica.&nbsp;
            <span style={{ color: "#4671ff" }}>Criterio humano.</span>
          </div>
        </div>
        <div style={{ color: "#97a3bd", fontSize: 26 }}>
          Transformamos la complejidad jurídica en resoluciones simples.
        </div>
      </div>
    ),
    { ...size }
  );
}
