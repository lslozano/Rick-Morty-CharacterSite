import React, {useState, useEffect} from 'react';

// useState - Holds the information we are getting from an API. 
// useEffect - Runs that fetch call when our component mounts.
function Character({ match }) {
  useEffect(() => {
    fetchCharacter()
  }, []);
  // The brackets mean that it is only going to run when the component mounts.

  // Creates a state to save our character.
  const [character, setCharacter] = useState([{}])

  const fetchCharacter = async () => {
    const fetchCharacter = await fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`)
    const character = await fetchCharacter.json()
    setCharacter(character)
    console.log(character)
  }

  return (
    <div>
      <h1>Character page</h1>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name}/>
    </div>
  );
}

export default Character;
