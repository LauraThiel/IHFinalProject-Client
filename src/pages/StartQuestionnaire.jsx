import axios from 'axios';
import React, {useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import * as PATHS from "../utils/paths";

function StartQuestionnaire(props) {
    const [question, setQuestion] = React.useState(

    useEffect(() => {
        console.log('use effect ran')
        axios.get('http://localhost:5005/api/questionnaire')
        .then((response) => {
            console.log(response)
        setQuestion(response.data)
        })
        .catch((err) =>{
            console.error(err);
        })
    }, []))

    console.log("props:", props);
    return (
        <div>
        <button>Start Questionnaire</button>
        <br/>
        <Link to={PATHS.PROFILEPAGE}>Back to profile</Link>
        <h2>Question 1/10</h2>
        {question && <p>Category: {question.category}</p> }
        {question && <p>Question: {question.question}</p> }
        <button>i</button>
        {question && <p>Intention: {question.intention}</p> }
        {question && <p>Answer: {question.answer}</p> }
        <button>Done</button>
        <br />
        <button>Next</button>
        </div>
    )
}

export default StartQuestionnaire



