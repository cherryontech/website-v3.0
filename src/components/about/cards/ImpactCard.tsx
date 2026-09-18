interface ImpactCardProps {
    imageName: string
    title: string
    text: string
}

const ImpactCard = ({ imageName, title, text }: ImpactCardProps) => {
    return (
        <div className="impact-card">
            <div className="impact-card-image">
                <img src={imageName} />
            </div>
            <div className="impact-card-content">
                <div className="display-3 impact-card-title font-bold">
                    {title}
                </div>
                <h2 className="impact-card-text">{text}</h2>
            </div>
        </div>
    )
}

export default ImpactCard
