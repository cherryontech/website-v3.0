interface JourneyCardProps {
    date: string
    title: string
    entry: string
}

const JourneyCard = ({ date, title, entry }: JourneyCardProps) => {
    return (
        <div className="journey-card">
            <label className="date">{date}</label>
            <h3 className="title">{title}</h3>
            <caption className="entry">{entry}</caption>
        </div>
    )
}

export default JourneyCard
