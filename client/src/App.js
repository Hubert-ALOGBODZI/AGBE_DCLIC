// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Consultation from "./components/Consultation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Geolocalisation from "./Geolocalisation/Geolocalisation";

// import Login from "./Authentification/Login";

// import Signup from "./Authentification/Signup";
// import HomeA from "./Authentification/HomeA";

import UserList from "./admin/UserList";
import AddUser from "./admin/AddUser";
import EditUser from "./admin/EditUser";
// import Admin from "./components/Admin";
// import About from "./components/About";
// import Doctors from "./components/Doctors";

import NavBar from "./components/Navbar";
import { auth } from "./Authentification/Firebase";
import { useEffect } from "react";
import { useState } from "react";
import Signup from "./Authentification/Signup";
import Login from "./Authentification/Login";
//
import { hasAuthentificated } from "./context/ServiceContext/ServiceContext";
import ContextAuth from "./ContextAuth/ContextAuth";
import AuthentificatedRoute from "./AuthentificatedRoute/AuthentificatedRoute";
// import Sectionadmin from "./AdminH/Sectionadmin";
import LandingPage from "./Page/LandingPage";
import Dashboard from "./Page/Dashboard";
import Erro from "./Erro";
import Admin from "./components/Admin"

function App() {
  // const [userName, setUserName] = useState("");
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else setUserName("");
  //     // console.log(user);
  //   });
  // }, []);
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  return (
    // <ContextAuth.Provider value={{ isAuthentificated }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* <Route element={<AuthentificatedRoute isLogged={isLogged}  />} > */}
              <Route exact path="/Dashboardalogbodzi" element={<Dashboard />}    />
              {/* <Route exact element={<Admin />} path="/Adminalogbodzi" /> */}
            {/* </Route> */}
            <Route index element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/crudalogbodzihubert" element={<Admin />} />
            <Route path="/addalogbodzihubert" element={<AddUser />} />
            <Route path="/crudalogbodzihubert/:id" element={<EditUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Erro" element={ <Erro /> } />
            <Route path="/*" element={ <Navigate to="/Erro" replace/> } />
          </Routes>
          {/* <Routes>
        </Routes> */}
        </div>
      </BrowserRouter>
    // </ContextAuth.Provider>
  );
}

export default App;
