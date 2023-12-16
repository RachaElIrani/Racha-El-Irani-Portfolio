import React, { useState } from "react";
import "./style.css";
import Tag from "../Tag/tag";
import Button from "../Button/button";
import bluearrow from "../../images/blueArrow.svg";
import bex from "../../images/bex.png";
import zaky from "../../images/zaky.png";
import mywebsite from "../../images/mywebsite.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function Work(props) {
  const [to, setTo] = useState(null);
  // setTo(props.to);
  const history = useHistory();
  const redirecttotheTop = () => {
    // Redirect to another page
    history.push(props.to);

    // Scroll to the bottom
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // Optional: for smooth scrolling
    });
  };
  return (
    <div className="workcontainer">
      {props.image == "bex" ? (
        <img src={bex} alt="bex" width="100%" height="auto" className="work1" />
      ) : props.image == "zaky" ? (
        <img
          src={zaky}
          alt="bex"
          width="100%"
          height="auto"
          className="work1"
        />
      ) : (
        <img
          src={mywebsite}
          alt="mywebsite"
          width="100%"
          height="auto"
          className="work1"
        />
      )}

      <div
        className={
          props.image == "mywebsite"
            ? "MyprofileTextContainer"
            : "workTextContainer"
        }
      >
        <div className="workText">
          <span className="worktitle">{props.title}</span>
          <span className="workdesc">{props.desc}</span>
        </div>
        {/* {props.whitespace ?<span className="space">    </span> : <></>}  */}
        <div className={props.image == "mywebsite" ? "worktagdev" : "worktag"}>
          <Tag title={props.worktype} style={props.style} />
          <Tag title="Case Study" style="default" />
        </div>

        <div onClick={redirecttotheTop} className="ReadMore">
          <span>Read More</span>
          <img src={bluearrow} alt="bluearrow" width={16} height={16} />
        </div>
      </div>
    </div>
  );
}

export default Work;
