import '../../styles/programs.css'
import bluePathHero from '../../assets/programs/01_programs_hero.svg'
import Icon from '../Icon'

const Programs_Page = () => {
    return (
        <>
            <section className="hero section-pink">
                <div className="hero_container hero_grid">
                    <div className="hero_copy">
                        <h1 id="hero-title">
                            Choose <span>Your Path</span> To Growth
                        </h1>
                        <p>
                            From design and development foundations to
                            field-ready experience, find your best fit.
                        </p>
                        <div className="button-container">
                            <a
                                href="#cherry-launchpad"
                                className="btn btn-stroke"
                            >
                                Cherry Launchpad
                            </a>
                            <a
                                href="#cherry-squads"
                                className="btn btn-secondary"
                            >
                                Cherry Squads
                            </a>
                            <a
                                href="#cherry-careers"
                                className="btn btn-secondary"
                            >
                                Cherry Careers
                            </a>
                        </div>
                    </div>
                    <div className="hero__image">
                        <img
                            src={bluePathHero.src}
                            alt="3 people walking on a path going up"
                        />
                    </div>
                </div>
            </section>

            <section className="section-white">
                <div>[...2nd-4th sections go here...]</div>
            </section>

            <section className="section-still-have-qs section-pink">
                <div className="shq-content-block">
                    <h1>Still Have Questions?</h1>
                    <p>
                        Reach out to us at{' '}
                        <a href="mailto:programs@cherryontech.org">
                            programs@cherryontech.org
                        </a>{' '}
                        for any program questions.
                        <br></br>
                        <br></br>
                        Get to know us and find your path in tech. Join our
                        upcoming events to hear directly from alumni and mentors
                        about the cherry experience.
                    </p>
                    <a
                        href="https://www.linkedin.com/newsletters/cherryontech-newsletter-7164685602104225792"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-stroke btn"
                    >
                        <span>Follow the Bunch</span>
                        <Icon name="arrow-right" className="btn__icon" />
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Programs_Page
