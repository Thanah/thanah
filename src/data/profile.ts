// All site copy lives here so content updates never touch the components.
import sorneImage from '../assets/projects/sorne-studio.webp'
import keatsImage from '../assets/projects/mapping-keats.webp'
import blemImage from '../assets/projects/blem.webp'
import blemHome from '../assets/projects/blem-home.webp'
import blemHomeThumb from '../assets/projects/blem-home-thumb.webp'
import blemFitness from '../assets/projects/blem-fitness.webp'
import blemFitnessThumb from '../assets/projects/blem-fitness-thumb.webp'
import blemFinance from '../assets/projects/blem-finance.webp'
import blemFinanceThumb from '../assets/projects/blem-finance-thumb.webp'

export const profile = {
  name: 'Thanah Raveendran',
  role: 'Software Engineer',
  location: 'Orlando, FL',
  clearance: 'Active DHS Public Trust',
  email: 'thanah.rav@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/thanah-raveendran',
    github: 'https://github.com/Thanah',
    source: 'https://github.com/Thanah/thanah',
  },
  tagline: 'Software engineer · test automation · photographer',
  currently: 'Currently at Deloitte',
  // TODO(thanah): read this out loud; reword anything that doesn't sound like you.
  headline:
    'I build and test federal software at Deloitte. Off the clock I photograph people and mountains, and write the software that runs my studio.',
  about: [
    'I’m a software engineer in Deloitte’s Government & Public Services practice in Orlando, building and supporting a DHS fleet management system that covers more than 100,000 vehicles and drivers. I develop features across major releases, write the Oracle SQL behind its reports and data feeds, and trace production issues to their root cause.',
    'Test automation is where I started, and it still shapes how I work: I like proving software does what it claims. A Java-based Katalon regression suite I built cut each regression run from about three hours to thirty minutes, and JMeter load tests I designed let the team downsize its servers and halve their cost. Today I also lead technical meetings with client stakeholders and train new engineers on our automation stack.',
  ],
  offTheClock: {
    title: 'Off the clock',
    // TODO(thanah): add a line about why you started shooting, or what you love about it.
    body: [
      'I run Sorne Studio, an Orlando photography studio for portraits, brand content and real estate, after years of shooting portraits and landscapes for myself. The landscapes on this site are mine.',
      'The studio is also where my two halves meet: I built its booking, payments and studio-management platform myself, so the same person shoots the session and fixes the bug.',
    ],
    links: [
      { label: 'Portfolio at sornestudio.com', href: 'https://sornestudio.com/portfolio' },
      { label: '@sornestudio', href: 'https://www.instagram.com/sornestudio' },
    ],
  },
  // A dated snapshot of what I'm up to. Entries with an empty `text` are hidden.
  now: {
    updated: 'November 2026',
    items: [
      { label: 'Building', text: 'Blem, my life-tracker app: lately routines that repeat “every so often” and Apple Pay sync.' },
      { label: 'Shooting', text: 'Portrait and brand sessions for Sorne Studio around Orlando.' },
      { label: 'Learning', text: '' }, // TODO(thanah)
      { label: 'Reading', text: '' }, // TODO(thanah)
    ],
  },
  contact: {
    // TODO(thanah): confirm the reply-time promise is one you can keep.
    blurb:
      'Email is the best way to reach me, whether it’s a role, a project or a question about something here. I usually reply within a day, faster if it’s about test automation, a gnarly data problem or cameras.',
  },
}

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 100, suffix: 'K+', label: 'vehicles and drivers on the system I build and support' },
  { value: 83, suffix: '%', label: 'faster regression runs: ~3 hours down to ~30 minutes' },
  { value: 50, suffix: '%', label: 'lower server costs after load testing enabled downsizing' },
  { value: 50, suffix: '+', label: 'production issues resolved in 2026' },
]

export type Position = { title: string; start: string; end: string; highlights: string[] }

export type Job = {
  company: string
  division?: string
  location: string
  positions: Position[]
}

export const experience: Job[] = [
  {
    company: 'Deloitte Consulting',
    division: 'Government & Public Services',
    location: 'Orlando, FL',
    positions: [
      {
        title: 'Software Engineer (Delivery Consultant)',
        start: 'Jun 2026',
        end: 'Present',
        highlights: [
          'Develop features across major releases of a DHS fleet management web and mobile platform (Chevin Fleetwave, Oracle SQL) serving 100,000+ vehicles and drivers, including role-based user management, office hierarchies, and certification and fuel-card workflows.',
          'Automated workflow routing by record status and approver, email reminders and scheduled report generation, with conditional screen logic in JavaScript.',
          'Built 10+ reports from scratch, including executive overviews for senior agency leadership, replacing manually pulled spreadsheets with custom Oracle SQL covering office compliance, app adoption and vehicle utilization.',
          'Resolved 50+ production issues in 2026 across the application and its inbound data feeds from federal financial, asset-management and fuel-card systems, tracing root causes with Oracle SQL.',
          'Lead technical meetings with client stakeholders, recommending designs and fixes and presenting trade-offs for client decisions.',
          'Train new engineers on Katalon/Selenium test automation and Fleetwave implementation and configuration.',
        ],
      },
      {
        title: 'Solution Analyst',
        start: 'Jul 2023',
        end: 'Jun 2026',
        highlights: [
          'Built a Java-based Katalon regression suite covering 35+ test cases and workflows, cutting regression testing from ~3 hours to ~30 minutes per run (83% faster).',
          'Designed JMeter load tests simulating typical usage to benchmark performance and find system limits, enabling server downsizing that cut server costs by 50%.',
          'Supported the migration of all office hierarchy data from the legacy system to Steward Codes, a standardized numeric scheme aligned with fuel-card transaction data.',
          'Configured Oracle tables and views for new application modules, and ran bulk and targeted data updates for major releases and help desk tickets.',
        ],
      },
    ],
  },
  {
    company: 'J & R Hotels and Investments',
    location: 'Kissimmee, FL',
    positions: [
      {
        title: 'Property IT Technician',
        start: 'Jan 2022',
        end: 'Jun 2023',
        highlights: ['Provided infrastructure troubleshooting and technical support across property systems.'],
      },
    ],
  },
]

export const education = {
  school: 'University of Central Florida',
  degree: 'B.S. Computer Science',
  year: '2022',
}

export type Screenshot = { src: string; thumb: string; alt: string; caption: string }

// Short write-up of the decisions behind a project, shown as an expandable section.
export type CaseStudy = { decisions: { title: string; body: string }[] }

export type Project = {
  name: string
  kind: string
  summary: string
  highlights: string[]
  tags: string[]
  image: string
  imageAlt: string
  links: { label: string; href: string }[]
  gallery?: Screenshot[]
  caseStudy?: CaseStudy
  featured?: boolean
  // Stack the image full width like the featured card, without the badge.
  wide?: boolean
}

export const projects: Project[] = [
  {
    name: 'Sorne Studio',
    kind: 'Live product · Solo build',
    summary:
      'A booking and studio-management platform for my Orlando photography business. Clients book and pay online; I run the business from a custom admin dashboard.',
    highlights: [
      'Online booking with live availability and Stripe payments.',
      'Admin dashboard for bookings, clients, calendar, tasks, expenses and revenue insights.',
      'Serverless API on Cloudflare Pages Functions with a D1 (SQLite) database and versioned migrations.',
      'Scheduled Cloudflare Worker for automated client reminders, deployed through GitHub Actions.',
    ],
    tags: ['React', 'TypeScript', 'Cloudflare Workers', 'D1 / SQL', 'Stripe', 'GitHub Actions'],
    image: sorneImage,
    imageAlt: 'Sorne Studio home page with the booking call to action',
    links: [{ label: 'Visit sornestudio.com', href: 'https://sornestudio.com' }],
    featured: true,
  },
  {
    name: 'Blem',
    kind: 'Personal app · Solo build · 2026',
    summary:
      'A private life hub that replaced my Notion setup: tasks and routines, fitness, health, food, finances and career in one installable app, shared with my partner.',
    highlights: [
      'Postgres row-level security scopes every row to its owner or a shared space, verified by 32 automated policy checks.',
      'Daily bank sync reconciles pending, posted and hand-entered transactions so each purchase stays one row, and categories learn from each correction.',
      'Logins vault encrypted in the browser (PBKDF2 + AES-256-GCM); the server only ever stores ciphertext.',
      'Installable PWA with push reminders, scheduled cron jobs, and iPhone Shortcuts that sync Apple Health and Apple Pay data.',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase / Postgres', 'Row-level security', 'Web Push', 'Vercel'],
    image: blemImage,
    imageAlt: 'Blem on desktop showing the fitness dashboard, with the phone home screen alongside',
    links: [],
    gallery: [
      { src: blemHome, thumb: blemHomeThumb, alt: 'Blem home screen with today’s tasks and routines', caption: 'Home' },
      { src: blemFitness, thumb: blemFitnessThumb, alt: 'Blem fitness dashboard with workouts and a weight trend chart', caption: 'Fitness' },
      { src: blemFinance, thumb: blemFinanceThumb, alt: 'Blem finances dashboard with the monthly budget and income versus spending chart', caption: 'Finances' },
    ],
    caseStudy: {
      decisions: [
        {
          title: 'Why the database enforces sharing, not the app',
          body: 'Everything belongs to whoever created it, and anything placed in a shared space is visible to its members. I wrote that rule once, as Postgres row-level security policies, instead of repeating it in every query. A script applies all the migrations to an in-memory Postgres and runs 32 checks that try to read and write across accounts, so a policy mistake fails before it ships.',
        },
        {
          title: 'Keeping one purchase as one transaction',
          body: 'A card swipe can show up three ways: a pending charge, the posted charge (sometimes with a tip added), and a row I typed in or imported. The daily bank sync reconciles them by updating rows it has seen, adopting matching pending or manual rows, and dropping declined charges, so the budget never double counts. Categorizing one transaction teaches a merchant rule that fixes past and future rows.',
        },
        {
          title: 'A vault the server can’t read',
          body: 'Saved logins are encrypted in the browser with a key derived from a passphrase (PBKDF2, then AES-256-GCM). The database only ever stores ciphertext, so a leaked backup or a bug in a query can’t expose a password.',
        },
        // TODO(thanah): add one decision that went wrong and what you changed. See task.md.
      ],
    },
    wide: true,
  },
  {
    name: 'Mapping Keats',
    kind: 'UCF capstone · Team project · 2022',
    summary:
      'A full-stack web app that maps all 252 of John Keats’s letters, letting researchers explore where each letter traveled alongside its original images and transcription.',
    highlights: [
      'Letter locations plotted over georectified historical maps, with heat-map and filter views.',
      'Admin portal with full create, read, update and delete management of letters and users.',
    ],
    tags: ['React', 'Node.js', 'Leaflet', 'MySQL', 'Agile team'],
    image: keatsImage,
    imageAlt: 'Mapping Keats map view showing letter locations over a historical map of Europe',
    links: [{ label: 'Watch the demo', href: 'https://www.youtube.com/watch?v=ToXFbM3Hfto' }],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Testing', items: ['Katalon Studio', 'Selenium', 'JMeter', 'Regression testing', 'Load testing', 'Test framework design'] },
  { group: 'Languages', items: ['Java', 'Python', 'SQL (Oracle)', 'JavaScript', 'TypeScript', 'C/C++'] },
  { group: 'Integration & Data', items: ['Chevin Fleetwave (COTS)', 'Oracle SQL', 'Data feed validation', 'Power Query'] },
  { group: 'Cloud & Tools', items: ['AWS', 'Azure', 'Linux', 'Docker', 'Git', 'CI/CD', 'JIRA', 'Agile / Scrum'] },
  { group: 'Web', items: ['React', 'Node.js', 'Express', 'Firebase', 'Cloudflare Workers'] },
]
