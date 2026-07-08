import type { CaseStudy } from './types'

export const earlierCaseStudies: CaseStudy[] = [
  {
    slug: 'zor',
    title: 'Zor!',
    subtitle:
      'Marketing website and brand identity for a non-invasive, portable epilepsy-prediction device.',
    tags: ['Branding', 'Marketing Website', 'Academic'],
    role: 'Lo-fi mobile app designs, branding (logo creation), hi-fi website design, website copywriting',
    status: 'Team project — 3 designers, 4 developers, 1 project lead, 4 months',
    heroImage: '/case-studies/zor/moodboard.png',
    overview:
      "A marketing website built for a non-invasive, portable medical device that helps collect data for epileptic seizure prediction. The client, Muskan Gill, needed the site to establish her credibility as a professional in order to secure research funding.",
    problem:
      'The client needed to "gain credibility and establish herself as a professional to secure funding" — the website had to read as trustworthy and scientifically credible to funders, not just look polished.',
    users: [
      { name: 'Muskan Gill (client)', need: 'A professional, fundable public presence for the device and its research.' },
      { name: 'People with epilepsy (future users)', need: 'Eventually, a proactive tool to anticipate and prepare for seizures.' },
    ],
    process: [
      {
        heading: 'Research and brand personality',
        body: 'The team ran brainstorming exercises and wrote 30+ user stories ("As a [type of user], I want [goal] so that [outcome]") to visualize goals before any visual work started. In parallel, the team and client worked through trait sets to define ZOR!\'s brand personality so users could easily identify with it.',
      },
      {
        heading: 'Moodboards and logo ideation',
        body: 'Three moodboards explored different directions — nature-based aesthetics, bright/energetic styling, and website-specific direction. Logo concepts ranged from an electric-zap motif to brain-shaped marks to plain wordmarks. The final logo resolved to a dot in the exclamation mark that reads as a brain — drawn from the idea of ZOR!\'s impact "rippling into users\' lives."',
      },
      {
        heading: 'Design system and IA',
        body: 'The team built out navigation states (default/hover/active via subtle underlines), button variants, and an abstract line-and-circle art system with a gradient inspired by imagery the client responded to. The site\'s information architecture was overhauled to better fit navigation needs and compartmentalize each page\'s sections.',
      },
    ],
    screens: [
      { image: '/case-studies/zor/moodboard.png', caption: 'Early brand research — logo, brand personality, moodboard, and font direction mapped out before any hi-fi work began.' },
      { image: '/case-studies/zor/logo-ideation.png', caption: 'Logo ideation — wordmark and pictorial concepts, arriving at the final ZOR! mark.' },
    ],
    outcome:
      'Delivered lo-fi wireframes for the marketing site and mobile app, hi-fi mockups (Home, About Us, Tech/Timeline, and mobile screens), and a full branding package (logo variations, icons, design system components). The roadmap beyond this engagement includes a data collection phase and a mobile app MVP directly addressing patients with epilepsy, using the lo-fi designs delivered here.',
  },
  {
    slug: 'airnav',
    title: 'AirNav — Airport Wayfinding App',
    subtitle:
      'Enriching airport wayfinding with a full design-thinking research cycle — from empathy interviews to a usability-tested prototype.',
    tags: ['UX Research', 'Mobile', 'Academic'],
    role: 'UX research and design, end-to-end',
    status: 'Case study — 3 months, design thinking methodology',
    heroImage: '/case-studies/airnav/wayfinding-ui.png',
    overview:
      "Large airports with numerous boarding gates are a harrowing experience for flyers, especially those running late. AirNav is a wayfinding app that tackles the gap in digital, real-time gate navigation.",
    problem:
      'Key pain points identified in research: complex airport layouts, language barriers for international travelers, lack of real-time information, last-minute gate changes, information overload from airport signage, and uncertainty about remaining time to board.',
    users: [
      { name: 'Travelers running late', need: 'A fast, unambiguous path to their gate with an honest countdown.' },
      { name: 'International travelers', need: 'Wayfinding that works across languages, including right-to-left scripts.' },
    ],
    process: [
      {
        heading: 'Design thinking, start to finish',
        body: 'Followed the full Empathize → Define → Ideate → Prototype → Test → Iterate cycle over three months, using Figma, Balsamiq, a user-testing platform, and StoryboardThat. Work included user flow mapping (existing vs. ideal state) and storyboards capturing real traveler scenarios before any screens were drawn.',
      },
      {
        heading: 'Features that came out of research',
        body: 'Boarding pass scanning, push-to-wallet for boarding passes, gate-change alerts with automatic re-routing, trip-sharing, and multi-language support all traced back directly to the pain points above.',
      },
      {
        heading: 'Usability testing — the good and the bad',
        body: 'The concept scored an NPS of 63, and 3 of 3 test users appreciated the core navigation concept and could tell terminal routes from store routes. But UI ratings averaged only 1.5/5: users were confused by page-flow transitions, rarely explored the wallet and store features, found ads visually conflicting with navigation, and hit redundant boarding-pass scanning options.',
      },
      {
        heading: 'Iterating on the feedback',
        body: 'Added a missing home icon for visual balance, redesigned confusing navigation and world-view controls, reduced image prominence on the history page to fix a text-to-image imbalance, resized and restyled ads to be less intrusive, and added right-to-left support (tested in Arabic) alongside left-to-right variations (tested in German).',
      },
    ],
    screens: [
      { image: '/case-studies/airnav/wayfinding-ui.png', caption: 'In-app wayfinding — live route to the gate with a security-check waypoint, walking ETA, and nearby stops surfaced along the way.' },
    ],
    outcome:
      'The clearest takeaway from testing: "the best design is always one that is straightforward." User feedback validated the core navigation concept while giving concrete, prioritized direction for the next round of UI iteration.',
  },
  {
    slug: 'bluebikes',
    title: 'BlueBikes App Redesign',
    subtitle:
      "A community-centric redesign of Boston's bike-share app, closing gaps in onboarding, transit integration, and rider support.",
    tags: ['Mobile', 'Research', 'Academic'],
    role: 'UX research and design',
    status: 'Case study',
    heroImage: '/case-studies/bluebikes/hero.jpg',
    overview:
      'A redesign of the Bluebikes bike-share app addressing four gaps: getting help mid-ride, a slow onboarding process, no integration with public transit for first/last-mile planning, and a lack of community engagement among riders.',
    problem:
      "Users reported difficulty getting help while locking, unlocking, or riding; onboarding took too long; the app had no integrated public transportation information for planning connected trips; and the experience felt isolated, without any sense of a rider community.",
    users: [
      { name: 'Commuter riders', need: 'Fast onboarding and reliable first/last-mile transit connections.' },
      { name: 'New riders', need: 'In-the-moment help without abandoning the ride.' },
      { name: 'Boston bike-share community', need: 'A reason to feel part of a shared, gamified experience rather than an isolated errand.' },
    ],
    process: [
      {
        heading: 'Research methods',
        body: 'An extensive closed-question survey surfaced user needs, organized afterward into an affinity diagram. A SWOT analysis and three distinct user personas guided the design decisions that followed.',
      },
      {
        heading: 'From wireframe to usability test',
        body: 'Low-fidelity wireframes were built in Balsamiq to establish the MVP\'s skeletal structure — images, text, buttons, and interactive elements in rough form — before usability testing observed real users interacting with the app on their own.',
      },
    ],
    screens: [
      { image: '/case-studies/bluebikes/hero.jpg', caption: 'Bluebikes, Boston\'s bike-share system — the redesign\'s starting point.' },
    ],
    outcome:
      'Delivered a high-fidelity Figma prototype and a separate information-architecture whiteboard, aimed at reducing churn, increasing ridership and brand awareness, and giving riders real-time transit information and lightweight gamification to build a sense of community.',
  },
  {
    slug: 'discord-redesign',
    title: 'Discord Redesign',
    subtitle:
      'A simpler, more intuitive interface for the most-loved (and often overwhelming) chat app — designed in a 2-week product hackathon.',
    tags: ['Product Hackathon', 'Team Project', 'Academic'],
    role: 'Product design, team hackathon',
    status: 'Hackathon project — 2 phases over 2 weeks',
    heroImage: '/case-studies/discord/hero.png',
    overview:
      'A holistic product design pass at making Discord — "the most loved (and somewhat overwhelming) app" — more user-friendly, built during a product hackathon split into two one-week phases.',
    problem:
      "Discord's interface, as experienced by its own users, was identified as overwhelming despite the platform's popularity — the hackathon set out to address that gap directly.",
    users: [
      { name: 'Existing Discord users', need: 'The same core functionality, with less interface overwhelm.' },
    ],
    process: [
      {
        heading: 'Phase I — Research & Discovery (Week 1)',
        body: 'Rewrote the product vision statement, ran a competitor analysis, and worked through the specific problems users have described with Discord\'s current interface.',
      },
      {
        heading: 'Phase II — Solution Development (Week 2)',
        body: 'Brought the solution to life as an MVP and interactive prototype, backed by a roadmap for releasing features and assessing product-market fit.',
      },
    ],
    screens: [
      { image: '/case-studies/discord/hero.png', caption: '"Reimagining Discord For All" — the team\'s hackathon framing for the redesign.' },
    ],
    outcome:
      'Shipped an interactive prototype of the redesigned interface within the two-week hackathon window, alongside the supporting vision statement, competitor analysis, and feature roadmap.',
  },
  {
    slug: 'forever-bonds',
    title: 'Forever Bonds',
    subtitle: 'A Figma prototype exploring a more transparent child-adoption process.',
    tags: ['Mobile', 'Prototype', 'Academic'],
    role: 'UI and prototype design',
    status: 'Figma prototype',
    heroImage: '/case-studies/forever-bonds/screens.png',
    overview:
      'Forever Bonds is a mobile app prototype built around one goal: making the child-adoption process more transparent for prospective parents, from sign-up through matching, messaging, and profile management.',
    problem:
      'The prototype frames adoption as a process that can feel opaque to prospective parents — the app\'s job is to make status, documentation, and communication visible at every step rather than left to phone calls and paperwork.',
    users: [
      { name: 'Prospective adoptive parents', need: 'A clear view of where they are in the process and what happens next.' },
    ],
    process: [
      {
        heading: 'Screen by screen',
        body: 'The prototype covers a splash screen, sign-in/sign-up, onboarding, a home/search screen (filterable by race, gender, location, medical and home-study requirements), a messaging interface, and a profile section with documents, adoption history, and verification status.',
      },
      {
        heading: 'Onboarding with intent',
        body: 'The onboarding flow is built specifically to introduce first-time users to the app\'s features and show them how to use them, rather than assuming familiarity.',
      },
    ],
    screens: [
      { image: '/case-studies/forever-bonds/screens.png', caption: 'Core screens — sign-up, search/matching, messaging, and profile with adoption history and document upload.' },
    ],
    outcome:
      'Delivered as an interactive Figma prototype built with components, variants, and auto-layout, covering the full flow from sign-up to an active adoption profile.',
  },
  {
    slug: 'mycharlie',
    title: 'MyCharlie App',
    subtitle:
      "Rethinking the MBTA's discontinued CharlieCard recharge tool as a single-step, wallet-based mobile app.",
    tags: ['Mobile', 'Transit', 'Case Study'],
    role: 'UX research and design',
    status: 'Case study',
    heroImage: '/case-studies/mycharlie/hero.png',
    overview:
      'The MBTA discontinued the MyCharlie website on November 15, 2023, removing the ability to recharge a CharlieCard online. This project reimagines that capability as a dedicated mobile app.',
    problem:
      "Riders previously had to complete a transaction online, then separately activate the card at a fare machine before it could be used — a two-step process that was a major accessibility gap. Underlying it was a security issue: fare values were stored on the card's MIFARE Classic chip rather than in a central database, and MIT researchers had publicly demonstrated weaknesses in that system — which is what ultimately prompted the shutdown.",
    users: [
      { name: 'CharlieCard riders', need: 'To recharge and use transit fare in one step, without a separate activation trip.' },
    ],
    process: [
      {
        heading: 'One app, one job',
        body: 'The proposed solution is intentionally narrow: an app whose main functionality is letting riders add their CharlieCard to their phone wallet by scanning it — collapsing the online-purchase-then-machine-activation process into a single action.',
      },
    ],
    screens: [
      { image: '/case-studies/mycharlie/hero.png', caption: 'MyCharlie App — CharlieCards added directly to the phone wallet.' },
    ],
    outcome:
      'Written with an honest look at how the problem evolved: as of August 2024, the MBTA introduced tap-to-pay with any credit card as an end-to-end alternative — which may render much of what\'s proposed here moot. Worth keeping precisely because it shows the reasoning held up even after the transit agency solved the problem a different way.',
  },
]
