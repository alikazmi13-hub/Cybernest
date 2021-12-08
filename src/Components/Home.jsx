import React from "react";
import reactDom from "react-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Login from "./Login";
import "../Design/Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="Home-cont">
        <Navbar />
        <button>{<Login />}Login</button>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Home;
