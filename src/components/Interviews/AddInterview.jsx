import React from 'react'
//import axios from "axios"
import * as CONSTS from '../../utils/consts'
//import useForm from "../../hooks/useForm"
import * as PATHS from '../../utils/paths'
import * as INTERVIEW_SERVICE from '../../services/interview.service'
import { Button, Typography, Grid, Container, Card, CardContent } from '@material-ui/core'

function AddInterview(props) {
 //   const [form, handleChange, handleSubmit] = useForm({ role: "", company: "", date: 0 })
  const [form, setForm] = React.useState({
        role: "",
        company: "",
        date: 0,
        description: "",
    })

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    } 

    function handleSubmit(event) {
        event.preventDefault()
        const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN)

        INTERVIEW_SERVICE.ADD_INTERVIEW(form, accessToken)
        .then((response) => {
            console.log("response", response)
            props.history.push(`${PATHS.INTERVIEWLIST}`)
        })
        .catch(err =>{
            console.error('err:', err.response)
        })
    } 


{/* 
    const onSubmit = handleSubmit((formValues) => 
    {
        axios.post()
    })
    console.log("formValues:", formValues);
    const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
    console.log("accessToken:", accessToken);
    axios
      .post(
        `${CONSTS.SERVER_URL}/interviewlist/${props.InterviewId}/add`,
        formValues,
        {
          headers: {
            authorization: accessToken,
          },
        }
      )
      .then((success) => {
        console.log("success:", success);
        props.updatesInterview(success.data.interview);
      })
      .catch((err) => {
        console.log("HERE?");
        console.error(err.response);
      });
*/} 
    
    return (
        <Container
            style={{
                    position: 'absolute', left: '50%', top: '30%',
                    transform: 'translate(-50%, -50%)'}}>
        <div>
        <Typography variant="h5" style={{fontWeight:600 }}>Add an Interview</Typography>
        <br />
        <form onSubmit={handleSubmit}>
        <div>
            <label>Role</label>
            <input type="role" name="role" 
            placeholder="role" onChange={handleChange} value={form.role}/>
        </div>
        <br />
        <div>
            <label>Company</label>
            <input type="company" name="company" 
            placeholder="company" onChange={handleChange} value={form.company}/>
        </div>
        <br />
        <div>
            <label>Date</label>
            <input type="date" name="date" 
            placeholder="date" onChange={handleChange} value={form.date}/>
        </div>
        <br />
        <div>
            <label>Description</label>
            <input type="description" name="description" 
            placeholder="Describe the role" onChange={handleChange} value={form.description}/>
        </div>
        <br />
        <br />
        <Button 
        variant="contained"  
        color="secondary" 
        type="submit">
        Add Interview
        </Button>

        </form>  
        </div>
        </Container>
    )
}

export default AddInterview
