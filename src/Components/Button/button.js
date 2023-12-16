import React from 'react';
import './style.css';

function Button(props) {
  return (
    <div className={props.style} onClick={props.onClick}>
    <span>{props.name}</span>
   {props.icon?  <img src={props.icon} alt={props.icon} />:<></>}
    </div>
  );
}

export default Button;