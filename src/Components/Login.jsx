import reactDom from "react-dom";
import react from "react";
import Navbar from "./Navbar";
import "../Design/Login.css";
import React, { useState } from "react";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { login } from "../Features/userSlice";
// import "../Design/Navbar.css";
// import "../Design/Footer.css";
// Main Component Function
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    // here we are input some data to some slice or reducer
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedin: true,
      })
    );
  };

  return (
    <>
      <div className="login">
        <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
          <h1>LOGIN</h1>

          <input
            type="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="name"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="name"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_btn">
            LOGIN
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default Login;
