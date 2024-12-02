import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import { CharacterModifiedDate } from './CharacterModifiedDate';  // Import de la fonction de formatage

const character = {
    name: "Thor",
    description: "God of Thunder",
    thumbnail: {
        path: "https://example.com/thor",
        extension: "jpg"
    },
    modified: "2021-09-01T00:00:00Z"  // Date en format ISO 8601
};

describe('CharacterDetail component', () => {
    test('renders character image, description and formatted modification date', () => {
        render(<CharacterDetail character={character} />);

        // Vérification de l'image
        const imageElement = screen.getByAltText(character.name);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', `${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`);

        // Vérification de la description
        const descriptionElement = screen.getByText(character.description);
        expect(descriptionElement).toBeInTheDocument();

        // Vérification de la date modifiée formatée
        const formattedDate = CharacterModifiedDate({ modified: character.modified });
        const modifiedElement = screen.getByText(formattedDate);
        expect(modifiedElement).toBeInTheDocument();
    });

    test('renders default description when no description is available', () => {
        const characterWithoutDescription = { ...character, description: null };
        render(<CharacterDetail character={characterWithoutDescription} />);
        const defaultDescriptionElement = screen.getByText("No description available.");
        expect(defaultDescriptionElement).toBeInTheDocument();
    });

    test('renders default modification date when no modification date is available', () => {
        const characterWithoutModified = { ...character, modified: null };
        render(<CharacterDetail character={characterWithoutModified} />);
        const defaultModifiedElement = screen.getByText("No modification date available.");
        expect(defaultModifiedElement).toBeInTheDocument();
    });
});
