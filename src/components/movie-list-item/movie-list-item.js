import './movie-list-item.css'
import React, {Component} from "react";


class MovieListItem extends Component {
    render() {
        const {viewrs, name,Ondeleted,onToogleProp,favorite, like} = this.props
        return (
            <li className={`list-group-item d-flex justify-content-between ${favorite && 'favourite'} ${like && 'like'}`}>
			<span onClick={onToogleProp} className='list-group-item-label' data-toggle='like'>{name}
			</span>
                <input type='number' className='list-group-item-input' defaultValue={viewrs}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-cookie btn-sm' onClick={onToogleProp} data-toggle='favorite'>
                        <i className='fas fa-cookie'></i>
                    </button>
                    <button type='button' className='btn-trash btn-sm '>
                        <i className='fas fa-trash' onClick={Ondeleted}></i>
                    </button>
                    <i className='fas fa-star'></i>
                </div>
            </li>
        )

    }

}

export default MovieListItem
