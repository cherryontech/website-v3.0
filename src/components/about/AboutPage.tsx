import '../../styles/about.css'
import aboutHero from '../../assets/about/illustrations/01_about - hero.svg'
import aboutFoundation from '../../assets/about/illustrations/02_about - our foundation.svg'

import JourneyCard from './cards/JourneyCard'
import MemberCard from './cards/MemberCard'
import ImpactCard from './cards/ImpactCard'

import { impactCardData, journeyCardData, memberCardData } from './data/data'

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
                            The Spark Behind the Movement
                        </div>
                        <h1 className="font-normal">
                            Building a tech industry that looks like the real
                            world.
                        </h1>
                    </div>
                    <a href="#" className="btn btn-stroke">
                        Help us Grow
                    </a>
                </div>
                <div>
                    <img src={assetSrc(aboutHero)} />
                </div>
            </section>
            <section className="section-foundation">
                <img src={assetSrc(aboutFoundation)} />
                <div className="foundation-content">
                    <h1>Our Foundation</h1>
                    <div>
                        <h2>Vision</h2>
                        <p>
                            A tech industry where every voice is valued and
                            empowered to lead. We envision a future where
                            underrepresented talent shapes innovation and drives
                            meaningful change across the global tech landscape.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h2>Mission</h2>
                        <p>
                            To empower women, non-binary, and trans individuals
                            through the power of the tech squad. We provide the
                            hands-on experience and mentorship needed to build
                            confidence, launch careers, and create lasting
                            professional networks.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h2>Values</h2>
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
            <section className="section-highlights">
                <h1>Our Journey Highlights</h1>
                <div className="journey-card-list">
                    {journeyCardData.map((card) => (
                        <JourneyCard
                            date={card.date}
                            title={card.title}
                            entry={card.entry}
                        />
                    ))}
                </div>
            </section>
            <section className="section-sponsors">
                <div>
                    <div className="display-3">
                        With Gratitude to Our Cherry Supporters
                    </div>
                </div>
                <div>
                    <h1>Support the Cherries</h1>
                    <p>
                        Our community runs on collective energy—including yours.
                        Whether you give time, tools, or funding, you help keep
                        our programs free and accessible. Let’s work together to
                        make the tech industry a whole lot sweeter.
                    </p>
                    <a href="#" className="btn btn-stroke">
                        Help us Grow
                    </a>
                </div>
            </section>
            <section className="section-directors">
                <div className="display-3 font-bold">Meet the Bunch</div>
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
            <section className="section-volunteers">
                <div>
                    <h1>Our Helping Cherries</h1>
                    <p>
                        Cherry On Tech is powered by an incredible, rotating
                        squad of mentors and community members who dedicate
                        their time to building together. Whether sharing
                        industry expertise or helping behind the scenes, every
                        contributor keeps our ecosystem growing.
                    </p>
                </div>
                <div>
                    <h2>The Community Squad</h2>
                </div>
                <div>
                    <h2>Guest Cherries</h2>
                </div>
            </section>
        </>
    )
}

export default AboutPage
