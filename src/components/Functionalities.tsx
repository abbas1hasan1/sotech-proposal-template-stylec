import { functionalities as f } from "@/data/proposal";

const ink = (c: string) => (c === "pink" || c === "violet" ? "#fff" : "#16161b");

export function Functionalities() {
  return (
    <>
      <p className="sintro">{f.intro}</p>
      <div className="g2">
        {f.features.map((x, i) => (
          <div className="sub" key={i}>
            <span className="lbl" style={{ background: `var(--${x.color})`, color: ink(x.color) }}>{x.tag}</span>
            <h4>{x.title}</h4>
            <p>{x.body}</p>
          </div>
        ))}
      </div>
      <div className="rule">Integrations</div>
      <div className="intg">
        {f.integrations.map((x, i) => (
          <div className="itile" key={i}>
            <span className="ii">{x.icon}</span>
            <div><b>{x.title}</b><p>{x.body}</p></div>
          </div>
        ))}
      </div>
    </>
  );
}
