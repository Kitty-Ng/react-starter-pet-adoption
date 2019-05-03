import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams';
import { Router, Link } from '@reach/router';
import Details from './Details';

const App = () => {
  // return React.createElement('div', { id: 'something-important' }, [
  //   React.createElement('h1', {}, 'Adopt Me!'),
  //   React.createElement(Pet, {
  //     name: 'Sebastian',
  //     animal: 'Dog',
  //     breed: 'Labrador'
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Minnie',
  //     animal: 'Dog',
  //     breed: 'Labrador'
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Shadow',
  //     animal: 'Dog',
  //     breed: 'Spaniel'
  //   })
  // ]);

  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to={`/`}>Adopt Me!</Link>
        </header>
        {/* <Pet name="Sebastian" animal="Dog" breed="Labrador" />
      <Pet name="Minnie" animal="Dog" breed="Labrador" />
      <Pet name="Shadow" animal="Dog" breed="Spaniel" /> */}
        {/* <SearchParams /> */}
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
