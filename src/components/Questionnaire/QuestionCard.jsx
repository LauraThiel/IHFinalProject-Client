import React from 'react'
import { Typography, Grid, Container, Card, CardContent } from '@material-ui/core'

function QuestionCard( { questionNr, totalQuestions, category, question } ) {
    return (
        <Container
        maxWidth="lg"
        >
            <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={3}
            style={{ backgroundColor: "#aaaaaa"}}>
                <Grid item >
                            <Typography variant="h5" style={{ fontWeight:600 }}> 
                            Question {questionNr}/{totalQuestions}
                            </Typography>
                            <br/>
                            <Grid item>
                                <Typography style={{fontWeight:600 }}>
                                Category: </Typography> <Typography>
                                {category}
                                </Typography>
                                <br/>
                                <Typography style={{fontWeight:600 }}>
                                Question: </Typography> <Typography> 
                                {question}
                                </Typography> 
                            </Grid>
                </Grid>
            </Grid>
        </Container>
        )}


export default QuestionCard
