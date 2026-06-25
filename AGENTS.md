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

## Competitor screenshots are REAL images (not placeholders)

Each `competitors.items[]` has a `shot` field. `/competitive-brief` captures the top-3 competitor
homepages to `proposals/{slug}/.screenshots/competitors/` — **copy those into the template's
`public/competitors/` and set `shot: "/competitors/<file>.png"`** for each. A filled `shot` renders a
real `<img>` in the card; an empty `shot` falls back to a grey "homepage" placeholder — **never ship
that on a real proposal** (it means no screenshot was wired). Capture homepages at desktop width.

## Pricing amounts include the `$` — write the whole value, no doubling

`pricing` amounts render **verbatim** (the template adds no `$`). Replace each `{{amount …}}` /
`{{total …}}` / `{{amount/mo …}}` token with the **full display string including `$` and any
suffix** — `$2,500`, `$50/mo`, `$75/mo`. Replace the whole token; do **not** leave a stray `$` beside
it (that produced `$$2,500` — SOT-1639).

## Desktop is first-class (not just the cover)

Modules expand into a ~1040px column on desktop (≥900px) and the internal grids spread — this is in
`globals.css`, not per-client. Don't fight it; theming stays data-only. When you QA, check **desktop
(1440) AND mobile (375)** for every module, not just the cover.

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

5. **Competitor screenshots are real.** Each competitor card shows an actual homepage image, not
   the grey "homepage" placeholder. (Means `shot` paths were wired + images live in `public/`.)
6. **Pricing has no `$$`.** Grep the rendered page — zero `$$`. Amounts read `$2,500`, `$50/mo`, etc.

Plus the standard checks at **desktop 1440 AND mobile 375** (every module, not just the cover): no
horizontal overflow, no console errors, all section content is the client's (no leftover
SoTech-default copy in the variable slots).
