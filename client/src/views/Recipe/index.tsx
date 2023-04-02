import React from "react";
import Footer from "../../component/Footer";
import NavBar from "../../component/Navbar";
import Subscribe from "../../component/Subscribe";
import timer from "../../images/timer.svg";
import recipeCard from "../../images/recipe-card-bg.jpg";
export default function Recipe() {

  let nutrionalvalues = {
    calories: 570,
    fats: 23,
    carbohydrates: 20,
    fibers: 23,
    proteins: 34,
    sodium: 0.03,
  };
  return (
    <>
      <NavBar />

      <section className="recipe-page">
        <div className="recipe-title">
          <div className="time">
            <img src={timer} alt="timer" />
            <p>15 mins</p>
          </div>
          <h2>Protein Pancakes</h2>
          <p className="sub-heading">
            The Best Protein Pancakes! These are super easy with no refined
            grains or refined sugar. Just oats, banana, and eggs!
          </p>{" "}
          <div className="recipe-image">recipe image</div>
          {/* <img src={recipeCard} alt="recipe-name" className="recipe-img" /> */}
          <div className="tag-wrapper">
            <p>Breakfast</p>
            <p>High Protein</p>
            <p>Muscle Gain</p>
          </div>
        </div>
        <div className="ingridients">
          <h3>Ingridients</h3>
          <ul>
            <li>130 g blackberries (frozen of fresh)</li>
            <li>60 g TastyBasics muesli nuts and pits</li>
            <li>300 g yoghurt</li>
          </ul>
        </div>
        <div className="directions">
          <h3>Preparation</h3>
          <ul>
            <li>
              You can serve this breakfast as you wish. As shown in the picture,
              we started off by filling our jar with a few tablespoons of
              yoghurt, followed by a handful of smashed blackberries.
            </li>
            <li>
              Add another layer of yoghurt, a layer of yohurt and blackberreis
              mashed together and a layer of Muesli nuts and pits. Whatever is
              to your liking.
            </li>
            <li>
              Top off with 2-3 whole blackberries and your breakfast is done.
            </li>
          </ul>
        </div>
        <div className="nutritional-info-wrapper">
        <div className="ingredient-wrapper">
            <div className="nutritional-info">
              <div className="top">
                <h2>Ingredients</h2>
                <div className="toggle-div">
                  <span>100 grams</span>

                  <div className="switch"></div>
                  <span>per serving</span>
                </div>
              </div>
              <div className="nutrionalvalue">
                <p>Energy</p>
                <p className="value">
                  {(nutrionalvalues.calories / 0.239006).toFixed(2)}kJ/
                  {nutrionalvalues.calories}kcal
                </p>
              </div>
              <div className="nutrionalvalue">
                <p>Fat</p> <p className="value">{nutrionalvalues.fats} g</p>
              </div>
              <div className="nutrionalvalue">
                <p>Carbohydrates</p>{" "}
                <p className="value">{nutrionalvalues.carbohydrates} g</p>
              </div>
              <div className="nutrionalvalue">
                <p>Fibers</p>{" "}
                <p className="value">{nutrionalvalues.fibers} g</p>
              </div>
              <div className="nutrionalvalue">
                <p>Proteins</p>{" "}
                <p className="value">{nutrionalvalues.proteins} g</p>
              </div>
              <div className="nutrionalvalue">
                <p>Sodium</p>{" "}
                <p className="value">{nutrionalvalues.sodium} g</p>
              </div>
              <div className="button-wrapper">
                <button>Compare this</button>
              </div>
            </div>
          </div>
        </div>
        <div className="share"></div>
        <div className="sub"></div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
}
