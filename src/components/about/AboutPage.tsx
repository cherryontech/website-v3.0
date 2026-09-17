import '../../styles/about.css'
import aboutHero from '../../assets/about/illustrations/01_about - hero.svg'
import aboutFoundation from '../../assets/about/illustrations/02_about - our foundation.svg'
import redCard from '../../assets/about/illustrations/03_about - impact in action - projects.svg'
import purpleCard from '../../assets/about/illustrations/04_about - impact in action - collaborators.svg'
import greenCard from '../../assets/about/illustrations/05_about - impact in action - network.svg'

import julieth from '../../assets/about/team-photos/01_about - core bunch - julieth.svg'
import allie from '../../assets/about/team-photos/02_about - core bunch - allie.svg'
import aiden from '../../assets/about/team-photos/03_about - core bunch - aiden.svg'

import JourneyCard from './cards/JourneyCard'
import MemberCard from './cards/MemberCard'
import ImpactCard from './cards/ImpactCard'

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
                    <ImpactCard
                        imageName={assetSrc(redCard)}
                        title={'20+'}
                        text={'Projects Launched'}
                    />
                    <ImpactCard
                        imageName={assetSrc(purpleCard)}
                        title={'160+'}
                        text={'Collaborators Connected'}
                    />
                    <ImpactCard
                        imageName={assetSrc(greenCard)}
                        title={'∞'}
                        text={'A Global Ally Network'}
                    />
                </div>
            </section>
            <section className="section-highlights">
                <h1>Our Journey Highlights</h1>
                <div>
                    <JourneyCard
                        date={'July 2020'}
                        title={'Our Concept is Born'}
                        entry={`Launching our very first squad as a proof of
                            concept. Successfully validating that a
                            collaborative, peer-led environment helps
                            marginalized genders thrive.`}
                    />
                    <div className="journey-card">
                        <label className="date">Spring 2023</label>
                        <h3 className="title">1st Cohort Launch</h3>
                        <caption className="entry">
                            We officially scale the squad model, opening doors
                            for hands-on, project-based learning and peer
                            mentorship.
                        </caption>
                    </div>
                    <div className="journey-card">
                        <label className="date">Fall 2023</label>
                        <h3 className="title">2nd Cohort Launch</h3>
                        <caption className="entry">
                            Our cherry bunch expands as more squads launch and
                            our first wave of helping cherries join—bringing in
                            new mentors and a community-building team.
                        </caption>
                    </div>
                    <div className="journey-card">
                        <label className="date">Spring 2024</label>
                        <h3 className="title">3rd Cohort Launch</h3>
                        <caption className="entry">
                            Another group of tech squads begins, continuing to
                            build, learn, and connect across a growing global
                            network.
                        </caption>
                    </div>
                    <div className="journey-card">
                        <label className="date">Fall 2024</label>
                        <h3 className="title">Official Non-Profit</h3>
                        <caption className="entry">
                            We become a registered Canadian non-profit,
                            introducing a refreshed brand that reflects our
                            bold, inclusive direction.
                        </caption>
                    </div>
                    <div className="journey-card">
                        <label className="date">Fall 2025</label>
                        <h3 className="title">4th Cohort Launch</h3>
                        <caption className="entry">
                            Our momentum keeps building as a fresh group of tech
                            squads takes flight to collaborate, design, and grow
                            together.
                        </caption>
                    </div>
                    <div className="journey-card">
                        <label className="date">Spring 2026</label>
                        <h3 className="title">Anchoring Our Roots</h3>
                        <caption className="entry">
                            Building our new website and strengthening our
                            commitment to accessibility, community experience,
                            and purpose-driven design.
                        </caption>
                    </div>
                    <div className="journey-card">
                        <label className="date">Fall 2026</label>
                        <h3 className="title">5th Cohort Launch</h3>
                        <caption className="entry">
                            The momentum continues. Our next wave of tech squads
                            begins with fresh projects, new mentors, and endless
                            possibilities.
                        </caption>
                    </div>
                    <div className="journey-card">
                        <label className="date">Spring 2027</label>
                        <h3 className="title">Cherry Careers Launch</h3>
                        <caption className="entry">
                            We roll out tailored career support, featuring mock
                            interviews, portfolio reviews, and targeted
                            networking to navigate the job market with
                            confidence.
                        </caption>
                    </div>
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
                <div className="display-3">Meet the Bunch</div>
                <div className="director-content">
                    <h1>The Core Bunch</h1>
                    <p>
                        The leadership team behind our community, programs, and
                        vision.
                    </p>
                    <div className="member-list">
                        <MemberCard
                            imageName={assetSrc(julieth)}
                            name="Julieth Fajardo"
                            jobTitle={'Co-Executive Director'}
                            pronouns={'She/Her'}
                        />
                        <MemberCard
                            imageName={assetSrc(allie)}
                            name="Allie Quintano"
                            jobTitle={'Co-Executive Director'}
                            pronouns={'She/Her'}
                        />
                        <MemberCard
                            imageName={assetSrc(aiden)}
                            name="Aiden Hirshfield"
                            jobTitle={'Fundraiser & Grant Director'}
                            pronouns={'He/They'}
                        />
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
