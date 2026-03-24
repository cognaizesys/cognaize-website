# Cognaize Website

Website for Cognaize Systems — cognaizesys.com.
Tech stack: Next.js 16, React 19, Tailwind CSS, Framer Motion, Lucide icons.

## Workflow

This project uses a structured docs workflow. Always follow these rules:

### Before starting any phase

1. Read `docs/plan.md` to understand what phase you're working on
2. Create a phase note at `docs/phases/phase-N-name.md` with:
   - Phase number and title
   - What you plan to do (copied from plan.md + any adjustments)
   - Current state (text description of the before-state)
3. Mark the phase as `IN PROGRESS` in `docs/plan.md`

### While working on a phase

- Check in with the user after completing significant chunks
- If the plan needs to change, update `docs/plan.md` first and note the change in the phase doc
- Don't move to the next phase without user confirmation

### After completing a phase

1. Update the phase note with:
   - What was actually done (files changed, decisions made)
   - Any deviations from the plan and why
   - Detailed text description of the result
2. Mark the phase as `DONE` in `docs/plan.md`, check off completed items
3. Wait for user to confirm before starting the next phase

### References

- Requirements doc: `docs/requirements.md`
- Phase-by-phase plan: `docs/plan.md`
- Phase implementation notes: `docs/phases/`
- Product content reference (in Obsidian vault): `/Users/sriharimurthy/Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain/03_Areas/Business/Cognaize/Products/`
- Vault project note (high-level scope + session log): `/Users/sriharimurthy/Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain/02_Projects/Cognaize Website Update - 2026-03-23.md`

## Dev

- Dev server: `npm run dev` (localhost:3000)
- Build: `npm run build`
- Lint: `npm run lint`
