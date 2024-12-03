import React from 'react';
import { getCharacters } from '../api/characters-api';
import MyRadarChart from '../components/MyRadarChart';
const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    // Charger les personnages triés par ordre alphabétique
    const characters = getCharacters('name', 'asc');

    // transform the characters to array of label/value objects
    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    // set the default options to the first two characters
    const [option1, setOption1] = React.useState(options[0]);
    const [option2, setOption2] = React.useState(options[1]);

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
                <select
                    data-testid='select-character-1'
                    value={option1.value}
                    onChange={(event) => setOption1(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    data-testid='select-character-2'
                    value={option2.value}
                    onChange={(event) => setOption2(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>

            <p style={centerStyle}>
                <MyRadarChart
                    character1={characters[option1.value]}
                    character2={characters[option2.value]}
                />            </p>
        </>
    );
};

export default CompareCharactersPage;