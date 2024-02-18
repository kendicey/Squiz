import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../css/style.css";
import Orange from "../assets/img/orange.svg";
import Bg from "../assets/img/bg.svg";
import BackBtn from "../assets/img/back-button.svg";
import { useMyContext } from './Context';
import Loading from "./Loading";

const Name = () => {
    const { requestObject, updateQuestionObject } = useMyContext();
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();

    const svgBackground = {
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    
    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            console.log(requestObject);
            const response = await fetch('http://localhost:8000/quiz', {
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
              <div className="name-screen" style={svgBackground}>
                  <img src={Orange} alt="orange" className="floating"/>
                  <h1>Name Your Quiz!</h1>
                  <div className="input-container">
                    <textarea
                        placeholder="quiz"
                        rows="1"
                        cols="50"
                    ></textarea>
                  </div>
                  <div className="button short-button cyan-button enter-button" onClick={handleSubmit}>
                      <h2>Enter</h2>
                  </div>
                  <Link to="/question-number" className="link">
                      <img src={BackBtn} alt="Back Button" className="back-button" />
                  </Link>
              </div>
            }
        </>
    );
}

export default Name;