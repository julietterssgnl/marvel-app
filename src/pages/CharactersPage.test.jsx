import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CharactersPage from './CharactersPage';
import { BrowserRouter } from 'react-router-dom';
import { CharacterModifiedDate } from '../components/CharacterModifiedDate'; // Si nécessaire

const characters = [
    {
        id: "1",
        name: "Thor",
        modified: "2023-12-01T10:00:00Z",  // Date de modification valide
    },
    {
        id: "2",
        name: "Captain America",
        modified: "2023-11-01T15:30:00Z",  // Date de modification valide
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

            // Vérification de la présence de la balise <strong> pour le nom
            const strongElement = screen.getByText(character.name).closest('strong');
            expect(strongElement).toBeInTheDocument(); // Vérifie si la balise <strong> est présente

            // Vérification de la présence de la balise <a> pour le lien
            const linkElement = screen.getByText(character.name).closest('a');
            expect(linkElement).toBeInTheDocument(); // Vérifie si la balise <a> est présente
            expect(linkElement).toHaveAttribute('href', `/character/${character.id}`); // Vérifie que le lien contient le bon href

            // Vérification de la présence de la balise <small> pour la date de modification
            const smallElement = screen.getByText(CharacterModifiedDate({ modified: character.modified }));
            expect(smallElement).toBeInTheDocument(); // Vérifie si la balise <small> est présente
        });
    });

    test('updates sort and order parameters when dropdowns are changed', () => {
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
