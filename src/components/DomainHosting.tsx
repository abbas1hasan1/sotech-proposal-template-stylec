import { domainHosting as d, brand } from "@/data/proposal";

const ink = (c: string) => (c === "pink" || c === "violet" ? "#fff" : "#16161b");

export function DomainHosting() {
  return (
    <>
      <p className="sintro">{d.intro}</p>
      <div className="device">
        <div className="dvbar"><span className="ddot" /><span className="ddot" /><span className="ddot" /><span className="durl">{brand.domain}</span></div>
        <div className="dvbody">
          <div className="dvhero">{brand.name}</div>
          <div className="dvrow"><span /><span /><span /></div>
        </div>
      </div>
      <div className="ess">
        {d.essentials.map((e, i) => (
          <div className="ecard" key={i}><b>{e.k}</b><p>{e.v}</p></div>
        ))}
      </div>
      <div className="rule">Hosting &amp; care</div>
      <div className="g2">
        {d.cards.map((c, i) => (
          <div className="sub" key={i}>
            <span className="lbl" style={{ background: `var(--${c.color})`, color: ink(c.color) }}>{c.label}</span>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
      <div className="g2" style={{ marginTop: ".5rem" }}>
        <div className="sub"><span className="lbl" style={{ background: "var(--sky)" }}>{d.dashboard.label}</span><p>{d.dashboard.body}</p></div>
        <div className="sub"><span className="lbl" style={{ background: "var(--pink)", color: "#fff" }}>{d.revisions.label}</span><p>{d.revisions.body}</p></div>
      </div>
    </>
  );
}
