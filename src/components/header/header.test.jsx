import { render, screen } from '@testing-library/react'
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
        // explicitly check each one individually
        expect(logoImages[0]).toBeInTheDocument()
        expect(logoImages[1]).toBeInTheDocument()
    })

    test('renders nav links with correct href attributes', () => {})
})
