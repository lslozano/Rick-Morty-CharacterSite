import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container fluid>
      <Row>
        <Col lg="6">
          <Link to="/">
            <img src="https://media0.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy.gif" alt="Loading information" />
          </Link>
        </Col>
        <Col lg="6">
          <h1>This dimension does not exists.</h1>
          <Link to="/">
              <Button variant="info">Back home</Button>
            </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound;