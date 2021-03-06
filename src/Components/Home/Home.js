import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalendarComponent from './CalendarComponent';
import UserInfo from './UserInfo';
import AdvisorInfo from './AdvisorInfo';

function Home() {

  return (
    <div className="Home">
      
    <Container>
      <Row>
        <Col>
          <UserInfo />
        </Col>
 
        <Col xs={6}>
          <CalendarComponent />
        </Col>
        <Col>
          <AdvisorInfo />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;
