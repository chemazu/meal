"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function NavBar() {
    return (<>
      <nav className="home-nav">
        <h2>Cadence</h2>
        <ul>
          <li>
            <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
          </li>
          <li>
            <react_router_dom_1.Link to="/#about">About</react_router_dom_1.Link>
          </li>
          <li>
            <react_router_dom_1.Link to="/#project">Meal Plans</react_router_dom_1.Link>
          </li>
          <li>
            <react_router_dom_1.Link to="/#contact">Contacts</react_router_dom_1.Link>
          </li>
        </ul>
        <p>Search</p>
      </nav>
    </>);
}
exports.default = NavBar;
//# sourceMappingURL=Navbar.js.map