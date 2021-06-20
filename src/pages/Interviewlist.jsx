import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import * as PATHS from "../utils/paths";

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
            <h2>Upcoming Interviews</h2>
            {listOfInterviews.map((interview) => {
                return (
                    <section key={interview.id}>
                    <h2>Role: {interview.role}</h2>
                    <p>Company: {interview.company}</p>
                    <p>Date: {interview.date}</p>
                    <Link to={`/interviewlist/${interview._id}`}>Manage Interview</Link>
                    </section>
                    )
            })}
            <Link to={PATHS.ADD_INTERVIEW}>Add Interview</Link>
        </div>
    )
}

export default Interviewlist
