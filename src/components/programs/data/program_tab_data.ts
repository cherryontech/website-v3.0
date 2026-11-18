import programs_overview_img from '../../../assets/programs/02_programs - launchpad - program overview.svg'
import key_outcomes_img from '../../../assets/programs/03_programs - launchpad - key outcomes.svg'
import who_its_for_img from '../../../assets/programs/04_programs - launchpad - who its for.svg'
import roadmap_img from '../../../assets/programs/05_programs - launchpad - the roadmap.svg'
import program_focus_img from '../../../assets/programs/07_programs - careers - program focus.svg'
import career_who_its_for_img from '../../../assets/programs/08_programs - careers - who its for.svg'
import topics_covered_img from '../../../assets/programs/09_programs - careers - topics covered.svg'

interface TabContent {
    id: string
    label: string
    image?: ImageMetadata //Where is SvgComponent
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
        image: programs_overview_img,
        imageAlt: 'Programs Overview image',
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
        image: key_outcomes_img,
        imageAlt: 'Key Outcomes Image',
        description: 'Move the needle on your professional career goals.',
        bullets: [
            {
                label: 'Team Experience',
                text: 'Collaborate with developers, product managers, and UX designers/writers.',
            },
            {
                label: 'MVP Launch',
                text: 'Build a high-quality project from concept to deployment.',
            },
            {
                label: 'Accessibility',
                text: 'Practice inclusive design/coding to meet industry standards.',
            },
            {
                label: 'Tool Stack',
                text: 'Gain hands-on experience with React, Tailwind, Figma, and Jira.',
            },
            {
                label: 'Mentorship',
                text: 'Receive direct feedback/guidance from industry professionals.',
            },
        ],
    },
    {
        id: 'whos-it-for',
        label: "Who It's For",
        title: "Who It's For",
        image: who_its_for_img,
        imageAlt: 'Key Outcomes Image',
        description: 'Check your alignment with our mission.',
        bullets: [
            {
                label: 'Community',
                text: 'You identify as an underrepresented and marginalized gender (i.e., Women, Non-binary, Trans).',
            },
            {
                label: 'Career Path',
                text: 'You aspire to be a developer, product manager, or UX designer/writer.',
            },
            {
                label: 'Readiness',
                text: 'You already have foundational skills and plan to job hunt within the next 1-3 months.',
            },
            {
                label: 'Portfolio',
                text: 'You want to add a collaborative, live project to your resume.',
            },
            {
                label: 'Values',
                text: 'You are committed to accessibility and empowering your peers.',
            },
        ],
    },
    {
        id: 'the-roadmap',
        label: 'The Roadmap',
        title: 'The Roadmap',
        image: roadmap_img,
        imageAlt: 'Roadmap Image',
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
        label: 'Program Focus',
        title: 'Program Focus',
        description:
            'This 6-week intensive is designed to refine your professional edge and prepare you for the tech hiring landscape. Through peer accountability and targeted mentor feedback, we focus on translating your existing foundational skills and project experience into application readiness. Our goal is to help you find your story, polish your job assets, and bridge the gap to your next role in tech.',
        image: program_focus_img,
        imageAlt: 'Program Focus image',
        bullets: [],
    },
    {
        id: 'careers-whos-it-for',
        label: "Who It's For",
        title: "Who It's For",
        image: career_who_its_for_img,
        imageAlt: 'Career Who It`s For Image',
        description:
            'Tailor-made for Cherry Launchpad graduates and active members of Cherry Squads preparing to take the final leap in their tech journey. If you have built your project foundation and you are ready to refine your portfolio, practice interviews, and land a role, we encourage you to apply during our next open application window!',
        bullets: [],
    },
    {
        id: 'topics-covered',
        label: 'Topics Covered',
        title: 'Topics Covered',
        image: topics_covered_img,
        imageAlt: 'Topics Covered Image',
        description:
            'As we continue to refine our upcoming curriculum, our core focus areas centre on 3 essential pillars of the job search.',
        bullets: [
            {
                label: 'Foundations & Storytelling',
                text: 'Map out your career targets, build workplace confidence, and learn how to articulate your personal narrative and transferable skills.',
            },
            {
                label: 'Asset Optimization',
                text: 'Tailor your resume, LinkedIn profile, and GitHub/ portfolio to showcase your highest-impact project work and attract tech recruiters. Learn effective strategies for focused industry networking.',
            },
            {
                label: 'Interview Readiness',
                text: 'Prepare for the real hiring environment with discipline-specific mock interviews, behavioural prep, and direct, actionable feedback from industry mentors.',
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
