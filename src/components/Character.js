import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './HomeComponents/Footer';
import NotFound from './NotFound';
import '../styles/character.css';
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
      <section id="character">
        <Container fluid>
          <Row>
            <Col className="character-img" xs={12} md={6}>
              <img src={character.image} alt={character.name} />        
            </Col>
            <Col className="character-info" xs={12} md={6}>
              <h1>{character.name}</h1>
              <p>Gender: {character.gender}</p><br />
              <p>Species: {character.species}</p> <br />
              <p>Origin: {character.origin.name}</p> <br />
              <p>Location: {character.location.name}</p> <br />
              <p>Status: {character.status}</p> <br />
              <p>Number of Episodes: {character.episode.length}</p>
              <Link to="/characters">
                <Button variant="info">Back characters</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Footer />
    </section>
    )
  }
}

export default Character;
