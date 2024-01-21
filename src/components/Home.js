import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import YellowTilt from "../assets/img/yellow-tilt.svg";
import OrangeTilt from "../assets/img/orange-tilt.svg";
import Bg from "../assets/img/bg.svg";
import CoralReef from "../assets/img/coral-reef.svg";
import Starfish from "../assets/img/starfish.svg";

const Home = () => {

    const svgBackground = {
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className="home-screen" style={svgBackground}>
            <h1>Start Your Revision!</h1>
            <Link to="/input" className="big-button quiz-button">
                <img className="big-button-img" src={YellowTilt} alt="Yellow Icon" />
                <h2>New Quiz</h2>
                <img className="coral-reef" src={CoralReef}></img>
            </Link>
            <Link to="/history" className="big-button history-button">
                <img className="starfish" src={Starfish}></img>
                <h2>History</h2>
                <img className="big-button-img" src={OrangeTilt} alt="Orange Icon" />
            </Link>
        </div>
    );
}

export default Home;