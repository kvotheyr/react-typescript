import React, {createContext, useState, ReactNode} from 'react';

interface IMovies {
    name: string,
    rating: number
}

export interface MovieState {
    movies: IMovies[],
    setMovies: React.Dispatch<React.SetStateAction<IMovies[]>>
}

const defaultMovieState: MovieState = {
    movies: [{name: "sd", rating:9}],
    setMovies: (): void => {},
};

interface MovieContextProviderProps {
    defaults?: Partial<IMovies>;
    children?: ReactNode;
}

export const MovieContext = createContext<MovieState>(defaultMovieState);

export const MovieProvider = (props: MovieContextProviderProps) => {
    const [movies, setMovies] = useState<Array<IMovies>>(
        [
            {
                name: "Into the wild",
                rating: 9
            },
            {
                name: "Shawshank Redemption",
                rating: 10
            },
            {
                name: "Parasite",
                rating: 8
            }
        ]
    );

    return (
        <MovieContext.Provider value={{movies, setMovies}}>
            {props.children}
        </MovieContext.Provider>
    );
}
