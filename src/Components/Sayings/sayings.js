import React from "react";
import "./style.css";

function Sayings(props) {
  return (
    // <div className={props.style} id={props.id} onClick={props.onClick}>
    //   <span className="sayText">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut Lorem ipsum dolor sit . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut Lorem ipsum dolor sit “</span>
    //   <div className="whoSay">
    //     {/* <img src="" width={56} height={56}/> */}

    //     <div
    //       style={{ width: "56px", height: "56px", backgroundColor: "#D9D9D9" , borderRadius:"72px"}}
    //     ></div>
    //     <span className="nameof">Johnny Bou Malhab</span>
    //     <span className="descriptionof">Team Lead</span>
    //   </div>
    // </div>
    <>
      {props.style == "right" ? (
        <div className="sayContainerleft">
          <div className="whoSay">
            <img src={props.image} width={56} height={56} className="Sayimage"/>
            
            {/* <div className="Sayimage"></div> */}
            <span className="nameof">Johnny Bou Malhab</span>
            <span className="descriptionof">Team Lead</span>
          </div>
          <div className={props.textstyle}>
        {props.text}
          </div>
        </div>
      ) : (
        <div className="sayContainerleft">
          <div className={props.textstyle}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            Lorem ipsum dolor sit . Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed ut Lorem ipsum dolor sit “
          </div>
          <div className="whoSay">
            {/* <img src="" width={56} height={56}/> */}
            <div className="Sayimage"></div>
            <span className="nameof">Mohamad Ghadiye </span>
            <span className="descriptionof">Manager</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Sayings;
