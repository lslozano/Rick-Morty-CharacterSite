import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/notfound.css';

function NotFound() {
  return (
    <Container fluid id="notfound">
      <section>
      <Row>
        <Col lg="6">
          <Link to="/">
            <img src="https://media0.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt="Loading information" />
          </Link>
        </Col>
        <Col lg="6" className="">
          <h1>There is nothing here.</h1>
          <Link to="/">
              <Button variant="info">Back home</Button>
            </Link>
        </Col>
      </Row>
      </section>
    </Container>
  )
}

export default NotFound;