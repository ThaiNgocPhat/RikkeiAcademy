import React from "react";
import {Routes, Route, NavLink,useNavigate} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import AboutDetail from "./components/AboutDetail";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const handleChangePageAbout = () => {
    navigate("/about");
  } 
  return (
    <>
        <header className="header">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button onClick={handleChangePageAbout}>About page</button>
        </header>
        <div id="content" className="p-4 p-md-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:id" element={<AboutDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div>404 not found page!!!</div>}></Route>
          </Routes>
        </div>
    </>
  );
}

export default App;
