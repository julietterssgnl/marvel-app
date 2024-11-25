// fonction getCharacters qui retourne la liste des personnages avec un tri par ordre alphabétique ou date de modification en récupérant les données du fichier characters.json
// fonction getCharacterById qui retourne un personnage en fonction de son id en récupérant les données du fichier characters.json

import characters from '../data/characters.json';

// Fonction pour retourner la liste des personnages avec un tri par ordre alphabétique ou date de modification avec gestion des valeurs par defaut
// Les valeurs par défaut sont name et asc
/**
 * @param {string} sortBy - The field to sort by
 * @param {string} order - The order to sort by
 * @returns {Object} The list of characters sorted
 */
export const getCharacters = (sortBy = 'name', order = 'asc') => {
    const sortedCharacters = characters.sort((a, b) => {
        if (order === 'asc') {
            return a[sortBy] > b[sortBy] ? 1 : -1;
        }
        return a[sortBy] < b[sortBy] ? 1 : -1;
    });
    return sortedCharacters;
}




/**
 * Get a character by id
 * @param {number} id - The id of the character
 * @returns {Object} The character with the provided id
 */

export const getCharacterById = (id) => {
    const character = characters.find((character) => character.id === id);
    if (!character) {
        throw new Error(`Character with id ${id} not found`);
    }
    return character;
}