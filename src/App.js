import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import Logout from "./Components/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./Features/userSlice";
// import { Router } from "express";
// Main App Function
// ----------------
function App() {
  // check idf we are logged in or loggout
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {/* <div> {user ? <Logout /> : <Login />}</div> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
