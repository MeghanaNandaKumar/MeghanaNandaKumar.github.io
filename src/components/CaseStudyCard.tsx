import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import type { CaseStudy } from '@/data/types'

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      to={`/work/${study.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-muted p-4">
        <img
          src={study.heroImage}
          alt=""
          className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-1.5">
          {study.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{study.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{study.subtitle}</p>
        <span className="mt-auto text-sm font-medium text-primary">
          Read the case study →
        </span>
      </div>
    </Link>
  )
}
