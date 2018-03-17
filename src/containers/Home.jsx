import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import ContactBar from '../components/ContactBar';
import ContactDetail from '../components/ContactDetail';

import '../styles/home.css';

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
          <Col className="home-col" xs="3">
            <ContactBar history={this.props.history} />
          </Col>
          <Col className="home-col" xs="9">
            <ContactDetail />
          </Col>
        </Row>
      </Container>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Home;
