import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/bookmark.svg";
import cart from "../images/cart.svg";
import search from "../images/search.svg";

export default function HomeNav() {
  return (
    <>
      <nav className="landing-nav">
        <div className="logo-div">
          <img src={logo} alt="" className="logo"/>
          <h2>Cadence</h2>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#project">Projects</Link>
          </li>
          <li>
            <Link to="/#contact">Contacts</Link>
          </li>
        </ul>

        <div style={{ display: "flex" }}>
          <div className="logo-div" style={{ marginRight: "10px" }} >
            <img src={cart} alt="cart"   />
          </div>
          <div className="logo-div">
            <img src={search} alt="cart" />
          </div>
        </div>
      </nav>
    </>
  );
}
