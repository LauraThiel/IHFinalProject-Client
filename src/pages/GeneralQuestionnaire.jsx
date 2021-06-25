import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import * as PATHS from "../utils/paths";
import { Typography, Grid, Container, Card, CardContent } from '@material-ui/core'

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
        <br/>
            <Typography variant='h5' style={{fontWeight:600 }}>Questionnaire</Typography>
            <br/>
            <Container
            maxWidth="lg"
            >
            <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={3}>

             
            {questionnaire.map((questionanswer) => {
                return (
                    <Grid item xs={16}>
                        <Card
                            justify="center"
                            alignItems="center"
                            direction="column"
                            spacing={5}
                            style={{ backgroundColor: "#B2BEB5" }}>
                    <CardContent>
                    <section key={questionanswer.id}>
                    <Typography style={{fontWeight:600 }}>Category:</Typography> <Typography>{questionanswer.category}</Typography>
                    <Typography style={{fontWeight:600 }}>Question: </Typography> <Typography>{questionanswer.question}</Typography>
                    <Typography style={{fontWeight:600 }}>Intention: </Typography> <Typography>{questionanswer.intention}</Typography>
                    <Typography style={{fontWeight:600 }}>Answer: </Typography> <Typography>{questionanswer.answer}</Typography>
                    {/*<Link to={`/questionnaire/${questionanswer._id}`}>Edit</Link>*/}
                    </section>
                    </CardContent>
                    </Card>
                    </Grid>
                    )
            })}
            </Grid>
            </Container>

            <br/>

            <Link to={PATHS.ADD_GENQUEST}>Add Question</Link>

            <br/>
            
        </div>
    )
}

export default GeneralQuestionnaire
