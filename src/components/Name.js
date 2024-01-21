import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Orange from "../assets/img/orange.svg";
import Bg from "../assets/img/bg.svg";
import BackBtn from "../assets/img/back-button.svg";
import { useMyContext } from './Context';

const Name = () => {
    const { requestObject, updateRequestObject } = useMyContext();

    const svgBackground = {
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    
    const handleSubmit = () => {
        console.log(requestObject);
        fetch('http://localhost:8000/quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({...requestObject}),
        })
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Response:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

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
                <div className="button short-button cyan-button enter-button" onClick={handleSubmit}>
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