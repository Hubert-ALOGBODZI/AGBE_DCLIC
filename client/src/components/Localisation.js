import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { HospitalImage } from "../Data/Photo_du_centre";
import { HospitalImage1 } from "../Data/Photo_du_centre";
import { HospitalImage2 } from "../Data/Photo_du_centre";
import { HospitalImage3 } from "../Data/Photo_du_centre";

// import acctof from "../images/pexels-ivan-samkov-4989168.jpg"
// import acctof2 from "../images/pexels-cottonbro-7585026.jpg"
// import acctof3 from "../images/logo.png"
import acctof4 from "../images/hopitaux.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "../CSS/Localisation.css";
// import { Container, Row, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

// import {
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";

const Localisation = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Tab 1",
      title: "Title 1",
      content:
        "Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      title: "Title 2",
      content: "Contenido de tab 2.",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      title: "Title 3",
      content: "Contenido de tab 3.",
    },
    {
      id: 4,
      tabTitle: "Tab 4",
      title: "Title 4",
      content: "Contenido de tab 4.",
    },
  ];
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value = "string") => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  return (
    <div className="urgence" id="Localisation">
      <h1>URGENCES</h1>
      <Tabs>
        <div className="hopitaux">
          <div className="hopitaux_left">
            <h3>HOPITAUX PROCHES</h3>

            <TabList className="hopitaux_left">
              <div
                className="different"
                style={{
                  backgroundImage: `url(${acctof4})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  objectFit:"cover"
                }}
              >
                <Tab>
                  <div className="card">
                    <span>Centre Hospitalier Régional de Lomé-Commune</span>
                    <p>à 100 m de chez vous</p>
                  </div>
                </Tab>
                <Tab>
                  <div className="card">
                    <span>Clinique Grace Merveilleuse</span>
                    <p>à 200 m de chez vous</p>
                  </div>
                </Tab>
                <Tab>
                  <div className="card">
                    <span>Hôpital de bé</span>
                    <p>à 400 m de chez vous</p>
                  </div>
                </Tab>
                <Tab>
                  <div className="card">
                    <span>Clinique Santé Pour Tous</span>
                    <p>à 600 m de chez vous</p>
                  </div>
                </Tab>
                <Tab>
                  <div className="card">
                    <span>Clinique St Bernardin</span>
                    <p>à 1 km de chez vous</p>
                  </div>
                </Tab>
              </div>
            </TabList>
          </div>

          <div className="hopitaux_right">
            <TabPanel>
              <h3>Centre Hospitalier Régional de Lomé-Commune</h3>
              <p>
                <div className="info_hopital">
                  <div className="visuel">
                    <div className="visuel1">
                      <h4>VISUEL DU CENTRE</h4>
                      <div className="card_visuel">
                        {HospitalImage1.map((post) => {
                          return (
                            <div className="card">
                              <img
                                src={post.img}
              
                                style={{ width: "100%", height: "100%",objectFit:"cover" }}
                                alt=""
                              />
                            </div>
                          );
                        })}
                        {/* <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
        </div> */}
                      </div>
                    </div>

                    <div className="spécialités">
                      <h4>SPÉCIALITÉS</h4>
                      <div className="info">
                        <span> Endocrinologie</span>
                        <br />
                        <span> Oncologie médicale</span>
                        <br />
                        <span>Génétique médicale</span>
                        <br />
                        <span> Gynécologie</span>
                        <br />
                        <span>continus Urologie</span>
                        <br />
                      </div>
                    </div>
                    <div className="map_director">
                      <div className="message">
                        clique pour réserver une place --
                      </div>
                      <Button style={{ width: "50%", height: "60%" }}>
                        <a href="https://goo.gl/maps/CZuPg8Dom5mm1sas6">
                          Itinéraire
                        </a>
                      </Button>{" "}
                      {/* <Link to="/Home"> */}
                      {/* <button>Itinéraire</button> */}
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </p>
            </TabPanel>
            <TabPanel>
              <h3>Clinique Grace Merveilleuse</h3>

              <p>
                <div className="info_hopital">
                  <div className="visuel">
                    <div className="visuel1">
                      <h4>VISUEL DU CENTRE</h4>
                      <div className="card_visuel">
                        {HospitalImage.map((post) => {
                          return (
                            <div className="card">
                              <img
                                src={post.img}
                                style={{ width: "100%", height: "100%",objectFit:"cover" }}
                                alt=""
                              />
                            </div>
                          );
                        })}
                        {/* <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
        </div> */}
                      </div>
                    </div>

                    <div className="spécialités">
                      <h4>SPÉCIALITÉS</h4>
                      <div className="info">
                        <span>Médecine nucléaire</span>
                        <br />
                        <span>Pharmacie</span>
                        <br />
                        <span>Chirurgie thoracique</span>
                        <br />
                        <span> Radiothérapie Soins</span>
                        <br />
                        <span>Radiologie</span>
                        <br />
                      </div>
                    </div>
                    <div className="map_director">
                      <div className="message">
                        clique pour réserver une place --
                      </div>
                      {/* <Link to="/Home"> */}
                      <Button style={{ width: "50%", height: "60%" }}>
                        <a href="https://goo.gl/maps/nmk1pNR3XPYeB8YR6">
                          Itinéraire
                        </a>
                      </Button>{" "}
                      {/* <button >
                        {" "}
                        
                      </button> */}
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </p>
            </TabPanel>
            <TabPanel>
              <h3>Hôpital de bé</h3>

              <p>
                <div className="info_hopital">
                  <div className="visuel">
                    <div className="visuel1">
                      <h4>VISUEL DU CENTRE</h4>
                      <div className="card_visuel">
                        {HospitalImage2.map((post) => {
                          return (
                            <div className="card">
                              <img
                                src={post.img}
                                style={{ width: "100%", height: "100%",objectFit:"cover" }}
                                alt=""
                              />
                            </div>
                          );
                        })}
                        {/* <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
        </div> */}
                      </div>
                    </div>

                    <div className="spécialités">
                      <h4>SPÉCIALITÉS</h4>
                      <div className="info">
                        <span>
                          {" "}
                          Endocrinologie Oncologie médicale continus Urologie
                        </span>
                        <br />
                        <span> Gastro-entérologie</span>
                        <br />
                        <span>Génétique médicale</span>
                        <br />
                        <span> Gynécologie</span>
                        <br />
                        <span>Pneumologie </span>
                        <br />
                      </div>
                    </div>
                    <div className="map_director">
                      <div className="message">
                        clique pour réserver une place --
                      </div>
                      <Button style={{ width: "50%", height: "60%" }}>
                        <a href="https://goo.gl/maps/Z6EEqdmY75ojRaDt6">
                          Itinéraire
                        </a>
                      </Button>{" "}
                      {/* <Link to="/Home"> */}
                      {/* <button>Itinéraire</button> */}
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </p>
            </TabPanel>
            <TabPanel>
              <h3>Clinique Santé Pour Tous</h3>

              <p>
                <div className="info_hopital">
                  <div className="visuel">
                    <div className="visuel1">
                      <h4>VISUEL DU CENTRE</h4>
                      <div className="card_visuel">
                        {HospitalImage.map((post) => {
                          return (
                            <div className="card">
                              <img
                                src={post.img}
                                style={{ width: "100%", height: "100%",objectFit:"cover" }}
                                alt=""
                              />
                            </div>
                          );
                        })}
                        {/* <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
        </div> */}
                      </div>
                    </div>

                    <div className="spécialités">
                      <h4>SPÉCIALITÉS</h4>
                      <div className="info">
                        <span>Médecine nucléaire</span>
                        <br />
                        <span>Pharmacie</span>
                        <br />
                        <span>Chirurgie thoracique</span>
                        <br />
                        <span> Radiothérapie Soins</span>
                        <br />
                        <span>Radiologie</span>
                        <br />
                      </div>
                    </div>
                    <div className="map_director">
                      <div className="message">
                        clique pour réserver une place --
                      </div>
                      {/* <Link to="/Home"> */}
                      <Button style={{ width: "50%", height: "60%" }}>
                        <a href="https://goo.gl/maps/jeDFpGbDSfzy75BU8">
                          Itinéraire
                        </a>
                      </Button>{" "}
                      {/* <button >
                        {" "}
                        
                      </button> */}
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </p>
            </TabPanel>
            <TabPanel>
              <h3>Clinique Médico Cardiologique Coeur de Grace</h3>

              <p>
                <div className="info_hopital">
                  <div className="visuel">
                    <div className="visuel1">
                      <h4>VISUEL DU CENTRE</h4>
                      <div className="card_visuel">
                        {HospitalImage3.map((post) => {
                          return (
                            <div className="card">
                              <img
                                src={post.img}
                                style={{ width: "100%", height: "100%",objectFit:"cover", borderRadius:"8px" }}
                                alt=""
                              />
                            </div>
                          );
                        })}
                        {/* <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
            <div className="card">
            <img src={acctof4} style={{ width: "100%", height: "100%"}} alt="" />
            </div>
        </div> */}
                      </div>
                    </div>

                    <div className="spécialités">
                      <h4>SPÉCIALITÉS</h4>
                      <div className="info">
                        <span>Anatomie pathologique</span>
                        <br />
                        <span>Chirurgie digestive</span>
                        <br />
                        <span>Chirurgie thoracique</span>
                        <br />
                        <span> Neurochirurgie</span>
                        <br />
                        <span>Radiologie</span>
                        <br />
                      </div>
                    </div>
                    <div className="map_director">
                      <div className="message">
                        clique pour réserver une place --
                      </div>
                      {/* <Link to="/Home"> */}
                      <Button style={{ width: "50%", height: "60%" }}>
                        <a href="https://goo.gl/maps/B6jbUsH7Do1ZPgkK9">
                          Itinéraire
                        </a>
                      </Button>{" "}
                      {/* <button >
                        {" "}
                        
                      </button> */}
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </p>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Localisation;
