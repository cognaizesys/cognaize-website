# Cognaize Website

Website for Cognaize Systems — cognaizesys.com.
Tech stack: Next.js 16, React 19, Tailwind CSS, Framer Motion, Lucide icons.

## Workflow

Tasks come in as markdown files in `docs/tasks/`. Each file is a self-contained task with instructions, context, and the prompt from the user. Execute what the task says, check in with the user after completing it.

### Task structure

- Task files are named: `YYYY-MM-DD-HHMM-short-description.md`
- Each task file contains everything needed to execute: what to do, what copy to use, what design decisions apply
- After completing a task, add a `## Completed` section at the bottom of the task file with: what was done, files changed, any decisions made

### References

- Visual reference: `docs/reference/Cognaize Systems Presentation.pdf` (slides 1-3 for card layouts and visual direction)
- Previous work archived in `docs/archive/`
- Product content reference (in Obsidian vault): `/Users/sriharimurthy/Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain/03_Areas/Business/Cognaize/Products/`
- Vault project note: `/Users/sriharimurthy/Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain/02_Projects/Cognaize Website Update - 2026-03-23.md`

## Dev

- Dev server: `npm run dev` (localhost:3000)
- Build: `npm run build`
- Lint: `npm run lint`
