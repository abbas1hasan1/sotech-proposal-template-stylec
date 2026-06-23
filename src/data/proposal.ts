/**
 * Proposal content — the "recipe".
 * Per the SoTech module recipe: 🔒 standard language stays put; 🔬 research-filled
 * parts are swapped per client. Theme (colours/fonts) varies per client; the
 * structure + feel is the Style C standard.
 *
 * This file is what the build (and eventually /proposal-mode) fills from 05-proposal.md.
 * The content below is the peptide example, used as the template's default.
 */

export const meta = {
  title: "A Proposal — SoTech",
  description: "A custom website & e-commerce proposal, prepared by SoTech.",
  preparedFor: "Prepared for Jesus & John",
  cta: "View the proposal",
};

/* 🔬 per-client theme — structure/feel stays Style C */
export const theme = {
  cover: "#B9A0F0",
  peri: "#8E9BE8",
  lav: "#B9A0F0",
  violet: "#9B7BD4",
  pink: "#DA8BC4",
  sky: "#5B9BD5",
};

export const overview = {
  intro:
    "A custom website & e-commerce store for a new peptide brand to launch online and sell across its product categories. This section sets out the project scope, its primary goal, the key differentiator, and what each side is responsible for.",
  lead: {
    tag: "The project",
    title: "A lifestyle peptide store, built to sell.",
    body: "A custom, mobile-first e-commerce site for a young, fit audience. Premium & marketing-led, not a clinical biomed catalog.",
  },
  goal: { label: "Primary goal", body: "One link that sells: a place to send your warm, local audience today, and the foundation to scale into full e-commerce + organic traffic." },
  diff: { label: "Key differentiator", body: "Lifestyle, not biomed. Influencer-worthy design with events & sponsorship energy: the look does the marketing." },
  clientResp: ["Brand name, logo & design direction", "Product photos, pricing & descriptions", "Feedback within each revision round"],
  sotechResp: ["Design, build & launch", "E-commerce + the dosage calculator", "Hosting, care & support"],
  stats: [
    { n: "7", label: "Pages" },
    { n: "20", label: "Products" },
    { n: "3", label: "Shop categories" },
  ],
};

export const competitors = {
  intro:
    "The benchmark. Three established players, measured side by side: how each store is built, what they do well, and where a focused, lifestyle-led brand wins. This is the bar to clear.",
  items: [
    { name: "Klouds Klub", url: "kloudsklub.myshopify.com", pages: "~5", pageTypes: "Home · catalog · product · contact", notable: "Consultation / Rx flow · dreamy pastel hero · one CTA", lookFeel: "Soft pastels, lavender & peach", whereYouWin: "Borrow the dreamy look, then beat it on the story, About, trust signals, and real structure it's missing." },
    { name: "Ro", url: "ro.co", pages: "25+", pageTypes: "Home · category hubs · product / condition · quiz · about · blog", notable: "Quiz → consult funnel · subscriptions · heavy clinical trust", lookFeel: "Clean white & navy, clinical", whereYouWin: "Borrow their best-in-class trust & conversion paths, but lose the cold, older-skewing tone." },
    { name: "Hims", url: "hims.com", pages: "25+", pageTypes: "Home · category hubs · product · quiz · about · blog", notable: "Condition quizzes · subscriptions · lifestyle photography", lookFeel: "Warm cream & amber, youthful", whereYouWin: "The closest to your vibe. Win by matching that energy at a focused, boutique scale." },
  ],
};

export const pricing = {
  intro: "A clear, itemized breakdown of the investment — one-time build plus monthly.",
  oneTime: [
    { label: "UI/UX Design", desc: "Custom visual design, mobile-first. Not a template.", amount: "$1,000" },
    { label: "Website Development", desc: "All pages, responsive, front + back end.", amount: "$1,000" },
    { label: "Shopify Store Setup", desc: "Catalog, categories, cart & secure checkout.", amount: "$400" },
    { label: "Dosage Calculator", desc: "Custom interactive feature.", amount: "$200" },
    { label: "Forms, Integrations & SEO", desc: "Forms wired + on-page SEO basics.", amount: "$200" },
    { label: "Client Dashboard", desc: "Revisions + analytics portal.", amount: "$200" },
  ],
  total: { standard: "$3,000", special: "$1,000", specialLabel: "Friends & family rate", note: "+ applicable tax" },
  monthly: [
    { label: "Shopify Basic — e-commerce platform", desc: "Store, checkout, product CMS & sales tracking. Paid to Shopify.", amount: "$39/mo" },
    { label: "SoTech — hosting, care & support", desc: "Managed hosting, maintenance & support. Paid to SoTech.", amount: "$15/mo" },
    { label: "Unlimited revisions (optional)", desc: "Edits to existing pages via your dashboard, one at a time. Or $50 per revision.", amount: "$75/mo" },
  ],
  note: "Revisions = edits to existing pages; a new page or feature is quoted separately.",
};

export type Section = { id: string; index: string; title: string; sub: string; color: keyof typeof theme; kind: "overview" | "competitors" | "pricing" };

export const sections: Section[] = [
  { id: "overview", index: "01", title: "Overview", sub: "What we're building", color: "peri", kind: "overview" },
  { id: "competitors", index: "02", title: "Competitor Audit", sub: "What the market looks like", color: "lav", kind: "competitors" },
  { id: "pricing", index: "03", title: "Pricing", sub: "The investment", color: "pink", kind: "pricing" },
];
