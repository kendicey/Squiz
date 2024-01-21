import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Purple from "../assets/img/purple.svg";

const QuizFinish = () => {
    return (
        <div className="quiz-finish-screen">
            <img src={Purple} alt="purple" />
            <h1>Score: 100% (10/10)</h1>
            <Link to="/">
                <button className="review-button">Review</button>
            </Link>
            <Link to="/">
                <button className="retry-button">Retry</button>
            </Link>
            <Link to="/">
                <button className="retry-new-button">New Questions</button>
            </Link>
        </div>
    );
}

export default QuizFinish;