import React, {useEffect, useState} from 'react';
import { deleteMovie, getMovies, editMovie, createMovie } from "./api"
import { useMovieContext } from "./moviecontext";


const FormMovie = ({handleSubmit, movie, handleChange}) => {
    const onChange = (event) => {
        let typeOfInput = event.target.name

        switch (typeOfInput) {
            case "title": {
                handleChange({
                    ...movie, 
                    title: event.target.value})
            }  
                break;
            case "desc": {
                handleChange({
                    ...movie,
                    description: event.target.value
                })
            }
            break;
            case "year": {
                handleChange({
                    ...movie,
                    year: event.target.value
                })
            }
            break;
            case "duration": {
                handleChange({
                    ...movie,
                    duration: event.target.value
                })
            }
            break;
            case "genre": {
                handleChange({
                    ...movie,
                    genre: event.target.value
                })
            }
            break;
            case "rating": {
                handleChange({
                    ...movie,
                    rating: event.target.value
                })
            }
            break;
            default:
                break;
        }
    }

    return(
         <form onSubmit={e => {e.preventDefault(); handleSubmit()}}>
            <div className="form-group">
                <label>Title: </label>
                <input name="title" type="text" value={movie.title} onChange={onChange} />
            </div>

            <div className="form-group">
                <label>Description: </label>
                <textarea name="desc"  value={movie.description} onChange={onChange} />
            </div>

            <div className="form-group">
                <label>Year: </label>
                <input name="year" type="number" value={movie.year} onChange={onChange} />
            </div>

            <div className="form-group">
                <label>Duration: </label>
                <input name="duration" type="number" value={movie.duration} onChange={onChange} placeholder="(dalam menit)"/>
            </div>

            <div className="form-group">
                <label>Genre: </label>
                <input name="genre" type="text" value={movie.genre} onChange={onChange} />
            </div>
            <div className="form-group">
                <label>Rating: </label>
                <input name="rating" type="number" value={movie.rating} onChange={onChange} placeholder="1-10" />
            </div>
            <button className="form-submit">Submit</button>
            </form>
    )
}
const Movie = ({id, title, description, year, duration, genre, rating, handleEdit, handleDelete}) => {
    return(
    <tr>
        <td>{title}</td>
          <td>{rating}</td>
          <td>{duration}</td>
          <td>{genre}</td>
          <td>{year}</td>
          <td>{description}</td>
          <td>
              <button value={id} onClick={handleEdit}>Edit</button>
              {" "}
              <button value={id} onClick={handleDelete}>Delete</button>
          </td>
    </tr>
)
}

const TableMovies = () =>{
     const [state, setMovies] = useMovieContext()


       useEffect(
           () => {
               getMovies()
                   .then(res => {
                       if (res.data) {
                            setMovies({
                                ...state,
                                movies: res.data
                            })
                       }
                   })
           }
       ,[])
const handleDelete = (event) =>{
    const movieId = event.target.value
    deleteMovie(movieId)
    .then(res => {
        console.log(res)
        if (res.data === "success")
            setMovies({...state, movies: state.movies.filter(movie=> movie.id !== parseInt(movieId))})

    })
}

const handleEdit = (event) => {
    const movieId = parseInt(event.target.value)
            setMovies({
                ...state,
                movie: state.movies.find(movie => movie.id === movieId)
            })
}

const handleChange = (movie) => setMovies({...state,
        movie
})

const handleSubmit = (movie) => {
    if(movie.id){
        editMovie(movie).then(res => {
            if(res.data){
                setMovies({
                    ...state,
                    movies: state.movies.map(_movie => _movie.id === movie.id ? movie : _movie)
                })
            }
        })
    }else{
        createMovie(movie).then(res => {
            if(res.data){
                setMovies({...state,movies: [...state.movies, movie ]})
            }
        })
    }
}
       return(
        <>       
        <h1>Data Movies</h1>
            <table className= "table-movies">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Duration</th>
                        <th>Genre</th>
                        <th>Year</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
            <tbody>
        {state.movies.map((movie) => (
              <Movie key={movie.id} {...movie} handleDelete={handleDelete} handleEdit={handleEdit} />
        ))
    }
        </tbody>
    </table>

            <h2>Form Movies</h2>
           <FormMovie handleSubmit={() => handleSubmit(state.movie)} movie={state.movie} handleChange={handleChange} />
        </>
    )  
}



export default TableMovies
