import React from 'react';
import './App.css';
import AppInfo from "../app-info/app-info";
import AppFilter from "../app-filter/app-filter";
import SearchPanel from "../search-panel/search-panel";
import MovieList from "../movie-list/movie-list";
import AddMovie from "../add-movie/add-movie";

const App = () => {
    const data = [
        {name: 'Empire of osman', viewrs: 999,favorite:true,id:1},
        {name: 'Ertagrul', viewrs: 1071,favorite:true,id:2},
        {name: 'Omar', viewrs: 1210,favorite:false,id:3},
    ]
    return (
        <div className="app">
            <div className='content'>
                <AppInfo/>
                <div className='filter'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <MovieList data={data}/>
                <AddMovie />
            </div>
        </div>
    );

}

export default App;
