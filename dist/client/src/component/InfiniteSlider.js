"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../styles/components/infinite-slider.scss");
function InfiniteSlider() {
    return (<div className="animate-parent">
      {/* <div className="animate">
          This div will move left by 75% viewport width
        </div> */}
      <div className="second-animate">
        This div will move left by 75% viewport width
      </div>
    </div>);
}
exports.default = InfiniteSlider;
//# sourceMappingURL=InfiniteSlider.js.map