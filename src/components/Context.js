import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [requestObject, setRequestObject] = useState({
    "fileContent": "",
    "difficulty": "",
    "questionNumber": "",
  });

  const [questionObject, setQuestionObject] = useState({});

  const [counter, setCounter] = useState(0);

  const updateRequestObject = (newValues) => {
    setRequestObject((prevRequestObject) => ({
        ...prevRequestObject,
        ...newValues,
      }));
  };

  const updateQuestionObject = (newQuestions) => {
    setQuestionObject(newQuestions);
  }

  const [correctAnsCounter, setCorrectAnsCounter] = useState(0);

  return (
    <MyContext.Provider value={{ requestObject, updateRequestObject, questionObject, updateQuestionObject, counter, setCounter, correctAnsCounter, setCorrectAnsCounter }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
