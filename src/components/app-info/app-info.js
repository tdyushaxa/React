import './app-info.css'
import React from "react";
const AppFileter = (props) => {
    const {CountMoview,favFilm} =props
    return (
        <div className='app-info'>
           <h3 className='font-monospace'>Barcha kinolar soni:{CountMoview}</h3>
           <h3 className='font-monospace'>sevimli kinolar soni:{favFilm}</h3>
        </div>
    )
}
export default AppFileter