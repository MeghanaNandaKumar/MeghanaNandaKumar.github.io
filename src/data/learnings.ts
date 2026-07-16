import type { Learning } from './types'

export const learnings: Learning[] = [
  {
    title: 'Domain knowledge as a design prerequisite',
    theme: "You can't design what you don't understand",
    body: "I didn't open Figma for my first few weeks at UniteGPS — I didn't know what I was designing for yet. Learning that Iowa law requires bus drivers to activate warning lights 300–500 feet before a stop at 45mph+ directly shaped the driver tablet's auto-scroll threshold. Domain knowledge is the multiplier on design skill — without it you're decorating, with it you're solving the right problem.",
    icon: 'Compass',
    accent: 'bg-primary/10 text-primary',
  },
  {
    title: 'What 143 dead clicks taught me about research',
    theme: 'Behavioral data as the most honest form of feedback',
    body: 'Watching Datadog session replays surfaced 143 dead clicks on a single field in the vehicle inspection flow — a frustration signal no interview or survey would have caught that precisely. Behavioral data turned an engineering tool into one of my most reliable research tools.',
  },
  {
    title: 'On being the only designer in an 8-person startup',
    theme: 'Scope expansion as a growth accelerator',
    body: "As the only designer on an 8-person team, scope never arrives neatly defined — one week it's driver tablet navigation, the next it's Spanish-language flyers and print bleed specs. The growth doesn't come from having everything figured out; it comes from having to figure everything out.",
  },
  {
    title: 'The design system shift that changed everything',
    theme: 'From adding components to understanding the system',
    body: "Early on I was adding components one at a time; by February 2026 I was building the Crosswalk K-12 design system from scratch — 30 components, 60 states, 163 token bindings, accessibility baked in from day one. The real shift was moving from \"what do I need to add\" to \"what does the system need to be.\"",
  },
  {
    title: 'When the insight arrived sideways',
    theme: 'Unplanned research moments beat structured ones',
    body: "The most valuable research moment of the year wasn't a scheduled interview — it was an offhand customer email explaining that state law requires warning lights 300–500 feet before a stop, which reframed what I'd assumed was a UX decision as a legal constraint. Formal research creates the conditions for insight, but the insight itself often arrives sideways.",
  },
  {
    title: "AI tools don't have opinions. You do.",
    theme: "Multi-AI workflow and the designer's irreplaceable judgment",
    body: 'Using Claude, ChatGPT, Figma AI, Stitch, and Claude Code across the same project taught me that none of these tools have opinions — the designer does. Knowing which tool to use at which stage, and supplying the judgment myself, is the actual skill.',
  },
  {
    title: 'I almost deleted a feature that kept kids safe',
    theme: 'Research before removing. Relics exist for a reason.',
    body: 'I flagged an unused-looking feature for removal in a redesign pass — until a passing comment revealed it\'s how dispatchers track students without a fixed route. Research before removing: legacy features almost always exist for a reason, even when it isn\'t visible from the interface.',
  },
  {
    title: 'Designing for a bus driver in sunlight',
    theme: 'WCAG compliance ≠ actually accessible',
    body: 'A badge color that passes WCAG AA at 4.5:1 contrast indoors can drop to effectively 2:1 in direct sunlight — a real problem for an admin and driver user base where contrast sensitivity is already declining with age. WCAG is a baseline, not a ceiling; accessible is a context-dependent answer, not a fixed standard.',
  },
  {
    title: 'The moment I stopped being afraid of code',
    theme: 'Frontend literacy as a designer superpower',
    body: "When a developer told me something wasn't possible, I built it myself on localhost instead of accepting it. That one attempt led to deploying prototypes on Netlify, pairing with Claude Code on real React, and reading network traces — not to become a developer, but to stop being afraid of the medium I design for.",
  },
  {
    title: 'I learned print design. From scratch.',
    theme: 'The scope of "designer" at a startup has no edges',
    body: 'Three GTM postcards for a printing press taught me DPI, bleed, trim guides, and why a file that looks correct on screen can be wrong for the printer. Every discipline you know nothing about is a place to grow fast.',
  },
  {
    title: 'What scripting a feature video taught me about UX',
    theme: 'Storytelling is a design skill',
    body: "Writing a feature-launch video script exposed every moment where the interface didn't tell its own story — the confusing spots, the parts that assumed too much. Now I think every major feature should have a script written before final handoff, just to check the story holds.",
  },
  {
    title: 'Why I challenged my CEO about AI-generated images',
    theme: 'Design judgment has commercial stakes. Defend it.',
    body: 'When the plan was to use AI-generated images for the marketing site, I pushed back — for a B2B buyer already skeptical of software vendors, AI-generated visuals read as stock photography and kill trust. Knowing when your design opinion is actually a business argument is worth defending.',
  },
  {
    title: 'Map design is not what I thought it was',
    theme: 'Geospatial interfaces are a discipline of their own',
    body: "Designing the route editor meant learning KML, GeoJSON, bounding boxes, and tile-based rendering — and discovering the real gap between what Figma lets you design and what a rendering engine will actually let you ship. Map design isn't visual design with a satellite photo underneath; it's its own discipline.",
  },
  {
    title: "Nobody told me I'd dream about navigation icons",
    theme: "The unexpected signs that you're really in it",
    body: '"Dreamt of navigation icons last night" — a one-line Notion log from early on was the clearest sign the work had stopped being a job. A few weeks later, the same log reads "stared at Figma for 30 minutes triggered by creative rut." A real year of growth looks like both, side by side.',
  },
]
