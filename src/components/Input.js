import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "../css/style.css";
import Cyan from "../assets/img/cyan.svg";
import Bg from "../assets/img/bg.svg";
import BackBtn from "../assets/img/back-button.svg";
import { useMyContext } from './Context';

import {GlobalWorkerOptions, getDocument} from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.js';

const Input = () => {
    const { requestObject, updateRequestObject } = useMyContext();
  
    const svgBackground = {
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const [pdfContent, setPdfContent] = useState('');

    const handleFileChange = async (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = async (e) => {
        const contents = e.target.result;
        const pdf = await getDocument(contents).promise;
        const pdfPages = pdf.numPages;

        let extractedText = '';

        for (let i = 1; i <= pdfPages; i++) {
          const textContent = await (await pdf.getPage(i)).getTextContent();
          const pageText = textContent.items.map((item) => item.str).join(' ');
          extractedText += pageText;
        }

        setPdfContent(extractedText);
        updateRequestObject({fileContent: extractedText});
        console.log(extractedText);
      };

      reader.readAsArrayBuffer(file);
    };

  return (
      <div className="input-screen" style={svgBackground}>
        <div className="screen-title">
          <h1>What do you want to revise?</h1>
        </div>
        <div className="title">
          <img src={Cyan} alt="cyan" />
          <h2>Give me your notes so I can Squiz for you!</h2>
        </div>
        <div className="input-container">
          <textarea placeholder="text input" rows="4" cols="50"></textarea>
        </div>
        <h2 className="or">
          OR
        </h2>
        <label htmlFor="file-selector" className="button cyan-button long-button pdf-button upload-button">
          PDF Upload
        </label>
        <input
          type="file"
          id="file-selector"
          accept=".pdf"
          onChange={handleFileChange}
          style={{ display: "none" }} 
        />
        <Link to="/difficulty">
          <div className="button blue-button short-button continue-button ">
            <h2>Continue</h2>
          </div>
        </Link>
        <Link to="/home" className="link">
          <img src={BackBtn} alt="Back Button" className="back-button" />
        </Link>
      </div>
  );
};

export default Input;
