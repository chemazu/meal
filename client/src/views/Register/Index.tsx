import React, { MouseEventHandler, useState } from "react";
import NavBar from "../../component/Navbar";
import { useAlert } from "react-alert";

import Footer from "../../component/Footer";
import axios from "axios";

export default function Register() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const alert = useAlert();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (fName === "" || lName === "" || email === "" || password === "") {
      console.log("dsd");
      alert.show("saasd son");
    } else {
      
      console.log(fName, lName, email, password);
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/user/register",
          {
            name: `${fName}" "${lName}`,
            email,
            password,
          }
        );
        console.log(response.data);
        if (response.data) {
          alert.show("daamn son");
          setLName("");
          setFName("");
          setEmail("");
          setPassword("");
        }
      } catch (error) {
        console.error(error);
        console.log(error);
      }
    }
  };

  return (
    <div>
      <NavBar />
      <section className="register-section">
        <h2>Create Account</h2>
        <form>
          <div className="register-form-item">
            <label>First Name</label>
            <input
              value={fName}
              onChange={(e) => {
                setFName(e.target.value);
              }}
            />
          </div>
          <div className="register-form-item">
            <label>Last Name</label>
            <input
              value={lName}
              onChange={(e) => {
                setLName(e.target.value);
              }}
            />{" "}
          </div>
          <div className="register-form-item">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{" "}
          </div>
          <div className="register-form-item">
            <label>Password</label>

            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            />
          </div>
          <div className="button-wrapper">
            <button onClick={handleSubmit}>Create</button>
          </div>
        </form>
      </section>
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
}
