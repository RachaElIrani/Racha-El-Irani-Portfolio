import React, { useState, useRef,useEffect } from "react";
import "./style.css";
import Button from "../Button/button";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Snackbar from "../Snackbar/snackbar";

function InputForm() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [success, setsuccess] = useState(null);
  const [nodata, setnodata] = useState(false);
  const [themessage, setthemessage] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (name == '' || email == '' || message == '') {
      setnodata(true);
      setthemessage("Faild to sent email. Please fill all info");
    } else {
   
      emailjs
        .sendForm(
          "service_7utq8cm",
          "template_3jutrby",
          form.current,
          "e_-KNJ5RQULaxB210"
        )
        .then(
          (result) => {
            // console.log(result.text);
            setnodata(false);
            setthemessage("Email Successfully sent");
            setsuccess(true);
            setemail('');
            setname('');
            setmessage('');
        
          },
          (error) => {
            console.log(error.text);
            setnodata(false);
            setthemessage("Faild to sent email. Please contact us on +961 03344676");
            setsuccess(false);
          }
        );
  

    }

  };
  useEffect(() => {
    const timer = setTimeout(() => {
      // After 4 seconds, set showText to false to hide the text
      setthemessage(null);
    }, 4000);

    // Clear the timer if the component is unmounted or if inputValue changes
    return () => clearTimeout(timer);
  }, [themessage]);
  const handleInputChangename = (event) => {
    setname(event.target.value);
  };
  const handleInputChangeemail = (event) => {
    setemail(event.target.value);
  };
  const handleInputChangemessage = (event) => {
    setmessage(event.target.value);
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="FormContainer">
      <span className="FormTitle">Let's Create Together</span>
      <div className="Form">
        <div style={{ gap: "8px", display: "flex", flexDirection: "column" }}>
          <span className="lable">Full Name</span>
          <input
            type="text"
            className="Forminput"
            placeholder="Enter your full name"
            name="user_name"
            value={name}
            onChange={handleInputChangename}
            required
          />
        </div>
        <div style={{ gap: "8px", display: "flex", flexDirection: "column" }}>
          <span className="lable">Email</span>
          <input
            type="text"
            className="Forminput"
            placeholder="Enter your email address"
            name="user_email"
            value={email}
            onChange={handleInputChangeemail}
            required
          />
        </div>
        <div style={{ gap: "8px", display: "flex", flexDirection: "column" }}>
          <span className="lable">Message</span>
          <textarea
            id="myTextArea"
            className="textarea"
            rows="4" // Specify the number of visible text lines
            cols="50" // Specify the number of visible text columns
            placeholder="Enter your Message"
            name="message"
            value={message}
            onChange={handleInputChangemessage}
            required
          ></textarea>
            {success == true && nodata== false? (
             <span style={{color:"#30c675"}}>{themessage}</span>
          ) : (
            <>  {success == false && nodata== false ? (
              <span style={{color:"#EA3A3D"}}>F{themessage}</span>
          ) : (
            <span style={{color:"#EA3A3D"}}>{themessage}</span>
          )}</>
          )}
        </div>
        <div className="Buttondiv">
          <Button
            name="Send Message"
            style="activebutton"
            onClick={sendEmail}
          />
          {/* {success == true ? (
            <Snackbar type="success" text="Email Successfully Sent" />
          ) : (
            <></>
          )}
          {success == false ? (
            <Snackbar
              type="error"
              text="Email faild please contact us on +961 03344676"
            />
          ) : (
            <></>
          )}
          {nodata == true ? <Snackbar type="error" text="Enter Data" /> : <></>} */}
        </div>
      </div>
    </form>
  );
}

export default InputForm;
