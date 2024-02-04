import React from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import BgLight from "../assets/img/bg-light.svg";
import ProgressBar from "../assets/img/progress-bar.svg";
import HomeBtnSmall from "../assets/img/home-button-sm.svg";
import { useMyContext } from "./Context";
import Question from "./Question";

const Quiz = () => {

    const {requestObject, questionObject, counter} = useMyContext();

    const svgBackground = {
        backgroundImage: `url(${BgLight})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    };

    console.log(questionObject.questions)

    return (
        <div className="quiz-screen" style={svgBackground}>
            <Link to="/home" className="home-button-sm">
                <img src={HomeBtnSmall} alt="home button" />
            </Link>
            <h2>
                {counter + 1}/{requestObject.questionNumber}
            </h2>
            <div className="progress-bar">
                <img src={ProgressBar} alt="progress bar" />
            </div>
            <Question 
                q={questionObject.questions[counter]} 
                i={counter}
            /> 
        </div>
    );
}

export default Quiz;