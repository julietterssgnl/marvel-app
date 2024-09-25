async function getCharacters() {
    try {
        // Appel à l'API pour récupérer les données du fichier characters.json
        const response = await fetch('http://127.0.0.1:5500/src/data/characters.json');

        // Vérifie si la réponse est correcte (code de statut 200-299)
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        // Conversion de la réponse en format JSON
        const characters = await response.json();

        // Sélection de l'élément <ul> avec l'identifiant 'characters'
        const characterList = document.getElementById('characters');

        // Vider le contenu actuel de la liste pour éviter des doublons
        characterList.innerHTML = '';

        // Parcourt chaque personnage et crée un élément <li> pour l'ajouter à la liste
        characters.forEach(character => {
            const li = document.createElement('li');
            li.textContent = `${character.name}`;
            characterList.appendChild(li);
        });

        // Affichage des données dans la console pour vérification
        console.log(characters);

    } catch (error) {
        // Affiche l'erreur dans la console en cas de problème
        console.error('Erreur lors de la récupération des données :', error);
    }
}

// Appel de la fonction pour récupérer et afficher les personnages
getCharacters();
