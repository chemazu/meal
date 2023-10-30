"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calorieCalculator(data) {
    //   let data = [
    //     { title: "Age", value: "26" },
    //     { title: "Gender", value: "Male" },
    //     { title: "Height in cm", value: "196" },
    //     { title: "Weight in kg", value: "115" },
    //     { title: "Activity", value: "1.465" },
    //     { title: "Goal", value: "2" },
    //   ];
    const age = Number(data[0].value);
    const gender = data[1].value;
    const height = Number(data[2].value);
    const weight = Number(data[3].value);
    const activityLevel = Number(data[4].value);
    const goal = Number(data[5].value);
    let bmr;
    if (gender === "Male") {
        bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    }
    else {
        bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }
    let tdee;
    tdee = bmr * activityLevel;
    let a = { carbs: "", protein: "", fats: "" };
    switch (goal) {
        case 1:
            a = { carbs: "30", protein: "40", fats: "30" };
            return { calories: tdee - 500, a };
        case 2:
            a = { carbs: "40", protein: "30", fats: "30" };
            return { calories: tdee, a };
        case 3:
            a = { carbs: "50", protein: "30", fats: "20" };
            return { calories: tdee + 500, a }; // build muscle
        default:
            //   throw new Error("Invalid goal");
            console.log(goal);
    }
    //
}
exports.default = calorieCalculator;
//# sourceMappingURL=calorieFormCalculator.js.map