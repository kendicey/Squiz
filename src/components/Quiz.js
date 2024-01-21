import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Orange from "../assets/img/orange.svg";

const Quiz = () => {
    return (
        <div className="quiz-screen">
            <div className="question-container">
                <h1>Q1</h1>
                <h2>What is the capital of France?</h2>
            </div>
            <div className="answer-container">
                <button className="answer-button">Paris</button>
                <button className="answer-button">London</button>
                <button className="answer-button">New York</button>
                <button className="answer-button">Berlin</button>
            </div>
        </div>
    );
}

export default Quiz;