import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Cyan from "../assets/img/cyan.svg";


const Input = () => {
    return (
        <div className="input-screen">
            <h1>What do you want to revise?</h1>
            <div className="input-title">
                <img src={Cyan} alt="cyan" />
                <h2>Give me your notes so I can Squiz for you!</h2>
            </div>
            <div className="input-container">
                <textarea
                    placeholder="text input"
                    rows="4"
                    cols="50"
                >
                </textarea>
            </div>
            <button className="upload-button">PDF Upload</button>
            <Link to="/difficulty">
                <button className="continue-button">Continue</button>
            </Link>
        </div>
    );
}

export default Input;