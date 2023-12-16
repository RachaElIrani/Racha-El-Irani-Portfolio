import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Header from "../Components/Header/header";

import bex from "../images/BexCase.png";
import Role from "../images/Role.png";
import Discovery from "../Components/Discovery/Discovery";
import persona1 from "../images/Bex/persona1.png";
import persona2 from "../images/Bex/persona2.png";
import persona3 from "../images/Bex/persona3.png";
import Flight from "../Components/Flight/Flight";
import map1 from "../images/Bex/map1.png";
import map2 from "../images/Bex/map2.png";
import flow1 from "../images/Bex/flow1.png";
import flow2 from "../images/Bex/flow2.png";
import color1 from "../images/Bex/color1.png";
import Components1 from "../images/Bex/Components1.png";
import Components2 from "../images/Bex/Components2.png";
import typography from "../images/Bex/typography.png";
import Login from "../images/Bex/login 1.png";
import Country from "../images/Bex/countries 1.png";
import Business from "../images/Bex/business overview.png";
import Creativity from "../Components/Creativity/Creativity";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Menu/Menu";
import { useHistory } from "react-router-dom";
function Bex(props) {
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
            <span className="InsideLookTitle">An Inside Look at BEX</span>
            <span className="InsideLookDesc">
              BEX is an expense tracking software service that aims to help
              businesses manage their expenses more efficiently. The service
              allows users to upload, organize, and store their receipts,
              invoices, and other financial documents in a single, centralized
              location. BEX uses OCR (Optical Character Recognition) technology
              to extract data from the uploaded receipts and categorizes them
              into different expense categories, making it easier for users to
              track and manage their spending. Additionally, users can also use
              the software to generate expense reports and export data.
            </span>
          </div>
          <img
            src={bex}
            alt="bex"
            width="534px"
            height="auto"
            className="Bexwork"
          />
        </div>
        {/* End of In Inside look section*/}

        {/*Role section*/}
        <div className="RoleSection">
          <img
            src={Role}
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
                <li>
                  Revisiting the sitemap and user flow for the web portals.
                </li>
                <li>Handling the UX/UI aspect of the project.</li>
                <li>
                  Creating the visual identity and aesthetics of the new design
                  system.
                </li>
                <li>
                  Coordinating and collaborating with the rest of the team,
                  including developers, the project owner, and graphic
                  designers, to ensure an integrated and seamless user
                  experience.
                </li>
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
              In the context of our focused case study concerning a business
              expense portal, a pressing issue has come to light that demands
              immediate attention.
            </p>
            <p>
              The primary challenge at hand revolves around the portal's
              inadequate feature set, its outdated web design in comparison to
              industry competitors, and a notable deficiency in user experience
              across specific segments. A critical aspect of the problem lies in
              the portal's lack of essential features, hindering its ability to
              effectively meet the diverse needs of its users. Furthermore, the
              visual design of the web portal has become increasingly obsolete,
              causing it to pale in comparison to the modern aesthetics adopted
              by rival platforms. This disparity in design negatively impacts
              the portal's perceived value and usability.
            </p>
            <p>
              Moreover, user feedback has indicated that certain elements of the
              user experience fall short of expectations, resulting in
              frustration and diminished user satisfaction. Another facet of the
              challenge stems from the suboptimal structural layout of the
              portal, which impedes seamless navigation and efficient task
              completion.
            </p>
          </span>
        </div>

        {/*End Challenge section*/}
        {/*Problem section*/}
        <div className="SolutionSection">
          <span className="SolutionTitle">The Winning Formula</span>
          <div className="SolutionDesc">
            <span className="Decs1Title">
              Enhancing the Business Expense Portal for Optimal User Experience
            </span>
            <p className="Decs1Desc">
              In the context of our focused case study concerning a business
              expense portal, a comprehensive analysis has revealed several
              critical challenges that warrant immediate attention. The primary
              focus of our solution centers around addressing the portal's
              inadequate feature set, outdated web design, and deficiencies in
              user experience within specific user segments. These challenges
              collectively contribute to a diminished user satisfaction and
              hinder the portal's ability to effectively cater to the diverse
              needs of its users.
            </p>

            <ol>
              <li className="Decs1Title">
                Augmenting Feature Set to Fulfill User Needs:
              </li>
              <p className="Decs1Desc">
                A fundamental aspect of our solution involves a strategic
                enhancement of the portal's feature set. Through a rigorous
                process of user research, we will identify and prioritize the
                missing functionalities that are essential for fulfilling the
                diverse needs of our users. This will be achieved by conducting
                surveys, user interviews, and analyzing industry best practices.
                The integration of these new features will empower users to
                perform tasks more efficiently and streamline their expense
                management processes.
              </p>
              <li className="Decs1Title">
                Simplifying and Enhancing Modern Web Design Aesthetics:
              </li>
              <p className="Decs1Desc">
                To address the concern surrounding the outdated visual design of
                the portal, our solution includes a comprehensive redesign to
                bring the interface up to contemporary standards. By leveraging
                the latest design trends, color schemes, and typography choices,
                we will create a visually appealing and engaging user interface.
                This redesign will align the portal's aesthetics with modern
                industry standards, enhancing its perceived value and attracting
                more users.
              </p>
              <li className="Decs1Title">
                Elevating User Experience Through Iterative Design:
              </li>
              <p className="Decs1Desc">
                User experience lies at the core of our solution. We will
                undertake a thorough analysis of user feedback, identifying pain
                points and areas of frustration. Through iterative design
                processes, we will redesign and optimize the user interactions
                that currently fall short of expectations. This includes
                refining the information architecture, simplifying navigation
                pathways, and improving the overall usability to ensure a
                seamless and satisfying user journey.
              </p>
              <li className="Decs1Title">
                Enhancing Structural Layout for Intuitive Navigation:
              </li>
              <p className="Decs1Desc">
                Our solution addresses the suboptimal structural layout . By
                employing information hierarchy principles and following best
                practices in user interface design, we will restructure the
                portal's layout. This restructuring will ensure that users can
                effortlessly locate desired features and complete tasks without
                unnecessary friction.
              </p>
            </ol>
          </div>
        </div>

        {/*End Challenge section*/}
        <Discovery
          per1={persona1}
          per2={persona2}
          per3={persona3}
          text=" When aiming to create a great user experience, it's vital to
          understand the viewpoints of people who use a product or service. In
          our study of a business expense portal, we see how important it is to
          meet the needs of different users, each with their own unique
          requirements and reasons. Furthermore, we initiated the user research
          to put together a detailed competitive analysis and identify the
          target audience for the development of different personas and the
          formation of different assumptions."
        />
        <Flight
          map1={map1}
          map2={map2}
          flowsection={true}
          flow1={flow1}
          flow2={flow2}
          text="  Once the problems were identified, the brainstorming began, and the
          team and I started to come up with effective solutions to enhance the
          Portal."
          mappingtext="For each mapping, I established a corresponding relationship between
          users from distinct view."
        />
        <Creativity
          colorImage={color1}
          TypoghraphyImage={typography}
          Components1={Components1}
          Components2={Components2}
          Login={Login}
          Country={Country}
          business={Business}
          mobile={false}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Bex;
