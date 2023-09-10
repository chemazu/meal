import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/bookmark.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import tiktok from "../images/tiktok.svg";

import cart from "../images/cart.svg";
import times from "../images/times.svg";
import burger from "../images/burger.svg";

import search from "../images/search.svg";

export default function HomeNav() {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className="landing-nav">
        <div className="logo-div">
          <img src={logo} alt="" className="logo" />
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
            <Link to="/#project">Meal Plans</Link>
          </li>
          <li>
            <Link to="/#contact">Contacts</Link>
          </li>
        </ul>

        <div style={{ display: "flex" }}>
          <div className="logo-div" style={{ marginRight: "10px" }}>
            <img src={cart} alt="cart" />
          </div>
          <div className="logo-div">
            <img src={search} alt="cart" />
          </div>
        </div>
      </nav>

      {active ? (
        <nav className="mobile-nav-active">
          <div className="top">
            <h2>
              <Link to="/">Home</Link>
            </h2>

            <img
              src={times}
              alt=""
              onClick={() => {
                setActive(false);
              }}
            />
          </div>
          <div className="middle">
            <ul>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#project">Meal Plans</Link>
              </li>
              <li>
                <Link to="/#contact">Contacts</Link>
              </li>
              <li>
                <Link to="/#contact">Cart</Link>
              </li>
              <li>
                <Link to="/#contact">Search</Link>
              </li>
            </ul>
          </div>
          <div className="end">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={tiktok} alt="tiktok" />
          </div>
        </nav>
      ) : (
        <nav className="mobile-nav">
          <div className="top">
            <h2>
              <Link to="/">Home</Link>
            </h2>
            <img
              src={burger}
              alt=""
              onClick={() => {
                setActive(true);
              }}
            />
          </div>
        </nav>
      )}
    </>
  );
}
