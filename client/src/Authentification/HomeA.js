import React from "react";
import { Link } from "react-router-dom";

const HomeA = (props) => {
  return (
    <div>
      <div>
        <h3>
          <Link to="/Login">Login</Link>
        </h3><br />
        <h3>
          <Link to="/Signup">Signup</Link>
        </h3>
      </div>
      <br /><br /><br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please" }</h2>
    </div>
  );
};

export default HomeA;
