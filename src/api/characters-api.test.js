// FILEPATH: /c:/Users/jrossi04/marvel-app/src/api/characters-api.test.js

import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

describe('getCharacters', () => {
    it('should return characters sorted by name in ascending order by default', () => {
        const sortedCharacters = getCharacters();
        const expectedCharacters = characters.slice().sort((a, b) => a.name.localeCompare(b.name));
        expect(sortedCharacters).toEqual(expectedCharacters);
    });

    it('should return characters sorted by name in descending order', () => {
        const sortedCharacters = getCharacters('name', 'desc');
        const expectedCharacters = characters.slice().sort((a, b) => b.name.localeCompare(a.name));
        expect(sortedCharacters).toEqual(expectedCharacters);
    });

    it('should return characters sorted by modified date in ascending order', () => {
        const sortedCharacters = getCharacters('modified', 'asc');
        const expectedCharacters = characters.slice().sort((a, b) => new Date(a.modified) - new Date(b.modified));
        expect(sortedCharacters).toEqual(expectedCharacters);
    });

    it('should return characters sorted by modified date in descending order', () => {
        const sortedCharacters = getCharacters('modified', 'desc');
        const expectedCharacters = characters.slice().sort((a, b) => new Date(b.modified) - new Date(a.modified));
        expect(sortedCharacters).toEqual(expectedCharacters);
    });
});

describe('getCharacterById', () => {
    it('should return the character with the provided id', () => {
        const character = getCharacterById("1009175"); // Assurez-vous que l'ID 1 existe dans votre fichier characters.json
        const expectedCharacter = characters.find((char) => char.id === "1009175");
        expect(character).toEqual(expectedCharacter);
    });

    it('should throw an error if the character with the provided id does not exist', () => {
        expect(() => getCharacterById(9999)).toThrow('Character with id 9999 not found'); // Assurez-vous que l'ID 9999 n'existe pas dans votre fichier characters.json
    });
});