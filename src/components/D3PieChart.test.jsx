import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import D3PieChart from './D3PieChart';
import { prepareData } from './chart-utils';

// Mock the prepareData function
jest.mock('./chart-utils', () => ({
    prepareData: jest.fn(),
}));

describe('D3PieChart', () => {
    const data = [
        { name: 'Force', value: 8 },
        { name: 'Intelligence', value: 7 },
        { name: 'Energy', value: 9 },
        { name: 'Speed', value: 6 },
        { name: 'Durability', value: 5 },
        { name: 'Fighting', value: 10 },
    ];

    beforeEach(() => {
        prepareData.mockReturnValue(data);
    });

    test('renders D3PieChart with label and value', () => {
        render(<D3PieChart data={data} />);

        screen.debug();

        expect(document.getElementById('pie-container')).toBeInTheDocument();

        // Check if the data is displayed
        data.forEach((item) => {
            const nameLabel = screen.getByText(item.name);
            expect(nameLabel).toBeInTheDocument();
            const valueLabel = screen.getByText(item.value);
            expect(valueLabel).toBeInTheDocument();
        });
    });
});
