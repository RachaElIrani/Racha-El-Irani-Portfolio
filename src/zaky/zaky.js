import React, { useEffect, useRef, useState } from 'react';
import "./style.css";
import Header from "../Components/Header/header";
import zakyimage from "../images/zaky/zaky.png";
import Role from "../images/Role.png";
import persona1 from "../images/zaky/persona1.png";
import persona2 from "../images/zaky/persona2.png";
import persona3 from "../images/zaky/persona3.png";
import Discovery from "../Components/Discovery/Discovery";
import Flight from "../Components/Flight/Flight";
import map1 from "../images/zaky/map1.png";
import map2 from "../images/zaky/map2.png";

import color from "../images/zaky/color.png";
import Components1 from "../images/zaky/componet1.png";
import Components2 from "../images/zaky/component2.png";
import typography from "../images/zaky/typography.png";

import Creativity from "../Components/Creativity/Creativity";

import mock1 from "../images/zaky/mockup1.png";
import mock2 from "../images/zaky/mockup2.png";
import mock3 from "../images/zaky/mockup3.png";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Menu/Menu";
import { useHistory } from "react-router-dom";
function Zaky(props) {
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
            <span className="InsideLookTitle">An Inside Look at zaky</span>
            <span className="InsideLookDesc">
              zaky is a digital wallet that helps you transact without a bank
              account. With Zaky, you can effortlessly pay bills, access digital
              vouchers, manage E-SIM connectivity, redeem gaming vouchers,
              recharge globally, purchase internet vouchers, create payment
              links, receive QR payments, top up mobile balances, send and
              request money, scan to pay at stores, and split bills with
              friends. It's your passport to a world where financial
              transactions and lifestyle enhancements merge seamlessly, putting
              control and convenience at your fingertips. 
            </span>
          </div>
          <img
            src={zakyimage}
            alt="zaky"
            width="45%"
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
            width="45%"
            height="auto"
            className="Bexwork"
          />
          <div className="Roletext">
            <span className="RoleTitle">What I Bring to The Table</span>
            <span className="RoleDesc">
              My role in this project encompassed the following
              responsibilities:
              <ul>
                <li>Revisiting the sitemap and user flow for the mobile app</li>
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
              In the context of our focused case study concerning a digital
              wallet app , a pressing issue has come to light that demands
              immediate attention.
            </p>
            <p>
              In the world of digital wallets, our main challenge is dealing
              with the complexity caused by offering so many different services
              on one app. While having lots of services can be a good thing, it
              can sometimes be confusing and make it hard for users to use them
              effectively. As digital wallets keep growing to include more
              financial, payment, and lifestyle options, it's really important
              to solve this problem. This way, we can make sure that people can
              easily and efficiently manage their money and transactions while
              having a smooth and user-friendly experience.
            </p>
          </span>
        </div>

        {/*End Challenge section*/}
        {/*Problem section*/}
        <div className="SolutionSection">
          <span className="SolutionTitle">The Winning Formula</span>
          <div className="SolutionDesc">
            <span className="Decs1Title">
              Enhancing the Mobile application for Optimal User Experience
            </span>
            <p className="Decs1Desc">
              In the context of our focused case study concerning a digital
              wallet app , a comprehensive analysis has revealed several
              critical challenges that warrant immediate attention. The primary
              focus of our solution centers around addressing the mobile's
              inadequate feature set, outdated mobile design, and deficiencies
              in user experience within specific user segments. These challenges
              collectively contribute to a diminished user satisfaction and
              hinder the mobile's ability to effectively cater to the diverse
              needs of its users.
            </p>

            <ol>
              <li className="Decs1Title">Categorized Service Structure:</li>
              <p className="Decs1Desc">
                <ul>
                  • Categorize services into logical groups (e.g., financial,
                  payments, lifestyle) for a clearer organization.
                  <br />• Utilize intuitive icons to visually distinguish
                  between service categories
                </ul>
              </p>
              <li className="Decs1Title">Modular Design:</li>
              <p className="Decs1Desc">
                <ul>
                  • Adopt a modular design approach that allows users to
                  customize their dashboard based on their frequently used
                  services.
                  <br />• Provide a set of predefined templates for different
                  user personas, easing the setup process.
                </ul>
              </p>
              <li className="Decs1Title">Smart Search and Navigation:</li>
              <p className="Decs1Desc">
                <ul>
                  • Implement a robust search feature that enables users to
                  quickly find and access any service within the app.
                  <br />• Utilize an intuitive and user-friendly navigation
                  system that maintains consistency across services.
                </ul>
              </p>
              <li className="Decs1Title">Services Recommendation:</li>
              <p className="Decs1Desc">
                <ul>• Display the services that the user uses the most.</ul>
              </p>
              <li className="Decs1Title">Savings</li>
            </ol>
          </div>
        </div>

        {/*End Challenge section*/}
        <Discovery
          per1={persona1}
          per2={persona2}
          per3={persona3}
          text=" When aiming to create a great user experience, it's vital to understand the viewpoints of people who use a product or service. In our study of a digital wallet app, we see how important it is to meet the needs of different users, each with their own unique requirements and reasons.
          Furthermore, we initiated the user research to put together a detailed competitive analysis and identify the target audience for the development of different personas and the formation of different assumptions."
        />
        <Flight
          map1={map1}
          map2={map2}
          flowsection={false}
          text="Once the problems were identified, the brainstorming began, and the team and I started to come up with effective solutions to enhance the app. "
          mappingtext="For mapping, I display all existing features and introduce new ones, such as savings, service categorization, and budgeting."
        />
          <Creativity
          colorImage={color}
          TypoghraphyImage={typography}
          Components1={Components1}
          Components2={Components2}
          mobile={true}
          mock1={mock1}
          mock2={mock2}
          mock3={mock3}
      
        />
      </div>
      <Footer/>
    </div>
  );
}

export default Zaky;
