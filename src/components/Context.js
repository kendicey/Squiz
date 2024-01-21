import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [requestObject, setRequestObject] = useState({
    "fileContent": "",
    "difficulty": "",
    "questionNumber": "",
  });

  const updateRequestObject = (newValues) => {
    setRequestObject((prevRequestObject) => ({
        ...prevRequestObject,
        ...newValues,
      }));
  };

  return (
    <MyContext.Provider value={{ requestObject, updateRequestObject }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
