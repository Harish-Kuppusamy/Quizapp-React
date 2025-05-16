import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ score, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/home");
    }
  }, [user, navigate]);

  if (!user) return null; // 🛡️ Prevent crash during initial render

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Your Quiz Result!
      </h1>

      <h2 className="text-xl font-medium text-gray-800">
        Hello <span className="font-bold">{user}</span>, Your Score is:{" "}
        <span className="text-blue-600">{score}</span>
      </h2>

      <button
        onClick={() => navigate("/home")}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Result;
