# Cognaize Website V2 — Requirements

Source: Feedback review session with Raghu (2026-03-23)
Deadline: Wednesday morning, 2026-03-25 (review call with Raghu at 11:30 AM or 12 PM)

## Baseline

Raghu built the current version on branch `claude/update-website-copy-kug6Q`. Includes homepage, About page, and route folders for all 6 product pages. Srihari's updates branch off from here.

### Current state (Raghu's branch)

**Nav (9 items + button):** Home, Products, Platform, Case Studies, About Us, Team, Blog, Careers, Demo, Contact + "See Demo" button

**Homepage (13 sections):** Hero, The Challenge, Who We Are, Why We Begin at Design, The Differentiator, Six Layers, Products (6 cards), Demo video, Who We Serve, Measurable Impact, Case Studies (2 featured), Team, Contact/Demo form

**Product page routes exist for all 6:** `/products/design-intelligence`, `/products/manufacturing-intelligence`, `/products/skyplanner-aps`, `/products/datawiz`, `/products/line-stoppage-tracking`, `/products/quality-check-sheets`

**Linking problem:** Homepage product cards and footer link SkyPlanner to skyplanner.ai and DataWiz/LST/QCS to factri.ai instead of to the internal pages.

---

## Homepage restructure

- Condense homepage from 13 sections to 7: Hero, Challenge/Differentiator (4 bullet points), Products overview, Customer types, Measurable impact, Team, Contact
- Remove from homepage: Platform section, Demo section, Case studies (moved to own page)
- Convert text-heavy sections (The Challenge, Who We Are, Why Design, The Differentiator, Six Layers) into a single condensed section with bullet points and icons
- Move Products up in the scroll so visitors see what we build sooner

## Navigation

- Final nav: Home (logo), Products, Case Studies, About Us, Blog, Careers, "Book a Demo" button (purple)
- Remove: Platform, Team, Demo, Contact from nav
- Footer should match

## Visual polish

- Hero metrics (91%, 95%+, 6 Products) spilling to two lines — shorten labels or restyle
- Enlarge font sizes
- Reduce two-line headers to single lines throughout
- Make section heading alignment consistent (currently mixed center and left)
- Tighten the contact section (CTA block, form, sidebar, and "Why Request a Demo?" list are all stacked together)

## Products

- Products page becomes a summary/overview with links to individual product pages
- Six individual product pages: Design Intelligence, Manufacturing Intelligence, SkyPlanner, DataWiz, Line Stoppage Tracking, Quality Check Sheets
- Add presentation slide content to product summaries
- All content self-contained within the website — no external links to factri.ai or skyplanner.ai

## Video

- Add rotating video carousel showing all products in the hero/top area
- Remove the bottom video section once carousel is implemented
- Need updated product videos from the team (not yet available — stub for now)

## Still to decide

- About page: has significant overlap with homepage. Do we still need it given the restructure?
