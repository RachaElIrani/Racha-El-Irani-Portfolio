//Myportfolio

import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Header from "../Components/Header/header";
import mywebsite from "../images/mywebsite/mywebsite.png";
import myrole from "../images/mywebsite/myrole.png";
import prog1 from "../images/mywebsite/prog1.png";
import prog2 from "../images/mywebsite/prog2.png";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Menu/Menu";
import { useHistory } from "react-router-dom";
function Myportfolio(props) {
  const [menu, setMenu] = useState(false);
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
  const RedirettoWorkSection = () => {
    history.push("/work?scrollToSection=true");
  };
  const RedirettoservicesSection = () => {
    history.push("/services?scrollToServicesSection=true");
  };
  return (
    <div>
      <Header menuButton={menuButton} />
      {menu == true ? (
        <div ref={menuRef}>
          <Menu
            MenuscrollToServices={RedirettoservicesSection}
            MenuscrollToWork={RedirettoWorkSection}
            MenuButton={MenuRedirettoContactSection}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="PageOneContainer">
        {/*In Inside look section*/}
        <div className="InsideLook">
          <div className="InsideLookText">
            <span className="InsideLookTitle">
              An Inside Look at my portfolio{" "}
            </span>
            <span className="InsideLookDesc">
              My portfolio website serves as a testament to my skills as both a
              web developer and designer. This case study will take you through
              the process of creating this website, highlighting key design and
              development choices that showcase my abilities
            </span>
          </div>
          <img
            src={mywebsite}
            alt="mywebsite"
            width="534px"
            height="auto"
            className="Bexwork"
          />
        </div>
        {/* End of In Inside look section*/}

        {/*Role section*/}
        <div className="RoleSection">
          <img
            src={myrole}
            alt="roleimage"
            width="534px"
            height="auto"
            className="Bexwork"
          />
          <div className="Roletext">
            <span className="RoleTitle">What I Bring to The Table</span>
            <span className="RoleDesc">
              My role in this project encompassed the following
              responsibilities:
              <ul>
                <li>Web Developer</li>
                <li>Product Designer</li>
              </ul>
            </span>
          </div>
        </div>
        {/*End Role section*/}
        {/*Challenge section*/}
        <div className="ChallengeSection">
          <span className="ChallengeTitle">The Challenge at Hand</span>
          <span className="ChallengeDesc">
            <p>
              In the context of our focused case study concerning my portfolio,
              a pressing issue has come to light that demands immediate
              attention.
            </p>
            <p>
              As a web developer and designer, I needed a platform to display my
              work and skills. The challenge was to create a visually appealing
              and functional portfolio that would effectively present my
              projects to potential clients and employers.
            </p>
            <p>
              <ul>
                <li>
                  Dynamic Content Loading: To enhance the user experience, the
                  website had to load project details and images dynamically as
                  users scrolled down the page. This required implementing lazy
                  loading and asynchronous data fetching techniques.
                </li>
                <li>
                  Cross-Browser Compatibility: Ensuring a consistent and
                  visually appealing experience across different browsers,
                  including legacy versions of Internet Explorer, was a must.
                </li>
                <li>
                  Responsive Design Across All Devices: Ensure flawless
                  responsiveness across various devices and screen sizes,
                  including niche devices with non-standard resolutions.
                </li>
              </ul>
            </p>
          </span>
        </div>

        {/*End Challenge section*/}
        {/*Problem section*/}
        <div className="SolutionSection">
          <span className="SolutionTitle">The Winning Formula</span>
          <div className="SolutionDesc">
            <p className="Decs1Desc">
              To address these challenges, I employed advanced front-end
              development techniques using React for the client-side and Node.js
              for server-side functionality. This tech stack provided the
              foundation for implementing complex features such as code
              splitting for dynamic loading, image optimization, asynchronous
              resource loading, and responsive design principles, all while
              strictly adhering to accessibility guidelines. Additionally, I
              utilized modern CSS techniques, including CSS Grid and Flexbox,
              for layout and advanced animations through CSS transitions and
              keyframes.
            </p>
            <p>
              The implementation of these features required careful planning,
              meticulous coding, and extensive testing across a wide range of
              browsers and devices to ensure a seamless user experience and
              optimal performance. By tackling these challenging requirements
              with the React and Node.js stack, my portfolio website not only
              serves as a showcase of my skills but also as a testament to my
              ability to solve complex coding challenges in a real-world
              context. This project demonstrates my proficiency in leveraging
              these technologies to create robust and highly performant web
              applications.
            </p>
          </div>
        </div>

        {/*End problem section*/}
        {/*Project Boundaries section*/}
        <div className="SolutionSection">
          <span className="SolutionTitle">
            Defining the Project's Boundaries
          </span>
          <div className="SolutionDesc">
            <ul>
              <li>Showcase my web development and design skills.</li>
              <li>Highlight key projects.</li>
              <li>
                Provide a platform for potential clients and employers to
                contact me.
              </li>
            </ul>
          </div>
        </div>

        {/*Project Boundaries section*/}
        {/*Paving the Way to Achievement section*/}
        <div className="SolutionSection">
          <span className="SolutionTitle">Paving the Way to Achievement</span>
          <div className="SolutionDesc">
            <span>
              I followed a user-centered design approach, prioritizing user
              experience and visual appeal. The website needed to be clean,
              intuitive, and responsive.
            </span>
          </div>
        </div>

        {/*Paving the Way to Achievement section*/}
        {/*Step by step  section*/}
        <div className="SolutionSection">
          <span className="SolutionTitle">Building Success Step by Step</span>
          <div className="SolutionDesc">
            <ul>
              <li>
                Design Phase: I began with wireframing and sketching the layout,
                focusing on simplicity and clarity. I chose a minimalistic and
                modern design.
              </li>
              <li>
                Development Phase: I used react and nodejs to build the website.
                The site was made responsive using media queries.
              </li>
              <li>
                Testing and Debugging: Thorough testing was conducted across
                different browsers and devices. Any issues were resolved
                promptly.
              </li>
            </ul>
          </div>
        </div>

        {/*step by step section*/}
        {/*Tools  section*/}
        <div className="SolutionSection">
          <span className="SolutionTitle">
            Exploring the Tools and Technologies in Action
          </span>
          <div className="SolutionDesc">
            <ul>
              <li>React</li>
              <li>NodeJs</li>
              <li>Bootstrap for responsive design</li>
              <li>GitHub for version control</li>
            </ul>
          </div>
        </div>

        {/*Tools section*/}
        {/*Matering the art of section*/}
        <div className="SolutionSection">
          <span className="SolutionTitle">
            Mastering the Art of Programming
          </span>
          <div className="MasteringImg">
            <img
              src={prog1}
              alt="prog1"
              width="100%"
              height="auto"
              className="Bexwork"
            />
            <img
              src={prog2}
              alt="prog2"
              width="100%"
              height="auto"
              className="Bexwork"
            />
          </div>
        </div>

        {/* End of Tatering the art section*/}
        {/*Assurance  section*/}
        <div className="SolutionSection">
          <span className="SolutionTitle">
            Where Excellence Meets Assurance
          </span>
          <div className="SolutionDesc">
            <p>
              The website was rigorously tested on various browsers (Chrome,
              Firefox, Safari, and Edge) and devices (desktop, tablet, and
              mobile). Compatibility issues were resolved to ensure a seamless
              experience.
            </p>
          </div>
        </div>

        {/* End Assurance section*/}

        {/*Lessons  section*/}
        <div className="LessonsSection">
          <span className="SolutionTitle">Lessons That Lead the Way</span>
          <div className="SolutionDesc">
            <p>
              This project taught me the importance of user-centered design and
              thorough testing. It also highlighted the significance of personal
              branding in the digital space.
            </p>
          </div>
        </div>

        {/* End Lessons section*/}
      </div>
      <Footer />
    </div>
  );
}

export default Myportfolio;
