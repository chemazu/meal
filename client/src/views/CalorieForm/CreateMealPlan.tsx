import React, { useState, useEffect } from "react";
import { Progress } from "reactstrap";
import MealPlan from "../../component/MealPlan";

type Props = {};

type MealPrepTime =
  | "Less than 30 mins"
  | "30 - 60 mins"
  | "More than 1 hour"
  | "I prefer to order meals or go out to eat";

export default function CreateMealPlan({}: Props) {
  const [currentItem, setCurrentItem] = useState(6);
  const [mealFreq, setMealFreq] = useState<number | null>(null);
  const [selectedDiets, setSelectedDiets] = useState<string>("");
  const [cheatMealFrequency, setCheatMealFrequency] = useState<string>("");
  const [mealPrepTime, setMealPrepTime] = useState<string>("");
  const [proteinHolder, setProteinHolder] = useState<any[]>([]);
  const [carbHolder, setCarbHolder] = useState<any[]>([]);
  const [fatHolder, setFatHolder] = useState<any[]>([]);
  const [cadenceMacros, setCadenceMacros] = useState(false);
  const protein = ["beef", "fish", "goat", "eggs", "Turkey"];
  const carbs = ["rice", "potaotes", "yam", "plantains"];
  const fats = ["olive oil", "butter", "mayo", "oil"];

  const handleIncreaseCurrentItem = () => {
    if (currentItem <= 6) {
      setCurrentItem(currentItem + 1);
    }
    if (currentItem >= 5) {
      console.log({
        mealFreq,
        selectedDiets,
        cheatMealFrequency,
        mealPrepTime,
        proteinHolder,
        fatHolder,
        cadenceMacros,
        carbHolder,
      });
    }
  };
  const handleDecreaseCurrentItem = () => {
    if (currentItem > 1) {
      setCurrentItem(currentItem - 1);
    }
  };

  return (
    <div className="meal-plan">
      <Progress value={currentItem} max={7} />
      <div
        className={`back-plan ${currentItem > 1 && "visible"}`}
        onClick={handleDecreaseCurrentItem}
      >
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </div>
      <div className="meal-form">
        {/* <h2>Create Meal Plan</h2> */}

        {currentItem === 1 && (
          <div className="meal-freq">
            <h2>How Often Do You Want to Eat Each Day?</h2>
            <ul>
              <li
                className={`${mealFreq === 2 ? "selected-li" : ""}`}
                onClick={() => {
                  setMealFreq(2);
                }}
              >
                <input
                  type="checkbox"
                  checked={mealFreq === 2}
                  onChange={(e) => {
                    setMealFreq(2);
                  }}
                />
                2 times a day
              </li>
              <li
                className={`${mealFreq === 3 ? "selected-li" : ""}`}
                onClick={() => {
                  setMealFreq(3);
                }}
              >
                {" "}
                <input
                  type="checkbox"
                  checked={mealFreq === 3}
                  onChange={(e) => {
                    setMealFreq(3);
                  }}
                />
                3 times a day
              </li>
              <li
                className={`${mealFreq === 4 ? "selected-li" : ""}`}
                onClick={() => {
                  setMealFreq(4);
                }}
              >
                {" "}
                <input
                  type="checkbox"
                  checked={mealFreq === 4}
                  onChange={(e) => {
                    setMealFreq(4);
                  }}
                />
                4 times a day
              </li>
              <li
                className={`${mealFreq === 5 ? "selected-li" : ""}`}
                onClick={() => {
                  setMealFreq(5);
                }}
              >
                {" "}
                <input
                  type="checkbox"
                  checked={mealFreq === 5}
                  onChange={(e) => {
                    setMealFreq(5);
                  }}
                />
                5 times a day
              </li>
            </ul>
            <div className="create-button-wrapper">
              <button
                className="pry-button"
                onClick={handleIncreaseCurrentItem}
                disabled={!mealFreq}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        {currentItem === 2 && (
          <div className="diet">
            <h2> Do you follow any of these diets</h2>
            <ul>
              <li
                className={`${
                  selectedDiets === "vegetarian" ? "selected-li" : ""
                }`}
                onClick={() => {
                  setSelectedDiets("vegetarian");
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedDiets === "vegetarian"}
                  onChange={(e) => {
                    setSelectedDiets("vegetarian");
                  }}
                />
                Vegetarian
              </li>
              <li
                className={`${selectedDiets === "vegan" ? "selected-li" : ""}`}
                onClick={() => {
                  setSelectedDiets("vegan");
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedDiets === "vegan"}
                  onChange={(e) => {
                    setSelectedDiets("vegan");
                  }}
                />
                Vegan
              </li>
              <li
                className={`${selectedDiets === "keto" ? "selected-li" : ""}`}
                onClick={() => {
                  setSelectedDiets("keto");
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedDiets === "keto"}
                  onChange={(e) => {
                    setSelectedDiets("keto");
                  }}
                />
                Keto
              </li>
              <li
                className={`${selectedDiets === "none" ? "selected-li" : ""}`}
                onClick={() => {
                  setSelectedDiets("none");
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedDiets === "none"}
                  onChange={(e) => {
                    setSelectedDiets("none");
                  }}
                />
                None of the above
              </li>
            </ul>
            <div className="create-button-wrapper">
              <button
                className="pry-button"
                onClick={handleIncreaseCurrentItem}
                disabled={!selectedDiets}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        {currentItem === 3 && (
          <div className="cheat-meal">
            <h2>
              How frequently would you like to include a treat meal in your
              plan?
            </h2>
            <ul>
              <li
                className={`${
                  cheatMealFrequency === "infrequently" ? "selected-li" : ""
                }`}
                onClick={() => {
                  setCheatMealFrequency("infrequently");
                }}
              >
                <input
                  type="checkbox"
                  checked={cheatMealFrequency === "infrequently"}
                  onChange={(e) => {
                    setCheatMealFrequency("infrequently");
                  }}
                />
                Infrequently
              </li>
              <li
                className={`${
                  cheatMealFrequency === "once-a-week" ? "selected-li" : ""
                }`}
                onClick={() => {
                  setCheatMealFrequency("once-a-week");
                }}
              >
                <input
                  type="checkbox"
                  checked={cheatMealFrequency === "once-a-week"}
                  onChange={(e) => {
                    setCheatMealFrequency("once-a-week");
                  }}
                />
                Once a week
              </li>
              <li
                className={`${
                  cheatMealFrequency === "more" ? "selected-li" : ""
                }`}
                onClick={() => {
                  setCheatMealFrequency("more");
                }}
              >
                <input
                  type="checkbox"
                  checked={cheatMealFrequency === "more"}
                  onChange={(e) => {
                    setCheatMealFrequency("more");
                  }}
                />
                Once every two weeks or less
              </li>
            </ul>
            <div className="create-button-wrapper">
              <button
                className="pry-button"
                onClick={handleIncreaseCurrentItem}
                disabled={!cheatMealFrequency}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        {currentItem === 4 && (
          <div className="prep-freq">
            <h2> How much time are you ready to spend on meal prep</h2>
            <ul>
              <li
                className={`${
                  mealPrepTime === "Less than 30 mins" ? "selected-li" : ""
                }`}
                onClick={() => {
                  setMealPrepTime("Less than 30 mins");
                }}
              >
                <input
                  type="checkbox"
                  checked={mealPrepTime === "Less than 30 mins"}
                  onChange={(e) => {
                    setMealPrepTime("Less than 30 mins");
                  }}
                />
                Less than 30 mins
              </li>

              <li
                className={`${
                  mealPrepTime === "30 - 60 mins" ? "selected-li" : ""
                }`}
                onClick={() => {
                  setMealPrepTime("30 - 60 mins");
                }}
              >
                <input
                  type="checkbox"
                  checked={mealPrepTime === "30 - 60 mins"}
                  onChange={(e) => {
                    setMealPrepTime("30 - 60 mins");
                  }}
                />
                30 -60 mins
              </li>
              <li
                className={`${
                  mealPrepTime === "More than 1 hour" ? "selected-li" : ""
                }`}
                onClick={() => {
                  setMealPrepTime("More than 1 hour");
                }}
              >
                <input
                  type="checkbox"
                  checked={mealPrepTime === "More than 1 hour"}
                  onChange={(e) => {
                    setMealPrepTime("More than 1 hour");
                  }}
                />
                More than 1 hour
              </li>
              <li
                className={`${mealPrepTime === "order" ? "selected-li" : ""}`}
                onClick={() => {
                  setMealPrepTime("order");
                }}
              >
                <input
                  type="checkbox"
                  checked={mealPrepTime === "order"}
                  onChange={(e) => {
                    setMealPrepTime("order");
                  }}
                />
                I prefer to order meals or go out to eat
              </li>
            </ul>
            <div className="create-button-wrapper">
              <button
                className="pry-button"
                onClick={handleIncreaseCurrentItem}
                disabled={!mealPrepTime}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        {currentItem === 5 && (
          <div className="choose-items">
            <h2>let us create a meal plan based on your preference</h2>
            <p className="adjust">You can always adjust the meal plan later</p>
            <div>
              <div className="choose-cadence-wrapper">
                <div className="choose-cadence">
                  <h4>Let Cadence choose</h4>
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCadenceMacros(true);
                        } else {
                          setCadenceMacros(false);
                        }
                      }}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                <p>
                  We create a balanced meal plan for you that supplies your body
                  with the nutrients it needs to perform efficiently.
                </p>
              </div>
            </div>
            <div
              className={`macro-type-parent ${
                cadenceMacros && "inactive-parent"
              }`}
            >
              <h3>Proteins</h3>
              <div className={`macro-type ${cadenceMacros && "inactive"}`}>
                {protein.map((item, i) => {
                  return (
                    <p
                      key={i}
                      className={`${
                        proteinHolder.includes(item) && "selected-macro"
                      }`}
                      onClick={() => {
                        setProteinHolder((prev) => {
                          if (prev.includes(item)) {
                            return prev.filter((x) => x !== item); // Remove the item if it exists
                          } else {
                            return [...prev, item]; // Add the item if it doesn't exist
                          }
                        });
                      }}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div
              className={`macro-type-parent ${
                cadenceMacros && "inactive-parent"
              }`}
            >
              <h3>Carbohydrates</h3>
              <div className={`macro-type ${cadenceMacros && "inactive"}`}>
                {carbs.map((item, i) => {
                  return (
                    <p
                      key={i}
                      className={`${
                        carbHolder.includes(item) && "selected-macro"
                      }`}
                      onClick={() => {
                        setCarbHolder((prev) => {
                          if (prev.includes(item)) {
                            return prev.filter((x) => x !== item); // Remove the item if it exists
                          } else {
                            return [...prev, item]; // Add the item if it doesn't exist
                          }
                        });
                      }}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div
              className={`macro-type-parent ${
                cadenceMacros && "inactive-parent"
              }`}
            >
              <h3>Fats</h3>
              <div className={`macro-type ${cadenceMacros && "inactive"}`}>
                {fats.map((item, i) => {
                  return (
                    <p
                      key={i}
                      onClick={() => {
                        setFatHolder((prev) => {
                          if (prev.includes(item)) {
                            return prev.filter((x) => x !== item); // Remove the item if it exists
                          } else {
                            return [...prev, item]; // Add the item if it doesn't exist
                          }
                        });
                      }}
                      className={`${
                        fatHolder.includes(item) && "selected-macro"
                      }`}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="create-button-wrapper">
              <button
                className="pry-button"
                onClick={handleIncreaseCurrentItem}
                disabled={!mealFreq}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        {currentItem === 6 && (
          <div className="creating-meal-plan">
            Creating Meal Plan
            <MealPlan />
          </div>
        )}
        {currentItem === 7 && <div>Get my plan</div>}
        {currentItem < 5 && <p>Tips for meal prep that slowly fade btw</p>}
      </div>
    </div>
  );
}
