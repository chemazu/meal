"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Navbar_1 = __importDefault(require("../../component/Navbar"));
require("../../styles/home.scss");
const MealItem_1 = __importDefault(require("../../component/MealItem"));
const InfiniteSlider_1 = __importDefault(require("../../component/InfiniteSlider"));
const react_router_dom_1 = require("react-router-dom");
function HomeCopy() {
    return (<div>
      <Navbar_1.default />
      <header>
        <h2>
          Fresh, healthy, and delicious meals made just for you: experience the
          best in meal prep delivery <react_router_dom_1.Link to="/getstarted">GET STARTED</react_router_dom_1.Link>
        </h2>
        <p>
          Nature offers everything you need. Nothing more and nothing less. Just
          right as it is https://tastybasics.nl/ https://www.daily-harvest.com/
          good animation: https://www.quayhouse.com.sg/ homepage slider
          https://www.pitayafoods.com/
          https://prepkitchen.co.uk/
          https://www.trulean.com/
          https://prepkitchen.co.uk/order/goals
        </p>
        <div className="search-div">
          <input type="search" placeholder="What are you Looking for"/>
          <button></button>
        </div>
        <div className="search-suggestions">
          <p className="suggestion">Weight Loss</p>
          <p className="suggestion">Meal Prep</p>
          <p className="suggestion">Suya Chicken Breast</p>
          <p className="suggestion">Asun Beef and Chips</p>
        </div>
      </header>
      {/* //   const images = [
    //     'https://picsum.photos/id/1001/600/400',
    //     'https://picsum.photos/id/1002/600/400',
    //     'https://picsum.photos/id/1003/600/400',
    //     'https://picsum.photos/id/1004/600/400',
    //     'https://picsum.photos/id/1005/600/400',
    //   ]; */}
      <InfiniteSlider_1.default />
      <section className="how-it-works">
        <h3>How it works GET A MEAL GET JACKED!!</h3>
        <div className="step-wrapper"></div>
      </section>
      <section className="meals">
        <h3>Discover our tasty meals</h3>
        <div className="meal-wrapper">
          <MealItem_1.default hover={true}/>
          <MealItem_1.default hover={true}/>
          <MealItem_1.default hover={true}/>
          <MealItem_1.default hover={true}/>
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
    </div>);
}
exports.default = HomeCopy;
//# sourceMappingURL=Home%20copy.js.map