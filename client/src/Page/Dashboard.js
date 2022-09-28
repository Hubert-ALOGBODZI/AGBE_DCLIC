import React from 'react'
import Consultation from '../components/Consultation'
import Localisation from '../components/Localisation'
import NavBar from '../components/Navbar'
import Admin from '../components/Admin'
import LandingPage2 from '../components/LandingPage2'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>
     <NavBar />
     <LandingPage2 />
    <Consultation />
    <Localisation />
    <Contact />
    <Footer />
    </>
  )
}

export default Dashboard




