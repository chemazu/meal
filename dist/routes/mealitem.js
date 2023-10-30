"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    console.log("first");
    res.send("Hello, World!");
});
const sampleMealItem = {
    title: "Coconut Rice Peppered Chicken",
    description: "A savory side dish made with rice, cooked in aromatic coconut milk. It is so rich, luscious and bursting with aromatic coconut flavors. You will be surprised that a Rice recipe this simple has so much flavor.",
    calories: 726,
    course: "Lunch",
    macronutrients: {
        protein: 60,
        carbonhydrates: 40,
        fats: 23,
    },
    cost: 1500,
    cookingtime: "2000",
    recipe: 123,
    servings: 1,
    img: "imgurl",
    grocery: ["rice", "coconut milk", "tomatoes", "chicken"],
    benefits: ["high in protein", "good source of carbohydrates"],
    micronutrients: {
        vitamins: 10,
        minerals: 5,
    },
    isVegetarian: false,
};
exports.default = router;
//# sourceMappingURL=mealitem.js.map