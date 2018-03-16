import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const ContactCard = ({ data: { loading, error, Contact }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="contacts-list">
      {Contact.map(contact => (
        <div key={contact.contactId} className="contact">
          {contact.firstname}
          {contact.lastname}
          {contact.phone}
          {contact.address}
        </div>))
      }
    </div>
  );
};

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

export default graphql(contactListQuery)(ContactCard);
