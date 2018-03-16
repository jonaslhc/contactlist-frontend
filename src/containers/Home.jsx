import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import ContactBar from '../components/ContactBar';
import ContactDetail from '../components/ContactDetail';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <ContactBar />
          </Col>
          <Col xs="9">
            <ContactDetail />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
