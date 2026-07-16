import type { CSSProperties, MouseEvent } from 'react'
import { learnings } from '@/data/learnings'

const CHART_VARS = ['--chart-1', '--chart-2', '--chart-3', '--chart-4', '--chart-5']

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function swatchStyle(index: number): CSSProperties {
  const angle = (index * 53) % 360
  const chartVar = CHART_VARS[index % CHART_VARS.length]
  return {
    backgroundImage: `linear-gradient(${angle}deg, color-mix(in oklch, var(--primary) 45%, transparent), color-mix(in oklch, var(${chartVar}) 40%, transparent))`,
  }
}

/** Plain `href="#slug"` anchors would overwrite HashRouter's own hash-based route, so scroll manually instead. */
function scrollToSlug(event: MouseEvent<HTMLAnchorElement>, slug: string) {
  event.preventDefault()
  document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Learnings() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Learnings</p>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        A year of moments that shifted how I think
      </h1>
      <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Short write-ups pulled from a year in the field — the mistakes, the sideways insights, and the
        habits that changed how I approach product design.
      </p>

      {/* Index */}
      <nav aria-label="Table of contents" className="mb-16 rounded-2xl border border-border p-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          All topics
        </p>
        <ol className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {learnings.map((learning, index) => {
            const slug = slugify(learning.title)
            return (
              <li key={slug}>
                <a
                  href={`#${slug}`}
                  onClick={(event) => scrollToSlug(event, slug)}
                  className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 size-2.5 shrink-0 rounded-full"
                    style={swatchStyle(index)}
                  />
                  <span className="leading-snug group-hover:underline">{learning.title}</span>
                </a>
              </li>
            )
          })}
        </ol>
      </nav>

      {/* Full write-ups */}
      <div className="flex flex-col divide-y divide-border">
        {learnings.map((learning, index) => {
          const slug = slugify(learning.title)
          return (
            <section key={slug} id={slug} className="scroll-mt-24 py-10 first:pt-0">
              <div aria-hidden="true" className="mb-5 h-1.5 w-16 rounded-full" style={swatchStyle(index)} />
              <h2 className="mb-1.5 text-xl font-semibold tracking-tight">{learning.title}</h2>
              <p className="mb-4 text-sm text-muted-foreground">{learning.theme}</p>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">{learning.body}</p>
            </section>
          )
        })}
      </div>
    </div>
  )
}
