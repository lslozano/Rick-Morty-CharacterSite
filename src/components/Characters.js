import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

// useState - Holds the information we are getting from an API. 
// useEffect - Runs that fetch call when our component mounts.

function Characters() {
  useEffect(() => {
    fetchCharacters()
  }, []);
  // The brackets mean that it is only going to run when the component mounts.

  // Creates a state to save our characters.
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character/')

    const characters = await data.json()
    console.log(characters.results)
    setCharacters(characters.results)
  }

  return (
    <div>
      <h1>Characters Page</h1>
      {characters.map(character => (
        <h4 key={character.id}>
          <Link to={`/characters/${character.id}`}>{character.name}</Link>
        </h4>
      ))}
    </div>
  );
}

export default Characters;
