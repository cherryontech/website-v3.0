interface JourneyCardProps {
    date: string
    title: string
    entry: string
    index: number
}

const JourneyCard = ({ date, title, entry, index }: JourneyCardProps) => {
    const isEven = () => index % 2 === 0

    return (
        <div
            className={`journey-card ${isEven() ? 'timeline-item-even' : 'timeline-item-odd'}`}
        >
            <label className="date">{date}</label>
            <h3 className="title">{title}</h3>
            <caption className="entry">{entry}</caption>
        </div>
    )
}

export default JourneyCard
