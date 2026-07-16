import { Link } from 'react-router-dom'
import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardContent,
} from '@/components/ui/preview-card'
import { caseStudies } from '@/data/caseStudies'
import { earlierCaseStudies } from '@/data/earlierCaseStudies'

const bluebikes = earlierCaseStudies.find((study) => study.slug === 'bluebikes')

/** Simple flat-bottomed cloud outline. */
function Cloud({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14 40 A11 11 0 0 1 16 18.5 A14 14 0 0 1 43 12 A12 12 0 0 1 66 18 A13 13 0 0 1 76 40 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/** Trunk + round canopy tree. */
function Tree({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="20"
        cy="24"
        r="15"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M20 39 V62 M20 50 L13 44 M20 46 L26 41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/** Low city skyline silhouette, anchored to the ground line. */
function Skyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 120"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 119 V70 H55 V38 H100 V80 H165 V52 H210 V22 H262 V72 H335 V45 H392 V88 H455 V58 H508 V30 H565 V78 H635 V50 H688 V92 H745 V62 H798 V36 H852 V82 H920 V56 H965 V100 H1000 V119"
        className="fill-muted/50 stroke-muted-foreground/50"
        strokeWidth="1.5"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M236 22 V8 M536 30 V16"
        className="stroke-muted-foreground/50"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/** Hand-drawn school bus, facing right. Body filled with the page background so it sits opaquely on the road. */
function BusIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 70" aria-hidden="true" className={className}>
      <g
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {/* Body */}
        <rect x="4" y="8" width="132" height="46" rx="8" className="fill-background" />
        {/* Windows */}
        <rect x="14" y="16" width="20" height="14" rx="2" fill="none" />
        <rect x="42" y="16" width="20" height="14" rx="2" fill="none" />
        <rect x="70" y="16" width="20" height="14" rx="2" fill="none" />
        {/* Windshield */}
        <rect x="112" y="16" width="16" height="14" rx="2" fill="none" />
        {/* Door */}
        <path d="M100 16 V54" fill="none" />
        {/* Side stripe */}
        <path d="M8 40 H132" fill="none" />
        {/* Wheels */}
        <circle cx="34" cy="54" r="9" className="fill-background" />
        <circle cx="106" cy="54" r="9" className="fill-background" />
        <circle cx="34" cy="54" r="3" fill="none" />
        <circle cx="106" cy="54" r="3" fill="none" />
      </g>
    </svg>
  )
}

/** Hand-drawn bicycle, facing right. */
function BikeIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 70" fill="none" aria-hidden="true" className={className}>
      <g
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {/* Wheels */}
        <circle cx="22" cy="48" r="16" />
        <circle cx="88" cy="48" r="16" />
        {/* Frame */}
        <path d="M22 48 L52 48 L44 18 M22 48 L44 18 L74 18 L78 16 M52 48 L76 18 M78 16 L88 48" />
        {/* Handlebar */}
        <path d="M78 16 L82 8 M75 8 H89" />
        {/* Seat */}
        <path d="M44 18 L42 12 M36 12 H48" />
        {/* Crank */}
        <circle cx="52" cy="48" r="4" />
      </g>
    </svg>
  )
}

export function HeroScene() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-muted/40 to-background sm:h-80">
      <p className="absolute right-4 top-3 z-10 text-xs text-muted-foreground">
        Hover or focus a vehicle to explore my work
      </p>

      {/* Clouds */}
      <Cloud className="absolute left-[7%] top-[14%] w-16 animate-[cloud-drift_18s_ease-in-out_infinite] text-muted-foreground/60 sm:w-20" />
      <Cloud className="absolute left-[44%] top-[8%] w-20 animate-[cloud-drift_24s_ease-in-out_infinite] text-muted-foreground/45 sm:w-24" />
      <Cloud className="absolute right-[9%] top-[22%] hidden w-14 animate-[cloud-drift_21s_ease-in-out_infinite] text-muted-foreground/55 sm:block" />

      {/* Skyline, behind everything on the ground line */}
      <Skyline className="absolute bottom-12 left-0 h-20 w-full sm:h-24" />

      {/* Trees */}
      <Tree className="absolute bottom-[46px] left-[40%] hidden w-10 text-muted-foreground/80 md:block" />
      <Tree className="absolute bottom-[46px] right-[5%] hidden w-7 text-muted-foreground/70 sm:block" />
      <Tree className="absolute bottom-[46px] left-[2%] w-6 text-muted-foreground/70 sm:w-8" />

      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-12 border-t border-muted-foreground/40 bg-muted/40">
        <div
          className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 animate-[road-scroll_3s_linear_infinite] opacity-40"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, var(--color-muted-foreground) 0 20px, transparent 20px 48px)',
          }}
        />
      </div>

      {/* School bus — Crosswalk platform (4 case studies) */}
      <PreviewCard>
        <PreviewCardTrigger
          render={<button type="button" />}
          aria-label="View Crosswalk case studies"
          className="absolute bottom-[42px] left-[10%] block w-36 cursor-pointer text-primary transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl sm:left-[14%] sm:w-44"
        >
          <BusIllustration className="w-full" />
        </PreviewCardTrigger>
        <PreviewCardContent side="top" className="w-80 p-3">
          <p className="px-2 pb-2 pt-1 text-xs font-medium uppercase tracking-widest text-primary">
            Crosswalk — school transportation platform
          </p>
          <ul className="flex flex-col">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <Link
                  to={`/work/${study.slug}`}
                  className="block rounded-lg p-2 transition-colors hover:bg-muted"
                >
                  <span className="block text-sm font-medium">{study.title}</span>
                  <span className="mt-0.5 line-clamp-1 block text-xs text-muted-foreground">
                    {study.subtitle}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </PreviewCardContent>
      </PreviewCard>

      {/* Bicycle — BlueBikes (1 case study) */}
      <PreviewCard>
        <PreviewCardTrigger
          render={<Link to="/work/bluebikes" />}
          aria-label="View BlueBikes case study"
          className="absolute bottom-[42px] right-[16%] block w-20 cursor-pointer text-primary transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl sm:right-[22%] sm:w-24"
        >
          <BikeIllustration className="w-full" />
        </PreviewCardTrigger>
        {bluebikes && (
          <PreviewCardContent side="top" className="w-72">
            <Link to="/work/bluebikes" className="group block">
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
                Bike share
              </p>
              <h3 className="text-sm font-semibold tracking-tight">{bluebikes.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {bluebikes.subtitle}
              </p>
              <span className="mt-2 inline-block text-xs font-medium text-primary group-hover:underline">
                View case study →
              </span>
            </Link>
          </PreviewCardContent>
        )}
      </PreviewCard>
    </div>
  )
}
