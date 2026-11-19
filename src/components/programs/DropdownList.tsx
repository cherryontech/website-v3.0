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
        []
    )

    return (
        <>
            {items.map((item, index) => {
                const key = getKey ? getKey(item, index) : index
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
                                    aria-label={
                                        isExpanded
                                            ? 'Collapse section'
                                            : 'Expand section'
                                    }
                                >
                                    <DropdownIcon />
                                </button>
                            </div>

                            {isExpanded && (
                                <div className={classNames.copy}>
                                    {renderContent(item)}
                                </div>
                            )}
                        </div>

                        {!isLastBlock && <hr />}
                    </Fragment>
                )
            })}
        </>
    )
}
