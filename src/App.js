/* eslint-disable */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'
import { Container, Col, Row } from 'reactstrap';

import ContactDetail from './containers/ContactDetail';
import Home from './containers/Home';

import './App.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router>
            <Container className="app-container">
              <Row>
                <Col className="home-col" xs="3">
                  <Home />
                </Col>
                <Col className="home-col" xs="9">
                  <Route path="/users/:id" render={(props) => <ContactDetail store={store} {...props} />} />
                </Col>
              </Row>
            </Container>
          </Router>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;
