import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import * as PATHS from "../utils/paths";

function GeneralQuestionnaire() {
    
    
    const [questionnaire, setQuestionnaire] = React.useState([])
    React.useEffect(() => {
        console.log("We can run some code here, component was mounted")

axios
    .get(`http://localhost:5005/api/questionnaire`)
    .then(response => {
    console.log('response:', response);
    setQuestionnaire(response.data)

}).catch(err => {
    console.error(err)
})
        return () => console.log("unmounted component");
    }, []) 
     
    return (
        <div>
             <h2>Questionnaire</h2>
            {questionnaire.map((questionanswer) => {
                return (
                    <section key={questionanswer.id}>
                    <p>Category: {questionanswer.category}</p>
                    <p>Question: {questionanswer.question}</p>
                    <p>Intention: {questionanswer.intention}</p>
                    <p>Answer: {questionanswer.answer}</p>
                    <Link to={`/questionnaire/${questionanswer._id}`}>Edit</Link>
                    </section>
                    )
            })}
            <Link to={PATHS.ADD_GENQUEST}>Add Question</Link>
            
        </div>
    )
}

export default GeneralQuestionnaire
