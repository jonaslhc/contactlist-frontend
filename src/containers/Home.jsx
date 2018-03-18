import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import ContactBar from '../containers/ContactBar';

import '../styles/home.css';

function Home({ history }) {
  return (
    <ContactBar history={history} />
  );
}

Home.propType = {
  history: PropTypes.object,
};

export default withRouter(Home);
