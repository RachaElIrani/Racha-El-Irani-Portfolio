import React from "react";
import "./style.css";
import Button from "../Button/button";

function Menu(props) {
  return (
    <div className="menuOverlay">
      <div>
        <span onClick={props.MenuscrollToServices}>Services</span>
      </div>

      <div>
        <span onClick={props.MenuscrollToWork}>Work</span>
      </div>
      {/* <div></div> */}
      <Button
        name="Get in touch"
        style="activebutton"
        onClick={props.MenuButton}
      />
    </div>
  );
}

export default Menu;
