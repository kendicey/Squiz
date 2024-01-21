import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Cyan from "../assets/img/cyan.svg";
import Bg from "../assets/img/bg.svg";

const Loading = () => {

    const svgBackground = {
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    // navigate to Quiz Screen after 3 seconds
    useEffect(() => {
        // Use setTimeout to delay the transition
        const timeoutId = setTimeout(() => {
            // Redirect to the Home page after 5 seconds
            window.location.href = '/quiz';
        }, 3000);
    
        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="loading-screen" style={svgBackground}>
            <img src={Cyan} alt="cyan" className="loading-squid"/>
            <h2>Squizzing...</h2>
        </div>
    );
}

export default Loading;