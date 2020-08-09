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

/*
CONTOH RESPONSE API getMovies
 [{
     "id": 251,
     "created_at": "2020-08-09 05:39:58",
     "updated_at": "2020-08-09 05:49:04",
     "title": "Tolong Trainer di cek API nya",
     "description": "Error API EDITError API EDITError API EDITError API EDITError API EDITError API EDITError API EDITError API EDITError API EDITError API EDITError API EDITError API EDITError API EDIT",
     "year": 1900,
     "duration": 2,
     "genre": "action,hen",
     "rating": 1
 }, {
     "id": 265,
     "created_at": "2020-08-09 05:57:23",
     "updated_at": "2020-08-09 05:57:23",
     "title": "API get by ID nya apa ya ?",
     "description": "API get by ID nya apa ya ?",
     "year": 1000,
     "duration": null,
     "genre": "Musik",
     "rating": null
 }]
 */
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