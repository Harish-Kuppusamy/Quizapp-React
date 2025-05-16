import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = ({ setscore, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const questions = [
    {
      question: "What Is React?",
      options: ["Library", "Framework", "Language"],
      answer: "Library",
    },
    {
      question: "Who Developed React?",
      options: ["Facebook", "Meta", "Amazon"],
      answer: "Facebook",
    },
  ];

  const [questionidx, setquestionidx] = useState(0);

  const handleAns = (selectedans) => {
    const correct = selectedans === questions[questionidx].answer;

    if (correct) {
      setscore((prev) => prev + 1);
    }

    if (questionidx < questions.length - 1) {
      setquestionidx((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  if (!questions[questionidx]) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Welcome to the Quiz!
      </h1>

      <div className="bg-white shadow-lg p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">
          {questionidx + 1}. {questions[questionidx].question}
        </h2>

        <div className="flex flex-col gap-2">
          {questions[questionidx].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAns(option)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate("/home")}
        className="mt-6 text-sm underline text-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Quiz;
