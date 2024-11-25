// chart-utils.js

/**
 * Prépare les données pour le graphique.
 * @param {Object} data - Les données à transformer.
 * @returns {Array} - Tableau d'objets transformés.
 */
export function prepareData (data = {})  {
    const transformData = [
        { name: 'Force', value: data?.force },
        { name: 'Intelligence', value: data?.intelligence },
        { name: 'Energy', value: data?.energy },
        { name: 'Speed', value: data?.speed },
        { name: 'Durability', value: data?.durability },
        { name: 'Fighting', value: data?.fighting }
    ];

    // Supprime les éléments avec des valeurs undefined
    return transformData.filter((element) => element.value !== undefined);
};