import { meta } from "@/data/proposal";

export function Cover() {
  return (
    <header className="hero">
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
