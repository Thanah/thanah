// All site copy lives here so content updates never touch the components.
import sorneImage from '../assets/projects/sorne-studio.webp'
import keatsImage from '../assets/projects/mapping-keats.webp'

export const profile = {
  name: 'Thanah Raveendran',
  role: 'Software Engineer',
  location: 'Orlando, FL',
  clearance: 'Active DHS Public Trust',
  email: 'thanah.rav@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/thanah-raveendran',
    github: 'https://github.com/Thanah',
  },
  // The hero cycles through these; the first is what search engines and screen readers get.
  roles: ['Software Engineer', 'Test automation engineer', 'Full-stack developer', 'Delivery consultant'],
  currently: 'Currently at Deloitte',
  headline:
    'I build, test and support federal software at Deloitte, and ship full-stack products of my own on the side.',
  about: [
    'I’m a software engineer in Deloitte’s Government & Public Services practice in Orlando, building and supporting a DHS fleet management system that covers more than 100,000 vehicles and drivers. I develop features across major releases, write the Oracle SQL behind its reports and data feeds, and trace production issues to their root cause.',
    'Test automation is where I started. A Java-based Katalon regression suite I built cut each regression run from about three hours to thirty minutes, and JMeter load tests I designed let the team downsize its servers and halve their cost. Today I also lead technical meetings with client stakeholders and train new engineers on our automation stack.',
    'Outside of work I run Sorne Studio, a photography business, and I built its booking and studio-management platform end to end, from the database to the payment flow.',
  ],
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

export type Project = {
  name: string
  kind: string
  summary: string
  highlights: string[]
  tags: string[]
  image: string
  imageAlt: string
  links: { label: string; href: string }[]
  featured?: boolean
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
