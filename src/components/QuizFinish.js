import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../css/style.css";
import Purple from "../assets/img/purple.svg";
import BgLight from "../assets/img/bg-light.svg";
import HomeBtn from "../assets/img/home-button.svg";
import ShareBtn from "../assets/img/share-button.svg";
import { useMyContext } from "./Context";
import Loading from "./Loading";

const QuizFinish = () => {
    const svgBackground = {
        backgroundImage: `url(${BgLight})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const {requestObject, updateQuestionObject, correctAnsCounter, setCorrectAnsCounter, setCounter} = useMyContext();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const numberOfQuestion = requestObject.questionNumber;
    const correctPercentage = correctAnsCounter / numberOfQuestion * 100;

    const retryQuestions = () => {
        setCounter(0);
        setCorrectAnsCounter(0);
    }

    const generateNewQuestions = async () => {
        setIsLoading(true);
        setCounter(0);
        setCorrectAnsCounter(0);
        try {
            console.log(requestObject);
            const response = await fetch('http://localhost:8000/new-questions-quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...requestObject}),
            });

            if (!response.ok) {
                setIsLoading(false);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Response:', data);

            await updateQuestionObject(data);
            setIsLoading(false);

            navigate('/quiz');
        } catch(error) {
            console.error('Error:', error);
        };
    }

    return (
        <>
            { isLoading ?
              <Loading /> :
              <div className="quiz-finish-screen" style={svgBackground}>
                <img src={Purple} alt="purple" className="floating"/>
                <h1>Score: {Math.round(correctPercentage)}% ({correctAnsCounter}/{numberOfQuestion})</h1>
                <Link to="/" className="link">
                    <div className="button white-button long-button review-button">
                        <h2>Review</h2>
                    </div>
                </Link>
                <Link to="/quiz" className="link">
                    <div className="button lightblue-button long-button retry-button" onClick={retryQuestions}>
                        <h2>Retry</h2>
                    </div>
                </Link>
                <Link className="link">
                    <div className="button blue-button long-button retry-new-button" onClick={generateNewQuestions}>
                        <h2>New Questions</h2>
                    </div>
                </Link>
                <div className="icons-container">
                    <Link to="/home" className="link">
                        <img src={HomeBtn} alt="Home Button" className="home-button" />
                    </Link>
                    <Link to="/home" className="link">
                        <img src={ShareBtn} alt="Share Button" className="share-button" />
                    </Link>
                </div>
              </div>
            }
        </>
    );
}

export default QuizFinish;