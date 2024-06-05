import React from "react";

import MealPlanItem from "./MealPlanItem";

type Props = {};

const MealPlan = (props: Props) => {
  let mealsPerDay = 4;
  return (
    <div className="meal-plan-widget">
      <div>
        <div className="day-title">
          {" "}
          <h4>Monday</h4> <p>...</p>
        </div>
        {Array.from({ length: mealsPerDay }, (v, i) => (
          <MealPlanItem key={i} />
        ))}
      </div>

      <div>
        <p>Tuesday</p>
      </div>
      <div>
        <p>Wednesday</p>
      </div>
      <div>
        <p>Thursday</p>
      </div>
      <div>
        <p>Friday</p>
      </div>
      <div>
        <p>Saturday</p>
      </div>
      <div>
        <p>Sunday</p>
      </div>
    </div>
  );
};
export default MealPlan;
