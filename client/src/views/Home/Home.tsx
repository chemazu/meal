import React from "react";
import NavBar from "../../component/Navbar";
import tasty from "../../images/tasty.svg";
import nuts from "../../images/nuts.svg";
import mealImg from "../../images/chicken-rice.jpg";

import "../../styles/home.scss";
import MealItem from "../../component/MealItem";

export default function Home() {
  return (
    <div>
      <NavBar />
      <header>
        <h2>
          Fresh, healthy, and delicious meals made just for you: experience the
          best in meal prep delivery
        </h2>
        <p>
          Nature offers everything you need. Nothing more and nothing less. Just
          right as it is https://tastybasics.nl/
        </p>
        <div className="search-div">
          <input type="search" placeholder="What are you Looking for" />
          <button></button>
        </div>
        <div className="search-suggestions">
          <p className="suggestion">Weight Loss</p>
          <p className="suggestion">Meal Prep</p>
          <p className="suggestion">Suya Chicken Breast</p>
          <p className="suggestion">Asun Beef and Chips</p>
          <img src={tasty} />
          <img src={nuts} />
        </div>
      </header>
      <section className="how-it-works">
        <h3>How it works</h3>
        <div className="step-wrapper"></div>
      </section>
      <section className="meals">
        <h3>Discover our tasty meals</h3>
        <div className="meal-wrapper">
          <MealItem hover={true}/>
          <MealItem hover={true}/>
          <MealItem hover={true}/>
          <MealItem hover={true}/>
        </div>
        curious about our complete assortment?{" "}
        <button>See all our products</button>
      </section>
      <section className="recipes">
        <h3>Discover our recipies</h3>
      </section>
      <section className="blog">
        <h3>Stories from our food experts and chef</h3>
      </section>
      <section>Contact form</section>
      <div className="footer">Footer</div>
    </div>
  );
}
