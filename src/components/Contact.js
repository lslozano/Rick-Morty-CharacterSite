import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './HomeComponents/Footer';
import '../styles/contact.css';

function Contact() {
  return (
    <section id="contact">
    <Container fluid>
      <Row>
        <Col className="profile-img" xs={12} md={6}>
          <img src="https://res.cloudinary.com/lsastral/image/upload/v1593539151/Luis/profile_bzxmp7.png" alt="Luis Profile"/>
        </Col>
        <Col className="profile-info" xs={12} md={6}>
          <p>Hi! My name is Luis and I'm a Web Developer.</p>
          <p>My field of abilities can be resumed within the MERN stack. My goal is to specialize on Front-end and become a Jamstack developer.</p>
          <p>If you want to know more about me, you can visit my minimalistic online resume here.</p>
          <p>For any inquiries about this site or job opportunities, contact me at:</p>
          <a href="https://www.linkedin.com/in/lslozano/" rel="noopener noreferrer" target="_blank">linkedin.com/in/lslozano/</a>
        </Col>
      </Row>
    </Container>
    <Footer />
    </section>
  )
}

export default Contact