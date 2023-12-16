import React, { useState, useEffect } from "react";
import "./style.css";
// component
import Section from "../Section/Section";
import linkedinIcon from "../../images/linkedin.svg";
import MenuIcon from "../../images/Menu.svg";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Close from "../../images/Close.svg";
function Header(props) {
  const [isButtonVisible, setButtonVisibility] = useState(true);

  const history = useHistory();

  const RedirettoContactSection = () => {
    // Redirect to another page
    history.push("/ContactUs");

    // Scroll to the bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  };
  const RedirettoWorkSection = () => {
    history.push("/work?scrollToSection=true");
  };
  const RedirettoservicesSection = () => {
    history.push("/services?scrollToServicesSection=true");
  };

  // functions
  const redirectToLinkedInProfile = () => {
    // Redirect to your LinkedIn profile
    window.location.href =
      "https://www.linkedin.com/in/racha-el-irani-1844b8226/";
  };
  useEffect(() => {
    const handleResize = () => {
      // Update button visibility based on window width
      setButtonVisibility(window.innerWidth > 767);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial visibility
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="headerCointainer">
      <Link to="/" className="HeaderLogo">
        <span onClick={props.HomeSection}>Racha El Irani</span>
      </Link>
      {/* Start of Actions Div*/}
      <div className="HeaderActions">
        <div className="Headersection">
          {/* <Link
            to="/services"
            className={
              props.styleSect1 || props.scrollServices
                ? "SectionCointaineractive"
                : "SectionCointainer"
            }
          >
            <Section title="Services" onClick={props.services} />
          </Link> */}
          {/* <Link
            to="/#work"
            className={
              props.styleSect2 || props.scrollWork
                ? "SectionCointaineractive"
                : "SectionCointainer"
            }
          >
            <Section title="Work" onClick={props.work} />
          </Link> */}
          <div
            onClick={RedirettoservicesSection}
            className={
              props.styleSect1 || props.scrollServices
                ? "SectionCointaineractive"
                : "SectionCointainer"
            }
          >
            <Section title="Services" onClick={props.services} />
          </div>
          <div
            onClick={RedirettoWorkSection}
            className={
              props.styleSect2 || props.scrollWork
                ? "SectionCointaineractive"
                : "SectionCointainer"
            }
          >
            <Section title="Work" onClick={props.work} />
          </div>
        </div>
        <div className="separator"></div>
        <div className="Linkedin" onClick={redirectToLinkedInProfile}>
          <img src={linkedinIcon} alt="LinkedIn" />
        </div>
        {/* <Button name="Get in touch"/> */}
        {/* {isButtonVisible ? <Link to='/ContactUs' className="activebutton"><Button name="Get in touch" onClick={props.headerbutton}/></Link>:<img src={MenuIcon} alt="MenuIcon" />} */}
        {isButtonVisible ? (
          <div onClick={RedirettoContactSection}>
            <Button
              name="Get in touch"
              style="activebutton"
              onClick={props.headerbutton}
            />
          </div>
        ) : (
          <div>
           <img src={MenuIcon} alt="MenuIcon" onClick={props.menuButton}/>
            </div>
        
        )}
      
      </div>

      {/* End of Actions Div*/}
    </div>
  );
}

export default Header;
