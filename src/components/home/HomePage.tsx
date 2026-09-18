import React, { useEffect, useRef, useState } from 'react'
import '../../styles/home.css'
import Icon from '../Icon'
import backgroundCherryIcons from '../../assets/home/background-cherry-icons.svg'
import heroCommunity from '../../assets/home/hero-community.svg'
import introQuestion from '../../assets/home/intro-question.svg'
import pathCareers from '../../assets/home/path-careers.svg'
import pathLaunchpad from '../../assets/home/path-launchpad.svg'
import pathSquads from '../../assets/home/path-squads.svg'
import cherryProfileIcon from '../../assets/home/cherry-profile-icon.svg'
import supportHands from '../../assets/home/support-hands.svg'

type Asset = string | { src: string }

const assetSrc = (asset: Asset) =>
    typeof asset === 'string' ? asset : asset.src

const TABLET_BREAKPOINT = '48rem'
const DESKTOP_BREAKPOINT = '64rem'

const paths = [
    {
        title: 'Cherry Launchpad',
        copy: 'A 15-week guided intensive to tackle real-world problems in a squad format.',
        href: '/programs#cherry-launchpad',
        cta: 'Explore Launchpad',
        image: pathLaunchpad,
        alt: '',
    },
    {
        title: 'Cherry Squads',
        copy: 'Flexible, community-led projects to grow your experience and network in a relaxed space.',
        href: '/programs#cherry-squads',
        cta: 'Find Your Squad',
        image: pathSquads,
        alt: '',
    },
    {
        title: 'Cherry Careers (Coming Soon)',
        copy: 'A 6-week journey to get job-ready with resume support and community learning.',
        href: '/programs#cherry-careers',
        cta: 'Coming soon',
        image: pathCareers,
        alt: '',
    },
]

const supportItems = [
    {
        title: 'Mentoring',
        copy: 'Share your experience and insights with someone starting out. Help them stay in tech.',
    },
    {
        title: 'Volunteering',
        copy: 'Help run events, manage communications, and support our mission from behind the scenes.',
    },
    {
        title: 'Partnering',
        copy: 'Invest in the future of tech. Sponsor our programs to help gender-diverse talent thrive.',
    },
]

const testimonials = [
    {
        name: 'Yeon, Product Manager',
        programme: '(Mint Chip Mavericks)',
        quote: 'Cherry On Tech was a great program that gave me hands-on experience and the opportunity to collaborate with several amazing women in tech. It was a supportive, practical environment where I could truly learn by doing, and I really enjoyed being part of the community.',
    },
    {
        name: 'Daniela, UX Designer',
        programme: '(Rainbow Sherbet Stars)',
        quote: 'It is an experience where you not only get to develop skills on your career or area of expertise but to understand and collaborate with peers from different expertise that actually match with how a real-world tech team might be like.',
    },
    {
        name: 'Vasudha, UX Writer',
        programme: '(Comet Cruisers)',
        quote: 'The opportunity helped me get prepped with what I may face in a real-world scenario and get hands-on experience in terms of communication and collaboration within teams.',
    },
    {
        name: 'Archaa, Developer',
        programme: '(LemonZest)',
        quote: "Cherry On Tech is a unique organization filling a much-needed gap in the tech world. It gives cross-functional team experience (aka 'tech squad' experience) to women and marginalized genders looking to break into tech. Not only does this address the glaring gender disparity in tech, it also provides invaluable real-world experience to participants. Most importantly, Cherry On Tech's focus on equity and inclusion shines through in all of its elements.",
    },
    {
        name: 'Lara, Product Manager',
        programme: '(Venus Voyagers)',
        quote: "Cherry On Tech allowed me to expand my professional network as someone who is transitioning into tech. It was fantastic to learn about my teammates' areas of expertise and feel connected building something we can all be proud of by the end.",
    },
    {
        name: 'Kayla, UX Designer',
        programme: '(FigFusion)',
        quote: "Cherry On Tech was a great hands-on experience to work with a cross-functional tech squad. I'm grateful for the opportunity to learn and grow over the course of 13 weeks, and for all that our cohort accomplished together!",
    },
    {
        name: 'Neha, Product Manager',
        programme: '(MintyFresh)',
        quote: "Cherry On Tech is primarily for people that are new to the tech industry. However, as a Product Manager with 3 years of experience and looking for a new position, being on the cohort was extremely valuable to me too! I had the pleasure of working with very motivated team members that had mostly come out of bootcamps and haven't had the chance to work as a team. This cohort allowed me to both mentor and shake the cobwebs off Product Management and work on the most fun parts of being a Product Manager! The COT team also had fantastic group sessions and was inclusive in the way they always had queer/trans/poc people presenting on the technical topics and providing nuance without it feeling like tokenization. Heavily recommend for gender marginalized and overall more intentional people looking to move into tech!",
    },
]

const getVisibleSlideCount = () => {
    if (window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT})`).matches) {
        return 3
    }
    if (window.matchMedia(`(min-width: ${TABLET_BREAKPOINT})`).matches) {
        return 2
    }
    return 1
}

const HomePage = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [expandedStories, setExpandedStories] = useState<Set<number>>(
        () => new Set()
    )
    const [overflowingStories, setOverflowingStories] = useState<Set<number>>(
        () => new Set()
    )
    const [visibleSlideCount, setVisibleSlideCount] = useState(1)
    const quoteRefs = useRef<Array<HTMLParagraphElement | null>>([])
    const touchStartX = useRef(0)

    const maxIndex = Math.max(0, testimonials.length - visibleSlideCount)

    const moveToSlide = (index: number) => {
        setActiveIndex(index > maxIndex ? 0 : index < 0 ? maxIndex : index)
    }

    useEffect(() => {
        const updateVisibleSlideCount = () => {
            setVisibleSlideCount(getVisibleSlideCount())
        }

        updateVisibleSlideCount()
        window.addEventListener('resize', updateVisibleSlideCount)
        return () =>
            window.removeEventListener('resize', updateVisibleSlideCount)
    }, [])

    useEffect(() => {
        setActiveIndex((currentIndex) => {
            const nextMaxIndex = Math.max(
                0,
                testimonials.length - visibleSlideCount
            )
            return currentIndex > nextMaxIndex ? nextMaxIndex : currentIndex
        })
    }, [visibleSlideCount])

    useEffect(() => {
        const updateOverflowingStories = () => {
            const nextOverflowingStories = new Set<number>()

            quoteRefs.current.forEach((quote, index) => {
                if (!quote) return
                const card = quote.closest('.story-card')
                const wasExpanded = card?.classList.contains('is-expanded')
                if (wasExpanded) card?.classList.remove('is-expanded')

                if (quote.scrollHeight > quote.clientHeight + 1) {
                    nextOverflowingStories.add(index)
                }

                if (wasExpanded) card?.classList.add('is-expanded')
            })

            setOverflowingStories(nextOverflowingStories)
        }

        updateOverflowingStories()
        document.fonts?.ready.then(updateOverflowingStories)
        window.addEventListener('resize', updateOverflowingStories)
        return () =>
            window.removeEventListener('resize', updateOverflowingStories)
    }, [])

    const toggleStory = (index: number) => {
        setExpandedStories((currentStories) => {
            const nextStories = new Set(currentStories)
            if (nextStories.has(index)) {
                nextStories.delete(index)
            } else {
                nextStories.add(index)
            }
            return nextStories
        })
    }

    return (
        <>
            <section
                className="hero section-pink"
                aria-labelledby="home-title"
                style={
                    {
                        '--hero-cherry-icons': `url(${assetSrc(backgroundCherryIcons)})`,
                    } as React.CSSProperties
                }
            >
                <div className="home-container hero__grid">
                    <div className="hero__copy">
                        <h1 id="home-title">
                            Build Your <br className="hero__title-break" />
                            <span>Future</span> in Tech
                        </h1>
                        <p>
                            Empowering gender-diverse communities to thrive—
                            together.
                        </p>
                        <a href="#explore-your-path" className="btn btn-stroke">
                            Explore Your Path
                        </a>
                    </div>
                    <div className="hero__image">
                        <img
                            src={assetSrc(heroCommunity)}
                            alt="A group of Cherry On Tech community members cheering together"
                        />
                    </div>
                </div>
            </section>

            <section
                className="intro section-white"
                aria-labelledby="intro-title"
            >
                <div className="home-container split">
                    <div
                        className="illustration illustration--question"
                        aria-hidden="true"
                    >
                        <img src={assetSrc(introQuestion)} alt="" />
                    </div>
                    <div className="section-copy">
                        <h2 id="intro-title">What is Cherry On Tech (COT)?</h2>
                        <p>
                            We help women, non-binary, and trans folks break
                            into the industry through collaborative,
                            volunteer-led projects.
                        </p>
                        <p>
                            No fluff—just the connection and experience you need
                            to get hired.
                        </p>
                        <a href="/about" className="btn btn-stroke">
                            Meet the Bunch
                        </a>
                    </div>
                </div>
            </section>

            <section
                className="path section-pink"
                id="explore-your-path"
                aria-labelledby="path-title"
            >
                <div className="home-container">
                    <div className="section-heading">
                        <h2 id="path-title">Explore Your Path</h2>
                        <p>
                            Whether you need an intensive deep-dive or a relaxed
                            community space, there's a path designed for your
                            career stage.
                        </p>
                    </div>
                    <div className="path-grid">
                        {paths.map((item) => (
                            <a
                                className="path-card"
                                href={item.href}
                                key={item.title}
                            >
                                <span
                                    className="path-card__art"
                                    aria-hidden="true"
                                >
                                    <img
                                        src={assetSrc(item.image)}
                                        alt={item.alt}
                                    />
                                </span>
                                <span className="path-card__title">
                                    {item.title}
                                </span>
                                <span className="path-card__copy">
                                    {item.copy}
                                </span>
                                <span className="sr-only">{item.cta}</span>
                            </a>
                        ))}
                    </div>
                    <div className="path__action">
                        <a href="/programs" className="btn btn-stroke">
                            Find Your Squad
                        </a>
                    </div>
                </div>
            </section>

            <section
                className="support section-white"
                aria-labelledby="support-title"
            >
                <div className="home-container split split--support">
                    <div
                        className="illustration illustration--hands"
                        aria-hidden="true"
                    >
                        <img src={assetSrc(supportHands)} alt="" />
                    </div>
                    <div className="section-copy support-list">
                        <h2 id="support-title">Support Us By</h2>
                        {supportItems.map((item) => (
                            <article className="support-item" key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.copy}</p>
                            </article>
                        ))}
                        <a href="/get-involved" className="btn btn-stroke">
                            Become a Cherry
                        </a>
                    </div>
                </div>
            </section>

            <section
                className="stories section-pink"
                aria-labelledby="stories-title"
            >
                <div className="home-container">
                    <h2 id="stories-title">Cherry Stories</h2>
                    <div
                        className="carousel"
                        onTouchStart={(event) => {
                            touchStartX.current =
                                event.changedTouches[0].clientX
                        }}
                        onTouchEnd={(event) => {
                            const distance =
                                event.changedTouches[0].clientX -
                                touchStartX.current
                            if (Math.abs(distance) > 40) {
                                moveToSlide(
                                    activeIndex + (distance < 0 ? 1 : -1)
                                )
                            }
                        }}
                        style={
                            {
                                '--active-slide': activeIndex,
                            } as React.CSSProperties
                        }
                    >
                        <div className="carousel__viewport">
                            <div className="carousel__track">
                                {testimonials.map((story, index) => {
                                    const isExpanded =
                                        expandedStories.has(index)
                                    const quoteId = `story-${index}-quote`

                                    return (
                                        <article
                                            className={`story-card ${
                                                index === activeIndex
                                                    ? 'is-active'
                                                    : ''
                                            } ${
                                                isExpanded ? 'is-expanded' : ''
                                            }`}
                                            key={story.name}
                                        >
                                            <img
                                                className="story-card__avatar"
                                                src={assetSrc(
                                                    cherryProfileIcon
                                                )}
                                                alt=""
                                                aria-hidden="true"
                                            />
                                            <h3>{story.name}</h3>
                                            <p className="story-card__programme">
                                                {story.programme}
                                            </p>
                                            <p
                                                id={quoteId}
                                                className="story-card__quote"
                                                ref={(element) => {
                                                    quoteRefs.current[index] =
                                                        element
                                                }}
                                            >
                                                {story.quote}
                                            </p>
                                            {overflowingStories.has(index) && (
                                                <button
                                                    className="story-card__toggle"
                                                    type="button"
                                                    aria-expanded={isExpanded}
                                                    aria-controls={quoteId}
                                                    onClick={(event) => {
                                                        event.preventDefault()
                                                        toggleStory(index)
                                                    }}
                                                >
                                                    <span>
                                                        {isExpanded
                                                            ? 'Read Less'
                                                            : 'Read More'}
                                                    </span>
                                                    <span className="sr-only">
                                                        {' '}
                                                        of {story.name}'s
                                                        testimonial
                                                    </span>
                                                </button>
                                            )}
                                        </article>
                                    )
                                })}
                            </div>
                        </div>
                        <div
                            className="carousel__controls"
                            aria-label="Cherry Stories carousel controls"
                        >
                            <button
                                className="carousel__button"
                                type="button"
                                onClick={() => moveToSlide(activeIndex - 1)}
                                aria-label="Scroll testimonials backward"
                            >
                                <Icon name="arrow-left" />
                            </button>
                            <a href="/programs" className="btn btn-stroke">
                                Start Your Story
                            </a>
                            <button
                                className="carousel__button"
                                type="button"
                                onClick={() => moveToSlide(activeIndex + 1)}
                                aria-label="Scroll testimonials forward"
                            >
                                <Icon name="arrow-right" />
                            </button>
                        </div>
                        <p className="sr-only" aria-live="polite">
                            Showing story {activeIndex + 1} of{' '}
                            {testimonials.length}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
