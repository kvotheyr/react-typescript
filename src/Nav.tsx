import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
    const {movies} = useContext(MovieContext);

    return (
    <h1>movies: {movies.length}</h1>
    );
}

export default Nav;