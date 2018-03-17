import React, { Component } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectContact, populateContacts } from '../actions';

import '../styles/contactBars.css';

const mapStateToProps = state => (
  { 
    selectedId: state.contact,
    contacts: state.contacts,
  }
);

const mapDispatchToProps = dispatch => ({
  selectContact: contact => { dispatch(selectContact(contact)); },
  populateContacts: contacts => {dispatch(populateContacts(contacts)); },
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
      searchWord: '',
    };

    this.sameContacts = this.sameContacts.bind(this);
    this.renderContacts = this.renderContacts.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRoute = this.handleRoute.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.sameContacts(nextProps.data.Contact, this.props.data.Contact)) {
      this.props.populateContacts(nextProps.data.Contact);
    }
  }

  sameContacts(nextProp, currProp) {
    if (!currProp || !nextProp) return false;

    if (nextProp && currProp && nextProp.contacts && currProp.contacts) {
      if (nextProp.contacts.length !== currProp.contacts.length) return false;
      for (let i = 0; i < nextProp.length; i++) {
        if (nextProp.contacts[i].id !== currProp.contacts[i].id) return false;
      }
    }

    return true;
  }

  handleRoute(event) {
    this.props.history.push(`/users/${event}`);
  }

  handleSearch(event) {
    const word = this.state.searchWord;
    const DELETE_KEY = 8;

    if (event.keyCode === DELETE_KEY) {
      this.setState({ searchWord: word.substring(0, word.length - 1) });
    } else {
      this.setState({ searchWord: word + event.key });
    }
  }

  renderContacts(data) {
    if (data.loading || data.error) {
      return data.loading ? <p>Loading ...</p> : <p>{data.error.message}</p>;
    }

    return (
      <div className="contacts-list">
        {data.Contact.map((contact) => {
          let hasBeenSearched = false;
          const { searchWord } = this.state;

          if (searchWord && (contact.lastname.toLowerCase().indexOf(searchWord.toLocaleLowerCase()) !== -1
          || contact.firstname.toLowerCase().indexOf(searchWord.toLocaleLowerCase()) !== -1)) {
            hasBeenSearched = true;
          }

          return (
            <div key={contact.contactId} className={`contact ${hasBeenSearched ? 'contact-searched' : ''} `} role="presentation" onClick={() => { this.handleRoute(contact.contactId); this.props.selectContact(contact); }}>
              <span>{contact.lastname}, {contact.firstname}</span>
            </div>);
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div className="searchbar-container">
        <div className="search-container">
          <h5>All Contacts</h5>
          <FormGroup>
            <Input className="search-contact-input" placeholder="Search" onKeyDown={this.handleSearch} />
          </FormGroup>
        </div>
        {this.renderContacts(this.props.data)}
      </div>
    );
  }
}

ContactBar.defaultProps = {
  data: {},
};

ContactBar.propType = {
  data: PropTypes.object,
  selectedId: PropTypes.number,
  history: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(graphql(contactListQuery)(ContactBar));
