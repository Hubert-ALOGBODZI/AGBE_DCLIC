import "../CSS/LandingPage.css";
import acctof from "../images/Landingback.jpg";
// import acctof2 from "../images/pexels-cottonbro-7585026.jpg"
import acctof3 from "../images/logo.png";
// import acctof4 from "../images/pexels-pavel-danilyuk-5998516.jpg"
import React from "react";
import { Link } from "react-router-dom";
import Signup from "../Authentification/Signup";
import Login from "../Authentification/Login";
import Localisation from "./Localisation";
import Consultation from "./Consultation";
const LandingPage2 = () => {
  return (
      <div style={{}} className="Home" id="LandingPage">
        <div className="text">
          <div
            className="description"
            style={{
              backgroundImage: `url(${acctof})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition:"top"
            }}
          >
            <div className="desc_card">
              <span>
                <img
                  src={acctof3}
                  style={{ width: 130, height: 80, paddingTop: 9 }}
                  alt=""
                />
              </span>
              <p>
                AGBE EST UN SITE QUI VOUS PERMET DE REPérer le plutôt possible
                une agence de santé proche de vous et de faire des réservations
                pour une consultation en ligne ou en présentiel
              </p>
            </div>
          </div>
          <div className="nessecité">
            <div className="card">
              <span>
                Téléconsulter avec un médecin sous RDV en quelques clics
              </span>
              <Link to="#Consultation">
                <button>RECHERCHER</button>
              </Link>
            </div>
            <div className="card">
              <span>
                Trouvez votre centre de santé près de chez vous avec AGBE
              </span>
              <Link to="#Localisation">
                <button>RECHERCHER</button>
              </Link>
            </div>
            <div className="card">
              <span>
                Demande de consultation d’un médecin en quelques clics
              </span>
              <Link to="#Consultation">
                <button>RECHERCHER</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="noire"></div>
      </div>
  );
};

export default LandingPage2;
