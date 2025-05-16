import { useNavigate } from "react-router-dom";

const Home = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <form
        onSubmit={handleClick}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Welcome to My Quiz App!
        </h1>

        <label htmlFor="name" className="block mb-2 text-lg font-medium">
          Enter Your Name:
        </label>

        <input
          type="text"
          id="name"
          name="name"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          disabled={user.length === 0}
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 disabled:bg-gray-400"
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default Home;
