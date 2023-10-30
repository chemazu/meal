"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const axios_1 = __importDefault(require("axios"));
require("./App.scss");
const Home_1 = __importDefault(require("./views/Home/Home"));
const Recipe_1 = __importDefault(require("./views/Recipe"));
const react_router_dom_1 = require("react-router-dom");
const Meal_1 = __importDefault(require("./views/Meal"));
const CalorieForm_1 = __importDefault(require("./views/CalorieForm"));
const Index_1 = __importDefault(require("./views/Register/Index"));
const Index_2 = __importDefault(require("./views/Login/Index"));
const ForgotPassword_1 = __importDefault(require("./views/Login/ForgotPassword"));
const Dashboard_1 = __importDefault(require("./views/Dashboard"));
const MealTracker_1 = __importDefault(require("./views/Dashboard/MealTracker"));
const Home_copy_1 = __importDefault(require("./views/Home/Home copy"));
function App() {
    axios_1.default.defaults.baseURL = "http://localhost:8000";
    const isAuthenticated = !!localStorage.getItem("token");
    return (<div className="App">
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
        <react_router_dom_1.Route path="/1" element={<Home_copy_1.default />}/>

        <react_router_dom_1.Route path="/meal/:id" element={<Meal_1.default />}/>
        <react_router_dom_1.Route path="/recipe/:id" element={<Recipe_1.default />}/>
        <react_router_dom_1.Route path="/getstarted" element={<CalorieForm_1.default />}/>
        <react_router_dom_1.Route path="/signup" element={<Index_1.default />}/>
        <react_router_dom_1.Route path="/signin" element={<Index_2.default />}/>
        <react_router_dom_1.Route path="/forgot-password" element={<ForgotPassword_1.default />}/>
        <react_router_dom_1.Route path="/dashboard" element={<Dashboard_1.default />}/>
        <react_router_dom_1.Route path="/dashboard/mealtracker" element={<MealTracker_1.default />}/>




        {/* <Route path="/">{<Home />} </Route>
        <Route path="/meal/:id">{<Meal />}</Route> */}
      </react_router_dom_1.Routes>
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map