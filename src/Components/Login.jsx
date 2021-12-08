import reactDom from "react-dom";
import react from "react";
import Navbar from "./Navbar";
import "../Design/Login.css";
import React, { useState } from "react";
import Footer from "./Footer";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="login">
        <form className="login_form">
          <h1>LOGIN</h1>
          <input type="name" placeholder="Your Name" value="name" onChange="" />
          <input
            type="name"
            placeholder="Your Email"
            value="email"
            onChange=""
          />
          <input
            type="name"
            placeholder="Your Password"
            value="password"
            onChange=""
          />
        </form>
        <Button id="login">LOGIN</Button>
      </div>
    </>
  );
};
export default Login;
