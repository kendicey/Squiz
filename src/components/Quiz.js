import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Orange from "../assets/img/orange.svg";
import BgLight from "../assets/img/bg-light.svg";

const Quiz = () => {

    const svgBackground = {
        backgroundImage: `url(${BgLight})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    };

    return (
        <div className="quiz-screen" style={svgBackground}>
            <div className="question-container">
                <h1>Q1</h1>
                <h2>What is the capital of France?</h2>
            </div>
            <div className="answer-container">
                <div className="button long-button white-button answer-button">
                    <h2>Paris</h2>
                </div>
                <div className="button long-button white-button answer-button">
                    <h2>London</h2>
                </div>
                <div className="button long-button white-button answer-button">
                    <h2>New York</h2>
                </div>
                <div className="button long-button white-button answer-button">
                    <h2>Berlin</h2>
                </div>
            </div>
        </div>
    );
}

export default Quiz;