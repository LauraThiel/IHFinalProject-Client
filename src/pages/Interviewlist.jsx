import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
        return () => console.log("Bye bye eeh");


    }, []) //when we have an empty array, this is the equivalent of componentDidMount
    return (
        <div>
            {listOfInterviews.map((interview) => {
                return (
                    <section key={interview.id}>
                    <Link to={`/interviewlist/${interview._id}`}>
                    <h2>Role: {interview.role}</h2>
                    </Link>
                    <p>Company: {interview.company}</p>
                    <p>Date: {interview.date}</p>
                  
                    </section>
                    )
            })}
        </div>
    )
}

export default Interviewlist
