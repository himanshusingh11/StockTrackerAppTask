// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', marginTop: '20px', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2023 Stock Platform | Credits: Himanshu | Email: hshimanshusingh001@gmail.com | Phone: +91 9760813196</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
