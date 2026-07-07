import { site } from '@/data/site'

export function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">About</p>
      <h1 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
        {site.name}
      </h1>

      <p className="mb-12 text-lg leading-relaxed text-muted-foreground">{site.bio}</p>

      <h2 className="mb-6 text-xl font-semibold tracking-tight">What I do</h2>
      <div className="mb-14 grid gap-6 sm:grid-cols-2">
        {site.skills.map((skill) => (
          <div key={skill.title} className="rounded-xl border border-border p-5">
            <h3 className="mb-2 font-semibold tracking-tight">{skill.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{skill.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-xl font-semibold tracking-tight">Get in touch</h2>
      <p className="text-muted-foreground">
        Reach me at{' '}
        <a href={`mailto:${site.email}`} className="font-medium text-primary hover:underline">
          {site.email}
        </a>
        , based in {site.location}.
      </p>
    </div>
  )
}
