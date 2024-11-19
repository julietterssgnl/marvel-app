// FILEPATH: /c:/Users/jrossi04/marvel-app/src/pages/CharactersPage.jsx

import { NumberOfCharacters } from '../components/NumberOfCharacters'; // Chemin d'accès pour l'importation
import { useLoaderData, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

export default function CharactersPage() {
    const characters = useLoaderData(); // Assurez-vous que cette fonction soit importée correctement
    const navigate = useNavigate();

    const [sortBy, setSortBy] = useState('name');
    const [order, setOrder] = useState('asc');

    // Utilisé pour changer le titre de la page
    useEffect(() => {
        document.title = "Marvel App"; // Modification du titre de la page
    }, []);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        navigate(`/?sort=${event.target.value}&order=${order}`);
    };

    const handleOrderChange = (event) => {
        setOrder(event.target.value);
        navigate(`/?sort=${sortBy}&order=${event.target.value}`);
    };

    return (
        <div>
            <h2>Marvel Characters</h2>

            {/* Ajout de listes déroulantes pour les tris par nom et date de modification ainsi que ascending et descending */}
            <select value={sortBy} onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="modified">Modified</option>
            </select>
            <select value={order} onChange={handleOrderChange}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <a href={`/character/${character.id}`}>{character.name}</a>
                    </li>
                ))}
            </ul>
            <NumberOfCharacters characters={characters} />
        </div>
    );
}