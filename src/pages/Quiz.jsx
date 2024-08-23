import React from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";
import quizImage from "../assets/resources.png";



const Quiz = () => {
    const navigate = useNavigate();
    const handleStartClick = () => {
      navigate("/quizview");
    };
  return (
    <>
      <div className="quizTitleContainer">
        <h1 className="quizHeader">Welcome to CUNY's Resource Matching Quiz</h1>
        <p className="quizPara">
          Take the quiz to find the resources best suited for your needs.
        </p>
        <img src={quizImage} alt="Quiz Image" className="quizImage" />
        <button className="startBtn" onClick={handleStartClick}>Get Started</button>
      </div>
    </>
  );
};

export default Quiz;
