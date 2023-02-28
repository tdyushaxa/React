import React from 'react';
import './search-panel.css'
function SearchPanel() {
    return (
        <div>
            <input className='form-control own-search' placeholder='search anyway...' type="text"/>
        </div>
    );
}

export default SearchPanel;