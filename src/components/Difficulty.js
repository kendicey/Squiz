import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import CyanGreen from "../assets/img/cyan-green.svg";

const Difficulty = () => {
    return (
        <div className="difficulty-screen">
            <img src={CyanGreen} alt="cyan-green" />
            <h1>Difficulty</h1>
            <Link to="/question-number">
                <button className="easy-button">Easy</button>
            </Link>
            <Link to="/question-number">
                <button className="medium-button">Medium</button>
            </Link>
            <Link to="/question-number">
                <button className="hard-button">Difficulty</button>
            </Link>
        </div>
    );
}

export default Difficulty;