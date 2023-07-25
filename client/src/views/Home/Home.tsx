import React, { useRef, useState } from "react";
import Footer from "../../component/Footer";
import Subscribe from "../../component/Subscribe";
import HomeNav from "../../component/HomeNav";
import piggy from "../../images/piggy.svg";
import sprout from "../../images/sprout.svg";
import location from "../../images/location.svg";
import cook from "../../images/cook.svg";
import pillow from "../../images/pillow.svg";
import feature1 from "../../images/feature-1-img.jpg";
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

export default function Home() {
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
            Do you also think Cadence is without more the tastiest? Read more
            about our products, whole foods, super tasty recipes and health tips
            in our newsletter.
          </p>
          <button>Call to Action</button>
        </div>
      </section>
      <section className="features">
        <div>
          <img src={cook} alt="" />
          <p>Locally Sourced</p>
        </div>
        <div>
          <img src={cook} alt="" />
          <p>All natural ingriedeints</p>
        </div>
        {/* <div>
          <img src={cook} alt="" />
          <p>Chef Prepared</p>
        </div> */}
        <div>
          <img src={cook} alt="" />
          <p>Budget-friendly</p>
        </div>
        <div>
          <img src={cook} alt="" />
          <p>Convenient</p>
        </div>
      </section>
      <section className="benefits">
        <div className="left">
          <img src={feature1} alt="" />
        </div>
        <div className="right">
          <h2>
            Hello hydration.👋 <br />
            Goodbye cravings.
          </h2>
          <p>
            Make cravings a thing of the past, elevate your mood, and
            supercharge your hydration with Everyday Fit™. <br />
            It’s game-changing hydration backed by science!
          </p>
          <button className="sec-button">Call to Action</button>
        </div>
      </section>
      <section className="product-options">
        <div className="text">
          <h2>OUR FLAVOR? UNMATCHED</h2>
          Our in-house chefs take sustainably-sourced fruits + vegetables and
          turn them into craveworthy eats. Then, we pass all that goodness onto
          you. We got you. 24/7.
        </div>
        <div className="product-wrapper">
          <div className="controls">
            <div onClick={() => scroll(-100)} className="left-arrow-control">
              <i className="fas fa-arrow-left"></i>
              &#8592;
            </div>
            <div onClick={() => scroll(100)} className="right-arrow-control">
              <i className="fas fa-arrow-right"></i>
              &#8594;
            </div>
          </div>
          <div ref={courseListContainerRef} className="slide-item-container">
            <MealItem />
            <MealItem />
            <MealItem />
            <MealItem />
            <MealItem />
          </div>
        </div>
      </section>
      <section className="benefits-2">
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
      </section>
      <section className="smoothie-product-options">
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
      </section>
      <Subscribe />

      <Footer />
    </div>
  );
}
