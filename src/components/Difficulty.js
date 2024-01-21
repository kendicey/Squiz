import React, { useEffect, useContext, useState } from "react";
import { Link } from 'react-router-dom';
import "../css/style.css";
import CyanGreen from "../assets/img/cyan-green.svg";
import Bg from "../assets/img/bg.svg";
import BackBtn from "../assets/img/back-button.svg";
import { useMyContext } from './Context';

const Difficulty = () => {
    const { requestObject, updateRequestObject } = useMyContext();

    const svgBackground = {
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const handleDifficultyChange = (e) => {
        const level = e.target.id;
        updateRequestObject({difficulty: level});
        console.log(requestObject);
    }

    return (
        <div className="difficulty-screen" style={svgBackground} >
            <img src={CyanGreen} alt="cyan-green" />
            <h1>Difficulty</h1>
            <Link to="/question-number" className="link">
                <div className="button long-button white-button easy-button" id="easy" onClick={handleDifficultyChange}>
                    <svg style={{ marginRight: "10px" }} width="35" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.0607 22.72C34.2407 22.72 33.4807 22.21 33.1807 21.41C32.2207 18.78 31.0507 16.28 29.7207 13.97C27.8707 10.76 26.1907 8.72002 24.5807 7.71002C23.6707 7.14002 23.3707 5.95002 23.9107 5.02002C24.2807 4.38002 24.9507 4.02002 25.6507 4.02002C25.9707 4.02002 26.2907 4.10002 26.5807 4.25002C30.8707 6.52002 36.3807 9.71002 38.2907 12.02C39.9407 14.01 40.0007 17.06 39.3307 19.18C38.7907 20.9 37.7707 22.05 36.4707 22.41L35.6007 22.65C35.4207 22.7 35.2407 22.72 35.0607 22.72Z" fill="#EAD65E"/>
                        <path d="M25.6407 6.01C28.2907 7.41 34.8807 11.03 36.7507 13.29C38.4907 15.4 37.7207 19.99 35.9407 20.48L35.0707 20.72C34.0907 18.05 32.9007 15.45 31.4607 12.96C29.2507 9.13 27.3807 7.09 25.6507 6.01M25.6407 2.01C24.2507 2.01 22.9107 2.73 22.1707 4.01C21.1007 5.88 21.6907 8.26 23.5207 9.4C24.8307 10.22 26.3307 12.09 27.9907 14.96C29.2707 17.17 30.3807 19.57 31.3007 22.09C31.8907 23.7 33.4107 24.72 35.0607 24.72C35.4107 24.72 35.7707 24.67 36.1307 24.57L37.0007 24.33C38.9807 23.78 40.4807 22.16 41.2307 19.77C42.0607 17.13 41.9507 13.31 39.8207 10.73C38.1207 8.67 33.9707 5.89 27.5007 2.46C26.9007 2.15 26.2607 2 25.6307 2L25.6407 2.01Z" fill="black"/>
                        <path d="M8.67064 22.72C8.49064 22.72 8.31064 22.7 8.13064 22.65L7.26064 22.41C5.96064 22.05 4.94064 20.9 4.40064 19.18C3.73064 17.05 3.79064 14.01 5.44064 12.02C7.35064 9.71002 12.8606 6.52002 17.1506 4.25002C17.4506 4.09002 17.7706 4.02002 18.0806 4.02002C18.7706 4.02002 19.4506 4.38002 19.8206 5.02002C20.3606 5.95002 20.0606 7.14002 19.1506 7.71002C17.5406 8.72002 15.8606 10.76 14.0106 13.97C12.6806 16.28 11.5106 18.79 10.5506 21.42C10.2606 22.22 9.49064 22.73 8.67064 22.73V22.72Z" fill="#EAD65E"/>
                        <path d="M18.0906 6.01001C16.3506 7.09001 14.4806 9.14001 12.2806 12.96C10.8506 15.45 9.65064 18.04 8.67064 20.72L7.80064 20.48C6.02064 19.99 5.25064 15.39 6.99064 13.29C8.85064 11.03 15.4406 7.42001 18.1006 6.01001M18.0806 2.01001C17.7806 2.01001 17.4906 2.04001 17.1906 2.11001C16.8206 2.19001 16.4706 2.33001 16.1406 2.51001C9.71064 5.92001 5.58064 8.69001 3.89064 10.74C1.76064 13.31 1.65064 17.13 2.48064 19.78C3.23064 22.17 4.73064 23.79 6.71064 24.34L7.58064 24.58C7.94064 24.68 8.30064 24.73 8.65064 24.73C10.2906 24.73 11.8206 23.71 12.4106 22.1C13.3306 19.58 14.4506 17.18 15.7206 14.97C17.3606 12.14 18.8406 10.28 20.1406 9.44001C21.3006 8.74001 22.0806 7.47001 22.0806 6.01001C22.0806 3.88001 20.4206 2.15001 18.3306 2.02001C18.2406 2.02001 18.1606 2.02001 18.0706 2.02001L18.0806 2.01001Z" fill="black"/>
                        <path d="M16.7207 5.71999L3.56066 28.52C1.31066 32.41 4.12066 37.28 8.62066 37.28H34.9507C39.4407 37.28 42.2507 32.42 40.0107 28.52L26.8307 5.71999C24.5807 1.82999 18.9707 1.82999 16.7207 5.71999Z" fill="#EAD65E" stroke="black" stroke-width="4" stroke-miterlimit="10"/>
                        <path d="M18.9006 28.08L22.2406 30.39L25.0606 28.08" stroke="black" stroke-width="2.73" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.6006 23.6C13.5906 20.85 16.3406 18.94 18.8506 23.6" stroke="black" stroke-width="2.73" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.7106 23.6C25.7006 20.85 28.4506 18.94 30.9606 23.6" stroke="black" stroke-width="2.73" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2>Easy</h2>
                </div>
            </Link>
            <Link to="/question-number" className="link">
                <div className="button long-button lightblue-button medium-button" id="medium" onClick={handleDifficultyChange}>
                    <svg style={{ marginRight: "10px" }} width="35" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.2406 23C34.3806 23 33.5806 22.47 33.2706 21.62C32.3106 19 31.1506 16.5 29.8206 14.19C27.9806 11 26.3106 8.95997 24.7106 7.96997C23.7506 7.36997 23.4406 6.11997 24.0006 5.14997C24.3906 4.47997 25.0906 4.09998 25.8206 4.09998C26.1506 4.09998 26.4906 4.17997 26.8006 4.33997C31.1006 6.60997 36.6206 9.80997 38.5406 12.13C40.2106 14.15 40.2806 17.23 39.6006 19.38C39.0506 21.13 38.0106 22.3 36.6806 22.67L35.8006 22.91C35.6106 22.96 35.4206 22.99 35.2406 22.99V23Z" fill="#80E5D1"/>
                        <path d="M25.8206 6.19C28.4706 7.59 35.0606 11.21 36.9306 13.47C38.6706 15.58 37.9006 20.17 36.1206 20.66L35.2506 20.9C34.2706 18.23 33.0806 15.63 31.6406 13.14C29.4306 9.31 27.5606 7.27 25.8306 6.19M25.8306 2C24.3806 2 22.9706 2.76 22.1906 4.1C21.0606 6.06 21.6906 8.55 23.6006 9.75C24.8806 10.55 26.3606 12.4 28.0006 15.24C29.2706 17.44 30.3806 19.83 31.3006 22.34C31.9206 24.03 33.5206 25.09 35.2306 25.09C35.6006 25.09 35.9806 25.04 36.3506 24.94L37.2206 24.7C39.2606 24.13 40.8106 22.47 41.5806 20.02C42.4306 17.33 42.3106 13.43 40.1406 10.8C38.4206 8.72 34.2606 5.92 27.7606 2.49C27.1406 2.16 26.4706 2 25.8006 2H25.8306Z" fill="black"/>
                        <path d="M8.85055 23C8.66055 23 8.48055 22.98 8.29055 22.92L7.42055 22.68C6.09055 22.31 5.05055 21.14 4.50055 19.39C3.82055 17.24 3.89055 14.16 5.56055 12.14C7.48055 9.81999 13.0006 6.61999 17.3006 4.34999C17.6106 4.17999 17.9506 4.10999 18.2806 4.10999C19.0106 4.10999 19.7106 4.48998 20.1006 5.15998C20.6606 6.13998 20.3506 7.38998 19.3906 7.97998C17.7906 8.97998 16.1206 11.01 14.2806 14.2C12.9506 16.51 11.7906 19.01 10.8306 21.63C10.5206 22.47 9.72055 23.01 8.86055 23.01L8.85055 23Z" fill="#80E5D1"/>
                        <path d="M18.2705 6.19C16.5306 7.27 14.6606 9.32 12.4606 13.14C11.0306 15.63 9.83055 18.22 8.85055 20.9L7.98055 20.66C6.20055 20.17 5.43055 15.57 7.17055 13.47C9.03055 11.21 15.6206 7.6 18.2806 6.19M18.2705 2C17.9605 2 17.6505 2.03 17.3405 2.11C16.9505 2.2 16.5806 2.34 16.2406 2.53C9.78055 5.95 5.65055 8.73 3.93055 10.8C1.76055 13.43 1.64055 17.32 2.49055 20.02C3.26055 22.47 4.81055 24.14 6.85055 24.7L7.72055 24.94C8.09055 25.04 8.47055 25.09 8.84055 25.09C10.5606 25.09 12.1606 24.03 12.7706 22.34C13.6906 19.83 14.8006 17.44 16.0705 15.24C17.6905 12.43 19.1505 10.6 20.4205 9.78C21.6405 9.05 22.4506 7.71 22.4506 6.19C22.4506 3.96 20.7206 2.14 18.5306 2.01C18.4405 2.01 18.3505 2.01 18.2605 2.01L18.2705 2Z" fill="black"/>
                        <path d="M16.9106 5.90004L3.75055 28.7C1.50055 32.59 4.31055 37.46 8.81055 37.46H35.1406C39.6306 37.46 42.4406 32.6 40.2006 28.7L27.0406 5.90004C24.7906 2.01004 19.1805 2.01004 16.9305 5.90004H16.9106Z" fill="#80E5D1" stroke="black" stroke-width="4" stroke-miterlimit="10"/>
                        <path d="M18.8806 29.0499L22.2206 31.3599L25.0406 29.0499" stroke="black" stroke-width="2.73" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.1006 25.01C17.426 25.01 18.5006 23.9354 18.5006 22.61C18.5006 21.2845 17.426 20.21 16.1006 20.21C14.7751 20.21 13.7006 21.2845 13.7006 22.61C13.7006 23.9354 14.7751 25.01 16.1006 25.01Z" fill="black"/>
                        <path d="M27.8205 25.01C29.146 25.01 30.2205 23.9354 30.2205 22.61C30.2205 21.2845 29.146 20.21 27.8205 20.21C26.4951 20.21 25.4205 21.2845 25.4205 22.61C25.4205 23.9354 26.4951 25.01 27.8205 25.01Z" fill="black"/>
                    </svg>
                    <h2>Medium</h2>
                </div>
            </Link>
            <Link to="/question-number" className="link">
                <div className="button long-button blue-button hard-button" id="hard" onClick={handleDifficultyChange}>
                    <svg style={{ marginRight: "10px" }} width="35" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.0507 22.72C34.2307 22.72 33.4707 22.21 33.1707 21.41C32.2107 18.78 31.0407 16.28 29.7107 13.97C27.8607 10.77 26.1807 8.72002 24.5707 7.71002C23.6607 7.14002 23.3607 5.95002 23.9007 5.02002C24.2707 4.38002 24.9407 4.02002 25.6407 4.02002C25.9607 4.02002 26.2807 4.10002 26.5707 4.25002C30.8607 6.52002 36.3807 9.71002 38.2807 12.02C39.9307 14.02 39.9907 17.06 39.3207 19.19C38.7807 20.91 37.7607 22.06 36.4607 22.42L35.5907 22.66C35.4107 22.71 35.2307 22.73 35.0507 22.73V22.72Z" fill="#C5D3DD"/>
                        <path d="M25.6307 6.01C28.2807 7.41 34.8707 11.03 36.7407 13.29C38.4807 15.4 37.7107 19.99 35.9307 20.48L35.0607 20.72C34.0807 18.05 32.8907 15.45 31.4507 12.96C29.2407 9.13 27.3707 7.09 25.6407 6.01M25.6307 2.01C24.2407 2.01 22.9007 2.73 22.1607 4.01C21.0907 5.88 21.6807 8.26 23.5107 9.4C24.8207 10.22 26.3207 12.09 27.9807 14.96C29.2607 17.17 30.3707 19.57 31.2907 22.09C31.8807 23.7 33.4007 24.72 35.0507 24.72C35.4007 24.72 35.7607 24.67 36.1207 24.57L36.9907 24.33C38.9707 23.78 40.4707 22.16 41.2207 19.77C42.0507 17.13 41.9407 13.31 39.8107 10.73C38.1107 8.67 33.9607 5.89 27.4907 2.46C26.8907 2.15 26.2507 2 25.6207 2L25.6307 2.01Z" fill="black"/>
                        <path d="M8.66064 22.72C8.48064 22.72 8.30064 22.7 8.12064 22.65L7.25064 22.41C5.95064 22.05 4.93064 20.9 4.39064 19.18C3.72064 17.05 3.78064 14.01 5.43064 12.02C7.34064 9.71002 12.8506 6.52002 17.1406 4.25002C17.4406 4.09002 17.7606 4.02002 18.0706 4.02002C18.7606 4.02002 19.4406 4.38002 19.8106 5.02002C20.3506 5.95002 20.0506 7.14002 19.1406 7.71002C17.5306 8.72002 15.8506 10.76 14.0006 13.97C12.6706 16.28 11.5006 18.79 10.5406 21.41C10.2506 22.21 9.48064 22.72 8.66064 22.72Z" fill="#C5D3DD"/>
                        <path d="M18.0806 6.01001C16.3406 7.09001 14.4706 9.14001 12.2706 12.96C10.8406 15.45 9.64064 18.04 8.66064 20.72L7.79064 20.48C6.01064 19.99 5.24064 15.39 6.98064 13.29C8.84064 11.03 15.4306 7.42001 18.0906 6.01001M18.0706 2.01001C17.4406 2.01001 16.8006 2.16001 16.2006 2.47001C9.73064 5.90001 5.59064 8.68001 3.89064 10.74C1.76064 13.31 1.65064 17.13 2.48064 19.78C3.23064 22.17 4.73064 23.79 6.71064 24.34L7.58064 24.58C7.94064 24.68 8.30064 24.73 8.65064 24.73C10.2906 24.73 11.8206 23.71 12.4106 22.1C13.3306 19.58 14.4506 17.18 15.7206 14.97C17.3806 12.1 18.8806 10.23 20.1906 9.41001C22.0206 8.27001 22.6106 5.89001 21.5406 4.02001C20.8006 2.74001 19.4606 2.02001 18.0706 2.02001V2.01001Z" fill="black"/>
                        <path d="M16.7108 5.71999L3.55081 28.52C1.30081 32.41 4.11081 37.28 8.61081 37.28H34.9408C39.4308 37.28 42.2408 32.42 40.0008 28.52L26.8208 5.71999C24.5708 1.82999 18.9608 1.82999 16.7108 5.71999Z" fill="#C5D3DD" stroke="black" stroke-width="4" stroke-miterlimit="10"/>
                        <path d="M18.1207 31.16L21.4607 28.84L24.2907 31.16" stroke="black" stroke-width="2.73" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3407 20.86L13.4707 25.55" stroke="black" stroke-width="2.07" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M13.4707 20.86L18.3407 25.55" stroke="black" stroke-width="2.07" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M30.0607 20.77L25.1007 25.55" stroke="black" stroke-width="2.11" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M25.1007 20.77L30.0607 25.55" stroke="black" stroke-width="2.11" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>
                    <h2>Difficulty</h2>
                </div>
            </Link>
            <Link to="/input" className="link">
                <img src={BackBtn} alt="Back Button" className="back-button" />
            </Link>
        </div>
    );
}

export default Difficulty;