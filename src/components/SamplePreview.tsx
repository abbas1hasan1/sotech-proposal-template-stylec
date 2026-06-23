"use client";
import { useState } from "react";
import { samplePreview as s } from "@/data/proposal";

export function SamplePreview() {
  const [active, setActive] = useState(s.pages[0].id);
  const page = s.pages.find((p) => p.id === active) ?? s.pages[0];
  return (
    <>
      <p className="sintro">{s.intro}</p>
      <div className="demo">
        <div className="dbar">
          <span className="ddot" /><span className="ddot" /><span className="ddot" />
          <span className="durl">yourbrand.com{page.id === "home" ? "" : "/" + page.id}</span>
        </div>
        <div className="dnav">
          {s.pages.map((p) => (
            <button key={p.id} type="button" className={"dni" + (p.id === active ? " on" : "")} onClick={() => setActive(p.id)}>
              {p.label}
            </button>
          ))}
        </div>
        <div className="dstage">
          <div className="dhero">{page.hero}</div>
          <div className="dblocks">
            {page.blocks.map((b, i) => <div className="dblock" key={i}>{b}</div>)}
          </div>
        </div>
      </div>
    </>
  );
}
