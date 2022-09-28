// import {
//     MDBCarousel,
//     MDBCarouselItem,
// } from 'mdb-react-ui-kit';

// import{ Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import LandingPage from "./LandingPage"

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { BrowserRouter as Router, Routes } from 'react-router-dom';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Navbar";
import LandingPage from "./LandingPage";
import Localisation from "./Localisation";
import Contact from "./Contact";
import Consultation from "./Consultation";
import Doctors from "./Doctors";
import Footer from "./Footer";
import "../CSS/Home.css";
const Home = () => {
  return (
    <>
    <NavBar />
    <LandingPage />
    <Localisation />
    <Contact />
    <Footer />
    </>
    // <BrowserRouter>
    //   <div className="Home">
    //     <Routes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/Localisation" element={<Localisation />} />
    //       <Route path="/Contact" element={<Contact />} />
    //       <Route path="/Footer" element={<Footer />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
};

export default Home;
