import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DigimonCard from '@/components/digimon-card';

jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => (
        <img src={src} alt={alt} width={width} height={height} />
    ),
}))

describe('DigimonCard', () => {
    const props = {
        name: 'Agumon',
        level: 'Champion',
        img: '/path/to/agumon.png',
    }

    it('renders the DigimonCard component with correct details', () => {
        render(<DigimonCard {...props} />)

        // Verify image styling
        const image = screen.getByAltText(props.name)
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', props.img)
        expect(image).toHaveAttribute('width', '400')
        expect(image).toHaveAttribute('height', '400')

        // Verify name and level
        const nameElement = screen.getByText(props.name)
        const levelElement = screen.getByText(/Level:/i)

        expect(nameElement).toBeInTheDocument()
        expect(levelElement).toBeInTheDocument()
        expect(levelElement).toHaveTextContent(`Level: ${props.level}`)
    })

    it('applies correct styles to the card elements', () => {
        render(<DigimonCard {...props} />)

        // Verify applied styles
        const cardTitle = screen.getByText(props.name)
        const cardLevel = screen.getByText(/Level:/i)

        expect(cardTitle).toHaveClass('card-title')
        expect(cardTitle).toHaveClass('mx-auto')
        expect(cardTitle).toHaveClass('text-accent')
        expect(cardTitle).toHaveClass('text-xl')

        expect(cardLevel).toHaveClass('text-center')
        expect(cardLevel).toHaveClass('text-white')
    })
})
