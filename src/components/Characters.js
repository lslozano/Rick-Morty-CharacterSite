import React, {useState, useEffect} from 'react';
import Footer from './HomeComponents/Footer';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../styles/character.css';
//import '../styles/footer.css';

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

  if (characters.length < 20 ) {
    return (
      <Container fluid className="loading">
        <section>
          <h1>Loading...</h1>
          <img src="https://media0.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt="Loading information" />
        </section>
      </Container>
    )
  } else {
    return (
      <div id="characters">
      <h1>Characters</h1>
      <Container fluid>
        <Row>
          {characters.map(character => (
            <Col md="6" lg="4" xl="3">
              <Card className="text-center" key={character.id}>
              <Card.Img variant="top" src={character.image} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>
                    Gender: {character.gender} <br />
                    Species: {character.species} <br />
                    Origin: {character.origin.name} <br />
                    Status: {character.status}
                  </Card.Text>
                  <Button variant="primary">
                    <Link to={`/characters/${character.id}`}>Details</Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
    )
  }
}

export default Characters;
