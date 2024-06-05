import React from "react";
import axios from "axios";
import "./App.scss";
import Home from "./views/Home/Home";
import Recipe from "./views/Recipe";
import { Route, Routes } from "react-router-dom";
import Meal from "./views/Meal";
import CalorieForm from "./views/CalorieForm";
import Register from "./views/Register/Index";
import Login from "./views/Login/Index";
import ForgotPassword from "./views/Login/ForgotPassword";
import Dashboard from "./views/Dashboard";
import MealTracker from "./views/Dashboard/MealTracker";
import HomeCopy from "./views/Home/Home copy";
import CreateMealPlan from "./views/CalorieForm/CreateMealPlan";

function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<HomeCopy />} />
        <Route path="/meal/:id" element={<Meal />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/getstarted" element={<CalorieForm />} />
        <Route path="/create-plan" element={<CreateMealPlan />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/mealtracker" element={<MealTracker />} />
        <Route path="/*" element={<p>Only Pop</p>} />
      </Routes>
    </div>
  );
}

export default App;
