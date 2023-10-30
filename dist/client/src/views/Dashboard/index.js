"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DashboardNav_1 = __importDefault(require("./DashboardNav"));
const Footer_1 = __importDefault(require("../../component/Footer"));
const Subscribe_1 = __importDefault(require("../../component/Subscribe"));
const chicken_rice_jpg_1 = __importDefault(require("../../images/chicken-rice.jpg"));
const tomorrow_jpg_1 = __importDefault(require("../../images/tomorrow.jpg"));
const chicken_rice_2_jpg_1 = __importDefault(require("../../images/chicken-rice-2.jpg"));
const yesterday_jpg_1 = __importDefault(require("../../images/yesterday.jpg"));
const MealItem_1 = __importDefault(require("../../component/MealItem"));
function Dashboard() {
    let user = { name: "Chukwuemeka" };
    let orders = [{ one: 1 }];
    function formatDate(date, offset = 0) {
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + offset);
        const dayOfWeek = daysOfWeek[currentDate.getDay()];
        const dayOfMonth = currentDate.getDate();
        const month = months[currentDate.getMonth()];
        return `${dayOfWeek} ${dayOfMonth} ${month}`;
    }
    return (<>
      <DashboardNav_1.default />

      <section className="dashboard-header">
        <h1>Hi, {user.name}</h1>
        <div className="underline"></div>
        <p>We are here to help you</p>
        <div className="help-holder">
          <div className="single-help">
            <svg width="36" height="36" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M75.16 148.82C115.841 148.82 148.82 115.841 148.82 75.16C148.82 34.4787 115.841 1.5 75.16 1.5C34.4787 1.5 1.5 34.4787 1.5 75.16C1.5 115.841 34.4787 148.82 75.16 148.82Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M99.0399 34.6602H51.2799C49.5568 34.6602 48.1599 36.057 48.1599 37.7802V112.54C48.1599 114.263 49.5568 115.66 51.2799 115.66H99.0399C100.763 115.66 102.16 114.263 102.16 112.54V37.7802C102.16 36.057 100.763 34.6602 99.0399 34.6602Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M48.1599 50.6602H96.5299" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M48.1599 99.6602H96.6099" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M69.4299 42.6602H80.8999" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M112.17 64.5698C114.92 71.1098 115.18 78.7198 112.28 85.8098" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M120.28 62.4199C123.59 70.2799 123.89 79.3899 120.42 87.8999" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M38.0399 85.8098C35.1499 78.7198 35.3999 71.1198 38.1499 64.5698" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M29.91 87.8999C26.44 79.3899 26.74 70.2699 30.05 62.4199" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M78.7699 107.14C78.4799 105.37 76.8099 104.18 75.0399 104.47C73.2699 104.76 72.0799 106.43 72.3699 108.2C72.6599 109.97 74.3299 111.16 76.0999 110.87C77.8699 110.58 79.0599 108.91 78.7699 107.14Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <p>Phone</p>
            <p>08111111111</p>
          </div>
          <div className="single-help">
            <svg width="36" height="36" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M75.16 148.82C115.841 148.82 148.82 115.841 148.82 75.16C148.82 34.4787 115.841 1.5 75.16 1.5C34.4787 1.5 1.5 34.4787 1.5 75.16C1.5 115.841 34.4787 148.82 75.16 148.82Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M99.0399 34.6602H51.2799C49.5568 34.6602 48.1599 36.057 48.1599 37.7802V112.54C48.1599 114.263 49.5568 115.66 51.2799 115.66H99.0399C100.763 115.66 102.16 114.263 102.16 112.54V37.7802C102.16 36.057 100.763 34.6602 99.0399 34.6602Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M48.1599 50.6602H96.5299" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M48.1599 99.6602H96.6099" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M69.4299 42.6602H80.8999" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M112.17 64.5698C114.92 71.1098 115.18 78.7198 112.28 85.8098" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M120.28 62.4199C123.59 70.2799 123.89 79.3899 120.42 87.8999" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M38.0399 85.8098C35.1499 78.7198 35.3999 71.1198 38.1499 64.5698" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M29.91 87.8999C26.44 79.3899 26.74 70.2699 30.05 62.4199" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M78.7699 107.14C78.4799 105.37 76.8099 104.18 75.0399 104.47C73.2699 104.76 72.0799 106.43 72.3699 108.2C72.6599 109.97 74.3299 111.16 76.0999 110.87C77.8699 110.58 79.0599 108.91 78.7699 107.14Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <p>Phone</p>
            <p>08111111111</p>
          </div>
          <div className="single-help">
            <svg width="36" height="36" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M75.16 148.82C115.841 148.82 148.82 115.841 148.82 75.16C148.82 34.4787 115.841 1.5 75.16 1.5C34.4787 1.5 1.5 34.4787 1.5 75.16C1.5 115.841 34.4787 148.82 75.16 148.82Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M99.0399 34.6602H51.2799C49.5568 34.6602 48.1599 36.057 48.1599 37.7802V112.54C48.1599 114.263 49.5568 115.66 51.2799 115.66H99.0399C100.763 115.66 102.16 114.263 102.16 112.54V37.7802C102.16 36.057 100.763 34.6602 99.0399 34.6602Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M48.1599 50.6602H96.5299" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M48.1599 99.6602H96.6099" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M69.4299 42.6602H80.8999" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M112.17 64.5698C114.92 71.1098 115.18 78.7198 112.28 85.8098" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M120.28 62.4199C123.59 70.2799 123.89 79.3899 120.42 87.8999" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M38.0399 85.8098C35.1499 78.7198 35.3999 71.1198 38.1499 64.5698" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M29.91 87.8999C26.44 79.3899 26.74 70.2699 30.05 62.4199" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M78.7699 107.14C78.4799 105.37 76.8099 104.18 75.0399 104.47C73.2699 104.76 72.0799 106.43 72.3699 108.2C72.6599 109.97 74.3299 111.16 76.0999 110.87C77.8699 110.58 79.0599 108.91 78.7699 107.14Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <p>Phone</p>
            <p>08111111111</p>
          </div>
        </div>
      </section>
      <section className="meal-action">
        {/* <p className="action-selector">Today's Meal</p> */}
        <p className="action-selector">Weekly's Meal</p>

        {/* <div className="today-meal">
          <div className="single-meal-item">
            <hr />
            <p>Breakfast</p>
            <p>1 serving 220kcal</p>
            <div className="meal-image-holder">
              <img src={mealImage} className="meal-image" alt="meal" />
              <div className="meal-text">
                <p>R</p>
                <p>M</p>
                <p>...</p>
              </div>
            </div>
            <p className="meal-title">Stir fry coconut rice and chicken</p>
          </div>
          <div className="single-meal-item">
            <hr />

            <p>Breakfast</p>
            <p>1 serving 220kcal</p>
            <div className="meal-image-holder">
              <img src={mealImage} className="meal-image" alt="meal" />
              <div className="meal-text">
                <p>R</p>
                <p>M</p>
                <p>...</p>
              </div>
            </div>
            <p className="meal-title">Stir fry coconut rice and chicken</p>
          </div>
          <div className="single-meal-item">
            <hr />

            <p>Breakfast</p>
            <p>1 serving 220kcal</p>
            <div className="meal-image-holder">
              <img src={mealImage} className="meal-image" alt="meal" />
              <div className="meal-text">
                <p>R</p>
                <p>M</p>
                <p>...</p>
              </div>
            </div>
            <p className="meal-title">Stir fry coconut rice and chicken</p>
          </div>
        </div> */}
        <div className="weekly-meal">
          {/* today
          date
          calories
          p , f ,c
          image
          line */}
          <div className="single-meal-item">
            <p className="meal-title">Yesterday</p>
            <p>{formatDate(Date.now(), -1)}</p>
            <div className="meal-image-holder">
              <img src={yesterday_jpg_1.default} className="meal-image" alt="meal"/>
              <div className="meal-text">
                {/* <p>1800kcals</p>
        <p>P:250 ,F:250,C: 250</p>
        <p>...</p> */}
              </div>
            </div>
            {/* <p className="meal-title">Stir fry coconut rice and chicken</p>
         */}
            <p>1800kcals</p>
            <p>P:250 ,F:250,C: 250</p>

            <hr style={{ width: "100%" }}/>
          </div>
          <div className="single-meal-item">
            <p className="meal-title">Today</p>
            <p>{formatDate(Date.now(), 0)}</p>
            <div className="meal-image-holder">
              <img src={chicken_rice_2_jpg_1.default} className="meal-image" alt="meal"/>
              <div className="meal-text">
                {/* <p>1800kcals</p>
        <p>P:250 ,F:250,C: 250</p>
        <p>...</p> */}
              </div>
            </div>
            {/* <p className="meal-title">Stir fry coconut rice and chicken</p>
         */}
            <p>1800kcals</p>
            <p>P:250 ,F:250,C: 250</p>

            <hr style={{ width: "100%" }}/>
          </div>
          <div className="single-meal-item">
            <p className="meal-title">Tomorrow</p>
            <p>{formatDate(Date.now(), 1)}</p>
            <div className="meal-image-holder">
              <img src={tomorrow_jpg_1.default} className="meal-image" alt="meal"/>
              <div className="meal-text">
                {/* <p>1800kcals</p>
        <p>P:250 ,F:250,C: 250</p>
        <p>...</p> */}
              </div>
            </div>
            {/* <p className="meal-title">Stir fry coconut rice and chicken</p>
         */}
            <p>1800kcals</p>
            <p>P:250 ,F:250,C: 250</p>

            <hr style={{ width: "100%" }}/>
          </div>
        </div>
      </section>
      <section className="account-details">
        <div className="order-history">
          <div className="meal-plan-div">
            <h2>Meal Plans</h2>
            {orders ? (<div className="meal-plan-wrapper">
                <div className="single-meal-plan">
                  <img src={chicken_rice_jpg_1.default} alt="it"/>
                  <div className="single-meal-plan-details">
                    <p className="meal-plan-title">
                      {" "}
                      12 Week weight loss meal plan
                    </p>
                    <p>Chicken, Quinoa, Broccoli, Avocado</p>

                    <p>
                      <span className="diet-type">Vegetarian</span>{" "}
                      <span className="diet-type"> 3 meals per day</span>
                    </p>
                    <p>Contains nuts (almonds)</p>
                  </div>
                </div>
                <div className="single-meal-plan">
                  <img src={chicken_rice_jpg_1.default} alt="it"/>
                  <div className="single-meal-plan-details">
                    <p className="meal-plan-title">
                      {" "}
                      12 Week weight loss meal plan
                    </p>
                    <p>Chicken, Quinoa, Broccoli, Avocado</p>

                    <p>
                      <span className="diet-type">Vegetarian</span>{" "}
                      <span className="diet-type"> 3 meals per day</span>
                    </p>
                    <p>Contains nuts (almonds)</p>
                  </div>
                </div>
                {/* <div className="single-meal-plan">
              <img src="meal-plan-image.jpg" alt="Meal Plan Image" />
              <h2>Meal Plan Title</h2>
              <p>Number of Meals: 3</p>
              <p>Number of Meals per Day: 2</p>
              <p>Meal Plan Duration: 7 days</p>
              <p>Allergen Information: Contains nuts (almonds)</p>
              <p>Key Ingredients: Chicken, Quinoa, Broccoli, Avocado</p>
              <p>Price: $49.99</p>
              <p>Dietary Restrictions: Vegetarian</p>
              <p>Total Calories: 1500</p>
              <p>
                Meal Plan Description: This meal plan focuses on balanced
                and nutritious meals, suitable for individuals looking to
                maintain a healthy lifestyle.
              </p>
            </div> */}
              </div>) : (<>You haven't placed any orders yet.</>)}
          </div>
          <div className="training-plan-div">
            <h2>Training Plans</h2>
            {orders ? <></> : <>You haven't placed any orders yet.</>}
          </div>
          <div className="training-plan-div">
            <h2>Progress Tracking:</h2>
            {orders ? <></> : <>You haven't placed any orders yet.</>}
          </div>
        </div>
        <div className="personal-information">
          <h2>Personal Information</h2>
          <div className="personal-info-wrapper">
            <div className="single-personal-info">
              <div className="text">
                <p>Weight</p>
                <p>113kg</p>
              </div>
            </div>
          </div>
          fName height weight (update) alergies, daily calorie intake next Meal
        </div>
      </section>
      <div className="saved-items-div">
        <h2>Saved Recipes</h2>
        {orders ? (<div className="saved-items-wrapper">
            <MealItem_1.default hover={false}/>
            <MealItem_1.default hover={false}/>
            <MealItem_1.default hover={false}/>
          </div>) : (<>You haven't placed any orders yet.</>)}
      </div>
      <section className="cta-section"></section>
      <p>Meal Suggestion</p>
      <p>Blog Suggestion</p>
      <p>Recipe Suggestion</p>

      <Subscribe_1.default />
      <Footer_1.default />
    </>);
}
exports.default = Dashboard;
//# sourceMappingURL=index.js.map