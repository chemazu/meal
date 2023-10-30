"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MealItemSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
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
const MealItem = mongoose_1.default.model("MealItem", MealItemSchema);
exports.default = MealItem;
//# sourceMappingURL=Mealitem.js.map