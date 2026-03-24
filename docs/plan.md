# Implementation Plan

See `REQUIREMENTS.md` for full scope and context.

## Phase 1 — Navigation (~30 min) `DONE`

- [x] Remove from nav: Platform, Team, Demo, Contact
- [x] Keep: Home (logo), Products, Case Studies, About Us, Blog, Careers
- [x] Change "See Demo" button → "Book a Demo" (purple), link to Calendly
- [x] Update footer nav to match

## Phase 2 — Homepage restructure (~2–3 hours) `IN PROGRESS`

**Target sections (7):**
1. Hero (existing, with visual fixes)
2. Challenge/Differentiator — NEW condensed section replacing 5 current sections (The Challenge, Who We Are, Why Design, The Differentiator, Six Layers)
3. Products overview (existing cards, move up in page order)
4. Who We Serve (existing)
5. Measurable Impact (existing)
6. Team (existing)
7. Contact (existing, tightened layout)

**Sections to remove:**
- Demo video walkthrough (remove entirely for now)
- Case Studies preview (already has `/case-studies` page)

**Key work:**
- [ ] Write 4 condensed bullet points for the Challenge/Differentiator section (icon + short headline + 1-line description each)
- [ ] Build the new condensed section component
- [ ] Remove the 5 old sections (Challenge, Who We Are, Why Design, Differentiator, Six Layers)
- [ ] Remove Demo video section
- [ ] Remove Case Studies homepage section
- [ ] Reorder: Hero → Challenge/Differentiator → Products → Who We Serve → Measurable Impact → Team → Contact

## Phase 3 — Product pages (~2–3 hours) `NOT STARTED`

Route folders for all 6 products already exist from Raghu's branch. Work needed:
- [ ] Review and update content on each product page (may need rework with presentation slide content)
- [ ] Fix homepage product card links: SkyPlanner → `/products/skyplanner-aps`, DataWiz → `/products/datawiz`, LST → `/products/line-stoppage-tracking`, QCS → `/products/quality-check-sheets`
- [ ] Fix footer product links: replace all external links to skyplanner.ai and factri.ai with internal routes
- [ ] Ensure all product content is self-contained — no links away to other sites

**Content reference:** Obsidian vault at `/Users/sriharimurthy/Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain/03_Areas/Business/Cognaize/Products/`

## Phase 4 — Visual polish (weave into Phases 1–3) `NOT STARTED`

- [ ] Hero metrics: shorten labels or restyle so they fit on one line
- [ ] Increase base font sizes across the site
- [ ] Reduce two-line headers to single lines
- [ ] Make section heading alignment consistent (pick one: centered)
- [ ] Tighten contact section layout (CTA, form, sidebar less stacked)

## Phase 5 — Video carousel (stub only) `NOT STARTED`

- [ ] Add placeholder carousel area in hero section
- [ ] Don't block on this — waiting on updated product videos from team
- [ ] Can be completed in a follow-up session once videos arrive

## Recommended sequence

1. **Phase 1** (nav) — fast win, sets the frame
2. **Phase 2** (homepage) — highest-impact change for the review call
3. **Phase 3** (product pages) — fix links + review/update content
4. Phase 4 happens throughout
5. Phase 5 is a stub — don't spend time here
