import { Fragment, useState, type ReactNode } from 'react'
import DropdownIcon from './DropdownIcon'

type DropdownListProps<T> = {
    items: T[]
    getHeading: (item: T) => ReactNode
    renderContent: (item: T) => ReactNode
    getKey?: (item: T, index: number) => string | number

    classNames: {
        block: string
        heading: string
        copy: string
    }
}

export default function DropdownList<T>({
    items,
    getHeading,
    renderContent,
    getKey,
    classNames,
}: DropdownListProps<T>) {
    const [expandedBlocks, setExpandedBlocks] = useState<(string | number)[]>(
        [0] // set the first accordion content to be expanded by default upon entering the page
    )

    return (
        <>
            {items.map((item, index) => {
                const key = getKey ? getKey(item, index) : index
                const dropdownBlockId = `dropdown-block-${key}`
                const isExpanded = expandedBlocks.includes(key)
                const isLastBlock = index === items.length - 1

                return (
                    <Fragment key={key}>
                        <div className={classNames.block}>
                            <div className={classNames.heading}>
                                <h2>{getHeading(item)}</h2>

                                <button
                                    type="button"
                                    className="dropdown-button"
                                    onClick={() => {
                                        setExpandedBlocks((prev) =>
                                            prev.includes(key)
                                                ? prev.filter((i) => i !== key)
                                                : [...prev, key]
                                        )
                                    }}
                                    aria-expanded={isExpanded}
                                    aria-controls={dropdownBlockId}
                                    aria-label={
                                        isExpanded
                                            ? `Collapse ${getHeading(item)} section`
                                            : `Expand ${getHeading(item)} section`
                                    }
                                >
                                    <DropdownIcon />
                                </button>
                            </div>

                            <div
                                id={dropdownBlockId}
                                className={classNames.copy}
                                hidden={!isExpanded}
                            >
                                {renderContent(item)}
                            </div>
                        </div>

                        {!isLastBlock && <hr />}
                    </Fragment>
                )
            })}
        </>
    )
}
