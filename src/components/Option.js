import { useState, useEffect } from "react";
import { useMyContext } from "./Context";
import { useNavigate } from "react-router-dom";

const Option = ({option, index, correctAnsId}) => {
    const [chosenIndex, setChosenIndex] = useState(null);
    const [cN, setCN] = useState('button long-button white-button answer-button');
    const {requestObject, counter, setCounter, correctAnsCounter, setCorrectAnsCounter} = useMyContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (chosenIndex !== null){
            // change selected answer's style
            setCN(`button long-button white-button answer-button${chosenIndex == correctAnsId ? ' correct-answer' : ' wrong-answer'}`);

            if (chosenIndex == correctAnsId) {
                setCorrectAnsCounter(correctAnsCounter + 1);
            }

            setTimeout(() => setCN("button long-button white-button answer-button"), 1500)
        }
    }, [chosenIndex]);

    const checkAnswer = (e) => {
        setChosenIndex(e.target.id);
        setTimeout(() => {
            if (counter < requestObject.questionNumber - 1){
                setCounter(counter+1);
            }
            else {
                navigate('/quiz-finish');
            }}, 1500)
    }

    return (
        <>    
            <div 
                className={cN}
                id={option.id} 
                onClick={checkAnswer}
            >
                <h2>{option.text}</h2>
            </div>
        </>
    )
}

export default Option;