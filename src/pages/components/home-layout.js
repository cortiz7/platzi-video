import React from 'react';

function HomeLayout(props) {
  return (
    <section>
        Layout de Component
      {props.children}          
    </section>
  ) 
}

export default HomeLayout