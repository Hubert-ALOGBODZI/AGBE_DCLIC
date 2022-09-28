import React, { useState } from "react";
import axios from "axios";
import Consultationttof from "../images/Contact.jpg";

import "../CSS/Consultation.css";
import NavBar from "./Navbar";

const Consultation = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");
  const [choix, setChoix] = useState("");
  const [rdv, setRdv] = useState("");
  const saveUser = async (e) => {
    e.preventDefault();
    // alert("alert");
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        firstName,
        email,
        age,
        date,
        choix,
        rdv
      });
      // navigate("/");
    } catch (error) {
      console.log;
    }
  };

  return (
    <>
      {/* <NavBar /> */}
      <div
        className="Consultation"
        id="Consultation"
        style={{
          backgroundImage: `url(${Consultationttof})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <h2>Consultation</h2>
        <form action="" onSubmit={saveUser}>
          <div className="infos">
            <div className="infos1">
              <table>
                <tr>
                  <td>
                    <span>Nom *</span>
                  </td>
                  <td>
                    <input
                      type="text"
                      required
                      className="input"
                      maxlength="32"
                      pattern="[A-Za-z]{1,32}"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>
                <br />
                <tr>
                  <td>
                    <span>Prénoms *</span>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="input"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="firstName"
                    />
                  </td>
                </tr>
                <br />
                <tr>
                  <td>
                    <span>Email *</span>
                  </td>
                  <td>
                    <input
                      type="email"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </td>
                </tr>
                <br />
                <tr>
                  <td>
                    <span>Age *</span>
                  </td>
                  <td>
                    <input
                      type="number"
                      className="input"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Age"
                      min="10"
                      max="100"
                    />
                  </td>
                </tr>
                <br />
           

                <tr>
                  <td>
                    <span>Jours du rendez-vous * :</span>
                  </td>
                  <td>
                    <input
                      type="date"
                      className="input"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder="Jour"
                      style={{ width: "100%" }}
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="infos2">
              <button onClick={() => setRdv("en ligne")}>En_Ligne</button>
              <button onClick={() => setRdv("en presentiel")}>
                Présentiel
              </button>
            </div>
            <div className="infos3">
              <span>NB : </span>
              <span>les noms demandé sont celles de vos certificats</span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Consultation;
