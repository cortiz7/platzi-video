import React from 'react';
import { format } from 'url';
import './search.css';

function Search(props){
  return(
      <form action="" className="Search">
        <input type="text" className="Search-input" placeholder="Busca tu video favorito" />
      </form>
  )
}

export default Search;