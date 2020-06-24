import React, {useState, useEffect} from 'react';
import { Container, Carousel } from 'react-bootstrap';
import '../../styles/featured.css';

function Featured() {
  useEffect(() => {
    fetchCharacters()
  }, []);

  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character/')

    const characters = await data.json()
    console.log(characters.results)
    setCharacters(characters.results)
  }

  if (characters.length < 20 ) {
    return (
      <Container fluid>
        <section className="loading">
          <h1>Loading...</h1>
          <img src="https://media0.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt="Loading information" />
        </section>
      </Container>
    )
  } else {
    return (
      <Container fluid>
        <section className="loading">
          <h1>Featured Characters</h1>
          <img src="https://media0.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt="Loading information" />
        </section>
      </Container>
    )
  }
}

export default Featured

/*


      <Carousel>
        <Carousel.Item>
          <img src="https://media0.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt="Loading information" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://media0.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt="Loading information" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


*/