import '../../styles/tab_section.css'
import type { SvgComponent } from 'astro/types'
import { Fragment, useState, useEffect, type ReactNode } from 'react'
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
    const [activeTab, setActiveTab] = useState(items[0].subheading) //items[0].subheading
    const activeContent =
        items.find((t) => t.subheading === activeTab) ?? items[0]

    useEffect(() => {
        console.log('activeContent')
        console.log(activeContent)
    }, [])

    return (
        <>
            {items && (
                <Fragment>
                    <div className="program-layout">
                        <div className="program-left">
                            <div className="cohort-status">
                                <h2>Next Cohort Status</h2>
                                <p className="cohort-status-subtitle font-bold">
                                    Status Subtitle
                                </p>
                                <p>Cohort status description</p>
                            </div>
                            <a href="#" className="btn btn-stroke">
                                This is a test
                                <Icon name="arrow-right" />
                            </a>

                            <nav
                                className="program-tabs-nav"
                                aria-label={`program title sections`}
                            >
                                {items.map((tab, index) => (
                                    <div
                                        key={tab.subheading}
                                        className={`program-tab-container${activeTab === tab.subheading ? '.active' : ''}`}
                                    >
                                        <button
                                            className={`program-tab-btn${activeTab === tab.subheading ? '.active' : ''}`}
                                            onClick={() =>
                                                setActiveTab(tab.subheading)
                                            }
                                        >
                                            {getHeading(tab)}
                                        </button>
                                        {activeTab === tab.subheading && (
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
                                {activeContent?.detailed_copy.map(
                                    (block, index) => {
                                        if (block.type === 'paragraph') {
                                            return (
                                                <p key={index}>{block.text}</p>
                                            )
                                        }

                                        return (
                                            <ul key={index}>
                                                {block.items.map(
                                                    (item, itemIndex) => (
                                                        <li key={itemIndex}>
                                                            <span className="font-bold">
                                                                {item.opening}:
                                                            </span>{' '}
                                                            {item.details}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </>
    )
}

export default TabSection
