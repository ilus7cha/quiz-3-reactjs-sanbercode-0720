import React from 'react';
import {getMovies} from './api';
import { useEffect } from 'react';
import { useMovieContext } from './moviecontext';

const Movie = ({title, description, year, duration, genre, rating}) => (
    <section>
        <h4>{title}</h4>
          <h4>Rating: {rating}</h4>
          <h4>Durasi: {duration}</h4>
          <h4>Genre: {genre}</h4>
          <h4>Tahun: {year}</h4>
          <p>Deskripsi: {description}</p>
    </section>
)

export default function Movies() {
    const[state, setMovies] = useMovieContext()

    useEffect(
        () =>{
            getMovies()
            .then(res=> {if (res.data) {
                setMovies({
                    ...state,
                    movies: res.data
                })
            }}
            )
        }
   ,[] )
        return (
            <>
          <h2>Daftar Film Film Terbaik</h2>
          {state.movies
          .sort((current, comparator) => current.rating > comparator.rating ? 1 : -1  )
          .map(movie=> (
              <Movie key={movie.id} {...movie} />
          ))}

            </>
        )
}