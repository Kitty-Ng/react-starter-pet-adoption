import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
