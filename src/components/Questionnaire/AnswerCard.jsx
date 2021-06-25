import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core'

function AnswerCard( { answer } ) {
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
            style={{ backgroundColor: "#B2BEB5" }}>

                <Grid item>
                    <Typography style={{fontWeight:600 }}>
                    Answer: </Typography> <Typography>
                    {answer}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        )}


export default AnswerCard
