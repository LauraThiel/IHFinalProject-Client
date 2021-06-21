import React from 'react'

function QuestionCard( { questionNr, totalQuestions, category, question, intention, answer}) {
    return (
        <div>
                <h2> 
                Question {questionNr}/{totalQuestions}
                </h2>
                
                <p>
                Category: 
                {category}
                </p>

                <p>
                Question:   
                {question}
                </p>

                <p>
                Intention:   
                {intention}
                </p>

                <p>
                Answer:   
                {answer}
                </p>
            </div>
        )}


export default QuestionCard
