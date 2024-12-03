import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend } from 'recharts';
import { prepareData, adaptDataForRadarChart } from "./chart-utils";

/**
 * Composant RadarChartComponent
 * @param {Object} props - Propriétés du composant
 * @param {Object} props.character1 - Données du premier personnage
 * @param {Object} props.character2 - Données du deuxième personnage
 * @returns {JSX.Element|null}
 */
const RadarChartComponent = ({ character1, character2 }) => {
    // Vérifie si les personnages et leurs capacités sont définis
    if (!character1?.capacities || !character2?.capacities) {
        return <p>Les données des personnages sont insuffisantes.</p>; // Affiche un message si les données sont manquantes
    }

    // Prépare les données pour le radar
    const data = [
        { subject: 'Force', A: character1.capacities.force, B: character2.capacities.force },
        { subject: 'Intelligence', A: character1.capacities.intelligence, B: character2.capacities.intelligence },
        { subject: 'Energy', A: character1.capacities.energy, B: character2.capacities.energy },
        { subject: 'Speed', A: character1.capacities.speed, B: character2.capacities.speed },
        { subject: 'Durability', A: character1.capacities.durability, B: character2.capacities.durability },
        { subject: 'Fighting', A: character1.capacities.fighting, B: character2.capacities.fighting },
    ];

    // Affichage du RadarChart
    return (
        <RadarChart outerRadius={90} width={500} height={400} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar
                name={character1.name}
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.7}
            />
            <Radar
                name={character2.name}
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.7}
            />
            <Legend />
        </RadarChart>
    );
};
export default RadarChartComponent;