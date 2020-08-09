/*
GET http: //backendexample.sanbercloud.com/api/movies

    POST http: //backendexample.sanbercloud.com/api/movies

    PUT http: //backendexample.sanbercloud.com/api/movies/{ID_MOVIES}

    DELETE http: //backendexample.sanbercloud.com/api/movies/{ID_MOVIES}

*/
import Axios from 'axios';

export const getMovies = () =>
    Axios.get(`http://backendexample.sanbercloud.com/api/movies`)

export const createMovie = (movie) =>
    Axios.post(`http://backendexample.sanbercloud.com/api/movies`, movie)

export const editMovie = (movie) =>
    Axios.put(`http://backendexample.sanbercloud.com/api/movies/${movie.id}`, movie)

export const deleteMovie = (id) =>
    Axios.delete(`http://backendexample.sanbercloud.com/api/movies/${id}`)