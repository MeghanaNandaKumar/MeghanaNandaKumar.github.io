import { CaseStudyCard } from '@/components/CaseStudyCard'
import { Badge } from '@/components/ui/badge'
import { caseStudies } from '@/data/caseStudies'
import { additionalWork } from '@/data/additionalWork'
import { earlierWork } from '@/data/earlierWork'
import { site } from '@/data/site'

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

      {/* Earlier work */}
      <section className="pb-28">
        <h2 className="mb-2 text-xl font-semibold tracking-tight">Earlier work</h2>
        <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
          Academic and early-career projects, hosted on my original portfolio.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {earlierWork.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-border p-5 transition-colors hover:border-primary/40"
            >
              <h3 className="mb-1 font-medium tracking-tight group-hover:text-primary">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.blurb}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
