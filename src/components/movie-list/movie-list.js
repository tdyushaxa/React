import React from 'react';
import './movie-list.css'
import MovieListItem from "../movie-list-item/movie-list-item";

const MovieList = ({data,onDeleted,onToogleProp}) =>{
    return(
        <ul className='movie-list'>
            {data.map(item =>(
                <MovieListItem
                    key={item.id}
                    name={item.name}
                    viewrs={item.viewrs}
                    favorite={item.favorite}
                    like={item.like}
                    Ondeleted={()=> onDeleted(item.id)}
                    onToogleProp={(e)=>onToogleProp(item.id,e.currentTarget.getAttribute('data-toggle'))}


                />
            ))}

        </ul>
    )
}
export default MovieList