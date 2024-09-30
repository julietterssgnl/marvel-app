
export function CharactersList({characters =[]}){
    return (
      <ul id = "characters">
      {characters.map((character) => (
        <li key = {character.id}>
            <h2>{character.name}</h2>
        </li>
      ))}
      </ul>
    )
  }