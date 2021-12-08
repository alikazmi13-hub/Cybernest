import react from "react";
import reactDom from "react-dom";
import "../Design/About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <div className="container-about">
        <Navbar />
        <div className="row-about">
          <h1 id="ab">WELCOME TO ABOUT PAGE</h1>
          <textarea>
            we provide IT solution services online.You can contact us for yout
            projects. we will provide you best services
          </textarea>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default About;
