import React from "react";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Button } from "@mui/material";
import "./Question.css";
import {useNavigate } from "react-router-dom";


const Question = ({
  currQuestion,
  setCurrQuestion,
  question,
  options,
  correct,
  score,
  setScore,
  setQuestion,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (opt) => {
    if (selected === opt && selected === correct) {
      return "select";
    } else if (selected === opt && selected !== correct) {
      return "wrong";
    } else if (opt === correct) {
      return "select";
    }
  };
  const handleCheck = (opt) => {
    setSelected(opt);
    if (opt === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () =>{
    if(currQuestion > 8){
        navigate("/result")
    }else if(selected){
        setCurrQuestion(currQuestion + 1);
        setSelected()
    }else{
        setError("Please select an option first")
    }
  }
  const handleQuit = () =>{

  }
  return (
    <div className="question">
      <h1>Question {currQuestion + 1}</h1>

      <div className="singleQuestion">
        <h2>{question[currQuestion].question}</h2>
        <div className="options">
          {error && <ErrorMessage>Please Select an option</ErrorMessage>}
          {options &&
            options.map((opt) => (
              <button
                onClick={() => {
                  handleCheck(opt);
                }}
                className={`singleOption ${selected && handleSelect(opt)}`}
                key={opt}
                disabled={selected}
              >
                {opt}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="error"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button   
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
            >
             Next Question 
             </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
