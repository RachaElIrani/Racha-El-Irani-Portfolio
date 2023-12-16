import React from 'react';
import './style.css';

function Tag(props) {
  return (
    <div className={props.style}>
    <span>{props.title}</span>

    </div>
  );
}

export default Tag;