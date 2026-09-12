import '../../styles/get_involved.css'
import blueHero from '../../assets/get_involved/01_get_involved_hero.svg'
import greenMentoring from '../../assets/get_involved/02_get_involved_mentoring.svg'
import redVolunteering from '../../assets/get_involved/03_get_involved_volunteering.svg'
import purplePartnering from '../../assets/get_involved/04_get_involved_partnering.svg'
import Icon from '../Icon'

type CopyBlock =
    | {
          type: 'paragraph'
          text: string
      }
    | {
          type: 'list'
          items: string[]
      }

type GrowAction = {
    action: string
    copy_keyphrase: string
    copy_details: CopyBlock[]
    image: string
    link: string
    cta: string
}

const growActions: GrowAction[] = [
    {
        image: greenMentoring.src,
        action: 'Mentoring',
        copy_keyphrase: 'Guide the Next Wave: ',
        copy_details: [
            {
                type: 'paragraph',
                text: 'Shape the future of tech equity. Share your expertise to help new talent navigate transformative and meaningful projects, as well as career milestones. Be the mentor you wish you had.',
            },
        ],
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSecu_QLirIwBQQT1abV-dBkTXYMXeBTCqtfujrujDVKM5WAXw/viewform',
        cta: 'Become a Mentor',
    },
    {
        image: redVolunteering.src,
        action: 'Volunteering',
        copy_keyphrase: 'Build With Us: ',
        copy_details: [
            {
                type: 'paragraph',
                text: 'Join the heart of our bunch as one of our helping cherries. By organizing events and managing resources, your energy builds the community for every member to grow.',
            },
        ],
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSecu_QLirIwBQQT1abV-dBkTXYMXeBTCqtfujrujDVKM5WAXw/viewform',
        cta: 'Apply to Help',
    },
    {
        image: purplePartnering.src,
        action: 'Partnering',
        copy_keyphrase: 'Power Our Mission: ',
        copy_details: [
            {
                type: 'paragraph',
                text: 'Let’s build a future of tech that includes everyone. We love collaborating with mission-aligned partners and allies to move the needle toward true equity.',
            },
            {
                type: 'paragraph',
                text: 'Partnerships can take many forms, including:',
            },
            {
                type: 'list',
                items: [
                    'Sponsorships & mentorship support',
                    'Event co-hosting & resource sharing',
                    'Inclusion & talent initiatives',
                ],
            },
            {
                type: 'paragraph',
                text: 'However you choose to show up, your solidarity helps us open new doors.',
            },
        ],
        link: 'TBD',
        cta: 'Start a Partnership',
    },
]

const Get_Involved_Page = () => {
    return (
        <>
            <section className="hero section-pink">
                <div className="hero__container hero__grid">
                    <div className="hero__copy">
                        <h1 id="get-involved-title">
                            Your Role in <span>Tech Equity</span> Starts Here
                        </h1>
                        <p>
                            Claim your space in tech by showing up with
                            intention.
                        </p>
                        <div className="button-container">
                            <a href="#help-us-grow" className="btn btn-stroke">
                                Help Us Grow
                            </a>
                            <a
                                href="#grow-and-fuel-the-mission"
                                className="btn btn-secondary"
                            >
                                Fuel the Mission
                            </a>
                        </div>
                    </div>
                    <div className="hero__image">
                        <img
                            src={blueHero.src}
                            alt="2 people discussing an idea"
                        />
                    </div>
                </div>
            </section>

            <section id="help-us-grow" className="help-us-grow section-white">
                <div className="help-us-grow__container">
                    <h1 className="help-us-grow__title">Help Us Grow</h1>
                    {growActions.map((item) => (
                        <article className="grow-action-card">
                            <img src={item.image} />
                            <div className="grow-action-content-block">
                                <h2>{item.action}</h2>
                                <div className="action__copy">
                                    {item.copy_details.map((block, index) =>
                                        block.type === 'paragraph' ? (
                                            <p>
                                                {index === 0 && (
                                                    <b>{item.copy_keyphrase}</b>
                                                )}
                                                {index === 0 && ' '}
                                                {block.text}
                                            </p>
                                        ) : (
                                            <ul>
                                                {block.items.map(
                                                    (bulletpoint) => (
                                                        <li>{bulletpoint}</li>
                                                    )
                                                )}
                                            </ul>
                                        )
                                    )}
                                </div>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSecu_QLirIwBQQT1abV-dBkTXYMXeBTCqtfujrujDVKM5WAXw/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-stroke btn"
                                >
                                    <span>{item.cta}</span>
                                    <Icon
                                        name="arrow-right"
                                        className="btn__icon"
                                    />
                                    <span className="sr-only">
                                        (form opens in a new tab)
                                    </span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section
                id="grow-and-fuel-the-mission"
                className="grow-n-fuel section-pink"
            >
                <div className="grow-n-fuel-content-container">
                    <div>
                        <h2>Grow with Us</h2>
                        <p>
                            <b>Discover Your Path:</b> Join a squad to learn,
                            grow, and ship live projects. From cohorts to job
                            prep, you'll gain the hands-on skills and community
                            support to thrive in tech—together.
                        </p>
                        <a href="../programs" className="btn-primary btn">
                            Find Your Squad
                        </a>
                    </div>

                    <div>
                        <h2>Fuel the Mission</h2>
                        <p>
                            <b>Support Our Cherries:</b> Your contribution
                            provides the fuel they need to thrive, ensuring our
                            programs remain free and impactful for
                            underrepresented and marginalized talent.
                        </p>
                        <a
                            href="https://www.zeffy.com/en-CA/donation-form/help-underrepresented-genders-break-into-tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary btn btn-with-icon"
                        >
                            <span>Donate</span>
                            <Icon name="arrow-right" className="btn__icon" />
                            <span className="sr-only">
                                (opens in a new tab)
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Get_Involved_Page
