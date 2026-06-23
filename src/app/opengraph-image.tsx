import { ImageResponse } from "next/og";
import { meta, theme } from "@/data/proposal";

export const runtime = "edge";
export const alt = meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: theme.lav,
          color: "#16161b",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            background: "#0e0e10",
            color: "#fff",
            borderRadius: 999,
            padding: "14px 40px",
            fontSize: 34,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          {meta.preparedFor}
        </div>
        <div style={{ fontSize: 150, fontWeight: 900, letterSpacing: -6, marginTop: 36 }}>SoTech</div>
        <div style={{ fontSize: 32, marginTop: 4, opacity: 0.65, letterSpacing: 2 }}>SOCIAL TECHNOLOGIES</div>
      </div>
    ),
    { ...size },
  );
}
