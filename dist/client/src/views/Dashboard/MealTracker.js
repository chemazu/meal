"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ri_1 = require("react-icons/ri");
const MealTracker = () => {
    const [meals, setMeals] = (0, react_1.useState)([]);
    const [mealName, setMealName] = (0, react_1.useState)("");
    const handleInputChange = (e) => {
        setMealName(e.target.value);
    };
    const handleAddMeal = () => {
        if (mealName.trim() !== "") {
            const newMeal = {
                id: "1",
                name: mealName.trim(),
            };
            setMeals([...meals, newMeal]);
            setMealName("");
        }
    };
    const handleDeleteMeal = (mealId) => {
        const updatedMeals = meals.filter((meal) => meal.id !== mealId);
        setMeals(updatedMeals);
    };
    return (<div>
      <h1>Meal Tracker</h1>
      <input type="text" placeholder="Enter meal name" value={mealName} onChange={handleInputChange}/>
      <button onClick={handleAddMeal}>Add Meal</button>

      <ul>
        {meals.map((meal) => (<li key={meal.id}>
            {meal.name}
            <button onClick={() => handleDeleteMeal(meal.id)}>
              <ri_1.RiDeleteBin6Line />
            </button>
          </li>))}
      </ul>
    </div>);
};
exports.default = MealTracker;
//# sourceMappingURL=MealTracker.js.map