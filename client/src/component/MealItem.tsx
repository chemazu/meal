import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import "../styles/components/mealitem.scss";
type Props = { hover?: Boolean };
export default function MealItem({ hover }: Props) {
  return (
    <div className={`meal-item ${hover ? "meal-hover" : ""}`}>
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
      <div className="circle">Chicken & Rice</div>
    </div>
  );
}
