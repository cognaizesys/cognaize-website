# Task 01 — Website Updates: Singapore Location + Regional Contacts

**Date:** 2026-04-26
**Repo:** `/Users/sriharimurthy/Projects/cognaize/cognaize-website`
**Live site:** https://cognaizesys.com
**Phase:** 1 of 2 — website code only. Phase 2 (vault people notes) is handled separately and is **not** part of this task.

---

## Overall instructions (read first)

1. **Use the `frontend-design` skill for ALL UI/styling work in this task.** The site has a specific, polished dark theme — match it exactly. Do not introduce new design language.
2. **Self-review loop is mandatory before reporting completion.** See the dedicated section near the end of this doc. Do not declare done after a first pass.

Theme reference points:
- Dark gradient backgrounds (e.g. `linear-gradient(135deg, #0a0a0f 0%, #1a150e 50%, #0a0a0f 100%)`)
- Primary orange `#E87B3A` and accent amber `#f59e0b` (warm radial glow)
- Card style: `rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8`
- Eyebrow badges: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/45` with a small lucide icon
- Heading font class: `font-heading`
- Framer-motion entry pattern: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5/0.6 }}`
- Stagger sibling cards by ~0.1s

Reference the existing Contact section (`src/components/sections/contact-section.tsx`) and About Team section (`src/components/sections/about-team-section.tsx`) for the closest patterns to mirror.

---

## Scope

Two changes only:

1. **Add Singapore** to the company locations string.
2. **Add a "Regional Contacts" zone** to the home-page Contact section with 4 team members (photo + name + region + email).

Out of scope: vault notes, any other page or section, new dependencies, form/CTA restructuring.

---

## Source materials

All in `/Users/sriharimurthy/Downloads/website-updates-20260426/`:

| File | Purpose |
|---|---|
| `amit-photo.jpeg` | Amit's headshot — copy as-is to `public/images/team/amit.jpeg` |
| `ramli-profile-2.pdf` | **Use page 1 to extract Ramalingam's headshot** (LinkedIn-style header). This is the higher-quality file — do NOT use `ramli-profile.pdf` for the photo. |
| `ramli-profile.pdf` | Bio reference only (not used in this task) |
| `amit-profile.pdf` | Bio reference only (not used in this task) |

---

## Change 1 — Add Singapore to locations

**File:** `src/lib/constants.ts`

```ts
// Before
location: "Chennai | Bangalore | Dubai | Asheville, NC",

// After
location: "Chennai | Bangalore | Dubai | Singapore | Asheville, NC",
```

This single string is consumed by:
- `src/components/layout/footer.tsx` (footer location line)
- `src/components/sections/contact-section.tsx` (Contact Information card, MapPin row)

After the change, verify both surfaces render Singapore in the correct order. No other changes should be needed for this point.

---

## Change 2 — Regional Contacts zone in Contact section

**File:** `src/components/sections/contact-section.tsx`

### Placement (vertical order in the section)

1. Demo CTA (existing — "See Engineering Intelligence on Your Own Drawings")
2. Existing divider ("Or send us a message")
3. **NEW: Regional Contacts zone** ← insert here
4. **NEW divider** (e.g., "Talk to a regional lead" or similar — match the existing divider style)
5. Form + Contact Info card grid (existing)

Keep the existing zones intact. Only insert.

### Regional Contacts zone — structure

- Eyebrow badge (matching existing badge style): icon + label like "OUR TEAM" or "REGIONAL LEADS"
- H2/H3 heading (`font-heading`, white): something concise like "Talk to a Regional Lead"
- Optional one-line subhead in `text-gray-400`: "Reach the right person directly for your region."
- Grid: `grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto`
- Framer-motion: section fade-in + per-card stagger (0.1s delays)

### Card design (one per person)

Reuse the established card style:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: i * 0.1 }}
  className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 flex items-center gap-4"
>
  {/* photo — next/image, ~80–96px, rounded-full */}
  {/* text block: name (white, semibold), region (text-accent or text-primary, uppercase tracking-wider text-xs), email mailto with Mail icon */}
</motion.div>
```

Required fields per card:
- **Photo** — `next/image`, square, `rounded-full` (or `rounded-2xl` if it looks better with the existing aesthetic), ~80–96px
- **Name** — white, `font-semibold`
- **Region label** — small uppercase, `text-accent` or `text-primary`, `tracking-wider`
- **Email** — `mailto:` link with `Mail` icon (already imported from lucide-react), hover state matching existing email link

### Card data

| Order | Name | Region label | Email | Photo path |
|---|---|---|---|---|
| 1 | Suneel Aiyar | Global | suneel@cognaizesys.com | `/images/team/suneel.png` (exists) |
| 2 | Arvindh Balakrishnan | North America | arvindh@cognaizesys.com | `/images/team/arvindh.png` (exists) |
| 3 | Ramalingam Lakshmanan | West Asia · EPC & Oil & Gas | ramalingam@cognaizesys.com | `/images/team/ramalingam.png` (NEW — extract) |
| 4 | Amit Sawarkar | ASEAN / APAC | amit@cognaizesys.com | `/images/team/amit.jpeg` (NEW — copy) |

Order rationale: Suneel (Global) leads, then geographic flow West → East.

---

## Asset preparation

Before editing the component, prepare the two new images:

### 1. Amit
```bash
cp "/Users/sriharimurthy/Downloads/website-updates-20260426/amit-photo.jpeg" \
   "public/images/team/amit.jpeg"
```

### 2. Ramalingam — extract from PDF
Use `ramli-profile-2.pdf` page 1. The header has a square headshot to the left of the name "RAMALINGAM LAKSHMANAN".

Suggested approach:
```bash
# render page 1 at high DPI
pdftoppm -png -r 300 -f 1 -l 1 \
  "/Users/sriharimurthy/Downloads/website-updates-20260426/ramli-profile-2.pdf" \
  /tmp/ramli-page1

# inspect the rendered file, then crop the headshot region using sips or ImageMagick
# target: ~400x400 px, square, centered on the face
# example with ImageMagick (adjust offsets after inspecting):
# magick /tmp/ramli-page1-1.png -crop 400x400+LEFT+TOP /tmp/ramli-cropped.png

cp /tmp/ramli-cropped.png "public/images/team/ramalingam.png"
```

Verify the crop is centered on the face and looks comparable in size/quality to the existing `arvindh.png` and `suneel.png`.

If the headshot can't be cleanly extracted from the PDF, **stop and flag it** rather than shipping a poor-quality image — it will be sourced separately.

---

## Acceptance criteria

- [ ] `npm run build` passes (no TypeScript or ESLint errors)
- [ ] `npm run dev` runs cleanly, home page loads
- [ ] Footer location line shows: `Chennai | Bangalore | Dubai | Singapore | Asheville, NC`
- [ ] Contact section's Contact Information card shows the same updated location
- [ ] Contact section now has a Regional Contacts zone between the demo CTA and the form
- [ ] All 4 cards render with photo, name, region, and email
- [ ] All 4 photos load (no 404s) — Suneel and Arvindh from existing files, Ramalingam and Amit from new files
- [ ] Email links use `mailto:` and open the user's mail client
- [ ] Cards stack to a single column on mobile (≤640px)
- [ ] Visual styling matches the rest of the Contact section (dark theme, amber accent, same card class)
- [ ] No console errors or warnings on the home page

---

## Self-review loop (mandatory — do not skip)

After implementing the changes, you must validate the work via a sub-agent before declaring the task done. The user does **not** want to see a first-pass attempt.

### Procedure

1. **Launch a review sub-agent** (general-purpose subagent type) with a prompt that asks it to:
   - Read this requirements file in full.
   - Inspect the actual code changes in `src/lib/constants.ts` and `src/components/sections/contact-section.tsx`.
   - Verify the new image files exist at `public/images/team/ramalingam.png` and `public/images/team/amit.jpeg` and are not corrupt.
   - Run `npm run build` and confirm it passes.
   - Run `npm run dev` (background) and use Playwright to load the home page, scroll to the Contact section, and visually verify:
     - Singapore appears in the footer + contact location row
     - The new Regional Contacts zone is in the correct position (between demo CTA and form)
     - All 4 cards render with the correct names, region labels, emails, and photos
     - Mobile viewport (375px) — cards stack, no overflow, no broken layout
     - Theme consistency (dark, amber accents, same card class as existing sections — no generic AI design tells)
   - Check email links resolve to `mailto:<address>` with the right addresses
   - Return a structured report: either `PASS` (with a one-line confirmation per acceptance criterion) or `FAIL` (with each specific issue listed and the file/line where applicable).

2. **If `FAIL`:**
   - Address every issue the sub-agent raised. Do not cherry-pick.
   - Re-run the same review sub-agent (fresh context) for another pass.
   - Update this requirements file only if scope genuinely changed (rare — most fixes shouldn't need that).

3. **Loop steps 1–2 until the sub-agent returns `PASS`.**
   - Each cycle = exactly one round of fixes followed by exactly one re-review.
   - Do not skip the re-review.
   - Do not declare the task done without a `PASS` report from the sub-agent.

4. **Only after `PASS`:**
   - Write `implementation-notes.md` (see next section).
   - Report completion to the user with a short summary, the path to `implementation-notes.md`, and the final sub-agent `PASS` confirmation.

---

## When done — implementation notes

After completing the task **and passing the self-review loop**, write `implementation-notes.md` in this same folder with:
- Files changed (with paths)
- Asset preparation steps actually used (especially how Ramalingam's photo was cropped)
- Number of self-review cycles run + a one-line summary of what each cycle caught
- Any deviations from this spec and why
- Confirmation that `npm run build` and `npm run dev` succeed
- Optional: a screenshot of the new Regional Contacts zone (desktop + mobile)
