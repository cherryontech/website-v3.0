import redCard from '../../../assets/about/illustrations/03_about - impact in action - projects.svg'
import purpleCard from '../../../assets/about/illustrations/04_about - impact in action - collaborators.svg'
import greenCard from '../../../assets/about/illustrations/05_about - impact in action - network.svg'

import julieth from '../../../assets/about/team-photos/01_about - core bunch - julieth.svg'
import allie from '../../../assets/about/team-photos/02_about - core bunch - allie.svg'
import aiden from '../../../assets/about/team-photos/03_about - core bunch - aiden.svg'

type Asset = string | { src: string }

const assetSrc = (asset: Asset) =>
    typeof asset === 'string' ? asset : asset.src

export const impactCardData = [
    {
        imageName: assetSrc(redCard),
        title: '20+',
        text: 'Projects Launched',
    },
    {
        imageName: assetSrc(purpleCard),
        title: '160+',
        text: 'Collaborators Connected',
    },
    {
        imageName: assetSrc(greenCard),
        title: '∞',
        text: 'A Global Ally Network',
    },
]

export const journeyCardData = [
    {
        date: 'July 2020',
        title: 'Our Concept is Born',
        entry: `Launching our very first squad as a proof of
            concept. Successfully validating that a
            collaborative, peer-led environment helps
            marginalized genders thrive.`,
    },
    {
        date: 'Spring 2023',
        title: '1st Cohort Launch',
        entry: `We officially scale the squad model, opening doors
                for hands-on, project-based learning and peer
                mentorship.`,
    },
    {
        date: 'Fall 2023',
        title: '2nd Cohort Launch',
        entry: `Our cherry bunch expands as more squads launch and
                our first wave of helping cherries join—bringing in
                new mentors and a community-building team.`,
    },
    {
        date: 'Spring 2024',
        title: '3rd Cohort Launch',
        entry: `Another group of tech squads begins, continuing to
                build, learn, and connect across a growing global
                network.`,
    },
    {
        date: 'Fall 2024',
        title: 'Official Non-Profit',
        entry: `We become a registered Canadian non-profit,
                introducing a refreshed brand that reflects our
                bold, inclusive direction.`,
    },
    {
        date: 'Fall 2025',
        title: '4th Cohort Launch',
        entry: `Our momentum keeps building as a fresh group of tech
                squads takes flight to collaborate, design, and grow
                together.`,
    },
    {
        date: 'Spring 2026',
        title: 'Anchoring Our Roots',
        entry: `Building our new website and strengthening our
                commitment to accessibility, community experience,
                and purpose-driven design.`,
    },
    {
        date: 'Fall 2026',
        title: '5th Cohort Launch',
        entry: `The momentum continues. Our next wave of tech squads
                begins with fresh projects, new mentors, and endless
                possibilities.`,
    },
    {
        date: 'Spring 2027',
        title: 'Cherry Careers Launch',
        entry: `We roll out tailored career support, featuring mock
                interviews, portfolio reviews, and targeted
                networking to navigate the job market with confidence.`,
    },
]

export const memberCardData = [
    {
        imageName: assetSrc(julieth),
        name: 'Julieth Fajardo',
        jobTitle: 'Co-Executive Director',
        pronouns: 'She/Her',
    },
    {
        imageName: assetSrc(allie),
        name: 'Allie Quintano',
        jobTitle: 'Co-Executive Director',
        pronouns: 'She/Her',
    },
    {
        imageName: assetSrc(aiden),
        name: 'Aiden Hirshfield',
        jobTitle: 'Fundraiser & Grant Director',
        pronouns: 'He/They',
    },
]
