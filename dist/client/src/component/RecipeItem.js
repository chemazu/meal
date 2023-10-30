"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
function RecipeItem() {
    const data = {
        slug: ["Lunch", "High Protein", "Vegan"],
        duration: 15,
        title: "Protein Pancakes",
    };
    return (<>
      <div className="recipe-card">
        <div className="top">
          {data.slug.map((item, index) => {
            return <p key={index}>{item}</p>;
        })}
        </div>
      </div>
      <div className="content">
        <div className="time">
          <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faHome}/>
          <span>{data.duration} minutes</span>
        </div>
        <h2 className="title">{data.title}</h2>
      </div>
    </>);
}
exports.default = RecipeItem;
//# sourceMappingURL=RecipeItem.js.map