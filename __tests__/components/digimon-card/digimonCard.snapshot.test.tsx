import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DigimonCard from '@/components/digimon-card';

jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => (
        <img src={src} alt={alt} width={width} height={height} />
    ),
}))

describe('DigimonCard Snapshots', () => {
    const props = {
        name: 'Agumon',
        level: 'Champion',
        img: '/path/to/agumon.png',
    }

    it('matches the snapshot', () => {
        const { asFragment } = render(<DigimonCard {...props} />)
        expect(asFragment()).toMatchSnapshot()
    })
})
