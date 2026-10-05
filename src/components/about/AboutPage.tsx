import '../../styles/about/about.css'
import '../../styles/about/journey-section.css'
import aboutHero from '../../assets/about/illustrations/01_about - hero.svg'
import aboutFoundation from '../../assets/about/illustrations/02_about - our foundation.svg'

import JourneyCard from './cards/JourneyCard'
import MemberCard from './cards/MemberCard'
import ImpactCard from './cards/ImpactCard'

import { impactCardData, journeyCardData, memberCardData } from './data/data'

import VolunteerSection from './VolunteerSection'
import SponsorList from './SponsorList'

type Asset = string | { src: string }

const assetSrc = (asset: Asset) =>
    typeof asset === 'string' ? asset : asset.src

const AboutPage = () => {
    return (
        <>
            <section className="section-intro">
                <div className="intro-details">
                    <div>
                        <div className="display-1 font-geologica font-bold">
                            The <span className="word-highlight">Spark</span>{' '}
                            Behind the Movement
                        </div>
                        <h1 className="font-normal">
                            Building a tech industry that looks like the real
                            world.
                        </h1>
                    </div>
                    <a href="#" className="btn btn-stroke">
                        Meet the Bunch
                    </a>
                </div>
                <div>
                    <img src={assetSrc(aboutHero)} alt="" />
                </div>
            </section>
            <section className="section-foundation">
                <img
                    className="foundaton-image"
                    src={assetSrc(aboutFoundation)}
                    alt=""
                />
                <div className="foundation-content">
                    <h1 className="title">Our Foundation</h1>
                    <div className="subsection-content">
                        <h2 className="subsection-title">Vision</h2>
                        <p>
                            A tech industry where every voice is valued and
                            empowered to lead. We envision a future where
                            underrepresented talent shapes innovation and drives
                            meaningful change across the global tech landscape.
                        </p>
                    </div>
                    <hr className="impact-header" />
                    <div className="subsection-content">
                        <h2 className="subsection-title">Mission</h2>
                        <p>
                            To empower women, non-binary, and trans individuals
                            through the power of the tech squad. We provide the
                            hands-on experience and mentorship needed to build
                            confidence, launch careers, and create lasting
                            professional networks.
                        </p>
                    </div>
                    <hr className="impact-header" />
                    <div className="subsection-content">
                        <h2 className="subsection-title">Values</h2>
                        <ul>
                            <li>
                                <span className="font-bold">
                                    Community First:
                                </span>{' '}
                                We rise by lifting each other up.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Collaboration Over Competition:
                                </span>{' '}
                                We grow faster and better, together.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Equity in Action:
                                </span>{' '}
                                Centring the voices historically excluded from
                                tech.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Reliable Accountability:
                                </span>{' '}
                                We show up for our squads and ourselves.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Learn by Doing:
                                </span>{' '}
                                Real-world experience is a right, not a
                                privilege.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section-impact">
                <div className="impact-content">
                    <h1>Impact in Action</h1>
                    <p>
                        When marginalized genders collaborate, the results are
                        powerful.
                    </p>
                </div>
                <div className="card-list">
                    {impactCardData.map((card) => (
                        <ImpactCard
                            imageName={card.imageName}
                            title={card.title}
                            text={card.text}
                        />
                    ))}
                </div>
            </section>
            <section className="section-journey">
                <h1>Our Journey Highlights</h1>
                <div>
                    <div className="journey-card-list">
                        {journeyCardData.map((card, index) => (
                            <>
                                <div className="journey-card-list-item">
                                    <JourneyCard
                                        date={card.date}
                                        title={card.title}
                                        entry={card.entry}
                                        index={index}
                                    />
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section-sponsors">
                <div className="sponsor-display">
                    <div className="sponsor-display-title display-3 font-bold">
                        With Gratitude to Our Cherry Supporters
                    </div>
                    <div>
                        <SponsorList />
                    </div>
                </div>
                <div className="sponsor-text">
                    <div className="text-container">
                        <h1 className="sponsor-text-title">
                            Support the Cherries
                        </h1>
                        <p>
                            Our community runs on collective energy—including
                            yours. Whether you give time, tools, or funding, you
                            help keep our programs free and accessible. Let’s
                            work together to make the tech industry a whole lot
                            sweeter.
                        </p>
                    </div>
                    <a href="#" className="btn btn-stroke">
                        Help us Grow
                    </a>
                </div>
            </section>
            <section className="section-directors">
                <div className="display-3 section-title font-bold">
                    Meet the Bunch
                </div>
                <div className="director-content">
                    <div className="section-text">
                        <h1>The Core Bunch</h1>
                        <p>
                            The leadership team behind our community, programs,
                            and vision.
                        </p>
                    </div>
                    <div className="member-list">
                        {memberCardData.map((card) => (
                            <MemberCard
                                imageName={card.imageName}
                                name={card.name}
                                jobTitle={card.jobTitle}
                                pronouns={card.pronouns}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <VolunteerSection />
        </>
    )
}

export default AboutPage
