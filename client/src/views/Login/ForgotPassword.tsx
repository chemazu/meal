import React, { MouseEventHandler, useState } from "react";
import NavBar from "../../component/Navbar";
import "../../styles/register.scss";
import Subscribe from "../../component/Subscribe";
import Footer from "../../component/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(fName, lName, email, password);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/forgot-password",
        {
          email,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar />
      <section className="register-section">
        <h2>Reset your password</h2>
        <p>We will send you an email to reset your password.</p>
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

          <Link to="/forgot-password">Forgot Password</Link>

          <div className="button-wrapper">
            <button onClick={handleSubmit}>Submit</button>
          </div>
          <Link to="/signin">Cancel</Link>
        </form>
      </section>
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
}
