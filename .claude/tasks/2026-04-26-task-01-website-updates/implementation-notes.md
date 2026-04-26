# Implementation Notes — Task 01: Singapore Location + Regional Contacts

**Date:** 2026-04-26
**Branch:** `website-updates-20260426`

## Files changed

- `src/lib/constants.ts` — `COMPANY.location` string updated to insert `Singapore` between `Dubai` and `Asheville, NC`.
- `src/components/sections/contact-section.tsx` — added `next/image` and `Users2` lucide icon imports, added a top-level `regionalLeads` array (4 entries), inserted a new Regional Contacts zone (eyebrow badge + heading + subhead + 2×2 grid of cards) and a second divider between the Regional Contacts zone and the form. The existing first divider's text was reworded (see Deviations).

## New assets

- `public/images/team/amit.jpeg` — straight copy of `~/Downloads/website-updates-20260426/amit-photo.jpeg` (992×1076 JPEG).
- `public/images/team/ramalingam.png` — extracted from `~/Downloads/website-updates-20260426/ramli-profile-2.pdf` page 1.

### Ramalingam crop process

1. Rendered the PDF page at 300 DPI:
   ```
   pdftoppm -png -r 300 -f 1 -l 1 ramli-profile-2.pdf /tmp/ramli-page1
   ```
   Result: 2550×3300 PNG.

2. Located the headshot's pixel bounds by sampling individual pixel colors with `magick -crop 1x1+X+Y txt:-` to find where the photo content starts/ends vs. the surrounding dark blue header (#0F243E) and white page (#FFFFFF):
   - Left edge: x = 2175
   - Right edge: x = 2418
   - Top edge: y ≈ 210
   - Bottom edge: y ≈ 515

3. Cropped a 243×243 square from `(2175, 210)` — this keeps the face centered and trims the body so no dark blue or white background bleeds in:
   ```
   magick /tmp/ramli-page1-1.png -crop 243x243+2175+210 +repage /tmp/ramli-final-raw.png
   magick /tmp/ramli-final-raw.png -resize 400x400 -strip /tmp/ramli-cropped.png
   ```

4. Visually verified the crop (face centered, no border/white space, comparable in tone/quality to existing `arvindh.png` / `suneel.png`) and copied to `public/images/team/ramalingam.png`.

## Self-review cycles

**Cycle 1 — PASS.** Sub-agent confirmed every acceptance criterion: build passes, footer + Contact Info card both show the updated location string, Regional Contacts zone is correctly positioned between the CTA and form, all 4 cards render with correct names/regions/emails/photos (all 200 OK, no broken images), `mailto:` hrefs resolve to the right addresses, mobile 375px cards stack to a single column with no horizontal overflow, no console errors. Theme matches (same `rounded-xl border border-white/[0.08] bg-white/[0.03]` card class, same eyebrow badge style, `font-heading` heading, `text-accent` region label). Total: 1 cycle.

## Deviations from spec

**Divider wording.** The spec listed the vertical order as:

1. CTA
2. Existing divider (`Or send us a message`)
3. Regional Contacts (new)
4. New divider (e.g., `Talk to a regional lead`)
5. Form

Followed literally, the existing `Or send us a message` divider would precede Regional Contacts (where it doesn't introduce the section that follows), and a `Talk to a regional lead` divider would precede the form (where it points back at the wrong content). Each divider's text would be telling the reader about the wrong neighbor.

I kept the structural placement (two dividers, one before each new zone) but swapped the wording so each divider introduces the section below it:

- Position 2 (between CTA and Regional Contacts): `Or talk to a regional lead`
- Position 4 (between Regional Contacts and Form): `Or send us a message`

Net result: the existing divider's structural style is preserved, the spec's intent (and example label) is honored, and each divider now matches what it leads into. The review sub-agent flagged this for transparency and confirmed it's not a regression.

No other deviations.

## Build / dev confirmation

- `npm run build` — compiled successfully, 21 static pages generated, no TS/ESLint errors.
- `npm run dev` — served cleanly on `localhost:3000`, home page loaded, no console errors (one unrelated Tidio third-party preload warning).

## Screenshots

Captured by the review sub-agent (saved to `.playwright-mcp/`):

- `contact-section-desktop-top.png` — desktop, top of Contact section
- `contact-section-regional-cards.png` — desktop, all 4 cards + form
- `contact-section-mobile.png` — 375px mobile, cards stacked
