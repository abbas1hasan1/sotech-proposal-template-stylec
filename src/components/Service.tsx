import { services } from "@/data/proposal";

/* Generic service module — renders any entry in the `services` record by id.
   Add a new service = add a `services[id]` entry + a sections[] row {kind:"service", serviceId:id}.
   No new component needed. Reuses the standard Style-1 utility classes. */
export function Service({ id }: { id: string }) {
  const s = services[id];
  if (!s) return null;
  return (
    <>
      <p className="sintro">{s.intro}</p>
      <div className="g2">
        {s.whatItDoes.map((x, i) => (
          <div className="sub" key={i}>
            <span className="lbl">{x.tag}</span>
            <h4>{x.title}</h4>
            <p>{x.body}</p>
          </div>
        ))}
      </div>
      <div className="rule">What you get</div>
      {s.deliverables.map((d, i) => (
        <div className="chk" key={i}>
          <span className="bx" />
          <span>{d}</span>
        </div>
      ))}
      {s.note ? <p className="tag-line" style={{ marginTop: ".6rem" }}>{s.note}</p> : null}
    </>
  );
}
