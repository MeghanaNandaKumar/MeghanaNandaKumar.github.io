import { caseStudies } from './caseStudies'
import { additionalWork } from './additionalWork'
import { earlierCaseStudies } from './earlierCaseStudies'
import { earlierWork } from './earlierWork'

export interface Pane {
  title: string
  subtitle: string
  tags: string[]
  image?: string
  href?: string
  external?: boolean
  group: 'Flagship' | 'Additional' | 'Earlier'
}

const flagshipPanes: Pane[] = caseStudies.map((s) => ({
  title: s.title,
  subtitle: s.subtitle,
  tags: s.tags,
  image: s.heroImage,
  href: `/work/${s.slug}`,
  group: 'Flagship',
}))

const additionalPanes: Pane[] = additionalWork.map((p) => ({
  title: p.title,
  subtitle: p.blurb,
  tags: p.tags,
  group: 'Additional',
}))

const earlierPanes: Pane[] = earlierWork.map((p) => {
  const rich = earlierCaseStudies.find((s) => `/work/${s.slug}` === p.link)
  return {
    title: p.title,
    subtitle: rich?.subtitle ?? p.blurb,
    tags: rich?.tags ?? ['Academic'],
    image: rich?.heroImage,
    href: p.internal ? p.link : p.wixLink,
    external: !p.internal,
    group: 'Earlier',
  }
})

export const allProjects: Pane[] = [...flagshipPanes, ...additionalPanes, ...earlierPanes]
