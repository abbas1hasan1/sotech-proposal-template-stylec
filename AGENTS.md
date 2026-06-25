# SoTech Style-C Proposal Template — build manual

This is the **canonical SoTech "Style C" proposal template** (the peptide build), data-driven and
themeable. Senior Developer (Proposal Mode) clones it per client, fills the data, themes it, and
deploys to Vercel. Read this before editing — it's the data contract + the things that have shipped
broken before.

## What you change (and what you DON'T)

You touch **exactly one file for content**: `src/data/proposal.ts`. Everything else (components, CSS,
layout) is the locked Style-C system — do **not** restyle it per client. Theming is data only.

- `{{double-brace}}` tokens = 🔬 **research-filled** — replace every one from `05-proposal.md`. A
  shipped proposal must contain **zero** `{{` tokens.
- Plain real sentences = 🔒 **standard language** — keep close to verbatim (intros, definitions,
  the educate copy, standard milestones/options/checklist).

## The data contract — fill ALL of these

| Field | What it drives | Fill with |
|-------|----------------|-----------|
| `meta.title` / `meta.description` | `<title>`, social/link preview text | Client name + "Website Proposal · SoTech" |
| `meta.preparedFor` | the cover pill | "Prepared for {Client}" |
| `meta.heading` | the page's single **`<h1>`** (a11y/SEO, sr-only) | "{Client} — Website Proposal" |
| `brand.name` | Site Map nav logo + Sample/Domain mock previews | the client's brand name |
| `brand.domain` | every mock URL bar + the Domain & Hosting "essentials" copy | the client's real/proposed domain (e.g. `greenmarksolutions.com`) — **never leave `{{client-domain}}` or "yourbrand.com"** |
| `theme.{bg,peri,lav,violet,pink,sky}` | the whole palette | the client's colours (keep the 6-role structure) |
| `theme.fonts.{head,body,mono}` | the **actually rendered** fonts | the blueprint's typography. `head` = display/headings, `body` = body/UI, `mono` = the small mono accents. Use **Google variable fonts** for head/body (loaded `wght@400..900`); `mono` needs weights 400 + 700 |
| `siteMap.navCta` | the nav's right-side pill in the mock | `"Contact"` for most sites; `"Cart"` **only** for e-commerce |
| every other section export | its section's content | `05-proposal.md` (pricing comes from there, never `04-pricing.md`) |

**Theme fonts are real.** Setting `theme.fonts.head`/`body` swaps the loaded Google Font AND the CSS
vars (`--font-head`/`--font-body`/`--font-mono`). If the blueprint says "Playfair Display headings,
DM Sans body", set `fonts: { head: "Playfair Display", body: "DM Sans", mono: "Space Mono" }` — do
not leave the Archivo default and call it themed. (This was SOT-1630.)

## Section names & order are LOCKED

The `sections[]` (built from `RAW_SECTIONS`) `title` + `sub` are the **canonical module names** —
"Overview", "Competitor Audit", … "Pricing", "Next Steps". **Never rename, reorder, or tokenize
them per client.** Only the per-section content exports vary. (Pricing is always "Pricing"; Next
Steps is always "Next Steps" — no custom headings.) A website proposal is exactly these 11.

## Colours rotate BY POSITION — don't hand-assign them

Section colours are **not** set per section. They're derived by index from one locked sequence:

```
COLOR_SEQUENCE = ["peri", "violet", "lav", "sky", "pink", "white"]   // repeats
```

Heavy shades (`violet`, `sky`) are always flanked by lights → **no two heavy shades adjacent**, by
construction, no matter how many modules a proposal has. Do **not** add a `color` to a section row —
it's computed.

**Theming guardrail:** the rotation assigns *slots* (`peri/lav/violet/pink/sky`) that your client
`theme` fills with brand hexes. Put the client's **lighter** brand shades on `peri/lav/pink` and the
**deeper** ones on `violet/sky` (white stays white). Otherwise a palette could make two adjacent
slots both dark and break the rhythm.

## Adding a module

**A new SERVICE module (SEO, Paid Ads, CRM, Tracking, Integrations, AI) — DATA-ONLY:**
1. Add an entry to the `services` record in `src/data/proposal.ts` (copy the `seo` shape:
   `intro` + `whatItDoes[]` + `deliverables[]` + optional `note`). Keep the 🔒 standard framing
   from `skills/proposal-build/modules.md`; fill 🔬 tokens from `05-proposal.md`.
2. Add a `sections[]` row: `{ id, index, title: "<Canonical Name>", sub: "…", kind: "service",
   serviceId: "<the services key>" }`. Colour auto-assigns by position. No new component.

Canonical service ids → display names: `seo` → "SEO", `paidAds` → "Paid Advertising",
`crm` → "CRM & Automations", `tracking` → "Tracking & Analytics", `integrations` → "Integrations",
`ai` → "AI for Marketing".

**A brand-new bespoke module (rare — only when the generic service shape can't express it):**
`Kind` union → new data export → new `src/components/<Name>.tsx` → add to the `bodies` map in
`src/app/page.tsx` → `sections[]` row. (The fixed website modules each work this way.)

## Deploy

`vercel --prod --project sotech-{slug}-proposal`, then post the **production alias**
`https://sotech-{slug}-proposal.vercel.app` (NOT the hashed `…-<hash>-….vercel.app` preview — those
401 under Vercel preview protection). Vercel injects `VERCEL_PROJECT_PRODUCTION_URL` at build time,
which `layout.tsx` uses for `metadataBase` so `og:image`/`twitter:image` resolve to the deployed
origin automatically — don't hardcode a URL.

## Pre-push QA checklist (verify on the DEPLOYED preview, not localhost)

These four shipped broken on the Green Mark proposal (SOT-1629/1630/1631/1632). Check every one:

1. **No placeholders.** `view-source` the live page; grep for `{{`, `yourbrand.com`, `Your Brand`,
   a bare `>Brand<`/`>Cart<`. Zero hits. ("Cart" only if it's actually a store.)
2. **Fonts match the blueprint.** Computed `body` font = the blueprint's body font (DevTools →
   Computed → font-family), headings = the blueprint's heading font. Not Archivo unless the
   blueprint says Archivo.
3. **Social metadata is absolute.** `og:image` and `twitter:image` point at the `…vercel.app`
   origin, **not** `localhost`. No 404 in the console for the OG image.
4. **One semantic `<h1>`.** Exactly one `<h1>` exists (it's `sr-only` in the logo-led cover) and
   names the client.

Plus the standard checks: responsive at 375 / 768 / 1440, no console errors, all section content is
the client's (no leftover SoTech-default copy in the variable slots).
