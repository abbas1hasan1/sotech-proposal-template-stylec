import { meta } from "@/data/proposal";

export function Cover() {
  return (
    <header className="hero">
      {/* the page's single semantic H1 — visually the cover is logo-led, so the H1 is sr-only */}
      <h1 className="sr-only">{meta.heading}</h1>
      <div className="hero-top">
        <span className="hero-pill">{meta.preparedFor}</span>
      </div>
      <div className="hero-mid">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-logo" src="/sotech-logo.png" alt="SoTech" />
      </div>
      <a className="hero-cta" href="#overview">
        {meta.cta} <span className="a">↓</span>
      </a>
    </header>
  );
}
