import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Result from "./pages/Result";
function App() {
  const [user, setUser] = useState("");
  const [score, setscore] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={<Home user={user} setUser={setUser} />}
          ></Route>

          <Route
            path="/quiz"
            element={<Quiz setscore={setscore} user={user} />}
          ></Route>

          <Route
            path="/result"
            element={<Result score={score} user={user} />}
          ></Route>

          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
