"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
const App_1 = __importDefault(require("./App"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const react_router_dom_1 = require("react-router-dom");
const react_alert_1 = require("react-alert");
const react_alert_template_basic_1 = __importDefault(require("react-alert-template-basic"));
const root = client_1.default.createRoot(document.getElementById("root"));
const options = {
    // you can also just use 'bottom center'
    position: react_alert_1.positions.TOP_RIGHT,
    timeout: 1500,
    offset: "30px",
    // you can also just use 'scale'
    transition: react_alert_1.transitions.FADE,
};
root.render(<react_1.default.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <react_alert_1.Provider template={react_alert_template_basic_1.default} {...options}>
        <App_1.default />
      </react_alert_1.Provider>
    </react_router_dom_1.BrowserRouter>
  </react_1.default.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
//# sourceMappingURL=index.js.map