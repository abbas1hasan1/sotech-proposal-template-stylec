import { competitors } from "@/data/proposal";

export function CompetitorAudit() {
  return (
    <>
      <p className="comp-intro">{competitors.intro}</p>
      {competitors.items.map((c, i) => (
        <div className="comp" key={i}>
          <div className="chead">
            <div>
              <b>{c.name}</b>
              <span className="curl">{c.url}</span>
            </div>
            <div className="cnum">
              <b>{c.pages}</b>
              <span> pages</span>
            </div>
          </div>
          <div className="cshot">
            {c.shot ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={c.shot} alt={`${c.name} homepage`} />
            ) : (
              "homepage"
            )}
          </div>
          <div className="cbody">
            <div className="crow">
              <span className="ck">Page types</span>
              <p>{c.pageTypes}</p>
            </div>
            <div className="crow">
              <span className="ck">Notable</span>
              <p>{c.notable}</p>
            </div>
            <div className="crow">
              <span className="ck">Look &amp; feel</span>
              <p>{c.lookFeel}</p>
            </div>
            <div className="ctake">
              <span className="ck">Where you win</span>
              <p>{c.whereYouWin}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
