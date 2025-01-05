import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home.jsx";
import About from "../Component/About.jsx";
// import Contact from "./components/Contact";
// import Services from "./components/Services";
import Layout from "../Component/Layout.jsx";
import Project from "../Component/Project.jsx";
import Footer from "../Component/Footer.jsx";

const MainRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/project" element={<Project />} />
        {/* 
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
};
export default MainRouter;
