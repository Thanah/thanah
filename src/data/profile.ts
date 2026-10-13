// All site copy lives here so content updates never touch the components.
import sorneImage from '../assets/projects/sorne-studio.webp'
import keatsImage from '../assets/projects/mapping-keats.webp'

export const profile = {
  name: 'Thanah Raveendran',
  role: 'Software Engineer',
  location: 'Orlando, FL',
  clearance: 'Public Trust clearance',
  email: 'thanah.rav@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/thanah-raveendran',
    github: 'https://github.com/Thanah',
  },
  // The hero cycles through these; the first is what search engines and screen readers get.
  roles: ['Software Engineer', 'Full-stack developer', 'Test automation engineer', 'Solutions specialist'],
  currently: 'Currently at Deloitte',
  headline:
    'I build and test enterprise software at Deloitte, and ship full-stack products of my own on the side.',
  about: [
    'I’m a software engineer at Deloitte in Orlando, working on enterprise fleet-management applications that support more than 100,000 vehicles and drivers. My role sits between engineering and the client: I analyze requirements, recommend solutions, lead project meetings, and trace issues to their root cause across integrated systems.',
    'I also build the test automation that keeps releases moving. A Selenium and JMeter framework I designed raised QA efficiency by 80% and cut server-related costs in half.',
    'Outside of work I run Sorne Studio, a photography business, and I built its booking and studio-management platform end to end, from the database to the payment flow.',
  ],
}

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 100, suffix: 'K+', label: 'vehicles and drivers on the platforms I support' },
  { value: 80, suffix: '%', label: 'gain in QA efficiency from my test automation' },
  { value: 50, suffix: '%', label: 'reduction in server-related costs' },
  { value: 3, suffix: '+', label: 'years engineering at Deloitte' },
]

export type Role = { title: string; start: string; end: string }

export type Job = {
  company: string
  location: string
  roles: Role[]
  highlights: string[]
}

export const experience: Job[] = [
  {
    company: 'Deloitte',
    location: 'Orlando, FL',
    roles: [
      { title: 'Solutions Specialist, Software Engineer', start: 'Apr 2026', end: 'Present' },
      { title: 'Solutions Analyst, Software Engineer', start: 'Jul 2023', end: 'Apr 2026' },
    ],
    highlights: [
      'Analyze technical requirements and recommend solutions for enterprise fleet-management applications supporting 100,000+ vehicles and drivers.',
      'Lead client and project meetings, presenting technical findings, proposed solutions and implementation trade-offs.',
      'Troubleshoot application and integration issues across enterprise systems and recommend corrective approaches.',
      'Designed and maintain automated test frameworks in Selenium and JMeter, increasing QA efficiency by 80% and reducing server-related costs by 50%.',
      'Use AI-assisted development tools for debugging, scripting, documentation and workflow optimization.',
    ],
  },
  {
    company: 'J & R Hotels and Investments',
    location: 'Kissimmee, FL',
    roles: [{ title: 'Property IT Technician', start: 'Jan 2022', end: 'Jun 2023' }],
    highlights: ['Provided infrastructure troubleshooting and technical support across property systems.'],
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
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'C/C++'] },
  { group: 'Frameworks', items: ['React', 'Node.js', 'Express', 'Sequelize'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Cloudflare', 'Docker', 'CI/CD', 'Git'] },
  { group: 'Testing', items: ['Selenium', 'JMeter', 'Katalon Studio', 'Vitest'] },
  { group: 'Ways of working', items: ['Agile / Scrum', 'JIRA', 'Client facilitation', 'AI-assisted development'] },
]
