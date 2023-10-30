"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MealItem_1 = __importDefault(require("../../component/MealItem"));
const RecipeItem_1 = __importDefault(require("../../component/RecipeItem"));
const Navbar_1 = __importDefault(require("../../component/Navbar"));
const Footer_1 = __importDefault(require("../../component/Footer"));
const Subscribe_1 = __importDefault(require("../../component/Subscribe"));
function Meal() {
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
    return (<>
      <Navbar_1.default />
      <div className="meal-page">
        <div className="left">
          <MealItem_1.default />
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
                <MealItem_1.default />
                <MealItem_1.default />
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
            <RecipeItem_1.default />
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
      <Subscribe_1.default />
      <Footer_1.default />
    </>);
}
exports.default = Meal;
//# sourceMappingURL=index.js.map