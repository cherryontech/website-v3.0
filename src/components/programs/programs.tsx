import '../../styles/programs.css'
import { useState } from 'react'
import Icon from '../Icon'

import {
    launchpadTabs,
    launchpadCohort,
    careersTabs,
    careersCohort,
    ProgramTabSectionProps,
} from './data/program_tab_data.ts'

const ChevronUp = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M18 15l-6-6-6 6" />
    </svg>
)

const ChevronDown = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M6 9l6 6 6-6" />
    </svg>
)

const ProgramTabSection = ({
    sectionId,
    programTitle,
    cohortStatus,
    tabs,
}: ProgramTabSectionProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    const activeContent = tabs.find((t) => t.id === activeTab) ?? tabs[0]

    const handleAccordionToggle = (id: string) => {
        setActiveTab((prev) => (prev === id ? '' : id))
    }

    return (
        <section id={sectionId} className="program-section">
            <h1 className="program-section-title display-2 font-bold">
                {programTitle}
            </h1>

            {/* Desktop / Tablet: two-column layout */}
            <div className="program-layout">
                <div className="program-left">
                    <div className="cohort-status">
                        <h2>Next Cohort Status</h2>
                        <p className="cohort-status-subtitle font-bold">
                            {cohortStatus.statusSubtitle}
                        </p>
                        <p>{cohortStatus.description}</p>
                        <ul>
                            {cohortStatus.bullets.map((b, i) => (
                                <li key={i}>
                                    <span className="font-bold">
                                        {b.label}:
                                    </span>{' '}
                                    {b.text}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={cohortStatus.buttonHref}
                            className="btn btn-stroke"
                        >
                            {cohortStatus.buttonText}{' '}
                            <Icon name="arrow-right" />
                        </a>
                    </div>

                    <nav
                        className="program-tabs-nav"
                        aria-label={`${programTitle} sections`}
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`program-tab-btn${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <span className="tab-label">{tab.label}</span>
                                {activeTab === tab.id && (
                                    <>
                                        <span
                                            className="tab-line"
                                            aria-hidden="true"
                                        />
                                        <span
                                            className="tab-dot"
                                            aria-hidden="true"
                                        />
                                    </>
                                )}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="program-right">
                    {activeContent.image && (
                        <div className="program-tab-image">
                            <img
                                src={activeContent.image}
                                alt={activeContent.imageAlt ?? ''}
                            />
                        </div>
                    )}
                    <div className="program-tab-content">
                        <h2>{activeContent.title}</h2>
                        <p>{activeContent.description}</p>
                        <ul>
                            {activeContent.bullets.map((b, i) => (
                                <li key={i}>
                                    <span className="font-bold">
                                        {b.label}:
                                    </span>{' '}
                                    {b.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mobile: accordion */}
            <div className="program-accordion">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`accordion-item${activeTab === tab.id ? 'active' : ''}`}
                    >
                        <button
                            className="accordion-trigger"
                            onClick={() => handleAccordionToggle(tab.id)}
                            aria-expanded={activeTab === tab.id}
                        >
                            <span>{tab.label}</span>
                            <span className="accordion-chevron">
                                {activeTab === tab.id ? (
                                    <ChevronUp />
                                ) : (
                                    <ChevronDown />
                                )}
                            </span>
                        </button>
                        {activeTab === tab.id && (
                            <div className="accordion-content">
                                {tab.image && (
                                    <img
                                        src={tab.image}
                                        alt={tab.imageAlt ?? ''}
                                        className="accordion-image"
                                    />
                                )}
                                <p>{tab.description}</p>
                                <ul>
                                    {tab.bullets.map((b, i) => (
                                        <li key={i}>
                                            <span className="font-bold">
                                                {b.label}:
                                            </span>{' '}
                                            {b.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

const Programs_Page = () => {
    return (
        <>
            <ProgramTabSection
                sectionId="cherry-launchpad"
                programTitle="Cherry Launchpad"
                cohortStatus={launchpadCohort}
                tabs={launchpadTabs}
            />
            <ProgramTabSection
                sectionId="cherry-careers"
                programTitle="Cherry Careers"
                cohortStatus={careersCohort}
                tabs={careersTabs}
            />
        </>
    )
}

export default Programs_Page

/*const Programs_Page = () => {
    return (
        <>
            <section id="cherry-launchpad">
                <div className="container">
                    <div>
                        <div></div>
                        <a>Subscribe for Updates</a>
                        <ul>
                            <li>Program Overview</li>
                            <li>Key Outcomes</li>
                            <li>Who It's For</li>
                            <li>The Roadmap</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <img />
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
            <section id="cherry-careers"></section>
        </>
    )
}

export default Programs_Page*/
