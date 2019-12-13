import React, {useContext} from 'react';
import Movie from './Moive';
import { MovieContext } from './MovieContext';

const MovieList = () => {
    const {movies} = useContext(MovieContext)

    return(
    <h3>{movies.map(movie => (
        <Movie name={movie.name} rating={movie.rating}/>
    ))}</h3>
    );
}

export default MovieList;