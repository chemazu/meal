import React, { useState } from "react";
import "../../styles/calorie-form.scss";
import clock from "../../images/clock.svg";

export default function Calorieform() {
  const [currentItem, setCurrentItem] = useState(0);

  const [calorieFormData, setCalorieFormData] = useState([
    { title: "Age", value: "" },
    { title: "Sex", value: "" },
  ]);
  const increaseCurrentItem = (e: any) => {
    e.preventDefault();
    setCurrentItem(currentItem + 1);
  };
  const handleInputChange = (index: any, value: any) => {
    const updatedFormData = [...calorieFormData];
    updatedFormData[index].value = value;
    setCalorieFormData(updatedFormData);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(calorieFormData);
  };
  return (
    <div className="calorie-form-wrapper">
      <form className="calorie-form">
        {currentItem === 0 && (
          <div className="intro-item slide-up">
            <h2>
              Let's gather your information to calculate your daily calorie
              needs for <br />
              personalized recommendations.
            </h2>
            <div className="button-wrapper">
              <button
                onClick={(e) => {
                  increaseCurrentItem(e);
                }}
              >
                Sure
              </button>
              <span>
                Press <strong>Enter ↵</strong>
              </span>
            </div>
            <div className="timeline">
              <p>Takes 5 Mins</p>
            </div>
          </div>
        )}
        {currentItem >= 1 &&
          calorieFormData.map((item, index, arr) => {
            return (
              <>
                <div
                  style={{
                    display: index === currentItem - 1 ? "block" : "none",
                  }}
                  className="slide-up form-item"
                >
                  <div className="form-item-title">
                    <span> 1* {item.title}</span>
                  </div>
                  <input
                    className="form-input"
                    placeholder="Type your answer here..."
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <button
                    className="slow-slide-up calorie-form-button"
                    onClick={(e) => {
                      increaseCurrentItem(e);
                    }}
                  >
                    Button
                  </button>
                </div>
              </>
            );
          })}
        {currentItem > calorieFormData.length && (
          <div style={{ display: "block" }}>
            End
            <button
              className="slow-slide-up calorie-form-button"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
