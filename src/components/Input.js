import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pdfjs from "pdfjs-dist/build/pdf";
import "../css/style.css";
import Cyan from "../assets/img/cyan.svg";

const Input = () => {
  const [pdfText, setPdfText] = useState("");

  // Function to read the PDF file asynchronously
  function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  // Function to extract text from the PDF
  async function extractPdfText(arrayBuff) {
    try {
      // Initialize PDFJS worker
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

      const pdf = await pdfjs.getDocument({ data: arrayBuff }).promise;
      let extractedText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        content.items.forEach((item) => {
          extractedText += item.str + " ";
        });
      }

      return extractedText;
    } catch (error) {
      console.error("Error extracting text from PDF:", error);
      return "";
    }
  }

  // Execute when the user selects a file
  const onFileSelected = async (e) => {
    const fileList = e.target.files;
    if (fileList?.length > 0) {
      const pdfArrayBuffer = await readFileAsync(fileList[0]);
      const extractedText = await extractPdfText(pdfArrayBuffer);
      setPdfText(extractedText);

      // Append the extracted text to the existing JSON file
      const existingJson = await fetch("../ExtractedText.json").then((response) =>
        response.json()
      );
      const updatedJson = { text: existingJson.text + " " + extractedText };

      // Save the updated JSON back to the file
      const updatedJsonString = JSON.stringify(updatedJson, null, 2);
      const blob = new Blob([updatedJsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // Trigger download of the updated JSON file
      const link = document.createElement("a");
      link.href = url;
      link.download = "ExtractedText.json";
      link.click();
    }
  };

  // Fetch the text from the existing JSON file during initialization
  useEffect(() => {
    const fetchExistingText = async () => {
      try {
        const existingJson = await fetch("../ExtractedText.json").then((response) =>
          response.json()
        );
        setPdfText(existingJson.text || "");
      } catch (error) {
        console.error("Error fetching existing text:", error);
      }
    };

    fetchExistingText();
  }, []);

  return (
    <div className="input-screen">
      <h1>What do you want to revise?</h1>
      <div className="title">
        <img src={Cyan} alt="cyan" />
        <h2>Give me your notes so I can Squiz for you!</h2>
      </div>
      <div className="input-container">
        <textarea placeholder="text input" rows="4" cols="50"></textarea>
      </div>
      <label htmlFor="file-selector" className="upload-button">
        PDF Upload
      </label>
      <input
        type="file"
        id="file-selector"
        accept=".pdf"
        onChange={onFileSelected}
        style={{ display: "none" }} // Hide the file input
      />
      <div>
        <h2>Extracted Text:</h2>
        <pre>{pdfText}</pre>
      </div>
      <Link to="/difficulty">
        <button className="continue-button">Continue</button>
      </Link>
    </div>
  );
};

export default Input;
