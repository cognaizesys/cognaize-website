# Phase 1 — Navigation

**Status:** IN PROGRESS

## Plan

- Remove from nav: Platform, Team, Demo, Contact
- Keep: Home (logo), Products, Case Studies, About Us, Blog, Careers
- Change "See Demo" button → "Book a Demo" (purple), link to Calendly
- Update footer nav to match

## Current State

Before screenshot saved at `docs/phases/phase-1-before.png`

### Current nav items (from snapshot):
Products, Platform, Case Studies, About Us, Team, Blog, Careers, Demo, Contact + "See Demo" CTA button

### Current footer:
- Products section: Design Intelligence, Manufacturing Intelligence, SkyPlanner APS, DataWiz, Line Stoppage Tracking, Quality Check Sheets
- Quick Links: About, Team, Blog, Careers, Contact

## Changes Made

### Files changed:
- `src/lib/constants.ts` — Removed Platform, Team, Demo, Contact from `NAV_LINKS`
- `src/components/layout/header.tsx` — Changed CTA from "See Demo" (link to `/#demo`) → "Book a Demo" (`<a>` to Calendly)
- `src/components/layout/mobile-nav.tsx` — Same CTA change for mobile
- `src/components/layout/footer.tsx` — Removed Team and Contact from Quick Links, added Case Studies, changed About to link to `/about`

### After screenshot: `docs/phases/phase-1-after-nav.png`

### Nav now: Products (dropdown), Case Studies, About Us, Blog, Careers + "Book a Demo" CTA
### Footer Quick Links now: About Us, Case Studies, Blog, Careers
