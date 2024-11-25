// FILEPATH: /c:/Users/jrossi04/marvel-app/src/routes.jsx

import { getCharacters, getCharacterById } from './api/characters-api';
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import ContactPage from "./pages/ContactPage";
import CharacterDetailPage from "./pages/CharacterDetailPage"; // Assurez-vous d'importer votre composant

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <CharactersPage />,
                loader: async ({ request }) => {
                    const url = new URL(request.url);
                    const sortBy = url.searchParams.get('sort') || 'name';
                    const order = url.searchParams.get('order') || 'asc';
                    const characters = await getCharacters(sortBy, order);
                    return characters;
                }
            },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
            {
                path: "/character/:id", // Route pour afficher les détails d'un personnage
                element: <CharacterDetailPage />,
                loader: async ({ params }) => {
                    const character = await getCharacterById(params.id); // Appel direct à getCharacterById
                    if (!character) {
                        throw new Response("Character not found", { status: 404 });
                    }
                    return character;
                },
            },
        ],
    },
];

export default routes;