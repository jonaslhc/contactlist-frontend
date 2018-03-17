import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/contactDetail.css';

const mapStateToProps = state => (
  { contactDetail: state }
);

class ContactDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="contact-detail-container">
        stuff
      </div>
    );
  }
}

ContactDetail.propType = {
  contactDetail: PropTypes.object,
};

export default connect(mapStateToProps, null)(ContactDetail);
