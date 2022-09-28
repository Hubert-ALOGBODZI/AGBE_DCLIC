import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../CSS/UserList.css"

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
    // console.log(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="columns" id="UserList">
      <Link to="/addalogbodzihubert" className="button is-success">
        Add New
      </Link>

      <div className="column is-half">
        <table className="table is-striped is fillwidth mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>firstName</th>
              <th>email</th>
              <th>age</th>
              <th>date</th>
              <th>rdv</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.date}</td>
                <td>{user.rdv}</td>
                <td>
                  <Link to={`${user._id}`}>
                    <button className="button is-info is-small">Edit</button>
                  </Link>

                  <button
                    // onClick={(e) => {
                    //   this.deleteUser(User._id);
                    // }}
                    // onClick={() => {
                    //   props.deleteUser(props.User._id);
                    // }}

                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
