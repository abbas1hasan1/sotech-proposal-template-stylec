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
  bg: "#0d0d0f",
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

export const designDirection = {
  intro:
    "The visual direction for the brand, colour palette, typography, and the overall art direction that carries across every page. It's the creative foundation we lock alongside your references before the build begins.",
  note: {
    tag: "What we need from you",
    body: "You don't have a brand name, logo or colours chosen yet, and that's completely fine. Everything below is a starting direction to react to, not your final scheme. Locking your name, logo, palette and fonts is the first thing we set together, and the main thing we need from you to begin.",
  },
  palette: [
    { role: "Primary", name: "Periwinkle", hex: "#8E9BE8" },
    { role: "Secondary", name: "Lavender", hex: "#B9A0F0" },
    { role: "Secondary", name: "Violet", hex: "#9B7BD4" },
    { role: "Accent", name: "Pink", hex: "#DA8BC4" },
    { role: "Complement", name: "Sky", hex: "#5B9BD5" },
  ],
  type: { title: "Confident, modern sans-serif", body: "Big uppercase headlines + clean, readable body. Bold but friendly, reads premium on mobile.", weights: ["Regular", "Bold", "Black"], on: "Bold" },
  moods: ["Dreamy", "Premium", "Confident", "Lifestyle", "Influencer-ready"],
  logoNote: "Drop in yours when ready, we can refine a draft. The layout is built to hold your mark; the palette locks to your brand on the mock.",
};

export const siteMap = {
  intro: "Every page your site will have, how they connect, and what lives on each one.",
  nav: ["Home", "Shop", "About", "FAQ", "Contact"],
  pages: [
    { name: "Home", slug: "/", sections: "Hero · 3 category cards · “find your fit” quiz · featured products · reviews · trust row." },
    { name: "Shop", slug: "/shop", sections: "Category hubs (weight loss · longevity · recovery) · product grid · quick add." },
    { name: "Product ★", slug: "/[item]", sections: "Gallery · dosage & frequency · the dosage calculator · subscribe & save · add to cart." },
    { name: "About", slug: "/about", sections: "Founders’ story · brand ethos · credibility & quality." },
    { name: "FAQ", slug: "/faq", sections: "Dosage basics · how-to-use · safety · shipping · payments." },
    { name: "Contact", slug: "/contact", sections: "Inquiry form · support path." },
  ],
  borrowed: "Borrowed from the audit: a “Find your fit” quiz & subscribe & save (Ro & Hims), category hubs (both), and a real FAQ + reviews (the trust Klouds lacks).",
  phase2: "Member portal · full SEO/blog · deeper analytics · scale.",
};

export const functionalities = {
  intro: "The features and tools your site runs on, what it can actually do for you.",
  features: [
    { tag: "Custom Feature ★", color: "pink", title: "Dosage Calculator", body: "Vials per cycle from body weight + cycle length, the interactive hook that sets you apart." },
    { tag: "Guided", color: "lav", title: "“Find your fit” quiz", body: "A few questions → the right peptides recommended. A proven path the top brands use." },
    { tag: "Recurring", color: "peri", title: "Subscribe & save", body: "Customers can subscribe to reorder automatically, steady repeat revenue." },
    { tag: "E-Commerce", color: "violet", title: "A full store on Shopify", body: "Catalog by category, cart, secure checkout & order tracking, powered by Shopify." },
  ],
  integrations: [
    { icon: "$", title: "Shopify checkout", body: "Secure checkout & payments, built into Shopify." },
    { icon: "@", title: "Email capture", body: "Newsletter + abandoned-cart flows." },
    { icon: "↗", title: "Analytics + Pixel", body: "Google Analytics + Meta Pixel for ads & tracking." },
  ],
};

export const samplePreview = {
  intro: "A rough first look at how the site could feel, illustrative, not the final design.",
  pages: [
    { id: "home", label: "Home", hero: "Lifestyle hero + headline + CTA", blocks: ["3 category cards", "Find-your-fit quiz", "Featured products", "Reviews", "Trust row"] },
    { id: "shop", label: "Shop", hero: "Shop the collection", blocks: ["Category tabs", "Product grid", "Quick add to cart"] },
    { id: "product", label: "Product", hero: "Product gallery", blocks: ["Dosage & frequency", "Dosage calculator ★", "Subscribe & save", "Add to cart"] },
    { id: "about", label: "About", hero: "Our story", blocks: ["Founders’ story", "Brand ethos", "Credibility & quality"] },
    { id: "faq", label: "FAQ", hero: "Questions, answered", blocks: ["Dosage basics", "How to use", "Safety", "Shipping"] },
    { id: "contact", label: "Contact", hero: "Get in touch", blocks: ["Inquiry form", "Support path"] },
  ],
};

export const domainHosting = {
  intro: "The essentials that keep your site live, findable, and looked-after over time.",
  essentials: [
    { k: "Domain", v: "Your unique web address (yourbrand.com), how people find you online." },
    { k: "Hosting", v: "The server your site's files live on, served fast, secure & always on." },
    { k: "Email", v: "Professional email on your domain (you@yourbrand.com), instant credibility." },
    { k: "SEO", v: "Helps you rank higher on Google, driving organic traffic to your site." },
  ],
  cards: [
    { label: "Domain", color: "peri", body: "Your web address, you choose & own it. We help pick + connect it. ~$24–75 / 2 yrs to the registrar." },
    { label: "E-commerce platform · Shopify", color: "lav", body: "Shopify Basic ($39/mo) runs your store, checkout, product manager & sales tracking, your admin for everything commerce." },
    { label: "Hosting, care & support · SoTech", color: "violet", body: "$15/mo, we host & connect the site and keep it maintained, fast, secure & supported. (Revisions are a separate add-on, below.)" },
    { label: "Custom Shopify build", color: "pink", body: "A custom-designed Shopify store + your dosage calculator, not a stock template." },
  ],
  dashboard: { label: "Client Dashboard", body: "Your private portal to submit & track change requests and view analytics. Every revision goes through it, so nothing gets lost." },
  revisions: { label: "Revisions", body: "Unlimited revisions $75/mo via your dashboard (handled one at a time), or $50 per revision as you go. A revision = an edit to existing pages or content; adding a new page or feature is a separate custom quote." },
};

export const leadFlow = {
  intro: "How visitors turn into customers, and where every lead or order ends up.",
  steps: [
    { n: "1", t: "Land", d: "From your link or social." },
    { n: "2", t: "Browse", d: "By category → a product." },
    { n: "3", t: "Decide", d: "Dosage info + calculator." },
    { n: "4", t: "Checkout", d: "Cart → secure Shopify." },
    { n: "5", t: "Confirm", d: "Order + on your list." },
  ],
  educate: "Every site needs a home for the people it brings in. When someone buys or fills a form, that lead has to land somewhere you'll actually use, pick how yours flows:",
  options: [
    { n: "1", tag: "Basic · Free", title: "Export to a spreadsheet", body: "Every order and lead lands in an Excel / Google Sheet you can download anytime. Free and manual, you follow up yourself." },
    { n: "2", tag: "Connect", title: "Send leads to a CRM", body: "We route every new lead into whatever CRM you already use, so it lands in the tools your team works in." },
    { n: "3", tag: "Managed", title: "SoTech CRM “The Map”", body: "A fully managed CRM we run for you: every lead in one pipeline with automated email & SMS follow-up, reminders and reporting." },
  ],
  note: "Instant email or text / Slack alerts can pair with any option.",
};

export const timeline = {
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
  oneTime: [
    { label: "UI/UX Design", desc: "Custom visual design, mobile-first. Not a template.", amount: "$1,000" },
    { label: "Website Development", desc: "All pages, responsive, front + back end.", amount: "$1,000" },
    { label: "Shopify Store Setup", desc: "Catalog, categories, cart & secure checkout.", amount: "$400" },
    { label: "Dosage Calculator", desc: "Custom interactive feature.", amount: "$200" },
    { label: "Forms, Integrations & SEO", desc: "Forms wired + on-page SEO basics.", amount: "$200" },
    { label: "Client Dashboard", desc: "Revisions + analytics portal.", amount: "$200" },
  ],
  // Reference-based pricing (modelled on past builds, e.g. 180AgPros). `special` is
  // an OPTIONAL per-client rate (off by default) — not a standard part of the template.
  total: { standard: "$3,000", note: "+ applicable tax" } as { standard: string; special?: string; specialLabel?: string; note: string },
  monthly: [
    { label: "Shopify Basic — e-commerce platform", desc: "Store, checkout, product CMS & sales tracking. Paid to Shopify.", amount: "$39/mo" },
    { label: "SoTech — hosting, care & support", desc: "Managed hosting, maintenance & support. Paid to SoTech.", amount: "$15/mo" },
    { label: "Unlimited revisions (optional)", desc: "Edits to existing pages via your dashboard, one at a time. Or $50 per revision.", amount: "$75/mo" },
  ],
  note: "Revisions = edits to existing pages; a new page or feature is quoted separately.",
};

export const nextSteps = {
  intro: "The handful of things we need from you to get started.",
  items: [
    { t: "Brand name + domain", d: "Pick a name & check availability." },
    { t: "Logo + design preferences", d: "Your mock + color/font direction." },
    { t: "Brand guard-rail doc", d: "Products, benefits, USP, ethos." },
    { t: "Product data", d: "Photos, pricing, descriptions, categories." },
    { t: "Lead destination", d: "Pick where leads & orders go (see Lead Flow)." },
  ],
};

export type Kind =
  | "overview" | "competitors" | "design" | "sitemap" | "functionalities"
  | "sample" | "domain" | "leadflow" | "timeline" | "pricing" | "nextsteps";

export type Section = { id: string; index: string; title: string; sub: string; color: string; kind: Kind };

export const sections: Section[] = [
  { id: "overview", index: "01", title: "Overview", sub: "What we're building", color: "peri", kind: "overview" },
  { id: "competitors", index: "02", title: "Competitor Audit", sub: "What the market looks like", color: "lav", kind: "competitors" },
  { id: "design", index: "03", title: "Design Direction", sub: "The look & feel", color: "violet", kind: "design" },
  { id: "sitemap", index: "04", title: "Site Map", sub: "Pages & structure", color: "pink", kind: "sitemap" },
  { id: "functionalities", index: "05", title: "Functionalities", sub: "What it can do", color: "white", kind: "functionalities" },
  { id: "sample", index: "06", title: "Sample Preview", sub: "A first look at the site", color: "peri", kind: "sample" },
  { id: "domain", index: "07", title: "Domain & Hosting", sub: "Where it lives", color: "lav", kind: "domain" },
  { id: "leadflow", index: "08", title: "Lead Flow", sub: "How customers come in, and where leads go", color: "violet", kind: "leadflow" },
  { id: "timeline", index: "09", title: "Timeline", sub: "From kickoff to launch", color: "pink", kind: "timeline" },
  { id: "pricing", index: "10", title: "Pricing", sub: "The investment", color: "white", kind: "pricing" },
  { id: "nextsteps", index: "11", title: "Next Steps", sub: "What we need from you", color: "peri", kind: "nextsteps" },
];
