import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-area">
          <h2>Cadence is ready for you!</h2>
          <p>
            If you have any questions about our products, whole foods or
            anything related to food and nutrients, let us know. We are happy to
            help.
          </p>
          <p>
            Monday - Friday 9 am - 5 pm <br />
            +31 85 0666 134
            <br /> info@cadence.com
          </p>
        </div>
        <div className="footer-area second ">
          <h4>Menu</h4>
          <h4>Recipes</h4>
          <h4>Meal plans</h4>
        </div>
        <div className="footer-area third">
          <h4>FAQ</h4>
          <h4>Meal Tracking</h4>
        </div>
      </div>
      <div className="bottom-bar "></div>
    </>
  );
}
