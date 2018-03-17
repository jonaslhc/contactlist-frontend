import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/contactDetail.css';

const mapStateToProps = state => (
  { selectedId: state }
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
        hello
      </div>
    );
  }
}

export default connect(mapStateToProps)(ContactDetail);
