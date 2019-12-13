import React from 'react'
import MovieList from './MovieList';
import {MovieProvider} from './MovieContext';
import Nav from './Nav';

function App() {
  return(
    <MovieProvider>
      <div>
        <Nav></Nav>
        <MovieList></MovieList>
      </div>
    </MovieProvider>
  );
}

export default App;
