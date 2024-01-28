import Option from "./Option";

const Question = ({q, i}) => {
    return (
        <>    
            <div className="question-container">
                <h2>Question {i + 1}</h2>
                <h2>{q.question}</h2>
            </div>
            {q.options.map((o, i) => 
                <Option 
                    option={o} 
                    correctAnsId={q.correctOptionId}
                    index={i + 1} 
                    key={i}
                />
            )}
        </>
    )
}

export default Question;