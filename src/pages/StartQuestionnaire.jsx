import axios from 'axios';
import React, {useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import * as PATHS from "../utils/paths";
import QuestionCard from "../components/Questionnaire/QuestionCard"
import IntentionCard from "../components/Questionnaire/IntentionCard"
import AnswerCard from "../components/Questionnaire/AnswerCard"
import { Button, Container } from '@material-ui/core'

const TOTAL_QUESTIONS = 3;


function StartQuestionnaire(props) {
    const { question } = props
    const [displayButton, setDisplayButton] = useState(false)
    const [displayQuestionnaire, setDisplayQuestionnaire] = useState(false)
    const [loading, setLoading] = useState(false)
    const [number, setNumber] = useState(0)
    const [questions, setQuestions] = useState([])
    const [displayIntention, setDisplayIntention] = useState(true)
    const [displayAnswer, setDisplayAnswer] = useState(true)
    const [gameOver, setGameOver] = useState(true)

    useEffect(() => {
        console.log('use effect ran')
        axios
        .get('http://localhost:5005/api/questionnaire')
        .then((response) => {
            console.log(response)
        setDisplayButton(true)
        setDisplayQuestionnaire(false)
        setQuestions(response.data)
        setDisplayAnswer(false)
        setDisplayIntention(false)
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


    
    
    function nextQuestion () {
        setNumber(number+1)
        setDisplayAnswer(false)
        setDisplayIntention(false)

    }

    function showAnswer () {
        //Show answer function
        setDisplayAnswer(!displayAnswer)
    }

    function showIntention () {
        //Show answer function
        setDisplayIntention(!displayIntention)

    }

    function startQuest () {
        setDisplayQuestionnaire(true)
        setDisplayButton(false)

     }

   
    return (
        <Container
            style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'}}>
            {!displayQuestionnaire && displayButton && (
                <Button 
                variant="contained" 
                color="primary" 
                style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'}}
                onClick={startQuest}>
                Start Questionnaire</Button>)}


            {loading && displayQuestionnaire && <p>Loading Questions ...</p> }

            {!loading && displayQuestionnaire && !gameOver && (<QuestionCard 
                key={questions[number]}
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                category={questions[number].category}
                question={questions[number].question}
            />  )}
                <br />

            {displayQuestionnaire && (
                <Button 
                variant="contained" 
                color="secondary" 
                style={{
                    borderRadius: "60%",
                    maxWidth: "10px",
                    maxWidth: "10px",

                }}
                onClick={showIntention}>
                i
                </Button>)}
            <br />

            {!loading && displayQuestionnaire && !gameOver && displayIntention && (<IntentionCard 
                intention={questions[number].intention}
            />  )}
            <br />


            {displayQuestionnaire &&  !displayAnswer && 
                (<Button 
                    variant="contained"  
                    color="secondary" 
                    onClick={showAnswer}
                    >Show Answer
                    </Button>)}
                <br />

            {!loading && displayQuestionnaire && !gameOver && displayAnswer && (<AnswerCard 
                answer={questions[number].answer}
            />  )}

            <br />
            {!gameOver && displayQuestionnaire && !loading && number !== TOTAL_QUESTIONS - 1  && (<Button variant="contained" color="primary" onClick={nextQuestion}>Next</Button>)}
            <br/>
            {/*{!gameOver && displayQuestionnaire && !loading  && (<button>Done</button>)}  */}  
            <br/> 
            <br/>    

                        <Link style={{
                    position: 'absolute', left: '50%', top: '90%',
                    transform: 'translate(-50%, -50%)'}}
                    to={PATHS.PROFILEPAGE}>Back to profile</Link>          

            <br/>
        </Container>
    )

}



export default StartQuestionnaire