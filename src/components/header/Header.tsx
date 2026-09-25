import React, { useEffect, useRef, useState } from 'react'
import '../../styles/header.css'
import Icon from '../Icon'
import logo from '../../assets/cherry_on_tech.svg'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const headerRef = useRef<HTMLElement>(null)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    useEffect(() => {
        let previousScrollY = window.scrollY

        const updateHeaderVisibility = () => {
            const currentScrollY = Math.max(window.scrollY, 0)
            const headerHeight = headerRef.current?.offsetHeight ?? 0

            if (isMobileMenuOpen || currentScrollY <= headerHeight) {
                setIsHeaderVisible(true)
            } else if (currentScrollY < previousScrollY) {
                setIsHeaderVisible(true)
            } else if (currentScrollY > previousScrollY) {
                setIsHeaderVisible(false)
            }

            previousScrollY = currentScrollY
        }

        window.addEventListener('scroll', updateHeaderVisibility, {
            passive: true,
        })
        return () =>
            window.removeEventListener('scroll', updateHeaderVisibility)
    }, [isMobileMenuOpen])

    return (
        <header
            ref={headerRef}
            className={`header ${isHeaderVisible ? '' : 'header--hidden'}`}
        >
            <div className="header-container">
                <a href="/">
                    <img
                        src={logo.src ?? logo}
                        alt="Cherry On Tech home"
                        className="logo"
                    />
                </a>

                <button
                    className="hamburger-button"
                    onClick={toggleMobileMenu}
                    aria-label={
                        isMobileMenuOpen
                            ? 'Close navigation menu'
                            : 'Open navigation menu'
                    }
                    aria-expanded={isMobileMenuOpen}
                >
                    <Icon
                        name={isMobileMenuOpen ? 'close' : 'menu'}
                        className="btn__icon"
                    />
                </button>

                <nav className="desktop-nav">
                    <ul className="nav-list">
                        <li>
                            <a href="/" className="subheading">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="subheading">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/programs" className="subheading">
                                Programs
                            </a>
                        </li>
                        <li>
                            <a href="/get-involved" className="subheading">
                                Get Involved
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="desktop-button-container">
                    <a href="#footer" className="btn-stroke btn">
                        Connect with Us
                    </a>
                    <a
                        href="https://www.linkedin.com/newsletters/cherryontech-newsletter-7164685602104225792"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary btn btn-with-icon"
                    >
                        <span>Get Fresh News</span>
                        <Icon name="arrow-right" className="btn__icon" />
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                </div>

                <div
                    className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
                >
                    <div className="mobile-menu-container">
                        <a href="/">
                            <img
                                src={logo.src ?? logo}
                                alt="Cherry On Tech home"
                                className="logo"
                            />
                        </a>
                        {/* <nav className="mobile-nav"> */}
                        <ul className="mobile-nav-list">
                            <li>
                                <a
                                    href="/"
                                    className="subheading"
                                    onClick={toggleMobileMenu}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="subheading"
                                    onClick={toggleMobileMenu}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/programs"
                                    className="subheading"
                                    onClick={toggleMobileMenu}
                                >
                                    Programs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/get-involved"
                                    className="subheading"
                                    onClick={toggleMobileMenu}
                                >
                                    Get Involved
                                </a>
                            </li>
                        </ul>
                        <div className="mobile-button-container">
                            <a
                                href="#footer"
                                className="btn-stroke btn"
                                onClick={toggleMobileMenu}
                            >
                                Connect with Us
                            </a>
                            <a
                                href="https://www.linkedin.com/newsletters/cherryontech-newsletter-7164685602104225792"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary btn btn-with-icon"
                                onClick={toggleMobileMenu}
                            >
                                <span>Get Fresh News</span>
                                <Icon
                                    name="arrow-right"
                                    className="btn__icon"
                                />
                                <span className="sr-only">
                                    (opens in a new tab)
                                </span>
                            </a>
                        </div>
                        {/* </nav> */}
                    </div>
                </div>
            </div>

            <div
                className={`page-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
            ></div>
        </header>
    )
}

export default Header
