interface JourneyCardProps {
    date: string
    title: string
    entry: string
    index: number
}

const JourneyCard = ({ date, title, entry, index }: JourneyCardProps) => {
    const isEven = () => index % 2 === 0

    return (
        <article
            className={`${isEven() ? 'timeline-item-even' : 'timeline-item-odd'}`}
        >
            <div className={`journey-card`}>
                <label className="date font-semibold">{date}</label>
                <h3 className="title">{title}</h3>
                <div className="caption entry">{entry}</div>
            </div>
        </article>
    )
}

export default JourneyCard
