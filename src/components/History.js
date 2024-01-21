import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Green from "../assets/img/green.svg";
import Bg from "../assets/img/bg.svg";
import BackBtn from "../assets/img/back-button.svg";
import AddBtn from "../assets/img/add-button.svg";
import QuestionMark from "../assets/img/question-mark.svg";

const History = () => {

    const svgBackground = {
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className="history-screen" style={svgBackground}>
            <h1>History</h1>
            <div className="history-containers button long-button lightblue-button 10-button">
                <h2>
                    Linux Command
                </h2>
                <div>
                    <p>
                        Score: 8/10
                    </p>
                    <p>
                        21 Jan 2024
                    </p>
                </div>
            </div>
            <div className="history-containers button long-button lightblue-button 10-button">
                <h2>
                    Word Wizard Challenge
                </h2>
                <div>
                    <p>
                        Score: 7/10
                    </p>
                    <p>
                        08 Jan 2024
                    </p>
                </div>
            </div>
            <div className="history-containers button long-button lightblue-button 10-button">
                <h2>
                    Math Mastery Quiz
                </h2>
                <div>
                    <p>
                        Score: 6/10
                    </p>
                    <p>
                        07 Jan 2024
                    </p>
                </div>
            </div>
            <div className="history-containers button long-button lightblue-button 10-button">
                <h2>
                    History Trivia Test
                </h2>
                <div>
                    <p>
                        Score: 8/10
                    </p>
                    <p>
                        05 Jan 2024
                    </p>
                </div>
            </div>
            <Link to="/home" className="link">
                <img src={BackBtn} alt="Back Button" className="back-button" />
            </Link>
            <Link to="/input" className="link">
                <img src={AddBtn} alt="Add Button" className="add-button" />
            </Link>
        </div>
    );
}

export default History;