/**
 * Proposal content — the "recipe" template.
 *
 * CONVENTION (this is a TEMPLATE, not a finished proposal):
 *   • {{double-brace}} tokens  = 🔬 RESEARCH-FILLED — swapped per client by the build
 *                                 (from 05-proposal.md). They mark every variable.
 *   • plain real sentences     = 🔒 STANDARD LANGUAGE — the same on every proposal;
 *                                 keep close to verbatim (intros, framings, the educate
 *                                 copy, definitions, the standard milestones/options/checklist).
 *
 * The /proposal-mode build replaces the {{tokens}} with the client's specifics and the
 * `theme` with the client's colours. Standard copy stays put.
 */

export const meta = {
  title: "{{Client Name}} — Proposal · SoTech",
  description: "A custom website proposal, prepared by SoTech.",
  preparedFor: "Prepared for {{Client Name}}",
  // 🔬 the page's single semantic <h1> (a11y / SEO / social) — name the client + deliverable
  heading: "{{Client Name}} — Website Proposal",
  cta: "View the proposal",
};

/* 🔬 per-client brand — the build fills these from 05-proposal.md.
   `name` drives the Site Map nav logo + the Sample/Domain mock previews;
   `domain` drives every mock URL + the Domain & Hosting essentials.
   Filling these two removes ALL generic "Brand" / "yourbrand.com" placeholders. */
export const brand = {
  name: "{{Client Name}}",
  domain: "{{client-domain}}",
};

/* 🔬 per-client theme — overridden by the build; this is the SoTech default palette.
   `fonts` are data-driven too: the build sets head/body/mono from the blueprint's
   typography (e.g. head "Playfair Display", body "DM Sans"). Use Google variable
   fonts for head/body (loaded with a wght@400..900 range); mono needs 400 + 700.
   Defaults keep the Style-C look (Archivo + Space Mono). */
export const theme = {
  bg: "#0d0d0f",
  peri: "#8E9BE8",
  lav: "#B9A0F0",
  violet: "#9B7BD4",
  pink: "#DA8BC4",
  sky: "#5B9BD5",
  fonts: {
    head: "Archivo",
    body: "Archivo",
    mono: "Space Mono",
  },
};

export const overview = {
  // 🔒 second sentence is standard; 🔬 first sentence describes the build
  intro:
    "{{One-paragraph description of what we're building for {{Client Name}} and who it serves.}} This section sets out the project scope, its primary goal, the key differentiator, and what each side is responsible for.",
  lead: {
    tag: "The project",
    title: "{{One-line project headline}}",
    body: "{{1–2 line description of the build and the audience it's for}}",
  },
  goal: { label: "Primary goal", body: "{{The primary goal this site drives}}" },
  diff: { label: "Key differentiator", body: "{{What sets this apart from the competition}}" },
  clientResp: ["{{Client responsibility 1}}", "{{Client responsibility 2}}", "{{Client responsibility 3}}"],
  sotechResp: ["{{SoTech responsibility 1}}", "{{SoTech responsibility 2}}", "{{SoTech responsibility 3}}"],
  stats: [
    { n: "{{#}}", label: "{{stat label}}" },
    { n: "{{#}}", label: "{{stat label}}" },
    { n: "{{#}}", label: "{{stat label}}" },
  ],
};

export const competitors = {
  // 🔒 framing standard; 🔬 the competitors come from /competitive-brief deep-capture
  intro:
    "The benchmark. A few established players, measured side by side: how each is built, what they do well, and where {{Client Name}} wins. This is the bar to clear.",
  items: [
    { name: "{{Competitor 1}}", url: "{{competitor-1-url}}", pages: "{{#}}", pageTypes: "{{page types}}", notable: "{{notable features}}", lookFeel: "{{look & feel}}", whereYouWin: "{{where the client wins vs this competitor}}" },
    { name: "{{Competitor 2}}", url: "{{competitor-2-url}}", pages: "{{#}}", pageTypes: "{{page types}}", notable: "{{notable features}}", lookFeel: "{{look & feel}}", whereYouWin: "{{where the client wins vs this competitor}}" },
    { name: "{{Competitor 3}}", url: "{{competitor-3-url}}", pages: "{{#}}", pageTypes: "{{page types}}", notable: "{{notable features}}", lookFeel: "{{look & feel}}", whereYouWin: "{{where the client wins vs this competitor}}" },
  ],
};

export const designDirection = {
  // 🔒 all standard language — design direction framing stays the same every time
  intro:
    "The visual direction for the brand, colour palette, typography, and the overall art direction that carries across every page. It's the creative foundation we lock alongside your references before the build begins.",
  note: {
    tag: "What we need from you",
    body: "Lock your brand name, logo, palette and fonts with us, that's the first thing we set together. Until then, everything below is a starting direction to react to, not your final scheme.",
  },
  // 🔬 the build sets these to the client's palette; defaults to SoTech's
  palette: [
    { role: "Primary", name: "{{Colour}}", hex: "#8E9BE8" },
    { role: "Secondary", name: "{{Colour}}", hex: "#B9A0F0" },
    { role: "Secondary", name: "{{Colour}}", hex: "#9B7BD4" },
    { role: "Accent", name: "{{Colour}}", hex: "#DA8BC4" },
    { role: "Complement", name: "{{Colour}}", hex: "#5B9BD5" },
  ],
  type: { title: "{{Type direction}}", body: "{{One line on the typographic feel}}", weights: ["Regular", "Bold", "Black"], on: "Bold" },
  moods: ["{{Mood}}", "{{Mood}}", "{{Mood}}", "{{Mood}}"],
  logoNote: "Drop in yours when ready, we can refine a draft. The layout is built to hold your mark; the palette locks to your brand on the mock.",
};

export const siteMap = {
  intro: "Every page your site will have, how they connect, and what lives on each one.",
  nav: ["Home", "{{Nav}}", "{{Nav}}", "{{Nav}}", "{{Nav}}"],
  // 🔬 the nav's right-side CTA pill in the mock. "Contact" suits most sites;
  // set to "Cart" only for e-commerce. The brand name is the nav logo (brand.name).
  navCta: "Contact",
  pages: [
    { name: "Home", slug: "/", sections: "{{the sections on the home page}}" },
    { name: "{{Page}}", slug: "/{{slug}}", sections: "{{the sections on this page}}" },
    { name: "{{Page}}", slug: "/{{slug}}", sections: "{{the sections on this page}}" },
    { name: "{{Page}}", slug: "/{{slug}}", sections: "{{the sections on this page}}" },
    { name: "{{Page}}", slug: "/{{slug}}", sections: "{{the sections on this page}}" },
    { name: "Contact", slug: "/contact", sections: "{{inquiry form · support path}}" },
  ],
  borrowed: "What to borrow from the audit: {{the competitor-proven features worth building in}}.",
  phase2: "{{Phase 2 scope — what we add later as you grow}}",
};

export const functionalities = {
  intro: "The features and tools your site runs on, what it can actually do for you.",
  features: [
    { tag: "Custom Feature ★", color: "pink", title: "{{Signature custom feature}}", body: "{{what it does and why it sets you apart}}" },
    { tag: "{{Tag}}", color: "lav", title: "{{Feature}}", body: "{{what it does}}" },
    { tag: "{{Tag}}", color: "peri", title: "{{Feature}}", body: "{{what it does}}" },
    { tag: "{{Tag}}", color: "violet", title: "{{Feature}}", body: "{{what it does}}" },
  ],
  integrations: [
    { icon: "$", title: "{{Integration}}", body: "{{what it connects}}" },
    { icon: "@", title: "{{Integration}}", body: "{{what it connects}}" },
    { icon: "↗", title: "{{Integration}}", body: "{{what it connects}}" },
  ],
};

export const samplePreview = {
  intro: "A rough first look at how the site could feel, illustrative, not the final design.",
  pages: [
    { id: "home", label: "Home", hero: "{{Home hero concept}}", blocks: ["{{section}}", "{{section}}", "{{section}}", "{{section}}"] },
    { id: "page2", label: "{{Page}}", hero: "{{hero concept}}", blocks: ["{{section}}", "{{section}}", "{{section}}"] },
    { id: "page3", label: "{{Page}}", hero: "{{hero concept}}", blocks: ["{{section}}", "{{section}}", "{{section}}"] },
    { id: "contact", label: "Contact", hero: "{{Get in touch}}", blocks: ["{{inquiry form}}", "{{support path}}"] },
  ],
};

export const domainHosting = {
  intro: "The essentials that keep your site live, findable, and looked-after over time.",
  // 🔒 the four essentials definitions are standard; 🔬 the domain example comes from brand.domain
  essentials: [
    { k: "Domain", v: `Your unique web address (${brand.domain}), how people find you online.` },
    { k: "Hosting", v: "The server your site's files live on, served fast, secure & always on." },
    { k: "Email", v: `Professional email on your domain (you@${brand.domain}), instant credibility.` },
    { k: "SEO", v: "Helps you rank higher on Google, driving organic traffic to your site." },
  ],
  // 🔬 platform + numbers come from the matched pricing/model ingredient
  cards: [
    { label: "Domain", color: "peri", body: "Your web address, you choose & own it. We help pick + connect it. {{~$X / 2 yrs to the registrar}}." },
    { label: "{{Platform}}", color: "lav", body: "{{The platform that runs the site/store ({{$X/mo}}), and what it covers}}." },
    { label: "Hosting, care & support · SoTech", color: "violet", body: "{{$X/mo}}, we host & connect the site and keep it maintained, fast, secure & supported. (Revisions are a separate add-on, below.)" },
    { label: "{{Build type}}", color: "pink", body: "{{What we're building — a custom design, not a stock template}}." },
  ],
  dashboard: { label: "Client Dashboard", body: "Your private portal to submit & track change requests and view analytics. Every revision goes through it, so nothing gets lost." },
  // 🔒 the revision definition is standard; 🔬 the prices are the per-client model
  revisions: { label: "Revisions", body: "Unlimited revisions {{$X/mo}} via your dashboard (handled one at a time), or {{$X per revision}} as you go. A revision = an edit to existing pages or content; adding a new page or feature is a separate custom quote." },
};

export const leadFlow = {
  intro: "How visitors turn into customers, and where every lead or order ends up.",
  steps: [
    { n: "1", t: "{{Step}}", d: "{{detail}}" },
    { n: "2", t: "{{Step}}", d: "{{detail}}" },
    { n: "3", t: "{{Step}}", d: "{{detail}}" },
    { n: "4", t: "{{Step}}", d: "{{detail}}" },
    { n: "5", t: "{{Step}}", d: "{{detail}}" },
  ],
  // 🔒 the educate copy + 3 destination options are standard
  educate: "Every site needs a home for the people it brings in. When someone buys or fills a form, that lead has to land somewhere you'll actually use, pick how yours flows:",
  options: [
    { n: "1", tag: "Basic · Free", title: "Export to a spreadsheet", body: "Every order and lead lands in an Excel / Google Sheet you can download anytime. Free and manual, you follow up yourself." },
    { n: "2", tag: "Connect", title: "Send leads to a CRM", body: "We route every new lead into whatever CRM you already use, so it lands in the tools your team works in." },
    { n: "3", tag: "Managed", title: "SoTech CRM “The Map”", body: "A fully managed CRM we run for you: every lead in one pipeline with automated email & SMS follow-up, reminders and reporting." },
  ],
  note: "Instant email or text / Slack alerts can pair with any option.",
};

export const timeline = {
  // 🔒 the standard SoTech milestone spine — same on every website proposal
  intro: "The week-by-week plan, from green-light to launch.",
  milestones: [
    { n: "01", t: "Brand & Design Direction", d: "Colours, type & the overall look, locked first." },
    { n: "02", t: "Site Map & Wireframes", d: "Every page mapped, layouts sketched." },
    { n: "03", t: "Development", d: "All pages designed, built and connected." },
    { n: "04", t: "Revision Loop", d: "Your feedback rounds, we refine together." },
    { n: "05", t: "Launch", d: "Final checks, then your site goes live." },
  ],
  note: "Live date is gated by your feedback turnaround, the faster the loop, the faster launch.",
};

export const pricing = {
  intro: "A clear, itemized breakdown of the investment — one-time build plus monthly.",
  // 🔬 line items + amounts from 04-pricing.md (the approved client-facing numbers)
  oneTime: [
    { label: "{{Line item}}", desc: "{{what it covers}}", amount: "{{$0}}" },
    { label: "{{Line item}}", desc: "{{what it covers}}", amount: "{{$0}}" },
    { label: "{{Line item}}", desc: "{{what it covers}}", amount: "{{$0}}" },
    { label: "{{Line item}}", desc: "{{what it covers}}", amount: "{{$0}}" },
  ],
  // `special` is an OPTIONAL per-client rate (off by default — no standard discount)
  total: { standard: "{{$0,000}}", note: "+ applicable tax" } as { standard: string; special?: string; specialLabel?: string; note: string },
  monthly: [
    { label: "{{Platform}} — platform", desc: "{{what it covers, who it's paid to}}", amount: "{{$0/mo}}" },
    { label: "SoTech — hosting, care & support", desc: "Managed hosting, maintenance & support. Paid to SoTech.", amount: "{{$0/mo}}" },
    { label: "Unlimited revisions (optional)", desc: "Edits to existing pages via your dashboard, one at a time. Or {{$0 per revision}}.", amount: "{{$0/mo}}" },
  ],
  // 🔒 revision definition is standard
  note: "Revisions = edits to existing pages; a new page or feature is quoted separately.",
};

export const nextSteps = {
  // 🔒 the standard "what we need to start" checklist
  intro: "The handful of things we need from you to get started.",
  items: [
    { t: "Brand name + domain", d: "Pick a name & check availability." },
    { t: "Logo + design preferences", d: "Your mark + colour/font direction." },
    { t: "Brand guard-rail doc", d: "Products/services, benefits, USP, ethos." },
    { t: "Content & assets", d: "Photos, copy, pricing, anything that goes on the site." },
    { t: "Lead destination", d: "Pick where leads & orders go (see Lead Flow)." },
  ],
};

/* 🔬 SERVICE MODULES (non-website engagements: SEO, Paid Ads, CRM, Tracking, Integrations, AI).
   Generic + data-driven: add a service by adding an entry here + a `sections[]` row with
   kind "service" and the matching `serviceId` — NO new component needed. 🔒 framing stays
   standard (source copy in skills/proposal-build/modules.md); 🔬 specifics fill from 05-proposal.md.
   The website default (below) uses NO services; a `full` proposal adds them. `seo` is the
   shape example — copy it per service (e.g. "paidAds", "crm", "tracking", "integrations", "ai"). */
export const services: Record<
  string,
  {
    intro: string;
    whatItDoes: { tag: string; title: string; body: string }[];
    deliverables: string[];
    note?: string;
  }
> = {
  seo: {
    intro: "{{One line on the SEO goal for {{Client Name}} — the ranking/traffic outcome this drives}}",
    whatItDoes: [
      { tag: "On-page", title: "{{On-page focus}}", body: "{{titles, content & structure we optimise}}" },
      { tag: "Local", title: "{{Local / GBP focus}}", body: "{{Google Business Profile, citations, local pack}}" },
      { tag: "Technical", title: "{{Technical focus}}", body: "{{speed, indexing, schema, crawlability}}" },
    ],
    deliverables: ["{{Deliverable 1}}", "{{Deliverable 2}}", "{{Deliverable 3}}"],
    note: "Reported monthly; SEO compounds over time.",
  },
};

export type Kind =
  | "overview" | "competitors" | "design" | "sitemap" | "functionalities"
  | "sample" | "domain" | "leadflow" | "timeline" | "pricing" | "nextsteps"
  | "service";

export type Section = {
  id: string;
  index: string;
  title: string;
  sub: string;
  color: string;
  kind: Kind;
  serviceId?: string; // only for kind "service" — keys into `services`
};

/* 🔒 LOCKED Style-1 colour rhythm — assigned BY POSITION (index), never per section.
   Heavy shades (violet, sky) are always flanked by lights → never two heavies adjacent.
   Slots are themed per client via `theme`; keep lighter brand shades on peri/lav/pink and
   deeper shades on violet/sky (white stays white) so the rhythm survives per-client theming. */
const COLOR_SEQUENCE = ["peri", "violet", "lav", "sky", "pink", "white"] as const;

/* 🔒 The TITLES + SUBS below are LOCKED canonical module names — never rename, reorder, or
   tokenize them per client; only the per-section content exports vary. Website default = these 11.
   A `full` proposal reorders this list and inserts `kind:"service"` rows (color auto-assigns). */
const RAW_SECTIONS: Omit<Section, "color">[] = [
  { id: "overview", index: "01", title: "Overview", sub: "What we're building", kind: "overview" },
  { id: "competitors", index: "02", title: "Competitor Audit", sub: "What the market looks like", kind: "competitors" },
  { id: "design", index: "03", title: "Design Direction", sub: "The look & feel", kind: "design" },
  { id: "sitemap", index: "04", title: "Site Map", sub: "Pages & structure", kind: "sitemap" },
  { id: "functionalities", index: "05", title: "Functionalities", sub: "What it can do", kind: "functionalities" },
  { id: "sample", index: "06", title: "Sample Preview", sub: "A first look at the site", kind: "sample" },
  { id: "domain", index: "07", title: "Domain & Hosting", sub: "Where it lives", kind: "domain" },
  { id: "leadflow", index: "08", title: "Lead Flow", sub: "How customers come in, and where leads go", kind: "leadflow" },
  { id: "timeline", index: "09", title: "Timeline", sub: "From kickoff to launch", kind: "timeline" },
  { id: "pricing", index: "10", title: "Pricing", sub: "The investment", kind: "pricing" },
  { id: "nextsteps", index: "11", title: "Next Steps", sub: "What we need from you", kind: "nextsteps" },
];

// Colour derived by position from COLOR_SEQUENCE — do NOT hand-assign colours per section.
export const sections: Section[] = RAW_SECTIONS.map((s, i) => ({
  ...s,
  color: COLOR_SEQUENCE[i % COLOR_SEQUENCE.length],
}));
