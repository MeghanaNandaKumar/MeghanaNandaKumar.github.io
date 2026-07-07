import type { CaseStudy } from './types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'student-safety',
    title: 'Student Safety Reporting',
    subtitle:
      'A trust-and-safety reporting flow for the Crosswalk parent app — giving families a real channel for bus safety concerns, and giving districts clean, actionable data.',
    tags: ['Mobile', '0→1', 'Trust & Safety', 'Design System'],
    role: 'Product Designer — end-to-end flow, screens, and content',
    status: 'Phase 1 shipped as a working prototype',
    heroImage: '/case-studies/student-safety/case-status.png',
    overview:
      'Student Safety Reporting is a feature inside the Crosswalk parent app that lets parents report safety concerns on school bus routes — bullying, threats, unsafe behavior, online harassment — and track exactly what happens after they submit. Bus drivers get a parallel, much simpler path to file incident reports after their route.',
    problem:
      "When something happens on a school bus, parents had no structured way to report it and no visibility into what happened next. Reports got lost in emails or phone calls, staff had no consistent intake process, and there was no way to spot a pattern across repeated incidents on the same route. The goal was a reporting tool that felt like support, not a bureaucratic complaint form — parents needed to feel heard, and districts needed clean data they could actually act on.",
    users: [
      { name: 'Parents', need: 'Report a concern, track its status, message staff, and reach support resources without having to call the school.' },
      { name: 'Bus drivers', need: 'A short training, then a fast way to file incident reports without seeing case outcomes they have no reason to see.' },
      { name: 'District staff', need: 'Clean, categorized, severity-tagged reports instead of scattered emails and phone calls.' },
    ],
    process: [
      {
        heading: 'Screening before the report starts',
        body: 'Every report begins with four yes/no safety questions — is the student unsafe right now, is there a threat today, is this repeated, does it involve serious harm. Anything that flags emergency routes immediately to crisis resources instead of the standard report form. This was the first design decision: triage has to happen before category selection, not after.',
      },
      {
        heading: 'Removing repeat data entry',
        body: "Route, bus, driver, and stop information is auto-filled from the account before the parent writes a single word — they only describe what happened. Parents choose confidential or fully anonymous, set a severity level, and pick who receives it (counselor, transport director, principal, social worker, or district safety lead) so the report reaches someone who can act on it, not a general inbox.",
      },
      {
        heading: 'Making the after just as important as the report',
        body: 'A case status screen shows a timeline through five states — Submitted → Under Review → In Progress → Resolved → Closed — plus a direct message thread to the assigned staff member and an escalate-to-counselor path if things get worse. After submission, a check-in prompt asks "has this continued?" so cases do not just go quiet.',
      },
      {
        heading: 'A parallel, deliberately narrower flow for drivers',
        body: "Drivers complete a five-step training, then file incident reports with auto-filled trip context. They see only what they need to report — never case histories or outcomes — keeping the reporting relationship between families and staff, not drivers and students.",
      },
    ],
    screens: [
      { image: '/case-studies/student-safety/triage.png', caption: 'Safety triage — four screening questions route true emergencies straight to crisis resources before anything else.' },
      { image: '/case-studies/student-safety/report.png', caption: 'Report flow — category and privacy choice, with trip context already filled in.' },
      { image: '/case-studies/student-safety/case-status.png', caption: 'Case status — a five-stage timeline parents can actually watch move.' },
      { image: '/case-studies/student-safety/messages.png', caption: 'Messages — a direct line to the staff member assigned to the case.' },
      { image: '/case-studies/student-safety/driver-training.png', caption: "Driver training — five steps before a driver can file their first incident report." },
    ],
    decisions: [
      {
        heading: 'Never label students',
        body: 'Language throughout avoids naming or labeling students as "bullies" — status updates are specific and honest instead of punitive. This is a support tool, not a disciplinary one.',
      },
      {
        heading: 'Climate checks are transparent, not covert',
        body: 'When a moderate or serious incident is reported, the school can send a check-in message to every family on that route inviting them to share concerns — and parents are told exactly what it is and why they got it.',
      },
      {
        heading: 'Calm, warm visual language over corporate teal',
        body: 'This flow deliberately overrides the platform default teal for a sage green and warm off-white palette, amber (not red) for non-emergency urgency, and DM Serif Display headings — because a safety-reporting tool should not feel like every other admin screen in the product.',
      },
    ],
    outcome:
      "Phase 1 shipped as a complete, working prototype covering 15 screens across the parent report/track flow, driver training and incident reporting, and the climate-check loop — built to be handed directly to engineering against Crosswalk's production design system.",
  },
  {
    slug: 'rollover',
    title: 'Year-End Rollover Workflow',
    subtitle:
      "Turning a chaotic September for school transportation admins — 25+ student changes hitting the Action Center one alert at a time — into a single guided, trackable workflow.",
    tags: ['Enterprise Web', 'Workflow Design', '0→1', 'PRD Ownership'],
    role: 'Product Designer — owned the PRD, design decisions, and full prototype',
    status: 'Design complete — pending engineering handoff',
    heroImage: '/case-studies/rollover/workspace-overview.png',
    overview:
      'Every school year, a district\'s Student Information System sync generates a wave of changes — new enrollments, address changes, school reassignments, disenrollments — that all affect bus routes. This feature turns that wave from dozens of individual alerts into one structured, trackable rollover workflow, plus a native way to collect parent transportation opt-in/opt-out preferences that districts previously handled over email and paper forms.',
    problem:
      'Crosswalk surfaced SIS changes as individual Action Center alerts. When 25+ changes land at once — which is every district, every rollover — admins were stuck triaging one alert at a time with no batching, no progress tracking, and no built-in way to notify parents once routes were updated. Separately, districts had no native mechanism for collecting annual transportation opt-in/opt-out preferences, so that ran on email threads and paper forms outside the product entirely.',
    metrics: [
      { goal: 'Reduce time-to-complete school year rollover', metric: 'From days → under 2 hours for a typical district' },
      { goal: 'Eliminate manual alert triage during bulk SIS changes', metric: 'Zero individual alerts shown once the batch threshold is hit' },
      { goal: 'Structured, progress-tracked rollover workflow', metric: '100% of students dispositioned before publish' },
      { goal: 'Native parent opt-in/opt-out collection', metric: 'No external forms or email threads required' },
      { goal: 'Automated parent notification after rollover', metric: 'Zero manual email drafting for route confirmations' },
    ],
    users: [
      { name: 'District Transportation Admin', need: 'Process every student change and publish updated routes efficiently.' },
      { name: 'Transportation Coordinator', need: 'Quick access to assign stops and verify routes day-to-day.' },
      { name: 'Parent / Guardian', need: 'Know if their child has bus service, confirm or opt out, and get route info.' },
      { name: 'Driver', need: 'An accurate, published stop list once rollover is complete.' },
    ],
    process: [
      {
        heading: 'Batch the alert before it ever reaches the admin',
        body: 'When 25+ student changes arrive in a rolling window, the Action Center shows a single batched rollover notification instead of a wall of individual alerts, and suppresses the individual alerts while the batch workflow is in progress. Clicking in opens the Rollover Workspace.',
      },
      {
        heading: 'One workspace, five tabs, a progress bar that never lies',
        body: 'Overview (summary stats + full student table), Existing Students, New Students, School Reassignment, and Stop Cleanup — each tracked independently on a persistent progress bar with autosave, so an admin can leave mid-rollover and pick up exactly where they stopped. Locked tabs show clearly before an admin has opened the workspace at all.',
      },
      {
        heading: 'Warn-and-allow, not block-and-frustrate',
        body: 'Real districts have legitimately unresolved students at publish time. Rather than block publishing until everything is dispositioned, an amber warning persists through to the Rollover Complete screen — visible, but never gating the admin from finishing their day.',
      },
      {
        heading: 'Stop assignment as an overlay, not a detour',
        body: 'The Route Creator opens as a modal directly inside the workspace when a student needs a stop — numbered stop order, a "restores here" insertion indicator, reset/close/update actions — so admins never lose their place in the rollover to go manage routes elsewhere.',
      },
      {
        heading: 'A native opt-in/opt-out form Crosswalk never had',
        body: "Admins build forms with predefined question sets, set a deadline, send by email or QR code, and track Opt-In / Opt-Out / No-Response per school year. Parents verify identity with just their child's name and date of birth — no account creation — and roughly 95% auto-link to their kids through SIS; the remaining 5% route to a manual admin approval queue instead of blocking the parent.",
      },
    ],
    screens: [
      { image: '/case-studies/rollover/action-center.png', caption: 'Action Center — one batched rollover notification instead of 25+ individual alerts.' },
      { image: '/case-studies/rollover/workspace-overview.png', caption: 'Rollover Workspace — tabbed processing with a persistent, autosaving progress bar.' },
      { image: '/case-studies/rollover/assign-stops.png', caption: 'New Students tab — map and student list side by side, with suggested-route assignment inline.' },
      { image: '/case-studies/rollover/stop-cleanup.png', caption: 'Stop Cleanup — reviewing stops that emptied out after disenrollments, before they\'re removed from the route.' },
    ],
    decisions: [
      {
        heading: 'Opt-in forms are a separate workflow from rollover alerts',
        body: 'Two independent systems solving two different problems. The form-status column was deliberately removed from the rollover alert table to stop the two from being conflated.',
      },
      {
        heading: 'Clone-based screen consistency',
        body: 'Every downstream workflow screen (like Rollover Summary) is derived from the same master frame as the Overview screen, so admins never have to re-learn layout partway through a task they already understand.',
      },
      {
        heading: 'Verify parents by identity, not by account',
        body: 'DOB + name verification keeps friction low for first-time parents, while a manual-linking admin view — new to Crosswalk — handles the small percentage SIS can\'t auto-match, without exposing unlinked children\'s identities until an admin confirms the match.',
      },
    ],
    outcome:
      'The PRD (co-owned with Product and Engineering stakeholders) and full working prototype — Action Center, Rollover Workspace across all five tabs, Route Creator modal, and end-of-workflow screens — are complete and staged for engineering handoff ahead of the next school-year rollover season.',
  },
  {
    slug: 'parent-app',
    title: 'Parent App — Family & Trip Management',
    subtitle:
      'A 40+ screen mobile pattern library for the Crosswalk parent app — from linking a first child to daily trip tracking across a whole family.',
    tags: ['Mobile', 'Pattern Library', 'Systems Thinking'],
    role: 'Product Designer — screen inventory, flows, and component patterns',
    status: 'Working prototype, 40+ screens',
    heroImage: '/case-studies/parent-app/multi-child-home.png',
    overview:
      'Parents managing school transportation are usually managing it for more than one kid, on more than one route, with wildly different daily needs — "is the bus late," "can my kid ride a different bus today," "where is the bus right now." This project built out the mobile screen library that covers that whole surface: verifying and linking children to a parent account, then the daily-use screens once they\'re in.',
    problem:
      'The parent-facing mobile experience needed to scale cleanly from one child to a multi-child household without the UI fragmenting into special cases for every combination — a family with two kids on two different routes needed the same clarity as a family with one.',
    users: [
      { name: 'Parents with one child', need: 'A fast, low-friction way to verify their child and immediately see route status.' },
      { name: 'Parents with multiple children', need: 'One home screen that scales across kids without becoming a wall of redundant cards.' },
      { name: 'Newly-linked families', need: 'A verification flow that doesn\'t feel like opening a bank account just to see a bus location.' },
    ],
    process: [
      {
        heading: 'Verification before value',
        body: 'Opt-in, verification, confirmation, and account-linking screens (including a dedicated second-child linking flow) form the front door — parents prove who they are once, and the system does the cross-checking, rather than asking parents to manually enter data the district already has.',
      },
      {
        heading: 'One home screen, two densities',
        body: 'MultiChildHome and MultiChildMixed cover the single- and multi-child cases from the same visual system, so the interface a family sees does not change shape depending on household size — it just shows more or less.',
      },
      {
        heading: 'Daily-use screens built around the actual questions parents ask',
        body: 'Live trip tracking, a digital bus pass (single and multi-child variants), bus attendance, "home on time" status, transportation plan details, driver profile, notification settings, and stop/route lookup — each one scoped to a single real parent question rather than a generic settings dump.',
      },
      {
        heading: 'Shared component vocabulary with the Student Safety flow',
        body: 'The safety reporting screens for this same app were designed as part of this pattern library, reusing the same navigation shell, card system, and status-pill language as the daily-use screens — so safety reporting reads as part of the app, not a bolted-on feature.',
      },
    ],
    screens: [
      { image: '/case-studies/parent-app/multi-child-home.png', caption: 'Multi-child home — one dashboard scaling across every kid on the account.' },
      { image: '/case-studies/parent-app/opt-in.png', caption: 'Opt-in verification — confirming a child\'s identity without creating an account first.' },
      { image: '/case-studies/parent-app/track-screen.png', caption: 'Live trip tracking.' },
      { image: '/case-studies/parent-app/digital-pass.png', caption: 'Digital bus pass.' },
    ],
    outcome:
      'A 40+ screen mobile library spanning onboarding, daily trip management, and safety reporting — built as one coherent system rather than four separate features, so engineering can build off a single component vocabulary.',
  },
  {
    slug: 'route-creator',
    title: 'Route Creator & Live Map Tooling',
    subtitle:
      'Evaluating a third-party mapping engine (TomTom) against planned bus routes — surfacing real-world GPS deviations without burying dispatchers in noise.',
    tags: ['Enterprise Web', 'Mapping UX', 'Technical Exploration'],
    role: 'Product Designer — prototype and interaction design for the comparison tooling',
    status: 'Technical preview prototype',
    heroImage: '/case-studies/route-creator/route-creator-panel.png',
    overview:
      'A planned bus route on paper and the route a bus actually drives are not always the same thing — traffic patterns, road closures, and driver behavior all cause drift. This prototype explores what it looks like to overlay a third-party routing engine (TomTom) on top of Crosswalk\'s planned routes, so dispatchers can see where reality and the plan disagree.',
    problem:
      'Route planning tools show the intended path, not what happens on the road. Without a way to compare planned vs. actual, deviations only surface after a parent complaint or a driver report — reactively, not proactively. The challenge was surfacing this comparison without turning the map into a wall of overlapping lines and alerts.',
    users: [
      { name: 'Dispatchers', need: 'See where a route is deviating from plan without parsing raw GPS data.' },
      { name: 'Transportation admins', need: 'Decide whether a deviation is a one-off or a pattern worth re-routing for.' },
    ],
    process: [
      {
        heading: 'Toggle the complexity, don\'t force it',
        body: 'The TomTom comparison layer, zone overlays, and edit mode are all opt-in toggles on the Route Creator panel — the base map stays clean until a dispatcher deliberately asks for more.',
      },
      {
        heading: 'A banner, not a blocker',
        body: 'When deviations exist on the active route, a dismissible banner surfaces the count without interrupting the map — dispatchers can keep working and open the detail when they\'re ready.',
      },
      {
        heading: 'Side-by-side comparison on demand',
        body: 'A comparison panel lays the TomTom-reported path against the planned route only when the comparison toggle is active, keeping the default view focused on the plan itself.',
      },
    ],
    screens: [
      { image: '/case-studies/route-creator/route-creator-panel.png', caption: 'Route Creator — the planned route, stop list, and driver/vehicle assignment, TomTom comparison off by default.' },
      { image: '/case-studies/route-creator/map-comparison.png', caption: 'TomTom comparison toggled on — a dismissible deviation banner plus a side panel explaining exactly where and why the routes disagree.' },
    ],
    outcome:
      'A working technical preview used to evaluate whether TomTom\'s routing data was reliable and legible enough to build a production deviation-detection feature on top of.',
  },
]
