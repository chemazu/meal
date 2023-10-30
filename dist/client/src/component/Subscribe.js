"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const tasty_svg_1 = __importDefault(require("../images/tasty.svg"));
function Subscribe() {
    return (<section className="sub-form">
      <img src={tasty_svg_1.default} alt="logo"/>
      <h2>we love healthy foods</h2>
      <p>
        Do you also think Cadence is without more the tastiest? Read more about
        our products, whole foods, super tasty recipes and health tips in our
        newsletter.
      </p>
      <form>
        <input type="text" placeholder="First name"/>
        <input type="email" placeholder="Email address"/>
        <button>Subscribe</button>
      </form>
    </section>);
}
exports.default = Subscribe;
//# sourceMappingURL=Subscribe.js.map