import React from 'react';

import './search-box.style.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search' 
    type="search" 
    placeholder={placeholder}
    // placeholder vide pour réutiliser la searchBox dans un autre context
    onChange= {handleChange}
    // idem pour le onChange. {e => this.setState({ searchField: e.target.value })}
  />
)