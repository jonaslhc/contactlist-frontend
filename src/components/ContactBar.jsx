import React, { Component } from 'react';
import { Container, InputGroup, Input } from 'reactstrap';
import ContactCard from '../components/ContactCard';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import '../styles/contactBars.css';

export const contactListQuery = gql`
  query contactListQuery {
    Contact {
      contactId
      firstname
      lastname
      address
      phone
      email
    }
  }
`;

class ContactBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.renderContacts = this.renderContacts.bind(this);
  }

  renderContacts(data) {
    // return (
    if (data.loading) {
        return <p>Loading ...</p>;
      }
    if (data.error) {
      return <p>{data.error.message}</p>;
    }

    return (
      <div className="contacts-list">
        {data.Contact.map(contact => (
          <div key={contact.contactId} className="contact">
            {contact.firstname}
            {contact.lastname}
            {contact.phone}
            {contact.address}
          </div>))
        }
      </div>
    );
    // };
    // );
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
        {/* <ContactCard /> */}
        {this.renderContacts(this.props.data)}
      </Container>
    );
  }
}

export default graphql(contactListQuery)(ContactBar);
