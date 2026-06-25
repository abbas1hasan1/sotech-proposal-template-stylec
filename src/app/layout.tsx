import "./globals.css";
import type { Metadata } from "next";
import { meta, theme } from "@/data/proposal";

// 🔬 deploy origin — Vercel injects VERCEL_PROJECT_PRODUCTION_URL at build/run time.
// Setting metadataBase makes og:image / twitter:image resolve to ABSOLUTE deployed URLs.
// Without it Next falls back to http://localhost:3000 and social/link previews 404.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: meta.title,
  description: meta.description,
  openGraph: { title: meta.title, description: meta.description, type: "website", url: "/" },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
};

// 🔬 per-client theming — colours AND fonts come from the data file (build sets them from the blueprint).
const enc = (f: string) => f.trim().replace(/\s+/g, "+");
const fontHref =
  "https://fonts.googleapis.com/css2?" +
  [
    `family=${enc(theme.fonts.head)}:wght@400..900`,
    theme.fonts.body !== theme.fonts.head ? `family=${enc(theme.fonts.body)}:wght@400..900` : null,
    `family=${enc(theme.fonts.mono)}:wght@400;700`,
  ]
    .filter(Boolean)
    .join("&") +
  "&display=swap";

const themeVars =
  `:root{--bg:${theme.bg};--peri:${theme.peri};--lav:${theme.lav};--violet:${theme.violet};--pink:${theme.pink};--sky:${theme.sky};` +
  `--font-head:'${theme.fonts.head}',system-ui,sans-serif;` +
  `--font-body:'${theme.fonts.body}',system-ui,-apple-system,sans-serif;` +
  `--font-mono:'${theme.fonts.mono}',ui-monospace,monospace;}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={fontHref} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: themeVars }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
