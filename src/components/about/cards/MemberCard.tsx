interface MemberCardProps {
    imageName: string
    name: string
    jobTitle: string
    pronouns: string
}

const MemberCard = ({
    imageName,
    name,
    jobTitle,
    pronouns,
}: MemberCardProps) => {
    return (
        <div className="member-card">
            <div className="member-card-image">
                <img src={imageName} />
            </div>
            <div className="member-card-text">
                <h2 className="name">{name}</h2>
                <h4 className="job-title">{jobTitle}</h4>
                <div className="pronouns">{pronouns}</div>
                <a href="#" className="btn btn-primary">
                    {name}'s LinkedIn
                </a>
            </div>
        </div>
    )
}

export default MemberCard
