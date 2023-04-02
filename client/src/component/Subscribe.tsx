import React from "react";
import tasty from "../images/tasty.svg";

export default function Subscribe() {
  return (
    <section className="sub-form">
      <img src={tasty} alt="logo" />
      <h2>we love healthy foods</h2>
      <p>
        Do you also think Cadence is without more the tastiest? Read more about
        our products, whole foods, super tasty recipes and health tips in our
        newsletter.
      </p>
      <form>
        <input type="text" placeholder="First name" />
        <input type="email" placeholder="Email address" />
        <button>Subscribe</button>
      </form>
    </section>
  );
}
