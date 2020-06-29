import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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

  if (characters.length < 5 ) {
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
      <Container fluid id="featured">
        <section>
          <h2>Featured</h2>
          <Carousel>
            <Carousel.Item>
              <Link to={`/characters/${characters[0].id}`}>
                <img className="d-block w-50" src={characters[0].image} alt="Rick Sánchez" />
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Link to={`/characters/${characters[1].id}`}>
                <img className="d-block w-50" src={characters[1].image} alt="Morty Smith" />
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Link to={`/characters/${characters[2].id}`}>
                <img className="d-block w-50" src={characters[2].image} alt="Summer Smith" />
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Link to={`/characters/${characters[3].id}`}>
                <img className="d-block w-50" src={characters[3].image} alt="Beth Smith" />
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Link to={`/characters/${characters[4].id}`}>
                <img className="d-block w-50" src={characters[4].image} alt="Jerry Smith" />
              </Link>
            </Carousel.Item>
          </Carousel>
        </section>
      </Container>
    )
  }
}

export default Featured

/*
            <Carousel.Item>
              <Link to={`/characters/${characters[1].id}`}>
                <img src={characters[1].image} alt="Morty Smith" />
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Link to={`/characters/${characters[2].id}`}>
                <img src={characters[2].image} alt="Summer Smith" />
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Link to={`/characters/${characters[3].id}`}>
                <img src={characters[3].image} alt="Beth Smith" />
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Link to={`/characters/${characters[4].id}`}>
                <img src={characters[4].image} alt="Jerry Smith" />
              </Link>
            </Carousel.Item>
*/