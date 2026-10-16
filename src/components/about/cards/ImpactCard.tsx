import { cn } from '../../../util/cn'

interface ImpactCardProps {
    imageName: string
    title: string
    text: string
    titleSize: string
}

//heading 3 for mobile and tablet
//heading 2 for desktop

//Display 3 for first two cards on desktop
//Display 2 for first two cards on desktop
//Display 1 for infinity symbol, regardless of screen size

const ImpactCard = ({ imageName, title, text, titleSize }: ImpactCardProps) => {
    return (
        <div className="impact-card">
            <div className="impact-card-image">
                <img src={imageName} alt="" />
            </div>
            <div className="impact-card-content">
                <div
                    className={`${titleSize === `large` ? cn(`impact-card-title`, `large`) : `impact-card-title`}`}
                >
                    {title}
                </div>
                <h3 className="impact-card-text">{text}</h3>
            </div>
        </div>
    )
}

export default ImpactCard
