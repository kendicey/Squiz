import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import YellowTilt from "../assets/img/yellow-tilt.svg";
import OrangeTilt from "../assets/img/orange-tilt.svg";

const Home = () => {
    return (
        <div className="home-screen">
            <h1>Start Your Revision!</h1>
            <Link to="/input" className="big-button quiz-button">
                <img className="big-button-img" src={YellowTilt} alt="Yellow Icon" />
                <h2>New Quiz</h2>
            </Link>
            <div className="big-button history-button">
                <h2>History</h2>
                <img className="big-button-img" src={OrangeTilt} alt="Orange Icon" />
            </div>
        </div>
    );
}

export default Home;