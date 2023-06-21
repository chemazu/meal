import React, { MouseEventHandler, useState } from "react";
import NavBar from "../../component/Navbar";
import "../../styles/register.scss";
import Subscribe from "../../component/Subscribe";
import Footer from "../../component/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(fName, lName, email, password);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        {
 
          email,
          password,
        }
      );
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar />
      <section className="register-section">
        <h2>Login</h2>
        <form>
           
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
          <div style={{paddingTop:"1.5rem"}}>
     
          <Link to="/forgot-password">Forgot Password</Link>
</div>
          <div className="button-wrapper">
            <button onClick={handleSubmit}>Sign In</button>
          </div>
          <div style={{padding:"1rem 0"}}>
          <Link to="/signup">Create Account</Link>
          </div>
        </form>
      </section>
 
      <Footer />
    </div>
  );
}
