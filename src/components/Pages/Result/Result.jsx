import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import './Result.css'


const Result = ({ score, name }) => {
   
  const checkScore = () =>{
    if(score <= 5){
      return <p style={{color:"red", fontSize:"17px", fontFamily: "Montserrat"}}>Fair attempt</p>
    }else{
      return <p style={{color:"green", fontSize:"12px",fontFamily: "Montserrat"}}>Good</p>
    }
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
    <span className="title">Final Score :  {score}</span>
    {checkScore()}
      <Button
        variant="contained"
        color="error"
        size="large"
        href="/"
        style={{ alignSelf: "center", marginTop: 20 }}
      >Go To Homepage</Button>
    </div>
  );
};

export default Result;
