// FILEPATH: /c:/Users/jrossi04/marvel-app/src/pages/CharactersPage.jsx

import { NumberOfCharacters } from '../components/NumberOfCharacters'; // Chemin d'accès pour l'importation
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

export default function CharactersPage() {
    const characters = useLoaderData(); // Assurez-vous que cette fonction soit importée correctement
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const sortByParam = searchParams.get('sort');
    const orderParam = searchParams.get('order');

    const [sortBy, setSortBy] = useState(sortByParam);
    const [order, setOrder] = useState(orderParam);

    // Utilisé pour changer le titre de la page
    useEffect(() => {
        document.title = "Marvel App"; // Modification du titre de la page
    }, []);

    // Mettre à jour les états locaux lorsque les paramètres de l'URL changent
    useEffect(() => {
        setSortBy(sortByParam);
        setOrder(orderParam);
    }, [sortByParam, orderParam]);

    const handleSortChange = (event) => {
        const newSortBy = event.target.value;
        setSortBy(newSortBy);
        setSearchParams({ sort: newSortBy, order });
    };

    const handleOrderChange = (event) => {
        const newOrder = event.target.value;
        setOrder(newOrder);
        setSearchParams({ sort: sortBy, order: newOrder });
    };

    return (
        <div>
            <h2>Marvel Characters</h2>

            {/* Ajout de listes déroulantes pour les tris par nom et date de modification ainsi que ascending et descending */}
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={sortBy} onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="modified">Modified</option>
            </select>
            <label htmlFor="order">Order:</label>
            <select id="order" value={order} onChange={handleOrderChange}>
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