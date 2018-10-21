import React from 'react';
import './timer.css';

const Timer = (props) => (
  <div className="Timer">
    <p><span>Timer / {props.duration} </span></p>
  </div>
)

export default Timer;