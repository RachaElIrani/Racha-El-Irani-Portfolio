import React from "react";
import "./style.css";

function Creativity(props) {
  return (
    <div className="CreativitySection">
      <span className="CreativityTitle">Where Creativity Takes Shape</span>

      <div className="CreativityBodyText">
        <span className="CreativityBodyTitle">Design System</span>
        <span className="CreativityBodydesc">
          Using the atomic design methodology, we came up with faster screens
          without losing consistency. Once done, we proceeded to hand off the
          work to the development team and went through a smooth transition in
          the process
        </span>
      </div>
      <div className="Creativityimage">
        <div className="Creativityimage1">
          <img
            src={props.colorImage}
            alt="ColorImage"
            width="50%"
            height="auto"
          />
          <img
            src={props.TypoghraphyImage}
            alt="TypoghraphyImage"
            width="50%"
            height="auto"
          />
        </div>
        <div className="Creativityimage1">
          <img
            src={props.Components1}
            alt="ColorImage"
            width="50%"
            height="auto"
          />
          <img
            src={props.Components2}
            alt="TypoghraphyImage"
            width="50%"
            height="auto"
          />
        </div>
      </div>
      <div className="CreativityBodyText">
        <span className="CreativityBodyTitle">User Interface</span>
        <span className="CreativityBodydesc">
          The UI design followed the platform's branding guidelines,
          incorporating a fresh color palette and modern typography. Visual
          elements such as icons, buttons, and images were carefully chosen to
          resonate with the platform's social and community-oriented theme.
        </span>
      </div>
      {props.mobile == false ? (
        <div className="UIImage">
          <img src={props.Login} alt="Login" width="100%" height="auto" />
          <img src={props.Country} alt="Login" width="100%" height="auto" />
          <img src={props.business} alt="Login" width="100%" height="auto" />
        </div>
      ) : (
        <div className="mobilePhoneUI">
          <img src={props.mock1} alt="mock1" width="30%" height="auto" />
          <img src={props.mock2} alt="mock2" width="30%" height="auto" />
          <img src={props.mock3} alt="mock3" width="30%" height="auto" />
        </div>
      )}
    </div>
  );
}

export default Creativity;
