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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselItem = void 0;
const react_1 = __importStar(require("react"));
require("../styles/components/carousel.scss");
const CarouselItem = ({ children }) => {
    return <div className="courses-carousel-item">{children}</div>;
};
exports.CarouselItem = CarouselItem;
const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(0);
    //   const updateIndex = (newIndex: React.SetStateAction<number>) => {
    const updateIndex = (newIndex) => {
        const numItems = react_1.default.Children.count(children);
        if (newIndex < 0) {
            newIndex = numItems - 1;
        }
        else if (newIndex >= Math.ceil(numItems * 0.25)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };
    const childrenArray = react_1.default.Children.toArray(children);
    const numItems = childrenArray.length;
    let loopCount = Math.ceil(numItems / 4);
    // let loopCount = Math.ceil(numItems / (screenWidth < 768 ? 2 : 4));
    let newArray = [];
    for (let i = 0; i < loopCount; i++) {
        newArray = newArray.concat(childrenArray);
    }
    newArray = newArray.slice(0, loopCount * 4);
    return (<div className="courses-carousel" style={{ position: "relative" }}>
      <div className="courses-inner" style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            display: "flex",
        }}>
        {newArray.map((child, index) => {
            return react_1.default.cloneElement(child, { width: "25%", key: index });
        })}
      </div>

      {childrenArray.length > 4 ? (<div className="indicators" style={{ position: "absolute", right: 0, top: "30%" }}>
          <button onClick={() => {
                updateIndex(activeIndex + 1);
            }} style={{
                backgroundColor: "grey",
                borderRadius: "50%",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
                padding: "10px 20px",
                border: "0px",
            }}>
            &gt;
          </button>
        </div>) : ("")}
    </div>);
};
exports.default = Carousel;
//# sourceMappingURL=useCarousel.js.map