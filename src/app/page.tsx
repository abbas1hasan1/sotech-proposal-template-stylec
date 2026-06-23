import { type ReactNode } from "react";
import { Cover } from "@/components/Cover";
import { Blk } from "@/components/Blk";
import { Overview } from "@/components/Overview";
import { CompetitorAudit } from "@/components/CompetitorAudit";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { sections } from "@/data/proposal";

const bodies: Record<string, ReactNode> = {
  overview: <Overview />,
  competitors: <CompetitorAudit />,
  pricing: <Pricing />,
};

export default function Page() {
  return (
    <>
      <Cover />
      <div className="wrap">
        {sections.map((s) => (
          <Blk key={s.id} id={s.id} index={s.index} title={s.title} sub={s.sub} color={s.color}>
            {bodies[s.kind]}
          </Blk>
        ))}
        <Footer />
      </div>
    </>
  );
}
