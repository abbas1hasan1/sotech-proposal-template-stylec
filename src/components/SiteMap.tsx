import { siteMap as s } from "@/data/proposal";

export function SiteMap() {
  return (
    <>
      <p className="sintro">{s.intro}</p>
      <div className="rule">Navigation</div>
      <div className="navbar">
        <span className="nlogo">Brand</span>
        {s.nav.map((n, i) => <span key={i} className="nitem">{n}</span>)}
        <span className="ncart">Cart</span>
      </div>
      <div className="rule">Pages</div>
      <div className="ptree">
        {s.pages.map((p, i) => (
          <div className="pnode" key={i}>
            <b>{p.name}</b>
            <span className="ps">{p.slug}</span>
          </div>
        ))}
      </div>
      <div className="rule">Sections per page</div>
      <div className="pgwrites">
        {s.pages.map((p, i) => (
          <div className="pgw" key={i}>
            <b>{p.name}</b>
            <p>{p.sections}</p>
          </div>
        ))}
      </div>
      <p className="tag-line" style={{ marginTop: ".6rem" }}>{s.borrowed}</p>
      <div className="sub" style={{ marginTop: ".5rem" }}>
        <span className="lbl" style={{ background: "var(--lav)" }}>Phase 2 · later</span>
        <p>{s.phase2}</p>
      </div>
    </>
  );
}
