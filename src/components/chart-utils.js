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

/**
 * Adapte les données pour le RadarChart à partir de données transformées.
 * @param {Array} data - Les données préparées par `prepareData`.
 * @param {string} key - Le préfixe de la clé pour identifier chaque personnage (ex: "A", "B").
 * @returns {Array} - Tableau d'objets adapté pour le RadarChart.
 */
export function adaptDataForRadarChart(data = [], key = 'A') {
    return data.map((item) => ({
        subject: item.name,
        [key]: item.value,
    }));
}
