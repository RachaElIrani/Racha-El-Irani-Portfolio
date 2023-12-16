import React from 'react';
import './style.css';

function Snackbar(props) {
  return (
    <div className={props.type}>
    <span>{props.text}</span>
 
    </div>
  );
}

export default Snackbar;