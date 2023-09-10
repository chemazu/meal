import React from "react";
import Footer from "../../component/Footer";
import NavBar from "../../component/Navbar";
import Subscribe from "../../component/Subscribe";
import timer from "../../images/timer.svg";
import recipeCard from "../../images/recipe-card-bg.jpg";
import recipeImg from "../../images/goat-meat-pepper-soup.jpeg";

export default function Recipe() {
  // let nutrionalvalues = {
  //   calories: 570,
  //   fats: 23,
  //   carbohydrates: 20,
  //   fibers: 23,
  //   proteins: 34,
  //   sodium: 0.03,
  // };

  const singleMeal = {
    title: "Goat Meat Pepper Soup",
    prepTime: "45 minutes",
    description:
      "Uncover the delightful world of African comfort cuisine with Goat Meat Pepper Soup, an enticing blend of flavors that packs a protein punch while being supportive of both muscle growth and fat loss.",
    nutrionalvalues: {
      calories: 570,
      fats: 23,
      carbohydrates: 20,
      proteins: 34,
    },
    ingredients: [
      "100 g goat meat, cleaned and cut into bite-sized pieces",
      "50 g potatoes, cubed",
      "Crayfish",
      "Scotch Bonnet peppers (Atarado)",
      "Yellow Pepper",
      "Cameroon Pepper",
      "Peppersoup spice",
      "Salt",
      "Seasoning cubes",
      "Onions",
      "Ginger",
      "Garlic",
      "Handful of chopped basil (scent leaves)",
    ],
    preparation: [
      "Begin by making the meat marinade. Blend together the peppers, onions, garlic, and ginger and crayfish until smooth.",
      "Cut the goat meat into small pieces and place them in a pot. Season the meat with the prepared marinade, salt, seasoning cubes, Cameroon pepper, and allow it to cook over medium heat for 30-40 minutes.",
      "While the meat is cooking, boil the unripe plantains for 10 minutes. Once boiled, drain the water and set the plantains aside.",
      "Once the meat is cooked, add 4 cups of water to the pot along with the boiled plantains. Season the mixture with nutmeg, Peppersoup spice, crayfish, chopped scent leaves, and a touch more salt. Let it all simmer for an additional 15 minutes.",
      "To finish, garnish the soup with chopped scent leaves and a chopped red pepper. Allow it to simmer for an additional minute, then serve the hot and flavorful soup.",
    ],
    tags: ["African", "High Protein", "Muscle Gain"],

    // Now 'preparationSteps' is an array of strings, with each step represented as a separate string element.
  };
  let {
    nutrionalvalues,
    title,
    description,
    tags,
    ingredients,
    preparation,
    prepTime,
  } = singleMeal;
  return (
    <>
      <NavBar />

      <section className="recipe-page">
        <div className="recipe-title">
          <div className="time">
            <img src={timer} alt="timer" />
            <p>{prepTime}</p>
          </div>
          <h2>{title}</h2>
          <p className="sub-heading">{description}</p>{" "}
          <div className="recipe-img">
            <img src={recipeImg} />
          </div>
          {/* <img src={recipeCard} alt="recipe-name" className="recipe-img" /> */}
          <div className="tag-wrapper">
            {tags.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
        </div>
        <div className="ingridients">
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
        <div className="directions">
          <h3>Preparation</h3>
          <ul>
            {preparation.map((item) => {
              return <li>{item}</li>;
            })}
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
              {/* <div className="nutrionalvalue">
                <p>Fibers</p>{" "}
                <p className="value">{nutrionalvalues.fibers} g</p>
              </div> */}
              <div className="nutrionalvalue">
                <p>Proteins</p>{" "}
                <p className="value">{nutrionalvalues.proteins} g</p>
              </div>
              {/* <div className="nutrionalvalue">
                <p>Sodium</p>{" "}
                <p className="value">{nutrionalvalues.sodium} g</p>
              </div> */}
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
