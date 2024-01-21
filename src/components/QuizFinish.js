import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Purple from "../assets/img/purple.svg";
import BgLight from "../assets/img/bg-light.svg";
import HomeBtn from "../assets/img/home-button.svg";
import ShareBtn from "../assets/img/share-button.svg";

const QuizFinish = () => {

    const svgBackground = {
        backgroundImage: `url(${BgLight})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className="quiz-finish-screen" style={svgBackground}>
            <img src={Purple} alt="purple" />
            <h1>Score: 100% (10/10)</h1>
            <Link to="/" className="link">
                <div className="button white-button long-button review-button">
                    <h2>Review</h2>
                </div>
            </Link>
            <Link to="/" className="link">
                <div className="button lightblue-button long-button retry-button">
                    <h2>Retry</h2>
                </div>
            </Link>
            <Link to="/" className="link">
                <div className="button blue-button long-button retry-new-button">
                    <h2>New Questions</h2>
                </div>
            </Link>
            <div>
                <Link to="/" className="link">
                    <img src={HomeBtn} alt="Home Button" className="home-button" />
                </Link>
                <Link to="/" className="link">
                    <img src={ShareBtn} alt="Share Button" className="share-button" />
                </Link>
            </div>
        </div>
    );
}

export default QuizFinish;