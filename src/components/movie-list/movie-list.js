import React from 'react';
import './movie-list.css'
import MovieListItem from "../movie-list-item/movie-list-item";

const MovieList = ({data}) =>{
    return(
        <ul className='movie-list'>
            {data.map(item =>(
                <MovieListItem key={item.id} name={item.name} viewrs={item.viewrs} favorite={item.favorite}/>
            ))}

        </ul>
    )
}
export default MovieList