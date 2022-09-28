import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "./InputControl";
import { auth } from "./Firebase";
import Dashboard from "../Page/Dashboard";

import "../CSS/Login.css";

function Login() {



  // const [isLogged, setIsLogged] = useState(true);


  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.password) {
      setErrorMsg("Fill all fields");
      // return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        // console.log(user);
        navigate("/Dashboardalogbodzi");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="Login" id="login">
      <div className="innerBox">
        <h2 className="heading">Login</h2>

        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter  Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className="footer">
          <b className="error">{errorMsg}</b>
          <button  onClick={() => {
              setSubmitButtonDisabled(true);
              handleSubmission();
              // setIsLogged(false)
            }}
            // isLogged={isLogged} 
            disabled={submitButtonDisabled}>Login</button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
