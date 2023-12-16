import React from "react";
import "./style.css";

function Flight(props) {
  return (
    <div className="FlightSection">
      <div className="FlightText">
        <span className="FlightTitle">Where Ideas Take Flight</span>
        <span className="FlightDesc">
        {props.text}
        </span>
      </div>
      <div className="FlightBody">
        <div className="FlightBodyText">
          <span className="FlightBodyTitle">a. Mapping</span>
          <span className="FlightBodyDesc">
            {props.mappingtext}
          </span>
        </div>
        <img src={props.map1} alt="map1" width="100%" height="auto" />
        <img src={props.map2} alt="map2" width="100%" height="auto" />
      </div>
      {props.flowsection ? (
        <div className="FlowSection">
            <div className="FlightBodyText">
          <span className="FlightBodyTitle">b. User Flow</span>
          <span className="FlightBodyDesc">
            For every feature, I created a scenario with its own user flow. This
            helped the team, the client, and I split the project into different
            design sprints, but also define all the actions the user might take
            while on the Portal.
          </span>
          </div>
          <div className="Flowimage">
          <img src={props.flow1} alt="flow1" width="50%" height="auto" />
        <img src={props.flow2} alt="flow2" width="50%" height="auto" />
        </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Flight;
