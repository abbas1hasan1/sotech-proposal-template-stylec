import { designDirection as d } from "@/data/proposal";

export function DesignDirection() {
  return (
    <>
      <p className="sintro">{d.intro}</p>
      <div className="dnote">
        <b className="dn-tag">{d.note.tag}</b>
        <p>{d.note.body}</p>
      </div>
      <div className="rule">Color palette · starting direction</div>
      <div className="cpal">
        {d.palette.map((c, i) => (
          <div className="cpc" key={i} style={{ background: c.hex }}>
            <div className="role">{c.role}</div>
            <div className="cn">{c.name}</div>
            <div className="cx">{c.hex}</div>
          </div>
        ))}
      </div>
      <div className="rule">Typography</div>
      <div className="dspec">
        <div className="dt">Aa</div>
        <div className="dmeta">
          <b>{d.type.title}</b>
          <p>{d.type.body}</p>
          <div className="wts">
            {d.type.weights.map((w, i) => (
              <span key={i} className={w === d.type.on ? "on" : ""}>{w}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="rule">Mood &amp; feel</div>
      <div className="moods">{d.moods.map((m, i) => <span key={i}>{m}</span>)}</div>
      <div className="sub" style={{ marginTop: ".5rem" }}>
        <span className="lbl">Logo &amp; icons</span>
        <p>{d.logoNote}</p>
      </div>
    </>
  );
}
