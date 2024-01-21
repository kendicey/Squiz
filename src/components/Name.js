import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Orange from "../assets/img/orange.svg";

const Name = () => {
    return (
        <div className="name-screen">
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
            <Link to="/loading">
                <button className="enter-button">Enter</button>
            </Link>
        </div>
    );
}

export default Name;