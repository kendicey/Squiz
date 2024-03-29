import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Green from "../assets/img/green.svg";
import Bg from "../assets/img/bg.svg";
import BackBtn from "../assets/img/back-button.svg";
import QuestionMark from "../assets/img/question-mark.svg";
import { useMyContext } from './Context';

const QuestionNumber = () => {
    const { requestObject, updateRequestObject } = useMyContext();
    const [ number, setNumber ] = useState('');

    const svgBackground = {
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const handleNumberChange = (e) => {
        const num = e.target.id;
        console.log(num);
        setNumber(num);
        updateRequestObject({questionNumber: num});
        console.log(requestObject);
    }

    return (
        <div className="question-number-screen" style={svgBackground}>
            <img src={QuestionMark} alt="question mark" className="question-mark floating"/>
            <img src={Green} alt="green" className="floating"/>
            <h1>Number of Questions?</h1>
            <Link to="/name" className="link">
                <div className="button long-button white-button 5-button" id="5" onClick={handleNumberChange}>
                    <h2>
                        5 Questions
                    </h2>
                </div>
            </Link>
            <Link to="/name" className="link">
                <div className="button long-button lightblue-button 10-button" id="10" onClick={handleNumberChange}>
                    <h2>
                        10 Questions
                    </h2>
                </div>
            </Link>
            <Link to="/name" className="link">
                <div className="button long-button blue-button 15-button" id="15" onClick={handleNumberChange}>
                    <h2>
                        15 Questions
                    </h2>
                </div>
            </Link>
            <Link to="/difficulty" className="link">
                <img src={BackBtn} alt="Back Button" className="back-button" />
            </Link>
        </div>
    );
}

export default QuestionNumber;