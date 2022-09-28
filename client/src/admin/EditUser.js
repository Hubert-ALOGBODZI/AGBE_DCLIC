import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/EditUser.css"
// import { getUserById } from "../../../server/controllers/UserController";
const EditUser = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");
  const [choix, setChoix] = useState("");
  const [rdv, setRdv] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
 
    // const response = await axios.get(`http://localhost:5000/users/${id}`);
    return await axios.get(`http://localhost:5000/users/${id}`)
    .then((response) =>{
      
      setName(response.data.name);
      setFirstName(response.data.firstName);
      setEmail(response.data.email);
      setDate(response.data.date);
      setAge(response.data.age);
      setChoix(response.data.choix);
      setRdv(response.data.rdv);
      
    } )
    // setUser(response.data);
    // console.log(response);
  };

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        firstName,
        email,
        date,
        age,
        choix,
        rdv,
      });
      navigate("/crudalogbodzihubert");
    } catch (error) {
      console.log('error');
    }
  };

  return (



    <div className="Consultation">
      <h2>Consultation</h2>
      <form onSubmit={saveUser}>
        <div className="infos">
          <div className="infos1">
            <table>
              <tr>
                <td>
                  <span>Nom De Famille *</span>
                </td>
                <td>
                  <input
                    type="text"
                    required
                    className="input"
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
                  <span>Email</span>
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
                  <span>Age</span>
                </td>
                <td>
                  <input
                    type="number"
                    className="input"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                  />
                </td>
              </tr>
              <br />

              <br />
              <tr>
                  <td>
                    <span>Choisis *</span>
                  </td>
                  <td>
                    <select
                      name="languages"
                      style={{ width: "100%", height: "40px", outline: "none", borderRadius:"5px" }}
                      value={choix}
                      onChange={(e) => setChoix(e.target.value)}
                    >
                      <option value="Endocrinologie">Endocrinologie</option>
                      <option value="Oncologie">Oncologie médicale </option>
                      <option value="Génétique">Génétique médicale</option>
                      <option value="Gynécologie" selected>
                        Gynécologie
                      </option>
                      <option value="Urologie">continus Urologie</option>
                      <option value="Chirurgie thoracique">
                        Chirurgie thoracique
                      </option>
                      <option value="Gastro-entérologie">
                        Gastro-entérologie
                      </option>
                      <option value="Pneumologie">Pneumologie </option>
                      <option value="Gastro-entérologie">
                        Gastro-entérologie
                      </option>
                    </select>
                    {/* <input
                      type="number"
                      className="input"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Age"
                      min="10"
                      max="100"
                    /> */}
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
            <button onClick={() => setRdv("en presentiel")}>Présentiel</button>
          </div>
          <div className="infos3">
            <span>NB : </span>
            <span>les noms demandé sont celles de vos certificats</span>
          </div>
        </div>
      </form>
    </div>








  );
};

export default EditUser;
