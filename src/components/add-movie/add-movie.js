import React, { Component } from 'react'
import './add-movie.css'



class MoviesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            viewrs: ''
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    addFormHandler = (e) => {
        e.preventDefault()
        this.props.addForm({name:this.state.name,viewrs:this.state.viewrs})
        this.setState({name:'',viewrs:''})

    }

    render() {

        const { name, viewrs } = this.state

        return (
            <div className='movies-add-form'>
                <h3>Yangi kino qo'shish</h3>
                <form className='add-form d-flex' onSubmit={this.addFormHandler}>
                    <input
                        type='text'
                        className='form-control new-post-label'
                        placeholder='Qanday kino?'
                        name='name'
                        onChange={this.onChangeHandler}
                        value={name}
                    />
                    <input
                        type='number'
                        className='form-control new-post-label'
                        placeholder="Nechi marotaba ko'rilgan?"
                        name='viewrs'
                        onChange={this.onChangeHandler}
                        value={viewrs}


                    />
                    <button type='submit' className='btn btn-outline-dark'>
                        Qo'shish
                    </button>
                </form>
            </div>
        )
    }
}

export default MoviesAddForm