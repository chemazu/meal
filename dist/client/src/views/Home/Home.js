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
const Footer_1 = __importDefault(require("../../component/Footer"));
const Subscribe_1 = __importDefault(require("../../component/Subscribe"));
const HomeNav_1 = __importDefault(require("../../component/HomeNav"));
const order_png_1 = __importDefault(require("../../images/order.png"));
const deliver_png_1 = __importDefault(require("../../images/deliver.png"));
const enjoy_png_1 = __importDefault(require("../../images/enjoy.png"));
const feature_1_img_jpg_1 = __importDefault(require("../../images/feature-1-img.jpg"));
const goat_pepper_soup_jpg_1 = __importDefault(require("../../images/goat-pepper-soup.jpg"));
const grilled_cb_jpg_1 = __importDefault(require("../../images/grilled-cb.jpg"));
const grilledplantains_jpeg_1 = __importDefault(require("../../images/grilledplantains.jpeg"));
const coffee_avif_1 = __importDefault(require("../../images/coffee.avif"));
const coffee_deco_avif_1 = __importDefault(require("../../images/coffee-deco.avif"));
const pink_avif_1 = __importDefault(require("../../images/pink.avif"));
const pink_deco_avif_1 = __importDefault(require("../../images/pink-deco.avif"));
const coconut_avif_1 = __importDefault(require("../../images/coconut.avif"));
const coconut_deco_avif_1 = __importDefault(require("../../images/coconut-deco.avif"));
const mint_avif_1 = __importDefault(require("../../images/mint.avif"));
const mint_deco_avif_1 = __importDefault(require("../../images/mint-deco.avif"));
const papaya_avif_1 = __importDefault(require("../../images/papaya.avif"));
const papaya_deco_avif_1 = __importDefault(require("../../images/papaya-deco.avif"));
const black_sesame_avif_1 = __importDefault(require("../../images/black-sesame.avif"));
const papaya_deco_avif_2 = __importDefault(require("../../images/papaya-deco.avif"));
const react_router_dom_1 = require("react-router-dom");
function Home() {
    let navigate = (0, react_router_dom_1.useNavigate)();
    const courseListContainerRef = (0, react_1.useRef)(null);
    const scroll = (scrollOffset) => {
        if (courseListContainerRef.current) {
            courseListContainerRef.current.scrollLeft += scrollOffset;
        }
    };
    const smoothieOptions = [
        {
            image: coffee_avif_1.default,
            imageDeco: coffee_deco_avif_1.default,
            title: "Coffee Smoothie",
        },
        {
            image: pink_avif_1.default,
            imageDeco: pink_deco_avif_1.default,
            title: "Pink Smoothie",
        },
        {
            image: coconut_avif_1.default,
            imageDeco: coconut_deco_avif_1.default,
            title: "Coconut Smoothie",
        },
        {
            image: mint_avif_1.default,
            imageDeco: mint_deco_avif_1.default,
            title: "Mint Smoothie",
        },
        {
            image: papaya_avif_1.default,
            imageDeco: papaya_deco_avif_1.default,
            title: "Papaya Smoothie",
        },
        {
            image: black_sesame_avif_1.default,
            imageDeco: papaya_deco_avif_2.default,
            title: "Black Sesame Smoothie",
        },
    ];
    return (<div className="home-page">
      <HomeNav_1.default />
      <section className="home-header">
        <div className="cta-button">
          <h2>we love healthy foods </h2>
          <p>
            Are you ready to embark on a journey to culinary delight and peak
            physical vitality? Look no further! Cadence invites you to savor the
            mouthwatering fusion of taste and health.
          </p>
          <button onClick={() => {
            navigate("/getstarted");
        }}>
            Get Started
          </button>
        </div>
      </section>
      <section className="features-wrapper">
        <div>
          <h2>How it works</h2>
        </div>
        <div className="features">
          <div>
            <img src={order_png_1.default} alt=""/>
            <h4> Pick your plan & meals</h4>
            <p>
              Define your goal and choose meals from our biweekly rotating menu
            </p>
          </div>

          <div>
            <img src={deliver_png_1.default} alt=""/>
            <h4>We cook & deliver</h4>
            <p>
              Our chefs freshly prepare your dishes to restaurant quality with
              macro precision, then they’re delivered chilled to your door by
              our courier
            </p>
          </div>
          <div>
            <img src={enjoy_png_1.default} alt=""/>
            <h4>Enjoy & succeed</h4>
            <p>
              Enjoy delicious healthy food without the effort of cooking to keep
              you on track. No excuses!
            </p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="left">
          <h2>
            {/* EMBRACE EFFORTLESS MEAL PREP.👋
        <br /> */}
            SAY GOODBYE TO HASSLE
          </h2>
          <img src={feature_1_img_jpg_1.default} alt=""/>
        </div>
        <div className="right">
          <h2>
            {/* EMBRACE EFFORTLESS MEAL PREP.👋
        <br /> */}
            SAY GOODBYE TO HASSLES👋
          </h2>
          <p>
            Make mealtime struggles a thing of the past, elevate your culinary
            experience, and supercharge your nutrition with Cadence™. <br />
            It’s revolutionary meal prep reimagined for your convenience and
            nourishment, driven by culinary expertise."
          </p>
          <button className="sec-button">Meal plans</button>
        </div>
      </section>
      <section className="features-wrapper">
        <div>
          <h2>Your Favourites</h2>
        </div>
        <div className="features">
          <div>
            <img src={goat_pepper_soup_jpg_1.default} alt="" className="food-image rotate"/>
            <h4>Goat Meat Pepper soup with sweet potatoes</h4>
            <p>
              Define your goal and choose meals from our biweekly rotating menu
            </p>
          </div>

          <div>
            <img src={grilled_cb_jpg_1.default} alt="" className="food-image"/>
            <h4>Spicy Coconut Rice and with grilled chicken rice</h4>
            <p>
              Our chefs freshly prepare your dishes to restaurant quality with
              macro precision, then they’re delivered chilled to your door by
              our courier
            </p>
          </div>
          <div>
            <img src={grilledplantains_jpeg_1.default} alt="" className="food-image"/>
            <h4>Grilled Plaintains and Spicy Salmon with vegetable side</h4>
            <p>
              Enjoy delicious healthy food without the effort of cooking to keep
              you on track. No excuses!
            </p>
          </div>
        </div>

        <div className="feature-button">
          <button className="pry-button" onClick={() => {
            navigate("/getstarted");
        }}>
            View Full Menu
          </button>
        </div>
      </section>

      <section className="features-wrapper get-started">
        <div>
          <h2>Create the perfect plan for you </h2>
          <p>
            Not sure where to start? No problem! Take our quick quiz to discover
            how you can optimize your life to get 1% better every day.
          </p>
        </div>

        <button className="pry-button">Get started</button>

        {/* <div className="features">
 

          <div>
            <img src={deliver} alt="" />
            <h4>We cook & deliver</h4>
            <p>
              Our chefs freshly prepare your dishes to restaurant quality with
              macro precision, then they’re delivered chilled to your door by
              our courier
            </p>
          </div>
          <div>
            <img src={enjoy} alt="" />
            <h4>Enjoy & succeed</h4>
            <p>
              Enjoy delicious healthy food without the effort of cooking to keep
              you on track. No excuses!
            </p>
          </div>
        </div> */}
      </section>
      {/* <section className="features-wrapper">
          <div>
            <h2> Quick and easy healthy recipes.</h2>
          </div>
          <div>
            <RecipeCard/>
          </div>
        </section> */}

      {/* <section className="features-wrapper">
          <div>
            <h2>Don’t just take our word for it...</h2>
          </div>
          <div className="features">
            <div>
              <img src={order} alt="" />
              <h4> Pick your plan & meals</h4>
              <p>
                Define your goal and choose meals from our biweekly rotating menu
              </p>
            </div>
  
            <div>
              <img src={deliver} alt="" />
              <h4>We cook & deliver</h4>
              <p>
                Our chefs freshly prepare your dishes to restaurant quality with
                macro precision, then they’re delivered chilled to your door by
                our courier
              </p>
            </div>
            <div>
              <img src={enjoy} alt="" />
              <h4>Enjoy & succeed</h4>
              <p>
                Enjoy delicious healthy food without the effort of cooking to keep
                you on track. No excuses!
              </p>
            </div>
          </div>
        </section> */}
      {/* <section className="benefits-2">
          <div className="right">
            <h2>
              NONE OF THE PREP.👋 <br />
              ALL OF THE VICTORY
            </h2>
            <p>
              Cadence does more so you can do less. Think nourishing and delicious
              fruit + veg-packed food without the prep, mess, or stress..
            </p>
            <button className="sec-button">Call to Action</button>
          </div>
          <div className="left">
            <img src={feature2} alt="" />
          </div>
        </section> */}
      {/* <section className="smoothie-product-options">
          <div className="top-text">
            <div className="text">
              <h2>All natural. Made for you.</h2>
              Let’s hear it for ready-to-blend Smoothies built on fruits +
              veggies. Pick from 25+ flavors, blend with your liquid of choice,
              then enjoy at mealtimes or in-between times.
            </div>
            <button>Shop All</button>
          </div>
          <div className="smoothie-product-wrapper">
            {smoothieOptions.map((item) => (
              <SmoothieItem smoothie={item} />
            ))}
          </div>
          <div className="text">
            <h2>Not sure where to start?</h2>
            <p>
              No problem! Take our quick quiz to discover how you can optimize
              your day to get 1% better everyday.
            </p>
  
            <button>Lets Get Started</button>
          </div>
        </section> */}
      <Subscribe_1.default />

      <Footer_1.default />
    </div>);
}
exports.default = Home;
//# sourceMappingURL=Home.js.map