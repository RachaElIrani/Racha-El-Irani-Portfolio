import React from "react";
import "./style.css";

function Discovery(props) {
  return (
    <div className="DiscoverySection">
      <span className="DiscoveryTitle">The Journey of Discovery</span>

      <div className="DiscoveryText">
        <span className="DiscoveryBodyTitle">Personas</span>
        <span className="DiscoveryBodyDesc">
         {props.text}
        </span>
      </div>
      <div className="DiscoveryImage"></div>
      <img
            src={props.per1}
            alt="persona1"
            width="100%"
            height="auro"
            className="persona1"
          />
        <img
            src={props.per2}
            alt="persona2"
            width="100%"
            height="auto"
            className="persona1"
          />
          <img
            src={props.per3}
            alt="persona3"
            width="100%"
            height="auto"
            className="persona1"
          />
    </div>
  );
}

export default Discovery;
