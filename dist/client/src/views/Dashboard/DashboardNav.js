"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function DashboardNav() {
    return (<>
      <nav className="dash-nav home-nav">
        <ul>
          <li>
            <react_router_dom_1.Link to="/">Shop</react_router_dom_1.Link>
          </li>
          <li>
            <react_router_dom_1.Link to="/#about">Learn</react_router_dom_1.Link>
          </li>
        </ul>
        <h2>Cadence</h2>
        <ul>
          <li>
            <react_router_dom_1.Link to="/#project">Save 20%</react_router_dom_1.Link>
          </li>
          <li>
            <react_router_dom_1.Link to="/#contact">Get Started</react_router_dom_1.Link>
          </li>
        </ul>
      </nav>
    </>);
}
exports.default = DashboardNav;
//# sourceMappingURL=DashboardNav.js.map