import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Orange from "../assets/img/orange.svg";
import Bg from "../assets/img/bg.svg";
import BackBtn from "../assets/img/back-button.svg";

const Name = () => {

    const svgBackground = {
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className="name-screen" style={svgBackground}>
            <img src={Orange} alt="orange" />
            <h1>Name Your Quiz!</h1>
            <div className="input-container">
                <textarea
                    placeholder="quiz"
                    rows="1"
                    cols="50"
                >
                </textarea>
            </div>
            <Link to="/loading" className="link">
                <div className="button short-button cyan-button enter-button">
                    <h2>Enter</h2>
                </div>
            </Link>
            <Link to="/question-number" className="link">
                <img src={BackBtn} alt="Back Button" className="back-button" />
            </Link>
        </div>
    );
}

export default Name;