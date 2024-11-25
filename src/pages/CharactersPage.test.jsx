import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CharactersPage from './CharactersPage';
import { BrowserRouter } from 'react-router-dom';

const characters = [
    {
        id: "1",
        name: "Thor",
    },
    {
        id: "2",
        name: "Captain America",
    },
];

// Mock de la fonction useLoaderData pour simuler les données chargées
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'), // Utilisation réelle pour les parties non-mockées
    useLoaderData: () => {
        return characters;
    },
}));

describe('CharactersPage Component', () => {
    test('renders CharactersPage component correctly', () => {
        // Render du composant
        render(<CharactersPage />, { wrapper: BrowserRouter });

        // Vérification du titre de la page
        expect(document.title).toBe('Marvel App');

        // Vérification de la présence du titre "Marvel Characters"
        const h2Element = screen.getByRole('heading', { level: 2, name: 'Marvel Characters' });
        expect(h2Element).toBeInTheDocument();

        // Vérification de la présence des personnages dans la liste
        characters.forEach((character) => {
            const characterElement = screen.getByText(character.name);
            expect(characterElement).toBeInTheDocument();
        });

        
    });

    test('updates sort and order parameters when dropdowns are changed', () => {
        // Render du composant
        render(<CharactersPage />, { wrapper: BrowserRouter });

        // Vérification initiale des valeurs des listes déroulantes
        const sortSelect = screen.getByLabelText('Sort by:');
        expect(sortSelect).toHaveValue('name'); // Valeur par défaut : 'name'

        const orderSelect = screen.getByLabelText('Order:');
        expect(orderSelect).toHaveValue('asc'); // Valeur par défaut : 'asc'

        // Simulation du changement de tri
        fireEvent.change(sortSelect, { target: { value: 'modified' } });
        expect(sortSelect.value).toBe('modified'); // Nouvelle valeur : 'modified'

        // Simulation du changement d'ordre
        fireEvent.change(orderSelect, { target: { value: 'desc' } });
        expect(orderSelect.value).toBe('desc'); // Nouvelle valeur : 'desc'
    });
});
