import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import Quiz from "./components/Pages/Quiz/Quiz";
import Result from "./components/Pages/Result/Result";

function App() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = " ") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestion(data.results);
  };
  return (
    <div>
      <div
        className="app"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/master/public/ques1.png)",
        }}
      >
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route path="/quiz" element={<Quiz name={name} question = {question} setQuestion = {setQuestion} score = {score} setScore= {setScore}/>} exact />
          <Route path="result" element={<Result name = {name} score = {score} />} exact />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
