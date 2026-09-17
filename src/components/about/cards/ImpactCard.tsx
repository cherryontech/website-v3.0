interface ImpactCardProps {
    imageName: string
    title: string
    text: string
}

const ImpactCard = ({ imageName, title, text }: ImpactCardProps) => {
    return (
        <div className="impact-card">
            <img src={imageName} />
            <div className="display-3 impact-card-title">{title}</div>
            <h2 className="impact-card-text">{text}</h2>
        </div>
    )
}

export default ImpactCard
