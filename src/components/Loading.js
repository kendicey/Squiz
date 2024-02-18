import React from "react";
import "../css/style.css";
import Cyan from "../assets/img/cyan.svg";
import Bg from "../assets/img/bg.svg";

const Loading = () => {
    const svgBackground = {
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <div className="loading-screen" style={svgBackground}>
            <img src={Cyan} alt="cyan" className="loading-squid"/>
            <h2>Squizzing...</h2>
        </div>
    );
}

export default Loading;