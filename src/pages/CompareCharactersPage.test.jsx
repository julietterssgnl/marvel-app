import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CompareCharactersPage from './CompareCharactersPage';
import charactersData from '../data/characters.json';

// Mock RadarChart to simplify the test
jest.mock('../components/MyRadarChart', () => ({ character1, character2 }) => (
    <div data-testid="radar-chart">
        <p>{character1.name} vs {character2.name}</p>
    </div>
));

describe('CompareCharactersPage', () => {
    beforeEach(() => {
        document.title = ''; // Reset document title before each test
    });

    it('renders CompareCharactersPage component with default settings', () => {
        // Render the component
        render(<CompareCharactersPage />);

        // Check the document title
        expect(document.title).toBe('Compare | Marvel App');

        // Check the dropdowns are rendered
        const dropdowns = screen.getAllByRole('combobox');
        expect(dropdowns).toHaveLength(2);

        // Verify both dropdowns contain character options
        charactersData.forEach((character) => {
            expect(screen.getAllByText(character.name).length).toBeGreaterThan(0);
        });

        // Verify the radar chart is displayed with the default characters
        const radarChart = screen.getByTestId('radar-chart');
        expect(radarChart).toHaveTextContent(
            `${charactersData[0].name} vs ${charactersData[1].name}`
        );
    });

    it('updates radar chart when dropdown selections change', () => {
        // Render the component
        render(<CompareCharactersPage />);

        const dropdowns = screen.getAllByRole('combobox');
        const firstDropdown = dropdowns[0];
        const secondDropdown = dropdowns[1];

        // Change the first dropdown selection
        fireEvent.change(firstDropdown, { target: { value: '2' } }); // Select third character
        let radarChart = screen.getByTestId('radar-chart');
        expect(radarChart).toHaveTextContent(
            `${charactersData[2].name} vs ${charactersData[1].name}`
        );

        // Change the second dropdown selection
        fireEvent.change(secondDropdown, { target: { value: '3' } }); // Select fourth character
        radarChart = screen.getByTestId('radar-chart');
        expect(radarChart).toHaveTextContent(
            `${charactersData[2].name} vs ${charactersData[3].name}`
        );
    });

    it('renders the correct styles and structure', () => {
        render(<CompareCharactersPage />);
        const h2 = screen.getByRole('heading', { level: 2, name: 'Compare characters' });
        const radarChart = screen.getByTestId('radar-chart');
        expect(radarChart).toBeInTheDocument();;
    });
});
