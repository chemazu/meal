"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function MealItem({ hover }) {
    return (<div className={`meal-item${hover ? "meal-hover" : ""}`}>
      <div className="content">
        <h4>Chicken and Rice</h4>
        <ul>
          <li>Rich in Fibre and a source of protein</li>
          <li>Low Calories</li>
          <li>Eaisly Digestable</li>
        </ul>
        <div className="button-wrapper">
          <button>Add to Cart</button>
          <button>More Info</button>
        </div>
      </div>
      <div className="circle">
        <p>Chicken & Rice</p>
      </div>
    </div>);
}
exports.default = MealItem;
//# sourceMappingURL=MealItem.js.map