import React from "react";
import mealItemImg from "../images/meal-item-img.jpg";

type Props = {};

export default function MealPlanItem({}: Props) {
  return (
    <div className="meal-plan-item">
      <img src={mealItemImg} alt="steak" />
      <div className="meal-text">
        <div className="meal-title">
          <h4>Steak and Eggs</h4>
          <p>...</p>
        </div>
        <h6>Breakfast</h6>
        <div className="macro-display">
          <p>230</p>
          <p className="unit">kcal</p>

          <p>30 </p>
          <p className="unit">p</p>

          <p>40</p>
          <p className="unit">c</p>

          <p>30</p>
          <p className="unit">f</p>
        </div>
      </div>
    </div>
  );
}
