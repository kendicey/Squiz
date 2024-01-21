import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import Cyan from "../assets/img/cyan.svg";

const Loading = () => {

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
        <div className="loading-screen">
            <img src={Cyan} alt="cyan" />
            <h2>Loading...</h2>
        </div>
    );
}

export default Loading;