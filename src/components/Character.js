import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './HomeComponents/Footer';
import NotFound from './NotFound';
import '../styles/notfound.css';

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
  }

  if (parseInt(match.params.id) !== character.id) {
    return (
      <NotFound />
    )
  } else {
    return (
      <>
      <Card className="text-center" key={character.id}>
      <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>
            Gender: {character.gender} <br />
            Species: {character.species} <br />
            Origin: {character.origin.name} <br />
            Location: {character.location.name} <br />
            Status: {character.status}
            Number of Episodes: {character.episode.length}
          </Card.Text>
          <Button variant="primary">
            <Link to={`/characters/${character.id}`}>Details</Link>
          </Button>
        </Card.Body>
      </Card>
      <Footer />
      </>
    )
  }
}

export default Character;
