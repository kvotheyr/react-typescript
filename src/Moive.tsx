import React from 'react';

interface IProps {
    name: string,
    rating: number
}

const Movie = ({name, rating}: IProps) => {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{rating}</h4>
        </div>
    );
}

export default Movie;
