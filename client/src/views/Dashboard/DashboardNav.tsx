import React from "react";
import { Link } from "react-router-dom";

export default function DashboardNav() {
  return (
    <>
      <nav className="dash-nav home-nav">
        <ul>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/#about">Learn</Link>
          </li>
        </ul>
        <h2>Cadence</h2>
        <ul>
          <li>
            <Link to="/#project">Save 20%</Link>
          </li>
          <li>
            <Link to="/#contact">Get Started</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
