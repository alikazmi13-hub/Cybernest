import React from "react";
import reactDom from "react-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Design/Contact.css";
import { useState, useEffect } from "react";

//Main Function Contact
const Contact = () => {
  //contacstData Function
  const contactsData = {
    txt_name: "",
    txt_email: "",
    txt_phone: "",
    txt_msg: "",
  };

  // UseState
  const [contactData, setContactData] = useState(contactsData);
  //Getting Form Data as varibales
  const { txt_name, txt_email, txt_phone, txt_msg } = contactData;

  //Send message

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("your Message is sent");
  };

  const onChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.txtName]: e.target.value,
      [e.target.txt_email]: e.target.value,
      [e.target.txt_phone]: e.target.value,
      [e.target.txt_msg]: e.target.value,
    });
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form method="post" onSubmit={onSubmit}>
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  onChange={onChange}
                  value={txt_name}
                  id="txt_name"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name "
                  // value=""
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={txt_email}
                  id="txt_email"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                  // value=""
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={txt_phone}
                  id="txt_phone"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  // value=""
                  // // onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    name="txtMsg"
                    id="txt_msg"
                    value={txt_msg}
                    className="form-control"
                    placeholder="Your Message *"
                    // onChange={(e) => setMessage(e.target.value)}
                    // style={{ width: "100%", height: "150px" }}
                  ></textarea>
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    onClick={onSubmit}
                    name="btnSubmit"
                    className="btnContact"
                    value="Send Message"
                    // onClick={submitValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
};
// export { submitValue, frmDetails };
export default Contact;
