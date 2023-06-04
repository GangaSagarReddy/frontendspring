import React, { useState } from "react";

import { useNavigate } from "react-router-dom";



import axios from "axios";




const Home = () => {

  const navigate = useNavigate();

  const [email, emailchange] = useState("");

  const [password, passwordchange] = useState("");




  const emailChange = (e) => {

    emailchange(e.target.value);

  };




  const passwordChange = (e) => {

    passwordchange(e.target.value);

  };




  const handlesubmit = async (e) => {

    e.preventDefault();

    const res = await axios.get(

      `http://localhost:8090/getresponse/${email}/${password}`

    );

    if (res.data === "wrong mail") {

      alert("Email doesn't exist");

    } else if (res.data === "wrong pass") {

      alert("Wrong Password");

    } else {

      navigate("/employees");

    }

  };




  const registerPage = () => {

    navigate("/register");

  };




  return (

     <div style={{backgroundImage:`url('https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg')`, height: '700px'}}>
      <div className="Auth-form-container"  >

      <div className="Auth-form" style={{backgroundColor:'black', color:'green'}}>

    <div className="Auth-form-content" >
      <h1>SignIn !</h1>

      <form className="containe" onSubmit={handlesubmit} >

        
          <div>
          <label className="label" >Email :-   </label>

          <input type="text" required onChange={emailChange}></input>

        </div>

        <div>

          <label className="label" required>

            Password

          </label>

          <input type="password" required onChange={passwordChange}></input>

        </div>

        <div>

          <button type="submit" className="btn btn-primary">

            Login

          </button>

        </div>

      </form>




      <button className="btn btn-outline-primary" onClick={registerPage}>

        Create Account

      </button>

    </div>
    </div>
    </div>
    </div>

  );

};




export default Home;