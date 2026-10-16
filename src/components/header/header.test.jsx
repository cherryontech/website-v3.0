import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../header/Header'

describe('Header component - basic rendering test group', () => {
    test('renders the logo image in desktop and mobile with alt text', () => {
        render(<Header />)

        // get all by role for th accessible name aka the alt text - get all because there are two logo imports for desktop and mobile - returns array - use regex for case insensitivity
        const logoImages = screen.getAllByRole('img', {
            name: /cherry on tech home/i,
        })

        // check there are two rendering
        expect(logoImages).toHaveLength(2)

        // check that both are in the document + that they have an href for home
        logoImages.forEach((logo) => {
            expect(logo).toBeInTheDocument()

            // check the link wrapping the image tis correct
            expect(logo.closest('a')).toHaveAttribute('href', '/')
        })
    })

    // basic nav links
    test('renders nav links with correct href attributes', () => {
        render(<Header />)

        // usee array of objects to loop and check that two links exist - use exact matching to avoid logo link being included here for home
        const navLinks = [
            { name: /^home$/i, href: '/' },
            { name: /about/i, href: '/about' },
            { name: /programs/i, href: '/programs' },
            { name: /get involved/i, href: '/get-involved' },
        ]

        // check for each
        navLinks.forEach(({ name, href }) => {
            // get the full array - get all by role
            const links = screen.getAllByRole('link', { name })

            expect(links).toHaveLength(2)

            // cheeck that each one to have the right attribute href
            expect(links[0]).toHaveAttribute('href', href)
            expect(links[1]).toHaveAttribute('href', href)
        })
    })

    // connect with us moves to footer
    test('connect with us button moves to page footer', () => {
        render(<Header />)

        // get all instance of the button in desktop and mobile menu - gives array
        const connectButtons = screen.getAllByRole('link', {
            name: /connect with u/i,
        })

        // do both exist
        expect(connectButtons).toHaveLength(2)

        // for each - check that the href i #footer
        connectButtons.forEach((button) => {
            expect(button).toHaveAttribute('href', '#footer')
        })
    })

    // get fresh news button - opens in a new tab
    test('get fresh news button opens in a new tab', () => {
        render(<Header />)

        // arr of links with this name
        const newsletterLinks = screen.getAllByRole('link', {
            name: /get fresh news/i,
        })

        // expect it in both desktop and mobile
        expect(newsletterLinks).toHaveLength(2)

        // check each link - mobile/desktop
        newsletterLinks.forEach((link) => {
            // check the correct link
            expect(link).toHaveAttribute(
                'href',
                'https://www.linkedin.com/newsletters/cherryontech-newsletter-7164685602104225792'
            )

            // check that it opens in a new tab with _blank
            expect(link).toHaveAttribute('target', '_blank')

            // check that it is safely opening a link w JS - safeguard
            expect(link).toHaveAttribute('rel', 'noopener noreferrer')
        })
    })
})

describe('Header component - mobile nav interaction patterns', () => {
    // get the hamburger menu and assign it before every subsequent test
    let hamburgerButton

    beforeEach(() => {
        render(<Header />)

        hamburgerButton = screen.getByRole('button', {
            name: /open navigation menu/i,
        })
    })
    // check for the right mobile nav aria attributes
    test('hamburger nav button toggles mobile menu and activates ARIA', () => {
        // default check it should be false for aria-expanded
        expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false')

        // FIRE EVENTS - needs to be in this exact order to simulate open first then close to check properly in an oderly fashion
        // check for when the menu is open - aria-label says 'close nav menu'
        fireEvent.click(hamburgerButton)
        expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true')

        expect(
            screen.getByRole('button', { name: /close navigation menu/i })
        ).toBeInTheDocument()

        // check for when the menu is closed - aria-label says 'open nav menu'
        fireEvent.click(hamburgerButton)
        expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false')

        expect(
            screen.getByRole('button', { name: /open navigation menu/i })
        ).toBeInTheDocument()
    })

    // check that clicking a link in mobile nav closes the menu
    test('clicking a mobile nav link closes the mobile menu', () => {
        // open the menu
        fireEvent.click(hamburgerButton)
        expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true')

        // use any link as example that it will close - mobile link is index 1 bc it comes after in the code
        const mobileAboutLink = screen.getAllByRole('link', {
            name: 'About',
        })[1]

        // simulate clicking about link
        fireEvent.click(mobileAboutLink)

        // check that the menu closes
        expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false')
    })

    // check that clicking a CTA in mobile nav closes the menu
    test('clicking a mobile nav CTA closes the mobile menu', () => {
        // open the menu
        fireEvent.click(hamburgerButton)
        expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true')

        // use any link as example that it will close - mobile link is index 1 bc it comes after in the code
        const mobileCTALink = screen.getAllByRole('link', {
            name: 'Connect with Us',
        })[1]

        // simulate clicking about link
        fireEvent.click(mobileCTALink)

        // check that the menu closes
        expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false')
    })

    // check that the overlay closes when you click outside the mobile menu space
    test('clicking the page overlay closes the mobile menu', () => {
        // open the menu and check it's aria-expanded = true
        fireEvent.click(hamburgerButton)
        expect(hamburgerButton).toHaveAttribute('aria-expanded', 'true')

        // take the overlay - it's fixed
        const overlay = document.querySelector('.page-overlay')

        // simulate clicking overlay to close the menu
        fireEvent.click(overlay)

        // check that menu is closed
        expect(hamburgerButton).toHaveAttribute('aria-expanded', 'false')
    })

    // mobile nav accessibility attributes - aria
    test('the mobile menu toggles the correct aria-hidden attributes', () => {
        const mobileMenu = document.querySelector('.mobile-menu')

        // default close state should have hidden true
        expect(mobileMenu).toHaveAttribute('aria-hidden', 'true')

        // simulate opening the menu
        fireEvent.click(hamburgerButton)

        // should have aria-hidden false now
        expect(mobileMenu).toHaveAttribute('aria-hidden', 'false')
    })
})
