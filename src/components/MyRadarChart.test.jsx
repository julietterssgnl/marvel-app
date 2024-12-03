import React from 'react';
import { render } from '@testing-library/react';
import MyRadarChart from './MyRadarChart';


describe('RadarChart', () => {
    const character1 = {
        name: 'Character 1',
        capacities: {
            strength: 8,
            speed: 7,
            intelligence: 9,
        },
    };

    const character2 = {
        name: 'Character 2',
        capacities: {
            strength: 6,
            speed: 8,
            intelligence: 7,
        },
    };

    it('renders PolarGrid component when both characters are provided', () => {
        const { container } = render(<MyRadarChart character1={character1} character2={character2} />);
        const polarGrid = container.querySelector('svg');  // Vous pouvez ajuster ce sélecteur en fonction de l'élément rendu
        expect(polarGrid).toBeTruthy();  // Vérifie que l'élément est bien rendu
    });

    it('returns null when either character1 or character2 is missing', () => {
        const { container } = render(<MyRadarChart character1={null} character2={character2} />);
        // Vérifie qu'aucun élément n'est rendu
        expect(container.firstChild).toBeNull();  // Vérifie que le premier enfant du conteneur est null
        
        const { container: container2 } = render(<MyRadarChart character1={character1} character2={null} />);
        expect(container2.firstChild).toBeNull();  // Vérifie que le premier enfant du conteneur est null
    });
});
