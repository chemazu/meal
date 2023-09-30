import React, { useRef, useState } from "react";
import Footer from "../../component/Footer";
import Subscribe from "../../component/Subscribe";
import HomeNav from "../../component/HomeNav";
import piggy from "../../images/piggy.svg";
import order from "../../images/order.png";
import deliver from "../../images/deliver.png";
import enjoy from "../../images/enjoy.png";

import sprout from "../../images/sprout.svg";
import location from "../../images/location.svg";
import cook from "../../images/cook.svg";
import pillow from "../../images/pillow.svg";
import feature1 from "../../images/feature-1-img.jpg";
import goatPS from "../../images/goat-pepper-soup.jpg";
import grilledcb from "../../images/grilled-cb.jpg";
import grilledpt from "../../images/grilledplantains.jpeg";

import feature2 from "../../images/feature-3-img.jpg";
import coffee from "../../images/coffee.avif";
import coffeeDeco from "../../images/coffee-deco.avif";
import pink from "../../images/pink.avif";
import pinkDeco from "../../images/pink-deco.avif";
import coconut from "../../images/coconut.avif";
import coconutDeco from "../../images/coconut-deco.avif";
import mint from "../../images/mint.avif";
import mintDeco from "../../images/mint-deco.avif";
import papaya from "../../images/papaya.avif";
import papayaDeco from "../../images/papaya-deco.avif";
import blackSesame from "../../images/black-sesame.avif";
import blackSesameDeco from "../../images/papaya-deco.avif";

import MealItem from "../../component/MealItem";
import SmoothieItem from "../../component/SmoothieItem";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const courseListContainerRef: React.MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const scroll = (scrollOffset: number) => {
    if (courseListContainerRef.current) {
      courseListContainerRef.current.scrollLeft += scrollOffset;
    }
  };
  const smoothieOptions = [
    {
      image: coffee,
      imageDeco: coffeeDeco,
      title: "Coffee Smoothie",
    },
    {
      image: pink,
      imageDeco: pinkDeco,
      title: "Pink Smoothie",
    },
    {
      image: coconut,
      imageDeco: coconutDeco,
      title: "Coconut Smoothie",
    },
    {
      image: mint,
      imageDeco: mintDeco,
      title: "Mint Smoothie",
    },
    {
      image: papaya,
      imageDeco: papayaDeco,
      title: "Papaya Smoothie",
    },
    {
      image: blackSesame,
      imageDeco: blackSesameDeco,
      title: "Black Sesame Smoothie",
    },
  ];
  return (
    <div className="home-page">
      <HomeNav />
      <section className="home-header">
        <div className="cta-button">
          <h2>we love healthy foods </h2>
          <p>
            Are you ready to embark on a journey to culinary delight and peak
            physical vitality? Look no further! Cadence invites you to savor the
            mouthwatering fusion of taste and health.
          </p>
          <button
            onClick={() => {
              navigate("/getstarted");
            }}
          >
            Get Started
          </button>
        </div>
      </section>
      <section className="features-wrapper">
        <div>
          <h2>How it works</h2>
        </div>
        <div className="features">
          <div>
            <img src={order} alt="" />
            <h4> Pick your plan & meals</h4>
            <p>
              Define your goal and choose meals from our biweekly rotating menu
            </p>
          </div>

          <div>
            <img src={deliver} alt="" />
            <h4>We cook & deliver</h4>
            <p>
              Our chefs freshly prepare your dishes to restaurant quality with
              macro precision, then they’re delivered chilled to your door by
              our courier
            </p>
          </div>
          <div>
            <img src={enjoy} alt="" />
            <h4>Enjoy & succeed</h4>
            <p>
              Enjoy delicious healthy food without the effort of cooking to keep
              you on track. No excuses!
            </p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="left">
          <h2>
            {/* EMBRACE EFFORTLESS MEAL PREP.👋
            <br /> */}
            SAY GOODBYE TO HASSLE
          </h2>
          <img src={feature1} alt="" />
        </div>
        <div className="right">
          <h2>
            {/* EMBRACE EFFORTLESS MEAL PREP.👋
            <br /> */}
            SAY GOODBYE TO HASSLES👋
          </h2>
          <p>
            Make mealtime struggles a thing of the past, elevate your culinary
            experience, and supercharge your nutrition with Cadence™. <br />
            It’s revolutionary meal prep reimagined for your convenience and
            nourishment, driven by culinary expertise."
          </p>
          <button className="sec-button">Meal plans</button>
        </div>
      </section>
      <section className="features-wrapper">
        <div>
          <h2>Your Favourites</h2>
        </div>
        <div className="features">
          <div>
            <img src={goatPS} alt="" className="food-image rotate" />
            <h4>Goat Meat Pepper soup with sweet potatoes</h4>
            <p>
              Define your goal and choose meals from our biweekly rotating menu
            </p>
          </div>

          <div>
            <img src={grilledcb} alt="" className="food-image" />
            <h4>Spicy Coconut Rice and with grilled chicken rice</h4>
            <p>
              Our chefs freshly prepare your dishes to restaurant quality with
              macro precision, then they’re delivered chilled to your door by
              our courier
            </p>
          </div>
          <div>
            <img src={grilledpt} alt="" className="food-image" />
            <h4>Grilled Plaintains and Spicy Salmon with vegetable side</h4>
            <p>
              Enjoy delicious healthy food without the effort of cooking to keep
              you on track. No excuses!
            </p>
          </div>
        </div>
      </section>
   
      <section className="features-wrapper">
        <div>
          <h2>Create the perfect plan for you </h2>
        </div>
        <div className="features">
          <div>
            <img src={order} alt="" />
            <h4> Pick your plan & meals</h4>
            <p>
              Define your goal and choose meals from our biweekly rotating menu
            </p>
          </div>

          <div>
            <img src={deliver} alt="" />
            <h4>We cook & deliver</h4>
            <p>
              Our chefs freshly prepare your dishes to restaurant quality with
              macro precision, then they’re delivered chilled to your door by
              our courier
            </p>
          </div>
          <div>
            <img src={enjoy} alt="" />
            <h4>Enjoy & succeed</h4>
            <p>
              Enjoy delicious healthy food without the effort of cooking to keep
              you on track. No excuses!
            </p>
          </div>
        </div>
      </section>
      <section className="features-wrapper">
        <div>
          <h2>Don’t just take our word for it...</h2>
        </div>
        <div className="features">
          <div>
            <img src={order} alt="" />
            <h4> Pick your plan & meals</h4>
            <p>
              Define your goal and choose meals from our biweekly rotating menu
            </p>
          </div>

          <div>
            <img src={deliver} alt="" />
            <h4>We cook & deliver</h4>
            <p>
              Our chefs freshly prepare your dishes to restaurant quality with
              macro precision, then they’re delivered chilled to your door by
              our courier
            </p>
          </div>
          <div>
            <img src={enjoy} alt="" />
            <h4>Enjoy & succeed</h4>
            <p>
              Enjoy delicious healthy food without the effort of cooking to keep
              you on track. No excuses!
            </p>
          </div>
        </div>
      </section>
      {/* <section className="benefits-2">
        <div className="right">
          <h2>
            NONE OF THE PREP.👋 <br />
            ALL OF THE VICTORY
          </h2>
          <p>
            Cadence does more so you can do less. Think nourishing and delicious
            fruit + veg-packed food without the prep, mess, or stress..
          </p>
          <button className="sec-button">Call to Action</button>
        </div>
        <div className="left">
          <img src={feature2} alt="" />
        </div>
      </section> */}
      {/* <section className="smoothie-product-options">
        <div className="top-text">
          <div className="text">
            <h2>All natural. Made for you.</h2>
            Let’s hear it for ready-to-blend Smoothies built on fruits +
            veggies. Pick from 25+ flavors, blend with your liquid of choice,
            then enjoy at mealtimes or in-between times.
          </div>
          <button>Shop All</button>
        </div>
        <div className="smoothie-product-wrapper">
          {smoothieOptions.map((item) => (
            <SmoothieItem smoothie={item} />
          ))}
        </div>
        <div className="text">
          <h2>Not sure where to start?</h2>
          <p>
            No problem! Take our quick quiz to discover how you can optimize
            your day to get 1% better everyday.
          </p>

          <button>Lets Get Started</button>
        </div>
      </section> */}
      {/* <Subscribe /> */}

      {/* <Footer /> */}
    </div>
  );
}
