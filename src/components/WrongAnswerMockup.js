import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Orange from "../assets/img/orange.svg";
import BgLight from "../assets/img/bg-light.svg";
import ProgressBar from "../assets/img/progress-bar.svg";
import HomeBtnSmall from "../assets/img/home-button-sm.svg";
import NextButton from "../assets/img/next-button.svg";

const WrongAnswerMockup = () => {

    const svgBackground = {
        backgroundImage: `url(${BgLight})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    };

    return (
        <div className="quiz-screen" style={svgBackground}>
            <Link to="/home" className="home-button-sm">
                <img src={HomeBtnSmall} alt="home button" />
            </Link>
            <h2>
                1/10
            </h2>
            <div className="progress-bar">
                <img src={ProgressBar} alt="progress bar" />
            </div>
            <div className="question-container">
                <h2>Q1</h2>
                <h2>What command is used to read the online manual page for a command?</h2>
            </div>
            <div className="answer-container">
                <div className="wrong-answer button long-button white-button answer-button">
                    <h2>ls</h2>
                </div>
                <div className="button long-button white-button answer-button">
                    <h2>cat</h2>
                </div>
                <div className="correct-answer button long-button white-button answer-button">
                    <h2>man</h2>
                </div>
                <div className="button long-button white-button answer-button">
                    <h2>cp</h2>
                </div>
            </div>
            <Link to="/quiz-finish" className="link next-button">
                <img src={NextButton} alt="next button" />
            </Link>
        </div>
    );
}

export default WrongAnswerMockup;