import { overview } from "@/data/proposal";

export function Overview() {
  return (
    <>
      <p className="sintro">{overview.intro}</p>
      <div className="lead">
        <span className="lbl">{overview.lead.tag}</span>
        <h4>{overview.lead.title}</h4>
        <p>{overview.lead.body}</p>
      </div>
      <div className="g2">
        <div className="sub">
          <span className="lbl">{overview.goal.label}</span>
          <p>{overview.goal.body}</p>
        </div>
        <div className="sub">
          <span className="lbl">{overview.diff.label}</span>
          <p>{overview.diff.body}</p>
        </div>
      </div>
      <div className="split">
        <div className="col">
          <b>Client responsibilities</b>
          <ul>
            {overview.clientResp.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <b>SoTech responsibilities</b>
          <ul>
            {overview.sotechResp.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ostat">
        {overview.stats.map((s, i) => (
          <div className="o" key={i}>
            <b>{s.n}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
