import React, { useEffect } from "react";
import Cyan from "../assets/img/cyan.svg";
import "../css/style.css";
import Bg from "../assets/img/bg.svg";

const Opening = () => {

    const svgBackground = {
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    // navigate to Home Screen after 3 seconds
    useEffect(() => {
        // Use setTimeout to delay the transition
        const timeoutId = setTimeout(() => {
          // Redirect to the Home page after 5 seconds
          window.location.href = '/home';
        }, 3000);
    
        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="opening-screen" style={svgBackground}>
            <h1>Welcome!</h1>
            <img src={Cyan} alt="cyan" className="bouncing-squid"/>
        </div>
    );
}

export default Opening;