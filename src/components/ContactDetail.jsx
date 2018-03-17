import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

import '../styles/contactDetail.css';

const mapStateToProps = state => (
  { contactDetail: state.contact }
);

class ContactDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
    };

    this.setContactInfo = this.setContactInfo.bind(this);
  }

  componentDidMount() {
    this.props.store.subscribe(() => {
      if (this.props.store.getState().contacts && this.props.store.getState().contacts.contact) {
        this.setContactInfo(this.props.store.getState().contacts.contact);
      }
    });
  }

  setContactInfo(data) {
    this.setState({
      firstName: data.firstname,
      lastName: data.lastname,
      phone: data.phone,
      email: data.email,
      address: data.email,
    });
  }

  render() {
    const state = this.state;

    return (
      <div className="contact-detail-container">
        {state.firstName &&
          <div>
            <h2>{state && state.firstName} {state && state.lastName}</h2>
            <p>Phone: {state && state.phone}</p>
            <p>Email: {state && state.email}</p>
            <p>Address: {state && state.address}</p>
          </div>
        }
        {!state.firstName && <h2>No Contact is selected</h2>}
      </div>
    );
  }
}

ContactDetail.propType = {
  contactDetail: PropTypes.object,
  store: PropTypes.object,
};

export default connect(mapStateToProps)(ContactDetail);
