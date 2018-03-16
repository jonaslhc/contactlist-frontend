import React, { Component } from 'react';
import { Container, InputGroup, Input } from 'reactstrap';
import ContactCard from '../components/ContactCard';

import '../styles/contactBars.css';

class ContactBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Container className="searchbar-container">
        <div className="search-container">
          <h5>All Contacts</h5>
          <InputGroup>
            <Input placeholder="Search" />
          </InputGroup>
        </div>
        <ContactCard />
      </Container>
    );
  }
}

export default ContactBar;
