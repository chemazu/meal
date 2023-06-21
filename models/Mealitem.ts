import mongoose from "mongoose";

const MealItemSchema = new mongoose.Schema({
  title: { type: String, requried: true },
  description: { type: String },
  course: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  macronutrients: {
    type: {
      protein: Number,
      carbohydrates: Number,
      fats: Number,
    },
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  cookingtime: {
    type: Number,
    required: true,
  },
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "recipe",
  },
  servings: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  grocery: {
    type: [String],
    required: true,
  },
  benefits: {
    type: [String],
    required: true,
  },
  micronutrients: {
    type: {
      vitamins: Number,
      minerals: Number,
    },
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isVegetarian: {
    type: Boolean,
    default: false,
  },
});

const MealItem = mongoose.model("MealItem", MealItemSchema);

export default MealItem;
