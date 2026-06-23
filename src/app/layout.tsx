import "./globals.css";
import type { Metadata } from "next";
import { meta, theme } from "@/data/proposal";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: { title: meta.title, description: meta.description },
};

// 🔬 per-client theming — override the Style-C palette defaults from the data file
const themeVars = `:root{--bg:${theme.bg};--peri:${theme.peri};--lav:${theme.lav};--violet:${theme.violet};--pink:${theme.pink};--sky:${theme.sky};}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: themeVars }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
