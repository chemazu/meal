import React, { useState, useEffect } from "react";
import "../../styles/calorie-form.scss";
import clock from "../../images/clock.svg";
import malesvg from "../../images/malesvg.svg";
import femalesvg from "../../images/femalesvg.svg";
import checkMark from "../../images/check-mark.svg";
import { useAlert } from "react-alert";
import { PieChart, Pie, Cell } from "recharts";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import calculateCalorieNeeds from "./calorieFormCalculator";
import RegisterModal from "./RegisterModal";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useNavigate } from 'react-router-dom';

export default function Calorieform() {

  const alert = useAlert();
  const navigate = useNavigate();


  const [currentItem, setCurrentItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [registerControl, setRegisterControl] = useState<boolean>(false);
  const [errorHolder, setErrorHolder] = useState<any>([]);
  const [calorieFormData, setCalorieFormData] = useState([
    { title: "Age", value: "" },
    { title: "Gender", value: "" },
    { title: "Height in cm", value: "" },
    { title: "Weight in kg", value: "" },
    { title: "Activity", value: "" },
    { title: "Goal", value: "" },
  ]);
  const createPlan = () => {
    navigate('/create-plan')
  };
  const saveMacros = () => {
    setIsOpen(false);
    setRegisterControl(true);
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const increaseCurrentItem = (e: any) => {
    e.preventDefault();
    setCurrentItem(currentItem + 1);
  };

  const handleIncreaseCurrentItem = () => {
    if (currentItem <= calorieFormData?.length) {
      setCurrentItem(currentItem + 1);
    }
  };
  const handleDecreaseCurrentItem = () => {
    if (currentItem > 1 && currentItem <= calorieFormData?.length + 1) {
      setCurrentItem(currentItem - 1);
    }
  };
  const handleInputChange = (index: any, value: any) => {
    const updatedFormData = [...calorieFormData];
    updatedFormData[index].value = value;
    setCalorieFormData(updatedFormData);
  };
  const handleGender = (index: any, value: any) => {
    if (calorieFormData[1].value === "") {
      const updatedFormData = [...calorieFormData];
      updatedFormData[index].value = value;
      setCalorieFormData(updatedFormData);
      setTimeout(() => setCurrentItem(currentItem + 1), 900);
      // setCurrentItem(currentItem + 1);
    } else {
      const updatedFormData = [...calorieFormData];
      updatedFormData[index].value = "";
      setCalorieFormData(updatedFormData);
      setTimeout(() => setCurrentItem(currentItem + 1), 900);
    }
  };
  const handleSelect = (index: any, value: any) => {
    handleInputChange(index, value.target.value);
    setTimeout(() => setCurrentItem(currentItem + 1), 900);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = [];

    for (let i = 0; i < calorieFormData.length; i++) {
      if (calorieFormData[i].value === "") {
        errors.push(i); // Push the position of the error into the errors array
      }
    }

    if (errors.length > 0) {
      setErrorHolder(errors);
      alert.show("Complete fields!");
      console.log(Math.min(...errors));
      let a = Math.min(...errors);
      setCurrentItem(a + 1);
      console.log(errors);
      console.log(calorieFormData);
      // Update the errorHolder state with the positions of the errors
    } else {
      // setErrorHolder([]);

      setIsOpen(true);

      // Clear the errorHolder if there are no errors
    }
  };
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault();

        setCurrentItem(currentItem + 1);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [currentItem]);
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];

  return (
    <div className="calorie-form-wrapper">
      <form className="calorie-form">
        {currentItem === 0 && (
          <div className="intro-item slide-up">
            <h2>
              Let's gather your information to calculate your daily calorie
              needs for personalized recommendations.
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
        {/* GENDER DIV DONT DELETE */}
        {currentItem >= 1 &&
          calorieFormData.map((item, index) => {
            return index === 1 ? (
              <div
                className="gender-div"
                style={{
                  display: index === currentItem - 1 ? "flex" : "none",
                }}
              >
                {errorHolder.includes(index) && (
                  <p className="incomplete-field">Please complete</p>
                )}

                <div
                  className={`male ${
                    calorieFormData[1].value === "Male" ? "flicker" : ""
                  }`}
                  onClick={() => handleGender(1, "Male")}
                >
                  <div className="top-check">
                    <div
                      className="check-wrapper
                      
                      "
                      style={{
                        background:
                          calorieFormData[1].value === "Male" ? "" : "none",
                      }}
                    >
                      {calorieFormData[1].value === "Male" && <p></p>}
                    </div>
                  </div>
                  <img src={malesvg} alt="male" />
                  <div className="text-option">
                    <p>A</p>
                    <span>Male</span>
                  </div>
                </div>
                <div
                  className={`male ${
                    calorieFormData[1].value === "Female" ? "flicker" : ""
                  }`}
                  onClick={() => handleGender(1, "Female")}
                >
                  <div className="top-check">
                    <div
                      className="check-wrapper"
                      style={{
                        background:
                          calorieFormData[1].value === "Female" ? "" : "none",
                      }}
                    >
                      {calorieFormData[1].value === "Female" && <p></p>}
                    </div>
                  </div>
                  <img src={femalesvg} alt="male" />
                  <div className="text-option">
                    <p>B</p>
                    <span>Female</span>
                  </div>
                </div>
              </div>
            ) : index === 4 ? (
              <>
                <div
                  style={{
                    display: index === currentItem - 1 ? "block" : "none",
                  }}
                  className="slide-up form-item"
                >
                  <div className="form-item-title">
                    {errorHolder.includes(index) && (
                      <p className="incomplete-field">Please complete</p>
                    )}

                    <span>
                      {" "}
                      {index + 1} * {item.title} Level (BMR)
                    </span>
                  </div>
                  <select
                    className="form-input"
                    placeholder="Type your answer here..."
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  >
                    <option value="" selected disabled>
                      Select your activity level
                    </option>
                    <option value="1.2">
                      Sedentary: little or no exercise
                    </option>
                    <option value="1.375">
                      Light: exercise 1-3 times/week
                    </option>
                    <option value="1.465">
                      Moderate: exercise 4-5 times/week
                    </option>
                    <option value="1.55">
                      Active: daily exercise or intense exercise 3-4 times/week
                    </option>
                    <option value="1.725">
                      Very Active: intense exercise 6-7 times/week
                    </option>
                    <option value="1.9">
                      Extra Active: very intense exercise daily, or physical job
                    </option>
                  </select>
                  <button
                    className="slow-slide-up calorie-form-button"
                    onClick={(e) => {
                      increaseCurrentItem(e);
                    }}
                  >
                    Ok{" "}
                    <img src={checkMark} alt="ok" style={{ width: "1.5rem" }} />
                  </button>
                </div>
              </>
            ) : index === 5 ? (
              <>
                <div
                  style={{
                    display: index === currentItem - 1 ? "block" : "none",
                  }}
                  className="slide-up form-item"
                >
                  <div className="form-item-title">
                    <span>
                      {" "}
                      {errorHolder.includes(index) && (
                        <p className="incomplete-field">Please complete</p>
                      )}
                      {index + 1} * {item.title}
                    </span>
                  </div>
                  <select
                    className="form-input"
                    placeholder="Type your answer here..."
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  >
                    <option value="" selected disabled>
                      Select your goal
                    </option>
                    <option value="1">Loose Weight : Calorie Deficit</option>
                    <option value="2">
                      Maintain Weight Healthy Body Composition
                    </option>{" "}
                    <option value="3">Gain Weight : Build Muscle </option>
                  </select>
                  <button
                    className="slow-slide-up calorie-form-button"
                    onClick={(e) => {
                      increaseCurrentItem(e);
                    }}
                  >
                    Ok{" "}
                    <img src={checkMark} alt="ok" style={{ width: "1.5rem" }} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: index === currentItem - 1 ? "block" : "none",
                  }}
                  className="slide-up form-item"
                >
                  {errorHolder.includes(index) && (
                    <p className="incomplete-field">Please complete</p>
                  )}

                  <div className="form-item-title">
                    <span>
                      {" "}
                      {index + 1} * {item.title}
                    </span>
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
                    Ok{" "}
                    <img src={checkMark} alt="ok" style={{ width: "1.5rem" }} />
                  </button>
                </div>
              </>
            );
          })}
        {currentItem > calorieFormData.length && (
          <div style={{ display: "block" }}>
            <RegisterModal
              registerControl={registerControl}
              setRegisterControl={setRegisterControl}
            />
            <Modal isOpen={isOpen}>
              <ModalHeader
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Close
              </ModalHeader>
              <ModalBody>
                Congratulations on taking the first step towards a healthier you
                <div className="middle-div">
                  <div className="pie-chart-wrapper">
                    <PieChart width={250} height={250}>
                      <Pie
                        data={data}
                        dataKey="students"
                        outerRadius={120}
                        fill="yellow"
                        label={renderCustomizedLabel}
                        labelLine={false}
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>
                  <div className="middle-text-wrapper">
                    <p>
                      {calculateCalorieNeeds(calorieFormData)?.calories.toFixed(
                        0
                      )}{" "}
                      calories
                    </p>
                    <div className="nutritional-breakdown">
                      <p>Protein : </p>
                      <p>
                        {Number(
                          0.3 *
                            Number(
                              calculateCalorieNeeds(calorieFormData)?.calories
                            )
                        ).toFixed(0)}{" "}
                        cals (
                        {Number(
                          0.12 *
                            Number(
                              calculateCalorieNeeds(calorieFormData)?.calories
                            )
                        ).toFixed(0)}{" "}
                        grams)
                      </p>
                      <p>Carbohydrates: </p>
                      <p>
                        {Number(
                          0.45 *
                            Number(
                              calculateCalorieNeeds(calorieFormData)?.calories
                            )
                        ).toFixed(0)}{" "}
                        cals (
                        {Number(
                          (0.45 *
                            Number(
                              calculateCalorieNeeds(calorieFormData)?.calories
                            )) /
                            4
                        ).toFixed(0)}{" "}
                        grams)
                      </p>
                      <p>Fats: </p>
                      <p>
                        {Number(
                          0.25 *
                            Number(
                              calculateCalorieNeeds(calorieFormData)?.calories
                            )
                        ).toFixed(0)}{" "}
                        cals (
                        {Number(
                          (0.25 *
                            Number(
                              calculateCalorieNeeds(calorieFormData)?.calories
                            )) /
                            9
                        ).toFixed(0)}{" "}
                        grams)
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="bottom-div">
  <p>Consume a variety of colorful fruits and vegetables for essential nutrients.</p>
  <p>Aim for at least 30 minutes of daily exercise for a healthy lifestyle.</p>
  <p>Good luck on your journey to better health!</p>
</div> */}
              </ModalBody>
              <ModalFooter>
                <div
                  className="button-wrapper footer-button-wrapper"
                  style={{ paddingTop: 0 }}
                >
                  <button
                    onClick={() => {
                      saveMacros();
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      createPlan();
                    }}
                  >
                    Create Meal Plan
                  </button>
                </div>
              </ModalFooter>
            </Modal>

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
      <div className="form-manual-control">
        <span
          className="button-control"
          onClick={() => {
            console.log(currentItem);
            handleDecreaseCurrentItem();
          }}
        >
          {" "}
          <svg height="9" width="14">
            <path
              d="M11.996 8.121l1.414-1.414L6.705 0 0 6.707l1.414 1.414 5.291-5.293z"
              stroke="rgb(128, 128, 128)"
              fill="rgb(128, 128, 128)"
            ></path>
          </svg>
        </span>
        <span
          className="button-control"
          onClick={() => {
            handleIncreaseCurrentItem();
          }}
        >
          <svg height="9" width="14">
            <path
              d="M12.293.293l1.414 1.414L7 8.414.293 1.707 1.707.293 7 5.586z"
              stroke="rgb(128, 128, 128)"
              fill="rgb(128, 128, 128)"
            ></path>
          </svg>
        </span>
        <p style={{ color: "#fff" }}>Cadence Health and Wellness</p>
      </div>
    </div>
  );
}

// Congratulations on taking the first step towards a healthier you! Based on your input, your daily calorie requirements are:

// To lose weight: [insert calorie amount here]
// To maintain weight: [insert calorie amount here]
// To gain weight: [insert calorie amount here]
// Remember, sustainable weight management requires a combination of healthy eating habits and regular exercise. Here are some meal suggestions to help you achieve your goals:

// For weight loss: Try incorporating more lean protein, whole grains, and vegetables into your meals. Avoid sugary drinks and processed foods.
// For weight gain: Increase your calorie intake with healthy sources of fat, such as nuts, seeds, and avocado. Focus on nutrient-dense foods that will provide the energy you need for exercise.
// For weight maintenance: Aim for a balanced diet that includes a variety of fruits, vegetables, whole grains, lean protein, and healthy fats.
// In addition to calorie intake, don't forget about the importance of micro-nutrients such as vitamins and minerals. Try to incorporate a variety of colorful fruits and vegetables into your diet to ensure you're getting a range of nutrients.

// Finally, remember that exercise is a key component of a healthy lifestyle. Aim for at least 30 minutes of moderate exercise per day, such as brisk walking, cycling, or swimming. Strength training exercises can also help you build muscle and increase your metabolism.

// Best of luck on your journey to better health!
