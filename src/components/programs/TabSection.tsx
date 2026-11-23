import '../../styles/tab_section.css'
import { useState } from 'react'
import Icon from '../Icon'
import { assetSrc } from '../../util/assetSrc'

import {
    launchpadTabs,
    launchpadCohort,
    careersTabs,
    careersCohort,
} from './data/program_tab_data.ts'
import type { ProgramTabSectionProps } from './data/program_tab_data.ts'

const TabSection = ({
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
                            <div
                                key={tab.id}
                                className={`program-tab-container${activeTab === tab.id ? '.active' : ''}`}
                            >
                                <button
                                    className={`program-tab-btn${activeTab === tab.id ? '.active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                                {activeTab === tab.id && (
                                    <div
                                        className="tab-indicator"
                                        aria-hidden="true"
                                    >
                                        <span className="tab-dot" />
                                        <span className="tab-line" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="program-right">
                    {activeContent.image && (
                        <div className="program-tab-image">
                            <img
                                src={assetSrc(activeContent.image)}
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
        </section>
    )
}

export default TabSection
