export const profile = {
  name: 'Dylan Pacitto Potapczuk',
  location: 'Richmond Hill, ON',
  email: 'dylan.pacitto@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dylan-pacitto-potapczuk',
  github: 'https://github.com/Dylan-PacittoPotapczuk',
  studi: 'https://github.com/Dylan-PacittoPotapczuk/Studi',
  resumeHref: `${import.meta.env.BASE_URL}resume.pdf`,
  tagline:
    'I design and ship operations systems powered by AI, bridging product, ops, and engineering.',
  degrees: [
    {
      title: 'Bachelor of Computer Science, Minor in Combinatorics & Optimization',
      school: 'University of Waterloo',
      timing: 'Expected Aug 2027',
    },
    {
      title: 'Bachelor of Business Administration, Minor in Economics',
      school: 'Wilfrid Laurier University',
      timing: 'Expected Aug 2027',
    },
  ],
}

export const leadership = {
  role: 'Orientation Team Leader',
  org: 'University of Waterloo',
  timing: 'Feb 2026 to Sep 2026',
  blurb:
    'Led a university wide Orientation program that welcomed thousands of students while keeping budget, staffing, and inclusive programming on track.',
  stats: [
    { value: '7,000+', label: 'students served' },
    { value: '$100K+', label: 'budget under target' },
    { value: '800+', label: 'volunteers coordinated' },
  ],
  points: [
    'Planned and delivered five event days across six faculties with a positive NPS',
    'Built communication and delegation frameworks so faculty leads stayed aligned on staffing, deliverables, and milestones',
    'Kept inclusive programming front and center while managing a complex volunteer organization at scale',
  ],
}

export const workHighlights = [
  {
    title: 'Studi',
    kind: 'Product · Engineering',
    timing: 'Sep 2025 to Dec 2025',
    blurb:
      'A study spot discovery app that made it all the way to production. I owned the roadmap, personas, and Figma/UML specs while building in Kotlin Multiplatform with a four person team.',
    points: [
      'Community scaled discovery through spot submission and ratings, so we never needed a content team',
      'Shared Kotlin Multiplatform codebase with a PostgreSQL/Supabase backend',
    ],
    link: {
      label: 'View on GitHub',
      href: 'https://github.com/Dylan-PacittoPotapczuk/Studi',
    },
  },
  {
    title: 'Cash flow AI forecasting',
    kind: 'Canada Rocket Company',
    timing: '2026 to Present',
    blurb:
      'Monthly cash flow forecasts landed within 5% of actuals by connecting six business systems with Python, APIs, PostgreSQL, and AI agents.',
    points: [
      'Automated reporting that cleared out recurring manual data collection',
      'Server side jobs that keep forecasting data fresh for investors and stakeholders',
    ],
  },
  {
    title: 'Procure to pay automation',
    kind: 'Canada Rocket Company',
    timing: '2026 to Present',
    blurb:
      'Designed and shipped a procure to pay system in Python, PostgreSQL, and Docker in a place where no formal purchasing workflow existed.',
    points: [
      'Automated purchasing, receipts, approvals, and documentation across 100+ transactions',
      'Build versus buy analysis that folded NDAs, contracts, and PO signing into one secure document workflow',
    ],
  },
  {
    title: 'Ops & shipping wins',
    kind: 'Kepler · OtO',
    timing: '2024 to 2025',
    blurb:
      'Supply chain and fulfillment improvements spanning satellite hardware logistics and consumer shipping.',
    points: [
      'Kepler: faster kitting and lower stockout risk across $20M+ inventory and 10 satellite builds, plus a zero delay U.S. shipment with controlled goods docs',
      'OtO: 30% lower shipping cost and delivery cut from 7 to 3 days for 30% of customers via a new 3PL',
    ],
  },
]

export const experience = [
  {
    role: 'Strategy & Operations',
    org: 'Canada Rocket Company',
    timing: 'Sep 2026 to Present',
    summary:
      'Forecasting with AI assistance, procure to pay automation, and build versus buy decisions across Finance, IT, Operations, and HR.',
    featured: false,
  },
  {
    role: 'Orientation Team Leader',
    org: 'University of Waterloo',
    timing: 'Feb 2026 to Sep 2026',
    summary:
      'Directed a university wide program for 7,000+ students with a $100K+ budget under target, 800+ volunteers, and inclusive programming across six faculties.',
    featured: true,
  },
  {
    role: 'Infrastructure Analyst',
    org: 'Interac Corporation',
    timing: 'Jan 2026 to Apr 2026',
    summary:
      'Release readiness dashboards, Debit capacity expansion PM support, and data centre wind down modeling for leadership.',
    featured: false,
  },
  {
    role: 'Supply Chain Analyst',
    org: 'Kepler Communications Inc.',
    timing: 'Jan 2025 to Apr 2025',
    summary:
      'NetSuite BOM and inventory discipline for satellite builds, plus cross border logistics for a full satellite system shipment.',
    featured: false,
  },
  {
    role: 'Operations Analyst',
    org: 'OtO Inc.',
    timing: 'Jan 2024 to Aug 2024',
    summary:
      '3PL selection that cut cost and delivery time, and a QC tracking system with engineering that stayed in production use.',
    featured: false,
  },
]

export const skillGroups = [
  {
    label: 'Product',
    items: [
      'Roadmapping',
      'User stories & PRDs',
      'Prioritization',
      'User research',
      'Wireframing',
      'Build versus buy',
    ],
  },
  {
    label: 'Delivery & analytics',
    items: [
      'Agile / Scrum',
      'Stakeholder management',
      'SQL',
      'Python',
      'Excel / Power Query',
      'KPI tracking',
      'Financial modeling',
    ],
  },
  {
    label: 'Tools & systems',
    items: [
      'JIRA',
      'Confluence',
      'Figma',
      'Power BI / Tableau',
      'Git',
      'Docker',
      'PostgreSQL',
      'REST APIs',
      'AI tooling',
    ],
  },
]
