interface TabContent {
    id: string
    label: string
    image?: string
    imageAlt?: string
    title: string
    description: string
    bullets: { label: string; text: string }[]
}

interface CohortStatus {
    statusSubtitle: string
    description: string
    bullets: { label: string; text: string }[]
    buttonText: string
    buttonHref: string
}

export interface ProgramTabSectionProps {
    sectionId: string
    programTitle: string
    cohortStatus: CohortStatus
    tabs: TabContent[]
}

export const launchpadTabs: TabContent[] = [
    {
        id: 'program-overview',
        label: 'Program Overview',
        title: 'Program Overview',
        description:
            'A foundational 15-week project sprint designed to translate your learned skills into valuable, cross-functional team experience.',
        bullets: [
            {
                label: 'Format',
                text: 'A guided team sprint mimicking a true production environment.',
            },
            {
                label: 'Commitment',
                text: '7–10 hours weekly, designed to fit alongside work/studies.',
            },
            {
                label: 'Milestones',
                text: 'Structured tasks and mentorship to build/deploy a live project.',
            },
            {
                label: 'Cost',
                text: '100% free, with ways to give back through community support later.',
            },
        ],
    },
    {
        id: 'key-outcomes',
        label: 'Key Outcomes',
        title: 'Key Outcomes',
        description:
            'Walk away with tangible experience and a stronger professional identity.',
        bullets: [
            {
                label: 'Portfolio',
                text: 'A deployed live project to show employers.',
            },
            {
                label: 'Skills',
                text: 'Cross-functional experience across design, dev, and product.',
            },
            {
                label: 'Network',
                text: 'Lasting connections with peers and industry mentors.',
            },
            {
                label: 'Confidence',
                text: 'Practical skills that translate directly to the workplace.',
            },
        ],
    },
    {
        id: 'whos-it-for',
        label: "Who It's For",
        title: "Who It's For",
        description:
            'Cherry Launchpad is designed for women, non-binary, and trans individuals in tech who are ready to level up.',
        bullets: [
            {
                label: 'Learners',
                text: 'Recent grads or career changers with foundational tech skills.',
            },
            {
                label: 'Builders',
                text: 'People who learn best by doing real, meaningful work.',
            },
            {
                label: 'Community-driven',
                text: 'Those who thrive in collaborative, supportive environments.',
            },
            {
                label: 'Availability',
                text: 'Anyone who can commit 7–10 hours per week for 15 weeks.',
            },
        ],
    },
    {
        id: 'the-roadmap',
        label: 'The Roadmap',
        title: 'The Roadmap',
        description:
            'A structured 15-week journey from onboarding to deployment.',
        bullets: [
            {
                label: 'Weeks 1–2',
                text: 'Team formation, project scoping, and onboarding.',
            },
            {
                label: 'Weeks 3–10',
                text: 'Sprint cycles with weekly milestones and check-ins.',
            },
            {
                label: 'Weeks 11–13',
                text: 'Build and integration sprints toward a working product.',
            },
            {
                label: 'Weeks 14–15',
                text: 'Final deployment, demo day, and community celebration.',
            },
        ],
    },
]

export const launchpadCohort: CohortStatus = {
    statusSubtitle: 'Applications Currently Closed',
    description:
        'Our cohorts typically run once a year in the Fall. Sign up for the Cherry On Tech newsletter to get notified as soon as new cohort dates and application windows are announced!',
    bullets: [
        { label: 'Typical Schedule', text: 'August – December' },
        { label: 'Next Window', text: 'Announced via our newsletter' },
    ],
    buttonText: 'Subscribe for Updates',
    buttonHref: '#',
}

export const careersTabs: TabContent[] = [
    {
        id: 'careers-overview',
        label: 'Program Overview',
        title: 'Program Overview',
        description:
            'A career accelerator connecting Cherry On Tech alumni and community members with real job opportunities, resume support, and interview prep.',
        bullets: [
            {
                label: 'Format',
                text: 'Self-paced resources combined with live coaching sessions.',
            },
            {
                label: 'Commitment',
                text: 'Flexible — engage as much or as little as you need.',
            },
            {
                label: 'Support',
                text: 'Access to our employer network and community mentors.',
            },
            {
                label: 'Cost',
                text: '100% free for Cherry On Tech community members.',
            },
        ],
    },
    {
        id: 'careers-outcomes',
        label: 'Key Outcomes',
        title: 'Key Outcomes',
        description:
            'Leave with the tools, confidence, and connections to land your next role.',
        bullets: [
            {
                label: 'Resume',
                text: 'A polished, tech-industry-ready resume and LinkedIn profile.',
            },
            {
                label: 'Interview Prep',
                text: 'Practice with real questions and feedback from industry pros.',
            },
            {
                label: 'Job Leads',
                text: 'Direct connections to inclusive employers in our network.',
            },
            {
                label: 'Negotiation',
                text: 'Tools and tactics to advocate for fair compensation.',
            },
        ],
    },
    {
        id: 'careers-whos-it-for',
        label: "Who It's For",
        title: "Who It's For",
        description:
            'Cherry Careers is open to all Cherry On Tech community members who are actively job searching or preparing to.',
        bullets: [
            {
                label: 'Alumni',
                text: 'Cherry Launchpad graduates ready to transition to employment.',
            },
            {
                label: 'Job Seekers',
                text: 'Community members actively applying for tech roles.',
            },
            {
                label: 'Career Changers',
                text: 'Those pivoting into tech from another field.',
            },
            {
                label: 'Re-entrants',
                text: 'People returning to work after a career break.',
            },
        ],
    },
    {
        id: 'careers-roadmap',
        label: 'The Roadmap',
        title: 'The Roadmap',
        description:
            'A step-by-step pathway from career prep to your first (or next) tech role.',
        bullets: [
            {
                label: 'Phase 1',
                text: 'Profile audit — resume, LinkedIn, and portfolio review.',
            },
            {
                label: 'Phase 2',
                text: 'Interview coaching and mock interview sessions.',
            },
            {
                label: 'Phase 3',
                text: 'Job search strategy and employer introductions.',
            },
            {
                label: 'Phase 4',
                text: 'Offer evaluation, negotiation, and onboarding support.',
            },
        ],
    },
]

export const careersCohort: CohortStatus = {
    statusSubtitle: 'Open Year-Round',
    description:
        'Cherry Careers resources and coaching are available on an ongoing basis. Join the community to get started any time.',
    bullets: [
        {
            label: 'Access',
            text: 'Open to all Cherry On Tech community members',
        },
        {
            label: 'Coaching Sessions',
            text: 'Scheduled monthly — check the community calendar',
        },
    ],
    buttonText: 'Join the Community',
    buttonHref: '#',
}
