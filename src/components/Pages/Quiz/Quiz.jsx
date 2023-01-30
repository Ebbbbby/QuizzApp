import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import Question from "../../Question/Question";
import "./Quiz.css";

const Quiz = ({ name, score, question, setQuestion, setScore }) => {
  const [options, setOptions] = useState();
  const [currQuestion, setCurrQuestion] = useState(0);

  useEffect(() => {
    setOptions(
      question &&
        handleShuffle([
          question[currQuestion]?.correct_answer,
          ...question[currQuestion]?.incorrect_answers,
        ])
    );
  }, [question, currQuestion]);

  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name} </span>

      {question ? (
        <>
          <div className="quizInfo">
            <span>{question[currQuestion].category}</span>
            <span>Score : {score}</span>
          </div>
          <Question
            currQuestion={currQuestion}
            setCurrQuestion= {setCurrQuestion}
            question={question}
            options={options}
            correct={question[currQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestion={setQuestion}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
