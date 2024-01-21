import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Cyan from "../assets/img/cyan.svg";

const QuestionNumber = () => {
    return (
        <div className="question-number-screen">
            <img src={Cyan} alt="cyan" />
            <h1>Number of Questions?</h1>
            <Link to="/name">
                <button className="5-button">5 Questions</button>
            </Link>
            <Link to="/name">
                <button className="10-button">10 Questions</button>
            </Link>
            <Link to="/name">
                <button className="15-button">15 Questions</button>
            </Link>
        </div>
    );
}

export default QuestionNumber;