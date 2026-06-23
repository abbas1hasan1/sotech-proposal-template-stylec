import { pricing } from "@/data/proposal";

export function Pricing() {
  return (
    <>
      <p className="sintro">{pricing.intro}</p>
      <div className="rule">One-time · Website build</div>
      {pricing.oneTime.map((x, i) => (
        <div className="li" key={i}>
          <div>
            <b>{x.label}</b>
            <p>{x.desc}</p>
          </div>
          <div className="lp">{x.amount}</div>
        </div>
      ))}
      <div className="total2">
        {pricing.total.special ? (
          <>
            <div className="t2row">
              <span className="t2lab">Standard build</span>
              <span className="t2orig">{pricing.total.standard}</span>
            </div>
            <div className="t2row t2main">
              <span className="t2lab">{pricing.total.specialLabel}</span>
              <span className="t2now">{pricing.total.special}</span>
            </div>
          </>
        ) : (
          <div className="t2row t2main">
            <span className="t2lab">Total build</span>
            <span className="t2now">{pricing.total.standard}</span>
          </div>
        )}
        <div className="t2tax">{pricing.total.note}</div>
      </div>
      <div className="rule">Monthly · Platform &amp; care</div>
      {pricing.monthly.map((x, i) => (
        <div className="li" key={i}>
          <div>
            <b>{x.label}</b>
            <p>{x.desc}</p>
          </div>
          <div className="lp">{x.amount}</div>
        </div>
      ))}
      <p className="tag-line">{pricing.note}</p>
    </>
  );
}
