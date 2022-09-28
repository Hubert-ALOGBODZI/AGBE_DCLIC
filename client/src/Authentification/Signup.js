// import React from 'react'

// const Signup = () => {
//   return (
//     <div>Signup</div>
//   )
// }

// export default Signup

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {useForm} from "react-hook-form"

import InputControl from "./InputControl";

import "../CSS/Signup.css";
import { createUserWithEmailAndPassword,updateProfile} from "firebase/auth";

import { auth } from "./Firebase";

const Signup = () => {


    const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmission = () => {

    if (!values.name || !values.email || !values.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    // console.log(values);

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async(res) => {
          setSubmitButtonDisabled(false);
          const user = res.user;
         await updateProfile(user,{
              displayName:values.name,
            });
            
        navigate("/Dashboardalogbodzi");
        // console.log(user);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        // console.log("Error", err.message);
      });
  };

const  {handleSubmit} = useForm();


//   const InpTxt = document.getElementById('monInpTxt');

//   InpTxt.setCustomValidity('Hubert Champ vide')

  return (
    <div className="Signup" id="signup">
      <div className="innerBox">
        <h2 className="heading">Sign Up</h2>

        <InputControl
          label="Name"
          id="monInpTxt"
          required
          pattern="^[A-Za-z]{3,16}$"
          placeholder="Enter Name address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
        //   pattern="[]"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          pattern="[^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}"
          placeholder="Enter  Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className="footer">
          <p className="error">{errorMsg}</p>
          <button
            onClick={() => {
              setSubmitButtonDisabled(true);
              handleSubmission();
            }}
            disabled={submitButtonDisabled}
          >
            Signup
          </button>
          <p>
            Already have an Account ?{" "}
            <span>
              <Link to="/Login">Login </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
