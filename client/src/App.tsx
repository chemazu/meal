import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import Home from "./views/Home/Home";
import Recipe from "./views/Recipe";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Router } from "express";
import Meal from "./views/Meal";

function App() {
  const questions = [
    { id: 1, text: "What is your name?", type: "text" },
    { id: 2, text: "What is your email?", type: "email" },
    { id: 3, text: "What is your age?", type: "number" },
    { id: 4, text: "What is your favorite color?", type: "text" },
  ];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<Meal />} />
      </Routes>
    </div>
  );
}

export default App;
