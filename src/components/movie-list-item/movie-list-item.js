import './movie-list-item.css'
import React, {Component} from "react";


class MovieListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {favorite:false,like:false}

    }

    onFavorite = () => {
        this.setState(({favorite}) => ({
            favorite:!favorite
        }))


    }
    onLike = () =>{
        this.setState(({like}) =>({
            like:!like
        }))
    }

    render() {
        const {viewrs, name} = this.props
        const {favorite,like} = this.state
        return (
            <li className={`list-group-item d-flex justify-content-between ${favorite && 'favourite'} ${like && 'like'}` }>
			<span onClick={this.onLike} className='list-group-item-label' data-toggle='like'>{name}
			</span>
                <input type='number' className='list-group-item-input' defaultValue={viewrs}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-cookie btn-sm' onClick={this.onFavorite}>
                        <i className='fas fa-cookie'></i>
                    </button>
                    <button type='button' className='btn-trash btn-sm '>
                        <i className='fas fa-trash'></i>
                    </button>
                    <i className='fas fa-star'></i>
                </div>
            </li>
        )

    }

}

export default MovieListItem
