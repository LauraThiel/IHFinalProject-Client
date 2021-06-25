import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core'


function IntentionCard( { intention } ) {
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
        style={{ backgroundColor: "#eeeeee" }}>
            <Grid item>
                <Typography style={{fontWeight:600 }}> Intention: </Typography> <Typography>
                {intention}
                </Typography>
            </Grid>
        </Grid>
        </Container>
        )}


export default IntentionCard