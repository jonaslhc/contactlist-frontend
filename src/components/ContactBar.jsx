import React, { Component } from 'react';
import { Container, InputGroup, Input } from 'reactstrap';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectContact } from '../actions';
import '../styles/contactBars.css';

const mapStateToProps = state => ({
  selectedId: state.id,
});

const mapDispatchToProps = dispatch => ({
  selectContact: contact => { dispatch(selectContact(contact)); },
});

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
    if (data.loading || data.error) {
      return data.loading ? <p>Loading ...</p> : <p>{data.error.message}</p>;
    }

    return (
      <div className="contacts-list">
        {data.Contact.map(contact => (
          <div key={contact.contactId} className="contact" onClick={() => { this.props.selectContact(contact); }}>
            <span>{contact.lastname}, {contact.firstname}</span>
          </div>))
        }
      </div>
    );
  }

  render() {
    return (
      <Container className="searchbar-container">
        <div className="search-container">
          <h5>All Contacts</h5>
          <InputGroup>
            <Input className="search-contact-input" placeholder="Search" />
          </InputGroup>
        </div>
        {this.renderContacts(this.props.data)}
      </Container>
    );
  }
}

ContactBar.defaultProps = {
  data: {},
};

ContactBar.propType = {
  data: PropTypes.object,
  selectedId: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(graphql(contactListQuery)(ContactBar));
// export default connect(mapStateToProps)(graphql(contactListQuery)(ContactBar));
