import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Navbar from '@/components/navbar'

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}))

describe('Navbar Snapshot', () => {
    it('matches the snapshot', () => {
        // render component
        const { asFragment } = render(<Navbar />)

        // saved snapshot must match with rendered snapshot
        expect(asFragment()).toMatchSnapshot()
    })
})
