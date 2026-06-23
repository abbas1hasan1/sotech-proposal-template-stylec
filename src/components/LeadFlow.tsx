import { Fragment } from "react";
import { leadFlow as l } from "@/data/proposal";

export function LeadFlow() {
  return (
    <>
      <p className="sintro">{l.intro}</p>
      <div className="flow">
        {l.steps.map((s, i) => (
          <Fragment key={s.n}>
            <div className="fstep">
              <span className="fn">{s.n}</span>
              <div className="ft"><b>{s.t}</b><p>{s.d}</p></div>
            </div>
            {i < l.steps.length - 1 && <span className="farr">›</span>}
          </Fragment>
        ))}
      </div>
      <div className="sub" style={{ marginTop: ".6rem" }}>
        <span className="lbl" style={{ background: "var(--pink)", color: "#fff" }}>Where your leads go</span>
        <p>{l.educate}</p>
      </div>
      <div className="opts">
        {l.options.map((o, i) => (
          <div className="opt" key={i}>
            <div className="ohead"><span className="on">{o.n}</span><span className="otag">{o.tag}</span></div>
            <b>{o.title}</b>
            <p>{o.body}</p>
          </div>
        ))}
      </div>
      <p className="tag-line">{l.note}</p>
    </>
  );
}
