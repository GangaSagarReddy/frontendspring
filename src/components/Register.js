import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Register = () => {
  const [name, namechange] = useState("");

  const [email, emailchange] = useState("");

  const [password, passwordchange] = useState("");

  const nameChange = (e) => {
    namechange(e.target.value);
  };

  const emailChange = (e) => {
    emailchange(e.target.value);
  };

  const passwordChange = (e) => {
    passwordchange(e.target.value);
  };

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const empData = { name, email, password };

    await axios.post("http://localhost:8090/reguser", empData);

    alert("Registered Successfully!");

    navigate("/");
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://static2.bigstockphoto.com/7/7/2/large1500/277401307.jpg')`,
        height: "750px",
      }}
    >
      <div className="Auth-form-container">
        <div
          className="Auth-form"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div className="Auth-form-content">
          <h1> &emsp;SignUp !</h1><br></br>

            <form className="container" onSubmit={handlesubmit}>
              <div className="">
                <label className="label" required>Name </label>&emsp;&ensp;

                <input type="text" required onChange={nameChange} placeholder="Enter Name"></input>
              </div><br></br>

              <div className="">
                <label className="label">Email </label>&emsp;&ensp;&nbsp;

                <input type="text" required onChange={emailChange} placeholder="Enter Email"></input>
              </div>
              <br></br>

              <div className="">
                <label className="label" required>
                  Password
                </label>&nbsp;

                <input
                  type="password"
                  required
                  onChange={passwordChange} placeholder="Enter password"
                ></input>
              </div>
              <br></br>

              <div className="login-div-con">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
              <br></br>

              <div className="log-div">
                Have an account? <Link to={"/"}>login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
