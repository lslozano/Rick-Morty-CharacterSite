import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, Col, Row } from 'react-bootstrap';
import '../../styles/banner.css';

function Banner() {
  return (
    <section>
      <Container fluid id="banner">
        <Row className="banner-row">
          <Col className="cta" xs={12} md={6}>
            <h1 className="big-heading">All Rick and Morty characters in one place!</h1>
            <Link to="/characters">
              <Button variant="dark">Search characters</Button>
            </Link>
          </Col>
          <Col xs={12} md={6}>
            <img className="rick-morty-logo" src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="Rick and Morty Logo" />        
          </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Banner