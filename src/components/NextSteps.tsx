import { nextSteps as n } from "@/data/proposal";

export function NextSteps() {
  return (
    <>
      <p className="sintro">{n.intro}</p>
      {n.items.map((x, i) => (
        <div className="chk" key={i}>
          <span className="bx" />
          <div><b>{x.t}</b><span>{x.d}</span></div>
        </div>
      ))}
    </>
  );
}
