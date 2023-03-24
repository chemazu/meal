import React from "react";
import MealItem from "../../component/MealItem";
import "../../styles/meal.scss";
import tasty from "../../images/tasty.svg";

import RecipeItem from "../../component/RecipeItem";

export default function Meal() {
  let nutrionalvalues = {
    calories: 570,
    fats: 23,
    carbohydrates: 20,
    fibers: 23,
    proteins: 34,
    sodium: 0.03,
  };

  // 1kj  = 0.239006kcal
  // color options #bfcfb0
  return (
    <>
      <div className="meal-page">
        <div className="left">
          <MealItem />
          <div className="ingredient-wrapper">
            <div className="ingredient">
              <div className="top">
                <h2>Ingredients</h2>
                <p>Allergens in bold</p>
              </div>
              <div className="bottom">
                <p>
                  Ingredients (allergens in bold): 19% pumkin seeds, 19%
                  sunflower seeds, chicory root fiber, dates, oat flakes, 19%
                  hazelnuts, 10% almonds, coconut, 6% sesame, cinnamon. May
                  contain traces of nuts and peanuts.
                </p>
              </div>
            </div>
            <div className="nutritional-info">
              <div className="top">
                <h2>Ingredients</h2>
                <p>100grams/per serving</p>
              </div>
              <div className="nutrionalvalue">
                <p>Energy</p>
                <p className="value">
                  {(nutrionalvalues.calories / 0.239006).toFixed(2)}kJ/
                  {nutrionalvalues.calories}kcal
                </p>
              </div>
              <div className="nutrionalvalue">
                <p>Fat</p> <p className="value">{nutrionalvalues.fats} kg</p>
              </div>
              <div className="nutrionalvalue">
                <p>Carbohydrates</p>{" "}
                <p className="value">{nutrionalvalues.carbohydrates} kg</p>
              </div>
              <div className="nutrionalvalue">
                <p>Fibers</p>{" "}
                <p className="value">{nutrionalvalues.fibers} kg</p>
              </div>
              <div className="nutrionalvalue">
                <p>Proteins</p>{" "}
                <p className="value">{nutrionalvalues.proteins} kg</p>
              </div>
              <div className="nutrionalvalue">
                <p>Sodium</p>{" "}
                <p className="value">{nutrionalvalues.sodium} kg</p>
              </div>
              <div className="button-wrapper">
                <button>Compare this</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="meal-info">
            <div className="top">
              <h1>Chicken & Rice</h1>
              <p className="sub">High protein low carbs</p>
              <p>
                Start your day on no added sugar but on fibers and protein! This
                ultimate mix of oat flakes, dates and linseed provides a
                nutritious base. Supertasty with a hint of cinnamon and coconut.
              </p>
              <h2>the tasty nutritious base</h2>

              <p>Rich in fibers and protein</p>
              <p> 70% less carbs </p>
              <p>No added sugar</p>

              <h2>Similar Meals</h2>
              <div className="similar-meals-wrapper">
                <MealItem />
                <MealItem />
              </div>
            </div>

            <div className="button-wrapper">
              <button>Compare this</button>
            </div>
          </div>
        </div>
      </div>
      <section className="recipe-section-wrapper">
        <div className="top">
          <h2>Related Recipe</h2>
        </div>
        <div className="recipe-section">
          <div className="recipe-holder">
            <RecipeItem />
          </div>
          <p className="horizantal-right">Recipes</p>
        </div>
        <div className="bottom">
          <h2>curious about our recipes</h2>
          <div className="button-wrapper">
            <button>More Recipes</button>
          </div>
        </div>
      </section>
      <section className="sub-form">
        <img src={tasty} alt="logo" />
        <h2>we love healthy foods</h2>
        <p>
          Do you also think Cadence is without more the tastiest? Read more
          about our products, whole foods, super tasty recipes and health tips
          in our newsletter.
        </p>
        <form>
          <input type="text" placeholder="First name" />
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </form>
      </section>
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
            <br /> info@tastybasics.de
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
