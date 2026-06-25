import { type ReactNode } from "react";
import { Cover } from "@/components/Cover";
import { Blk } from "@/components/Blk";
import { Overview } from "@/components/Overview";
import { CompetitorAudit } from "@/components/CompetitorAudit";
import { DesignDirection } from "@/components/DesignDirection";
import { SiteMap } from "@/components/SiteMap";
import { Functionalities } from "@/components/Functionalities";
import { SamplePreview } from "@/components/SamplePreview";
import { DomainHosting } from "@/components/DomainHosting";
import { LeadFlow } from "@/components/LeadFlow";
import { Timeline } from "@/components/Timeline";
import { Pricing } from "@/components/Pricing";
import { NextSteps } from "@/components/NextSteps";
import { Service } from "@/components/Service";
import { Footer } from "@/components/Footer";
import { sections, type Kind } from "@/data/proposal";

// Fixed-kind bodies. The "service" kind is rendered separately (by serviceId), since a
// proposal can have several service sections — see the render below.
const bodies: Record<Exclude<Kind, "service">, ReactNode> = {
  overview: <Overview />,
  competitors: <CompetitorAudit />,
  design: <DesignDirection />,
  sitemap: <SiteMap />,
  functionalities: <Functionalities />,
  sample: <SamplePreview />,
  domain: <DomainHosting />,
  leadflow: <LeadFlow />,
  timeline: <Timeline />,
  pricing: <Pricing />,
  nextsteps: <NextSteps />,
};

export default function Page() {
  return (
    <>
      <Cover />
      <div className="wrap">
        {sections.map((s) => (
          <Blk key={s.id} id={s.id} index={s.index} title={s.title} sub={s.sub} color={s.color}>
            {s.kind === "service" ? <Service id={s.serviceId ?? ""} /> : bodies[s.kind]}
          </Blk>
        ))}
        <Footer />
      </div>
    </>
  );
}
