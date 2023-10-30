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
const react_1 = __importStar(require("react"));
function SmoothieItem({ smoothie }) {
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="smoothie-item">
      {isHovered ? (<img src={smoothie.image} alt="sdsd"/>) : (<img src={smoothie.imageDeco} alt="sdsd"/>)}
      <div className="content-box">
        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 367 4" preserveAspectRatio="none" style={{ fill: "#702c63" }}>
          <g id="product-footer-texture-template--16748769673440__164396583071a745ec">
            <path d="M0 3.9993371v-.332218c.061 0 .123.006.185.006h.027c1.524 0 2.888-1.355 3.388-3.37299999h2.939c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.024c1.524 0 2.887-1.355 3.393-3.37299999h2.934C16.8 2.3181191 18.171 3.6731191 19.7 3.6731191h.023c1.525 0 2.888-1.355 3.393-3.37299999h2.934c.509 2.01799999 1.877 3.37299999 3.4 3.37299999h.025c1.525 0 2.892-1.355 3.397-3.37299999h2.935c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.024c.800204-.01729 1.55869-.360417 2.1-.95.639382-.678483 1.086988-1.514682 1.297-2.42299999h2.935c.05901.232342.131464.461061.217.685.033.089.073.17299999.112.25499999l.04.085.038.086c.028.064.057.131.089.192.08196.15339.172085.302271.27.446l.024.041c.012.02.024.039.037.058.521008.819047 1.377678 1.365631 2.34 1.493v.006c.03 0 .058.007.089.012.04891.0084.09839.01306.148.014h.025c1.525 0 2.888-1.355 3.393-3.37299999h2.935c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.023c1.525 0 2.888-1.355 3.393-3.37299999h2.936c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.028c1.53 0 2.893-1.355 3.4-3.37299999h2.935c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.024c1.525 0 2.888-1.355 3.394-3.37299999h2.933c.509 2.01799999 1.878 3.37299999 3.4 3.37299999h.024c1.53 0 2.89-1.355 3.399-3.37299999h2.934c.509 2.01799999 1.878 3.37299999 3.4 3.37299999h.022c1.526 0 2.89-1.355 3.4-3.37299999h2.935c.509 2.01799999 1.878 3.37299999 3.406 3.37299999h.023c.80177-.01675 1.56201-.35985 2.105-.95.002-.0035.004-.0066.007-.009.63182-.677893 1.07338-1.510646 1.28-2.41399999h2.934c.0601.232132.13292.460806.218.685.036.1.081.19099999.123.27999999l.029.059c.013.03.026.059.039.089.027.062.054.126.086.184.083.158.179.308.27.446l.023.037c.013.021.025.041.04.061.51988.819879 1.37652 1.367049 2.339 1.494v.006c.031 0 .061.007.092.012.0482.0083.097.013.146.014h.025c1.524 0 2.887-1.355 3.394-3.37299999h2.933c.508 2.01799999 1.877 3.37299999 3.4 3.37299999h.025c1.522 0 2.885-1.355 3.392-3.37299999h2.934c.509 2.01799999 1.878 3.37299999 3.4 3.37299999h.024c1.525 0 2.888-1.355 3.394-3.37299999h2.933c.509 2.01799999 1.878 3.37299999 3.407 3.37299999h.022c1.524 0 2.887-1.355 3.394-3.37299999h2.934c.51 2.01799999 1.878 3.37299999 3.4 3.37299999h.025c1.524 0 2.887-1.355 3.393-3.37299999h2.934c.508 2.01799999 1.877 3.37299999 3.4 3.37299999h.023c1.525 0 2.888-1.355 3.394-3.37299999h2.934c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.024c.80018-.01741 1.55862-.360513 2.1-.95.64504-.674858 1.0992-1.508978 1.316-2.41699999h2.936c.058.232294.12943.461015.214.685.036.09.076.17499999.114.25899999l.038.08c.015.033.03.066.046.1.026.059.052.119.081.175.0826.153248.17302.302115.271.446.01.015.02.031.029.047.009.016.022.035.033.051.51998.819779 1.37657 1.366916 2.339 1.494v.006c.031 0 .06.007.091.012.0486.0083.0977.01301.147.014h.025c1.524 0 2.887-1.355 3.393-3.37299999h2.934c.509 2.01799999 1.877 3.37299999 3.4 3.37299999h.024c1.526 0 2.889-1.355 3.392-3.37299999h2.937c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.023c1.524 0 2.888-1.355 3.395-3.37299999h2.934c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.025c1.525 0 2.888-1.355 3.391-3.37299999h2.935c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.025c1.525 0 2.888-1.355 3.392-3.37299999h2.936c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.024c1.524 0 2.887-1.355 3.393-3.37299999h2.935c.509 2.01799999 1.877 3.37299999 3.4 3.37299999h.024c.80245-.01688 1.56319-.360766 2.106-.952l.005-.007c.6408-.673705 1.09145-1.505309 1.306-2.40999999h2.935c.059.232233.13111.460934.216.685.031.081.067.15799999.1.23399999.016.033.031.067.047.1l.043.1c.027.062.056.127.086.186.072.135.158.275.267.44l.025.041c.0123.02133.0256.04202.04.062.52051.820174 1.37789 1.367344 2.341 1.494v.006c.03 0 .059.007.089.012.0486.0084.0977.0131.147.014h.025c1.525 0 2.888-1.355 3.392-3.37299999h2.94c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.023c1.525 0 2.889-1.355 3.394-3.37299999h2.936c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.022c1.526 0 2.889-1.355 3.394-3.37299999h2.935c.509 2.01799999 1.876 3.37299999 3.4 3.37299999h.023c1.525 0 2.889-1.355 3.395-3.37299999h2.934c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.023c1.525 0 2.889-1.355 3.4-3.37299999h2.932c.509 2.01799999 1.878 3.37299999 3.4 3.37299999h.024c1.525 0 2.888-1.355 3.393-3.37299999h2.935c.509 2.01799999 1.876 3.37299999 3.4 3.37299999h.024c.80164-.01733 1.56166-.36033 2.105-.95l.006-.009c.64047-.675305 1.08983-1.508789 1.302-2.41499999h2.935c.0582.232699.13097.461489.218.685.031.084.068.16399999.1.24099999l.043.094.037.085c.029.067.059.136.093.2.0807.151337.1695.298216.266.44l.032.051c.011.018.022.035.033.051.52085.820771 1.37911 1.368039 2.343 1.494v.006c.031 0 .061.007.092.012.0486.0083.0977.01301.147.014h.024c1.526 0 2.889-1.355 3.393-3.37299999h2.934c.51 2.01799999 1.878 3.37299999 3.4 3.37299999h.025c1.525 0 2.888-1.355 3.393-3.37299999h2.934c.509 2.01799999 1.877 3.37299999 3.4 3.37299999h.026c1.523 0 2.886-1.355 3.394-3.37299999H348c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.026c1.523 0 2.886-1.355 3.392-3.37299999h2.934c.508 2.01799999 1.876 3.37299999 3.4 3.37299999h.024c1.524 0 2.887-1.355 3.393-3.37299999H367V3.9886831s-366.999.01456-367 .01065z" data-name="Combined Shape"></path>
          </g>
        </svg>
        <div className="smoothie-title">
          <div className="title">
            <p> {smoothie.title}</p>
            <p> {smoothie.title}</p>
          </div>
          <div className="button">add</div>
        </div>
      </div>
    </div>);
}
exports.default = SmoothieItem;
//# sourceMappingURL=SmoothieItem.js.map