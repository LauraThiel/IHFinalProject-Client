import axios from 'axios';
import React, {useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import * as PATHS from "../utils/paths";
import QuestionCard from "../components/Questionnaire/QuestionCard"

const TOTAL_QUESTIONS = 3;


function StartQuestionnaire(props) {
    const { question } = props
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState([])
    const [questions, setQuestions] = useState([])
    const [number, setNumber] = useState(0)
    const [intention, setIntention] = useState ([])
    const [answer, setAnswer] = useState([])
    const [gameOver, setGameOver] = useState(true)

    useEffect(() => {
        console.log('use effect ran')
        axios
        .get('http://localhost:5005/api/questionnaire')
        .then((response) => {
            console.log(response)
        setQuestions(response.data)
        setCategory(response.data)
        setAnswer(response.data)
        setIntention(response.data)
        setLoading(false)
        setGameOver(false)


            console.log(response.data)
        })
        .catch((err) =>{
            console.error(err);
        })
        return () => console.log("Component unmounted");
    }, [])

    console.log("props:", props);

    //function seeIntentions ()
    //const seeIntentions = (e: React.MouseEvent<HTMLButtonElement>)

    function nextQuestion () {
        setNumber(number+1)
    }

   
    return (
        <div>
            <button onClick={StartQuestionnaire}>Start Questionnaire</button>
            <br/>
            <Link to={PATHS.PROFILEPAGE}>Back to profile</Link>
            <br/>
            {loading && <p>Loading Questions ...</p> }
            {!loading && !gameOver && (<QuestionCard 
                key={questions[number]}
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                category={questions[number].category}
                question={questions[number].question}
                intention={questions[number].intention}
                answer={questions[number].answer}
            /> 
            )}
            {<button>Done</button> }
        <br />
        {!gameOver && !loading && number !== TOTAL_QUESTIONS -1 && <button onClick={nextQuestion}>Next</button>}
        </div>
    )

}





export default StartQuestionnaire



