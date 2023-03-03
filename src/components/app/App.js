import React, {Component} from 'react';
import './App.css';
import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import MovieList from "../movie-list/movie-list";
import AddMovie from "../add-movie/add-movie";
import {v4 as uuidv4} from 'uuid';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Empire of osman', viewrs: 999, like:false, favorite: false, id: 1},
                {name: 'Ertagrul', viewrs: 1071, like:false, favorite: false, id: 2},
                {name: 'Omar', viewrs: 1210, like:false, favorite: false, id: 3},
            ],
            term: '',
            filter: 'all'

        }
    }

    Ondeleted = (id) => {
        this.setState(({data}) => ({
            data: data.filter(c => c.id !== id)
        }))
    }


    addForm = (item) => {

        this.setState(({data}) => ({
                data: [...data, {...item, id: uuidv4()}]
            })
        )
    }


    onToogleProp = (id, prop) => {
        this.setState(({data}) => {
            const newArr = data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
            return {
                data: newArr
            }
        })
    }


    searchHandler = (arr, term) => {
        if (arr.length === 0) {
            return arr
        }
        return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)

    }
    updateTermHandler = term => this.setState({term})
    



    filterHandler = (arr,filter) =>{
        switch (filter) {
            case 'popular':
                return arr.filter(c => c.like)
             
            case 'mostview':
                return arr.filter(c => c.viewrs > 800)
                
        
            default:
                return arr
            
        }

    }
    updateFilterHandler = filter => this.setState({filter})


    render() {

        const {data, term,filter} = this.state
        const CountMoview = data.length
        const favFilm = data.filter(c => c.favorite).length
        const visibleData = this.filterHandler(this.searchHandler(data, term),filter)
        return (<div className="app">
            <div className='content'>
                <AppInfo CountMoview={CountMoview} favFilm={favFilm}/>
                <div className='filter'>
                    <SearchPanel updateTermHandler={this.updateTermHandler}/>
                    <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
                </div>
                <MovieList
                    data={visibleData}
                    onDeleted={this.Ondeleted}
                    onToogleProp={this.onToogleProp}
                />

                <AddMovie addForm={this.addForm}/>
            </div>
        </div>);

    }


}

export default App;
