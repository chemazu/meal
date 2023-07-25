import React, { useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";

interface Meal {
  id: string;
  name: string;
}

const MealTracker: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [mealName, setMealName] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMealName(e.target.value);
  };

  const handleAddMeal = () => {
    if (mealName.trim() !== "") {
      const newMeal: Meal = {
        id: "1",
        name: mealName.trim(),
      };

      setMeals([...meals, newMeal]);
      setMealName("");
    }
  };

  const handleDeleteMeal = (mealId: string) => {
    const updatedMeals = meals.filter((meal) => meal.id !== mealId);
    setMeals(updatedMeals);
  };

  return (
    <div>
      <h1>Meal Tracker</h1>
      <input
        type="text"
        placeholder="Enter meal name"
        value={mealName}
        onChange={handleInputChange}
      />
      <button onClick={handleAddMeal}>Add Meal</button>

      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            {meal.name}
            <button onClick={() => handleDeleteMeal(meal.id)}>
              <RiDeleteBin6Line />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealTracker;
