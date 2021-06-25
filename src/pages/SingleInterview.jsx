import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import * as PATHS from "../utils/paths";
import UpdateInterview from "../components/SingleInterview/UpdateInterview"
import { Typography, Grid, Container, Card, CardContent } from '@material-ui/core'

function SingleInterview(props) {

    const [singleInterview, setSingleInterview] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5005/api/interview/${props.match.params.interviewId}`)
        .then((response) => {
        setSingleInterview(response.data)
        })
        .catch((err) => {
            console.error(err);
        });
    }, [])

    console.log("props:", props);
    return (
        <Container
            maxWidth="lg"
            >
            <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={3}>
            <Grid item xs={16}>
                <Card
                    justify="center"
                    alignItems="center"
                    direction="column"
                    spacing={5}
                    style={{ backgroundColor: "#B2BEB5" }}>
                <CardContent>
        <div>
            <Typography style={{fontWeight:600 }}>Role: </Typography><Typography>{singleInterview.role}</Typography>
            <Typography style={{fontWeight:600 }}>Company: </Typography><Typography>{singleInterview.company}</Typography>
            <Typography style={{fontWeight:600 }}>Date: </Typography><Typography>{singleInterview.date}</Typography>
            <Typography style={{fontWeight:600 }}>Description: </Typography><Typography>{singleInterview.description}</Typography>
            {/*<Button variant="contained" color="secondary" onClick={UpdateInterview}>edit</Button>*/}
            <br/>
            <Link to={PATHS.INTERVIEWLIST}>back</Link>
        </div>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
        </Container>
    )
}

export default SingleInterview
