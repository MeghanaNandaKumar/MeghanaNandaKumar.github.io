import { Link } from 'react-router-dom'
import { Compass, type LucideIcon } from 'lucide-react'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { caseStudies } from '@/data/caseStudies'
import { additionalWork } from '@/data/additionalWork'
import { earlierWork } from '@/data/earlierWork'
import { learnings } from '@/data/learnings'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

/** Explicit name → component map so only the icons we use get bundled. */
const learningIcons: Record<string, LucideIcon> = {
  Compass,
}

function LearningIconTile({ icon, accent }: { icon: string; accent?: string }) {
  const Icon = learningIcons[icon]
  if (!Icon) return null
  return (
    <span
      className={cn(
        'flex size-10 shrink-0 items-center justify-center rounded-xl',
        accent ?? 'bg-primary/10 text-primary'
      )}
    >
      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
    </span>
  )
}

export function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="flex flex-col gap-6 py-20 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          {site.role} · {site.location}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Product design for systems that have to hold up at enterprise scale.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {site.bioShort}
        </p>
        <Link
          to="/panes"
          className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          Try the pane-browsing view →
        </Link>
      </section>

      {/* Flagship case studies */}
      <section className="pb-24">
        <h2 className="mb-8 text-xl font-semibold tracking-tight">Case studies</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* Additional work */}
      <section className="pb-24">
        <h2 className="mb-2 text-xl font-semibold tracking-tight">Additional work</h2>
        <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
          Supporting projects on the same Crosswalk / UniteGPS platform — lighter in scope, same production design system.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {additionalWork.map((project) => (
            <div key={project.title} className="rounded-2xl border border-border p-6">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="mb-1.5 font-semibold tracking-tight">{project.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learnings */}
      <section className="pb-24">
        <h2 className="mb-2 text-xl font-semibold tracking-tight">Learnings</h2>
        <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
          Short write-ups from a year in the field — the moments that shifted how I think.
        </p>
        <Accordion className="rounded-2xl border border-border px-6">
          {learnings.map((learning) => (
            <AccordionItem key={learning.title} value={learning.title}>
              <AccordionTrigger>
                <span className="flex items-center gap-3 py-1">
                  {learning.icon && <LearningIconTile icon={learning.icon} accent={learning.accent} />}
                  <span className="flex flex-col gap-1">
                    <span className="font-medium tracking-tight">{learning.title}</span>
                    <span className="text-xs font-normal text-muted-foreground">{learning.theme}</span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed text-muted-foreground">{learning.body}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Earlier work */}
      <section className="pb-28">
        <h2 className="mb-2 text-xl font-semibold tracking-tight">Earlier work</h2>
        <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
          Academic and early-career projects.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {earlierWork.map((project) => (
            <div key={project.title} className="rounded-xl border border-border p-5">
              {project.internal ? (
                <Link to={project.link} className="group">
                  <h3 className="mb-1 font-medium tracking-tight group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.blurb}</p>
                </Link>
              ) : (
                <a href={project.link} target="_blank" rel="noreferrer" className="group">
                  <h3 className="mb-1 font-medium tracking-tight group-hover:text-primary">
                    {project.title} ↗
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.blurb}</p>
                </a>
              )}
              {project.internal && (
                <a
                  href={project.wixLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs font-medium text-muted-foreground hover:text-primary"
                >
                  View on Wix ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
