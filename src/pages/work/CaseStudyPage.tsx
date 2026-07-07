import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { caseStudies } from '@/data/caseStudies'

export function CaseStudyPage() {
  const { slug } = useParams()
  const study = caseStudies.find((s) => s.slug === slug)

  if (!study) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-muted-foreground">Case study not found.</p>
        <Link to="/" className="mt-4 inline-block text-primary underline">
          Back home
        </Link>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← All work
      </Link>

      <header className="mt-6 mb-12">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">{study.title}</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">{study.subtitle}</p>

        <dl className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-border p-5 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted-foreground">Role</dt>
            <dd className="font-medium">{study.role}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Status</dt>
            <dd className="font-medium">{study.status}</dd>
          </div>
        </dl>
      </header>

      <div className="mb-12 flex max-h-[480px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted p-6">
        <img src={study.heroImage} alt="" className="max-h-[420px] w-auto object-contain" />
      </div>

      <Section heading="Overview">
        <p>{study.overview}</p>
      </Section>

      <Section heading="The problem">
        <p>{study.problem}</p>
      </Section>

      {study.metrics && (
        <Section heading="Goals">
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 font-medium">Goal</th>
                  <th className="px-4 py-3 font-medium">Metric</th>
                </tr>
              </thead>
              <tbody>
                {study.metrics.map((m, i) => (
                  <tr key={i} className={i > 0 ? 'border-t border-border' : undefined}>
                    <td className="px-4 py-3 align-top">{m.goal}</td>
                    <td className="px-4 py-3 align-top text-muted-foreground">{m.metric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <Section heading="Who this is for">
        <ul className="space-y-4">
          {study.users.map((u) => (
            <li key={u.name}>
              <p className="font-medium">{u.name}</p>
              <p className="text-muted-foreground">{u.need}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Process & key decisions">
        <div className="space-y-8">
          {study.process.map((p) => (
            <div key={p.heading}>
              <h3 className="mb-2 font-semibold tracking-tight">{p.heading}</h3>
              <p className="leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section heading="Screens">
        <div className="space-y-10">
          {study.screens.map((screen) => (
            <figure key={screen.image}>
              <div className="flex justify-center rounded-xl border border-border bg-muted p-6">
                <img
                  src={screen.image}
                  alt={screen.caption}
                  className="max-h-[600px] w-auto max-w-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {screen.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {study.decisions && (
        <Section heading="Design decisions worth calling out">
          <div className="space-y-8">
            {study.decisions.map((d) => (
              <div key={d.heading}>
                <h3 className="mb-2 font-semibold tracking-tight">{d.heading}</h3>
                <p className="leading-relaxed text-muted-foreground">{d.body}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section heading="Outcome">
        <p>{study.outcome}</p>
      </Section>

      <Separator className="my-12" />
      <Link to="/" className="text-sm font-medium text-primary hover:underline">
        ← Back to all work
      </Link>
    </article>
  )
}

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">{heading}</h2>
      <div className="leading-relaxed text-foreground/90">{children}</div>
    </section>
  )
}
