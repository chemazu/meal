import React from "react";
import DashboardNav from "./DashboardNav";
import Footer from "../../component/Footer";
import Subscribe from "../../component/Subscribe";
import mealImage from "../../images/chicken-rice.jpg";

export default function Dashboard() {
  let user = { name: "Chukwuemeka" };
  let orders = [{ one: 1 }];
  return (
    <>
      <DashboardNav />

      <section className="dashboard-header">
        <h1>Hi, {user.name}</h1>
        <div className="underline"></div>
        <p>We are here to help you</p>
        <div className="help-holder">
          <div className="single-help">
            <svg
              width="36"
              height="36"
              viewBox="0 0 151 151"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M75.16 148.82C115.841 148.82 148.82 115.841 148.82 75.16C148.82 34.4787 115.841 1.5 75.16 1.5C34.4787 1.5 1.5 34.4787 1.5 75.16C1.5 115.841 34.4787 148.82 75.16 148.82Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M99.0399 34.6602H51.2799C49.5568 34.6602 48.1599 36.057 48.1599 37.7802V112.54C48.1599 114.263 49.5568 115.66 51.2799 115.66H99.0399C100.763 115.66 102.16 114.263 102.16 112.54V37.7802C102.16 36.057 100.763 34.6602 99.0399 34.6602Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M48.1599 50.6602H96.5299"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M48.1599 99.6602H96.6099"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M69.4299 42.6602H80.8999"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M112.17 64.5698C114.92 71.1098 115.18 78.7198 112.28 85.8098"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M120.28 62.4199C123.59 70.2799 123.89 79.3899 120.42 87.8999"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M38.0399 85.8098C35.1499 78.7198 35.3999 71.1198 38.1499 64.5698"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M29.91 87.8999C26.44 79.3899 26.74 70.2699 30.05 62.4199"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M78.7699 107.14C78.4799 105.37 76.8099 104.18 75.0399 104.47C73.2699 104.76 72.0799 106.43 72.3699 108.2C72.6599 109.97 74.3299 111.16 76.0999 110.87C77.8699 110.58 79.0599 108.91 78.7699 107.14Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p>Phone</p>
            <p>08111111111</p>
          </div>
        </div>
      </section>
      <section className="meal-action">
        <p className="action-selector">Today's Meal</p>
        <div className="today-meal">
          <div className="single-meal-item">
            <hr />
            <p>Breakfast</p>
            <p>1 serving 220kcal</p>
            <div className="meal-image-holder">
              <img src={mealImage} className="meal-image" alt="meal" />
              <div className="meal-text">
                <p>R</p>
                <p>M</p>
                <p>...</p>
              </div>
            </div>
            <p className="meal-title">Stir fry coconut rice and chicken</p>
          </div>
          <div className="single-meal-item">
            <hr />

            <p>Breakfast</p>
            <p>1 serving 220kcal</p>
            <div className="meal-image-holder">
              <img src={mealImage} className="meal-image" alt="meal" />
              <div className="meal-text">
                <p>R</p>
                <p>M</p>
                <p>...</p>
              </div>
            </div>
            <p className="meal-title">Stir fry coconut rice and chicken</p>
          </div>
          <div className="single-meal-item">
            <hr />

            <p>Breakfast</p>
            <p>1 serving 220kcal</p>
            <div className="meal-image-holder">
              <img src={mealImage} className="meal-image" alt="meal" />
              <div className="meal-text">
                <p>R</p>
                <p>M</p>
                <p>...</p>
              </div>
            </div>
            <p className="meal-title">Stir fry coconut rice and chicken</p>
          </div>
        </div>
      </section>
      <section className="account-details">
        <div className="order-history">
          ORDER HISTORY
          <div className="meal-plan-div">
            <h2>Meal Plans</h2>
            {orders ? <></> : <>You haven't placed any orders yet.</>}
          </div>
          <div className="training-plan-div">
            <h2>Meal Plans</h2>
            {orders ? <></> : <>You haven't placed any orders yet.</>}
          </div>
          <div className="saved-items-div">
            <h2>Meal Plans</h2>
            {orders ? <></> : <>You haven't placed any orders yet.</>}
          </div>
        </div>
        <div className="personal-information">
          <h2>Meal Plans</h2>
          fName height weight (update) alergies, daily calorie intake next Meal
        </div>
      </section>
      <section className="cta-section"></section>
      <p>Meal Suggestion</p>
      <p>Blog Suggestion</p>
      <p>Recipe Suggestion</p>

      <Subscribe />
      <Footer />
    </>
  );
}
