import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
        <div>
            <h2>Role: {singleInterview.role}</h2>
            <p>Company: {singleInterview.company}</p>
            <p>Date: {singleInterview.date}</p>
        </div>
    )
}

export default SingleInterview
