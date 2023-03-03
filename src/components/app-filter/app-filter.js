import React from "react";
import './app-filter.css'
const AppFilter =({updateFilterHandler,filter}) =>{
    return (
        <div className='app-filter'>
            <div className="btn-group">
                {
                  newBtn.map(btn =>(
                    <button key={btn.name} className={`btn ${filter !== btn.name ? "btn-outline-dark" : "btn-dark"}`}  type="button"  onClick={()=> updateFilterHandler(btn.name)}>{btn.label}</button>
                  ))}

            </div>
        </div>
    )

  
}
const newBtn = [
    {
        name:'all',label:'Barcha kinolar'
    },
    {
        name:'popular',label:'Mashhuur kinolar'
    } , 
    {
        name:'mostview',label:'Ko\'p korilgan kinolar'
    }
]
export default AppFilter