

import React, { useEffect } from 'react';
import { CharactersList } from '../components/CharactersList'; // Chemin d'accès pour l'importation
import { NumberOfCharacters } from '../components/NumberOfCharacters'; // Chemin d'accès pour l'importation
import characters from '../data/characters.json'; // Chemin d'accès pour l'importation des données

const CharactersPage = () => {
    // Utilisé pour changer le titre de la page
    useEffect(() => {
      document.title = "Characters | Marvel App"; // Modification du titre de la page
    }, []);
  return (
    <div>
      <h2>Marvel Characters</h2>
      <CharactersList characters={characters} />
      <NumberOfCharacters characters={characters} />
    </div>
  );
};

export default CharactersPage;
