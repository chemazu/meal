"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const bookmark_svg_1 = __importDefault(require("../images/bookmark.svg"));
const facebook_svg_1 = __importDefault(require("../images/facebook.svg"));
const instagram_svg_1 = __importDefault(require("../images/instagram.svg"));
const tiktok_svg_1 = __importDefault(require("../images/tiktok.svg"));
const cart_svg_1 = __importDefault(require("../images/cart.svg"));
const times_svg_1 = __importDefault(require("../images/times.svg"));
const burger_svg_1 = __importDefault(require("../images/burger.svg"));
const search_svg_1 = __importDefault(require("../images/search.svg"));
function HomeNav() {
    const [active, setActive] = (0, react_1.useState)(false);
    return (<>
      <nav className="landing-nav">
        <div className="logo-div">
          <img src={bookmark_svg_1.default} alt="" className="logo"/>
          <h2>Cadence</h2>
        </div>
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

        <div style={{ display: "flex" }}>
          <div className="logo-div" style={{ marginRight: "10px" }}>
            <img src={cart_svg_1.default} alt="cart"/>
          </div>
          <div className="logo-div">
            <img src={search_svg_1.default} alt="cart"/>
          </div>
        </div>
      </nav>

      {active ? (<nav className="mobile-nav-active">
          <div className="top">
            <h2>
              <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
            </h2>

            <img src={times_svg_1.default} alt="" onClick={() => {
                setActive(false);
            }}/>
          </div>
          <div className="middle">
            <ul>
              <li>
                <react_router_dom_1.Link to="/#about">About</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/#project">Meal Plans</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/#contact">Contacts</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/#contact">Cart</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/#contact">Search</react_router_dom_1.Link>
              </li>
            </ul>
          </div>
          <div className="end">
            <img src={facebook_svg_1.default} alt="facebook"/>
            <img src={instagram_svg_1.default} alt="instagram"/>
            <img src={tiktok_svg_1.default} alt="tiktok"/>
          </div>
        </nav>) : (<nav className="mobile-nav">
          <div className="top">
            <h2>
              <react_router_dom_1.Link to="/">Home</react_router_dom_1.Link>
            </h2>
            <img src={burger_svg_1.default} alt="" onClick={() => {
                setActive(true);
            }}/>
          </div>
        </nav>)}
    </>);
}
exports.default = HomeNav;
//# sourceMappingURL=HomeNav.js.map