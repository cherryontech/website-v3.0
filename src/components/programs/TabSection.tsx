import '../../styles/tab_section.css'
import type { SvgComponent } from 'astro/types'
import { Fragment, useState, type ReactNode } from 'react'
import Icon from '../Icon'
import { assetSrc } from '../../util/assetSrc'

import type { ProgramTabSectionProps } from './data/program_tab_data.ts'

type DropdownListProps<T> = {
    items: T[]
    getHeading: (item: T) => ReactNode
    renderContent: (item: T) => ReactNode
    getKey?: (item: T, index: number) => string | number
    tabImage?: (item: T) => (SvgComponent & ImageMetadata) | undefined
}

function TabSection<T>({
    items,
    getHeading,
    renderContent,
    getKey,
    tabImage,
}: DropdownListProps<T>) {
    return (
        <>
            <div>test</div>
        </>
    )
}
/*const TabSection = ({
    items,
    getHeading,
    renderContent,
    getKey,
    tabImage,
}: DropdownListProps<T>) => {
    const [activeTab, setActiveTab] = useState(items[0].id) //items[0].subheading

    const activeContent = items.find((t) => t.id === activeTab) ?? items[0]

    const handleAccordionToggle = (id: string) => {
        setActiveTab((prev) => (prev === id ? '' : id))
    }

    return (
        <>
            <h1 className="program-section-title display-2 font-bold">
                program title
            </h1>

            <div className="program-layout">
                <div className="program-left">
                    <div className="cohort-status">
                        <h2>Next Cohort Status</h2>
                        <p className="cohort-status-subtitle font-bold">
                            Status Subtitle
                        </p>
                        <p>Cohort status description</p>
                        
                        <ul>
                            {cohortStatus.bullets.map((b, i) => (
                                <li key={i}>
                                    <span className="font-bold">
                                        {b.label}:
                                    </span>{' '}
                                    b.text
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
                        aria-label={`program title sections`}
                    >
                        {items.map((tab, index) => (
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
                        <h2>{activeContent.subheading}</h2>
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
        </>
    )
}*/

export default TabSection
