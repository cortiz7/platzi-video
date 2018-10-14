import React from 'react';
import Media from './media';

function Playlist(props) { 
  return (
    <div className="Playlist">          
      {
        props.playlist.map((item) => {
          return (
            <Media 
              {...item} 
              key={item.id}
              handleClick={props.handleOpenModal}   
            />
          )
        })
      }        
    </div>  
    )  
} 
export default Playlist;