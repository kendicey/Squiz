import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import { createContext } from 'react';
import 'canvas';

import Opening from "./components/Opening";
import Home from "./components/Home";
import Input from "./components/Input";
import Difficulty from "./components/Difficulty";
import QuestionNumber from "./components/QuestionNumber";
import Name from "./components/Name";
import Loading from "./components/Loading";
import Quiz from "./components/Quiz";
import QuizFinish from "./components/QuizFinish";
import { MyProvider } from "./components/Context";
import History from "./components/History";
import WrongAnswerMockup from "./components/WrongAnswerMockup";
import CorrectAnswerMockup from "./components/CorrectAnswerMockup";


function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <div className="container">
          <Routes>
          <Route path="/" element={<Opening />} />
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/input" element={<Input />} />
          <Route path="/difficulty" element={<Difficulty />} />
          <Route path="/question-number" element={<QuestionNumber />} />
          <Route path="/name" element={<Name />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz-finish" element={<QuizFinish />} />
          <Route path="/wrong-answer-mockup" element={<WrongAnswerMockup />} />
          <Route path="/correct-answer-mockup" element={<CorrectAnswerMockup />} />
          </Routes>
        </div>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
