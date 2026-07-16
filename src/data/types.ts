export interface Screen {
  image: string
  caption: string
}

export interface ProcessSection {
  heading: string
  body: string
}

export interface Metric {
  goal: string
  metric: string
}

export interface Persona {
  name: string
  need: string
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  tags: string[]
  role: string
  status: string
  heroImage: string
  overview: string
  problem: string
  metrics?: Metric[]
  users: Persona[]
  process: ProcessSection[]
  screens: Screen[]
  decisions?: ProcessSection[]
  outcome: string
}

export interface LightProject {
  title: string
  blurb: string
  tags: string[]
  image?: string
}

export interface Learning {
  title: string
  theme: string
  body: string
  /** lucide-react icon component name, e.g. "Compass" */
  icon?: string
  /** Tailwind background/text class pair for the icon tile, e.g. "bg-primary/10 text-primary" */
  accent?: string
}

export interface EarlyProject {
  title: string
  blurb: string
  link: string
  internal?: boolean
  wixLink: string
}
