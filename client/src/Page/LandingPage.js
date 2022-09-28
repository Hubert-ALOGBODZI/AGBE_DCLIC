import React from "react";
import Home from "../components/Home";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/Navbar"
import LandingPage1 from "../components/LandingPage";
import Contact from "../components/Contact";
import LandingNavbar from "../components/LandingNavbar"
import Signup from "../Authentification/Signup";
import Login from "../Authentification/Login";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
        <>
        <LandingNavbar />
        <LandingPage1 />
        <Contact />
        <Footer />
        </>
      /* <Route path="/" element={<Signup />} /> */
      /* </Routes>
    </BrowserRouter> */
  );
};

export default LandingPage;
