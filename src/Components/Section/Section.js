import React from 'react';
import './style.css';

function Section(props) {
  return (
    <div className={props.style} onClick={props.onClick}>
    <span>{props.title}</span>

    </div>
  );
}

export default Section;