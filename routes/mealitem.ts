import mongoose from "mongoose";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("first");
  res.send("Hello, World!");
});
const sampleMealItem = {
  title: "Coconut Rice Peppered Chicken",
  description:
    "A savory side dish made with rice, cooked in aromatic coconut milk. It is so rich, luscious and bursting with aromatic coconut flavors. You will be surprised that a Rice recipe this simple has so much flavor.",
  calories: 726,
  course: "Lunch",
  macronutrients: {
    protein: 60,
    carbonhydrates: 40,
    fats: 23,
  },
  cost: 1500,
  cookingtime: "2000",
  recipe:123,
  servings:1,
  img:"imgurl",
  grocery: ["rice", "coconut milk", "tomatoes", "chicken"],
  benefits: ["high in protein", "good source of carbohydrates"],
  micronutrients: {
    vitamins: 10,
    minerals: 5,
  },
  isVegetarian: false,
};

export default router;
