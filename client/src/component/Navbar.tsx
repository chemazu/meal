import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="home-nav">
        <h2>Cadence</h2>
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
        <p>Search</p>
      </nav>
    </>
  );
}
