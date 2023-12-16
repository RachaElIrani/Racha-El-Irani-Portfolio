import React from 'react';
import './style.css';
import phone from "../../images/phone.svg";
function Footer() {
  return (
    <div className="FooterContainer">
    <span className='footerLogo'>RachaElIrani © 2023 All rights reserved.</span>
    <div className='phone'>
    <img src={phone} alt="phone" width="20px" height="20px" />
    <span className='phonenumber'>+961 03344676</span>
    </div>
  
    </div>
  );
}

export default Footer;