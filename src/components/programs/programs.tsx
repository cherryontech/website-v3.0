import '../../styles/programs.css'
// import bluePathHero from '../../assets/programs/01_programs_hero.svg'
import squadChat from '../../assets/programs/06_programs_squads.svg'
import Icon from '../Icon'
import { useState } from 'react'

type CopyBlock =
    | {
          type: 'paragraph'
          text: string
      }
    | {
          type: 'list'
          items: { [opening: string]: string }[]
      }

type SquadContent = {
    subheading: string
    detailed_copy: CopyBlock[]
}

const cherrySquadContent: SquadContent[] = [
    {
        subheading: 'Program Purpose',
        detailed_copy: [
            {
                type: 'paragraph',
                text: 'A community-driven space built to provide continuous, flexible project experience. Cherry Squads exists to give emerging tech talent a collaborative sandbox to maintain momentum, refine cross-functional skills, and build live software at their own pace.',
            },
        ],
    },
    {
        subheading: 'Reasons to Join',
        detailed_copy: [
            {
                type: 'list',
                items: [
                    {
                        opening: 'Stay Connected & Keep Building: ',
                        details:
                            'Remain active in an encouraging, peer-led tech network where you can keep your skills sharp and stay accountable between roles.',
                    },
                    {
                        opening: 'Flexible Career Momentum: ',
                        details:
                            'Gain practical skills and project leadership on a schedule that fits your bandwidth between roles or alongside other work/study commitments.',
                    },
                    {
                        opening: 'Cross-Functional Teamwork: ',
                        details:
                            'Collaborate directly with developers, product managers, and UX designers/writers in a real agile environment—turning networking into active co-creation.',
                    },
                    {
                        opening: 'Expand Your Portfolio: ',
                        details:
                            'Pitch your own project idea to find collaborators within the community. Turn community collaboration into tangible proof of your skills by shipping production-ready applications that strengthen your portfolio and resume.',
                    },
                ],
            },
        ],
    },
    {
        subheading: 'Who It’s For',
        detailed_copy: [
            {
                type: 'paragraph',
                text: 'Designed for developers, product managers, and UX designers/writers looking for an active, collaborative network to build with. While Cherry Launchpad graduates receive priority placement because of their shared baseline, Squads is open to anyone looking for a supportive tech community. Applications outside of Launchpad are warmly welcomed onto our waitlist, with new members placed as spots open throughout the year.',
            },
        ],
    },
    {
        subheading: 'How It Works',
        detailed_copy: [
            {
                type: 'list',
                items: [
                    {
                        opening: 'Step 1 – Match: ',
                        details:
                            'Step into our community space, browse open projects, and find a squad that aligns with your product goals.',
                    },
                    {
                        opening: 'Step 2 – Build: ',
                        details:
                            'Sync with your cross-functional team to collaborate, manage a backlog, and solve real-world problems.',
                    },
                    {
                        opening: 'Step 3 – Ship: ',
                        details:
                            'Deploy live projects to production, adding verifiable, collaborative team experience to your resume.',
                    },
                ],
            },
        ],
    },
]

const Programs_Page = () => {
    return (
        <>
            {/* <section className="hero section-pink">
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
                <div>[...2nd section go here...]</div>
            </section> */}

            <section className="cherry-squads section-pink">
                <h2 className="cherry-squads__title display-2">
                    Cherry Squads
                </h2>
                <img
                    className="cherry-squad__image"
                    src={squadChat.src}
                    alt=""
                />
                <div className="cherry-squad__content">
                    {cherrySquadContent.map((element, index) => {
                        const [expandedBlocks, setExpandedBlocks] = useState<
                            number[]
                        >([])
                        const isExpanded = expandedBlocks.includes(index)

                        return (
                            <>
                                <div className="cs-content-block" key={index}>
                                    <div className="cs-heading">
                                        <h2>{element.subheading}</h2>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setExpandedBlocks((prev) =>
                                                    prev.includes(index)
                                                        ? prev.filter(
                                                              (i) => i !== index
                                                          )
                                                        : [...prev, index]
                                                )
                                            }}
                                            aria-expanded={isExpanded}
                                            aria-label={
                                                isExpanded
                                                    ? 'Collapse section'
                                                    : 'Expand section'
                                            }
                                        >
                                            {isExpanded ? '⌄' : '⌃'}
                                        </button>
                                    </div>

                                    {isExpanded && (
                                        <div className="cs-copy">
                                            {element.detailed_copy.map(
                                                (block, blockIndex) => (
                                                    <div key={blockIndex}>
                                                        {block.type ===
                                                        'paragraph' ? (
                                                            <p>{block.text}</p>
                                                        ) : (
                                                            <ul>
                                                                {block.items.map(
                                                                    (
                                                                        bulletpoint,
                                                                        i
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                i
                                                                            }
                                                                        >
                                                                            <b>
                                                                                {
                                                                                    bulletpoint.opening
                                                                                }
                                                                            </b>
                                                                            {
                                                                                bulletpoint.details
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                                {index !== cherrySquadContent.length - 1 && (
                                    <hr />
                                )}
                            </>
                        )
                    })}
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-stroke btn"
                    >
                        <span>Join Our Waitlist</span>
                        <Icon name="arrow-right" className="btn__icon" />
                        <span className="sr-only">
                            (form opens in a new tab)
                        </span>
                    </a>
                </div>
            </section>

            {/* <section className="section-white">
                <div>[...4th section go here...]</div>
            </section>

            <section className="section-still-have-qs section-pink">
                <div className="shq-content-block">
                    <h1>Still Have Questions?</h1>
                    <p>
                        Reach out to us at{' '}
                        <a
                            className="email"
                            href="mailto:programs@cherryontech.org"
                        >
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
            </section> */}
        </>
    )
}

export default Programs_Page
