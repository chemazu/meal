"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Form = ({ questions }) => {
    const [answers, setAnswers] = (0, react_1.useState)({});
    const [currentQuestion, setCurrentQuestion] = (0, react_1.useState)(0);
    const handleAnswer = (event) => {
        const { value } = event.target;
        setAnswers(Object.assign(Object.assign({}, answers), { [currentQuestion]: value }));
    };
    const handleNext = () => {
        setCurrentQuestion(currentQuestion + 1);
    };
    const current = questions[currentQuestion];
    return (<div className="form">
      <div className="form-container">
        <h1>{current.text}</h1>
        <input type={current.type} onChange={handleAnswer} value={answers[currentQuestion] || ""}/>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>);
};
exports.default = Form;
//# sourceMappingURL=Form.js.map