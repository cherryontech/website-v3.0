interface MemberCardProps {
    imageName: string
    firstName: string
    lastName: string
    jobTitle: string
    pronouns: string
    linkedIn: string
}

const MemberCard = ({
    imageName,
    firstName,
    lastName,
    jobTitle,
    pronouns,
    linkedIn,
}: MemberCardProps) => {
    return (
        <div className="member-card">
            <div className="member-card-image">
                <img
                    src={imageName}
                    alt={`Image of ${firstName} ${lastName}`}
                />
            </div>
            <div className="member-card-text">
                <h2 className="name">
                    {firstName} {lastName}
                </h2>
                <h4 className="job-title">{jobTitle}</h4>
                <div className="pronouns">{pronouns}</div>
            </div>
            <a
                href={`${linkedIn}`}
                className="btn btn-primary"
                target="_blank"
                aria-label="(opens a new tab)"
            >
                {firstName}'s LinkedIn
            </a>
        </div>
    )
}

export default MemberCard
