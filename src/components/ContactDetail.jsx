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

    };
  }

  render() {
    const { contactDetail } = this.props;

    return (
      <div className="contact-detail-container">
        <h2>{contactDetail && contactDetail.firstname} {contactDetail && contactDetail.lastname}</h2>
        <p>Phone: {contactDetail && contactDetail.phone}</p>
        <p>Email: {contactDetail && contactDetail.email}</p>
        <p>Address: {contactDetail && contactDetail.address}</p>
      </div>
    );
  }
}

ContactDetail.propType = {
  contactDetail: PropTypes.object,
};

export default connect(mapStateToProps)(ContactDetail);
