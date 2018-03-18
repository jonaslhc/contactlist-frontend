import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import ContactBar from '../components/ContactBar';
// import ContactDetail from '../components/ContactDetail';

import '../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <ContactBar history={this.props.history} />
    );
  }
}

Home.propType = {
  history: PropTypes.object,
};

export default withRouter(Home);
