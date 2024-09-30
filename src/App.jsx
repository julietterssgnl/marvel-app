import './App.css'
import { CharactersList } from './components/CharactersList';
import characters from './data/characters.json'


function App() {
  return(
    <>
    <h1>Marvel Characters</h1>
    <CharactersList characters = { characters }/>
    </>
  )
}

export default App ;