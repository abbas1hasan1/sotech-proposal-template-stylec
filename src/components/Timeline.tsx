import { timeline as t } from "@/data/proposal";

export function Timeline() {
  return (
    <>
      <p className="sintro">{t.intro}</p>
      <div className="track">
        {t.milestones.map((m) => (
          <div className="tmile" key={m.n}>
            <span className="tdot">{m.n}</span>
            <b>{m.t}</b>
            <p>{m.d}</p>
          </div>
        ))}
      </div>
      <p className="tag-line" style={{ marginTop: ".7rem" }}>{t.note}</p>
    </>
  );
}
