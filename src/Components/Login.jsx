import reactDom from "react-dom";
import react from "react";
import Navbar from "./Navbar";
import "../Design/Login.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { login } from "../Features/userSlice";
// main login component function
const Login = () => {
  // use state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Dispatch function
  const dispatch = useDispatch();
  // Handle Submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api", (req, res) => {
        res.send({
          res: "hello i am posting from login axios.post function",
        });
      })
      .then(function (res) {
        console.log(res, "posted");
      })
      .catch(function (error) {
        console.log(error, "not posted");
      });

    // Dispacth
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedin: true,
      })
    );
  };

  // sending data to server

  useEffect(() => {});
  return (
    <>
      <div className="login">
        <form
          className="login_form"
          onSubmit={(e) => handleSubmit(e)}
          method="post"
        >
          <h1>LOGIN</h1>

          <input
            type="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
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
