import { useState } from "react";

type Answer = {
  [key: string]: string;
};

type Props = {
  questions: Array<{ id: number; text: string; type: string }>;
};

const Form: React.FC<Props> = ({ questions }) => {
  const [answers, setAnswers] = useState<Answer>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const current = questions[currentQuestion];

  return (
    <div className="form">
      <div className="form-container">
        <h1>{current.text}</h1>
        <input
          type={current.type}
          onChange={handleAnswer}
          value={answers[currentQuestion] || ""}
        />
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
export default Form;
