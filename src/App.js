import React, { useState, useEffect, useRef } from "react";
import Header from "./Components/Header/header";
import "./App.css";
import homepageimage from "./images/homepageimage.png";
import contactUs from "./images/contactUs.png";
import design1 from "./images/design1.png";
import design2 from "./images/design2.png";
import web from "./images/web.png";
import mobile from "./images/mobile.png";
import arrow from "./images/arrow.svg";
import Button from "./Components/Button/button";
import Tag from "./Components/Tag/tag";
import Work from "./Components/Work/work";
import Sayings from "./Components/Sayings/sayings";
import InputForm from "./Components/InputForm/inputForm";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import { useHistory } from "react-router-dom";
import johnny from "./images/people/johnny.jpeg";
function App() {
  // use useState menu
  const [menu, setMenu] = useState(false);

  // use useState
  const [ServicesState, setServicesState] = useState(false);
  const [WorkState, setWorkState] = useState(false);
  const [say2Style, setsay2Style] = useState("Sayactive");
  // use useState when scrolling
  const [ScrollServicesState, setScrollServicesState] = useState(false);
  const [ScrollWorkState, setScrollWorkState] = useState(false);

  // to scroll from another page
  useEffect(() => {
    // Check if the query parameter is present
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToSection = urlParams.get("scrollToSection");

    if (scrollToSection) {
      // Scroll to the "work" section
      const targetSection = document.getElementById("work");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    const scrollToServicesSection = urlParams.get("scrollToServicesSection");

    if (scrollToServicesSection) {
      // Scroll to the "services" section
      const targetSection = document.getElementById("services");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // functions
  const scrollToServices = () => {
    const ServicesSection = document.getElementById("services");
    if (ServicesSection) {
      ServicesSection.scrollIntoView({ behavior: "smooth" });
      setServicesState(true);
      setWorkState(false);
    }
  };
  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
      setServicesState(false);
      setWorkState(true);
    }
  };
  const scrollToHome = () => {
    const workSection = document.getElementById("home");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
      setServicesState(false);
      setWorkState(false);
    }
  };
  const scrollToContact = () => {
    const ContactSection = document.getElementById("ContactUs");
    if (ContactSection) {
      ContactSection.scrollIntoView({ behavior: "smooth" });
      setServicesState(false);
      setWorkState(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const ScrollServicesSection = document.getElementById("services");
      const ScrollWorkSection = document.getElementById("work");
      const sayingSection = document.getElementById("saying");
      if (ScrollServicesSection) {
        const servicesRect = ScrollServicesSection.getBoundingClientRect();
        // Adjust this threshold to control when the color change should occur
        const threshold = servicesRect.height * 0.2;

        if (servicesRect.top <= threshold) {
          setScrollServicesState(true);
          setScrollWorkState(false);
        } else {
          setScrollServicesState(false);
        }
      }

      if (ScrollWorkSection) {
        const workRect = ScrollWorkSection.getBoundingClientRect();

        // Adjust this threshold to control when the color change should occur
        const threshold = workRect.height * 0.2;
        if (workRect.top <= threshold) {
          setScrollWorkState(true);
          setScrollServicesState(false);
        } else {
          setScrollWorkState(false);
        }
      }
      if (sayingSection) {
        const sayRect = sayingSection.getBoundingClientRect();
        // Adjust this threshold to control when the color change should occur
        const threshold = sayRect.height * 0.2;
        if (sayRect.top <= threshold) {
          setScrollWorkState(false);
          setScrollServicesState(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  const menuButton = (event) => {
    event.stopPropagation();
    setMenu(!menu);
  };
  const MenuscrollToServices = () => {
    const ServicesSection = document.getElementById("services");
    setMenu(false);

    if (ServicesSection) {
      ServicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const MenuscrollToWork = () => {
    const ServicesSection = document.getElementById("work");
    setMenu(false);
    if (ServicesSection) {
      ServicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const history = useHistory();
  const MenuRedirettoContactSection = () => {
    // Redirect to another page
    history.push("/ContactUs");
    setMenu(false);
    // Scroll to the bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  };
  return (
    <div className="">
      <Header
        services={scrollToServices}
        work={scrollToWork}
        styleSect1={ServicesState}
        styleSect2={WorkState}
        HomeSection={scrollToHome}
        scrollServices={ScrollServicesState}
        scrollWork={ScrollWorkState}
        headerbutton={scrollToContact}
        menuButton={menuButton}
      />
      {menu == true ? (
        <div ref={menuRef}>
          <Menu
            MenuscrollToServices={MenuscrollToServices}
            MenuscrollToWork={MenuscrollToWork}
            MenuButton={MenuRedirettoContactSection}
          />
        </div>
      ) : (
        <></>
      )}
      {/*Start*/}
      <div className="PageOneContainer">
        {/*Home page*/}
        <div className="HomeContainer" id="home">
          <div className="HomeText">
            <span className="HomeTitle">Where Ideas Come to Life</span>
            <span className="HomeDescription">
              I’m Racha, and I am a Product Designer and Developer. I love
              transforming ideas into realities by designing and building them.
            </span>
            <div className="HomeButton">
              <Button
                name="Check my latest work"
                style="activebutton"
                onClick={scrollToWork}
              />
              <Button
                name="Get in touch"
                style="Buttonsecondary"
                icon={arrow}
                onClick={scrollToContact}
              />
            </div>
          </div>
          <img
            src={homepageimage}
            alt="homepageimage"
            width="50%"
            height="auto"
            className="HomepageImage"
          />

          {/* End Home page*/}
        </div>
        {/*Services page*/}
        <div className="ServiccesContainer" id="services">
          <div className="ServicesImage">
            <div className="ServicesImage1">
              <img
                src={design1}
                alt="design1"
                // width="auto"
                // height="196px"
                className="design1"
              />
              <img
                src={web}
                alt="web"
                // width="200px"
                // height="auto"
                className="web"
              />
            </div>
            <div className="ServicesImage1">
              <img
                src={design2}
                alt="design2"
                // width="200px"
                // height="auto"
                className="web"
              />
              <img
                src={mobile}
                alt="mobile"
                // width="auto"
                // height="196px"
                className="design1"
              />
            </div>
          </div>
          <div className="ServicesText">
            <span className="ServicesTitle">
              Designing Dreams, Building Realities
            </span>
            <span className="Servicesdescr">
              I provide a diverse set of services to cater to your digital
              requirements. Whether it's improving user experiences through
              UX/UI design, crafting compelling websites, or developing mobile
              applications, I've got you covered. My mission is to turn your
              ideas into practical, user-friendly, and visually appealing
              digital solutions that resonate with your targeted audience. Let's
              work together to bring your digital vision to fruition.
            </span>
            <div className="tagSection">
              <div className="tagSection1">
                <Tag title="Product Design" style="default" />
                <Tag title="Web Development" style="default" />
              </div>
              <div className="mobiletag">
                <Tag title="Mobile Development" style="default" />
              </div>
            </div>
          </div>
        </div>
        {/* End of services section*/}
        {/*Work section*/}
        <div className="WorkContainer" id="work">
          <div className="WorkText">
            <span className="WorkTitle">Ideas That Has Become A Reality.</span>
            {/* <div className="WorkTag">
              <Tag title="All" style="active" />
              <Tag title="Design" style="secondary" />
              <Tag title="Development" style="secondary" />
            </div> */}
          </div>
          <div className="WorkSection">
            <Work
              image="bex"
              title="BEX Business Portal"
              desc="BEX streamlines expense management for businesses by centralizing receipts, invoices, and financial documents."
              worktype="Design"
              style="default"
              to="/bex"
            />
            <Work
              image="zaky"
              title="zaky Mobile App"
              desc="zaky is a digital wallet that helps you transact without a bank account. Safely store, pay & send money with a click."
              worktype="Design"
              style="default"
              to="/zaky"
            />

            <Work
              image="mywebsite"
              title="My Portfolio"
              desc="My Portfolio: A showcase of my work, skills, and accomplishments."
              worktype="Development"
              style="dev"
              whitespace="true"
              to="/mywebsite"
            />
          </div>
        </div>
        {/* End of work section*/}
        {/* Start of Blablabla section*/}
        {/* <div className="BlablablaContainer" id="saying">
          <span className="BlablablaTitle">What they’re saying</span>
          <div className="Thesayings">
            <Sayings
            image={johnny}
              style="right"
              textstyle="Textleft"
              text="Racha seamlessly created and integrated complex design systems into
            user-friendly solutions while creating over 10 products in a year,
            considering business and user needs."
            />
            <Sayings style="left" textstyle="Textright" />
          </div>
        </div> */}
        {/* end of Blablabla section*/}
        {/* Start of contact us section*/}
        <div className="ContactUsContainer" id="ContactUs">
          <InputForm />
          <img
            src={contactUs}
            alt="contactUs"
            width="auto"
            height="536px"
            className="ContactUs"
          />
        </div>
        {/* end of contact us section*/}
      </div>
      <Footer />
    </div>
  );
}

export default App;
