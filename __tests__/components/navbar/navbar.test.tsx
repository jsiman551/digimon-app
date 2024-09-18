import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/navbar';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

describe('Navbar', () => {
    const push = jest.fn();

    beforeEach(() => {
        // mock useRouter behavior
        (useRouter as jest.Mock).mockReturnValue({
            push,
        });
    });

    it('renders the Navbar component correctly', () => {
        render(<Navbar />);

        // Verify if logo is there
        const logo = screen.getByAltText('Digimon Wiki Logo');
        expect(logo).toBeInTheDocument();

        // verify if search button is there
        const searchButton = screen.getByRole('button');
        expect(searchButton).toBeInTheDocument();
    });

    it('renders the input for search when not searching by level', () => {
        render(<Navbar />);

        // verify if search input is renderized
        const searchInput = screen.getByPlaceholderText('Buscar');
        expect(searchInput).toBeInTheDocument();
    });

    it('renders the digimon level selector', () => {
        render(<Navbar />);
    });
});
