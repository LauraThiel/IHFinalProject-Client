import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import * as PATHS from "../utils/paths";
import { Typography, Grid, Container, Card, CardContent } from '@material-ui/core'

function Interviewlist() {

    const [listOfInterviews, setListOfInterviews] = React.useState([])
    React.useEffect(() => {
        console.log("We can run some code here, component was mounted")

axios
    .get(`http://localhost:5005/api/interview`)
    .then(response => {
    console.log('response:', response);
    setListOfInterviews(response.data)

}).catch(err => {
    console.error(err)
})
        return () => console.log("Component unmounted");


    }, []) //when we have an empty array, this is the equivalent of componentDidMount
    return (
        <div>
        <br/>
            <Typography variant="h5" style={{fontWeight:600 }}> Upcoming Interviews</Typography>
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

            {listOfInterviews.map((interview) => {
                return (
                    <Grid item xs={16}>
                        <Card
                            justify="center"
                            alignItems="center"
                            direction="column"
                            spacing={5}
                            style={{ backgroundColor: "#B2BEB5" }}>
                    <CardContent>
                    <div> 
                    <section key={interview.id}>
                            <Typography style={{fontWeight:600 }}>Role: </Typography><Typography>{interview.role}</Typography>
                            <Typography style={{fontWeight:600 }}>Company: </Typography><Typography>{interview.company}</Typography>
                            <Typography style={{fontWeight:600 }}>Date: </Typography><Typography>{interview.date}</Typography>
                            <Link to={`/interviewlist/${interview._id}`}>Manage Interview</Link>
                    </section>
                    </div>
                    </CardContent>
                    </Card>
                    </Grid>
                    )
            })}
            </Grid>
            </Container>
            <br/>

            <Link to={PATHS.ADD_INTERVIEW}>Add Interview</Link>
        </div>
    )
}

export default Interviewlist
