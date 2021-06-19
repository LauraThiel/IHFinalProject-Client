import React from 'react'
//import axios from "axios"
import * as CONSTS from '../../utils/consts'
//import useForm from "../../hooks/useForm"
import * as PATHS from '../../utils/paths'
import * as QUESTION_SERVICE from '../../services/question.service'


function AddQuestion(props) {
 //   const [form, handleChange, handleSubmit] = useForm({ role: "", company: "", date: 0 })
  const [form, setForm] = React.useState({
        category: "",
        question: "",
        intention: "",
        answer: "",
    })

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    } 

    function handleSubmit(event) {
        event.preventDefault()
        const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN)

        QUESTION_SERVICE.ADD_QUESTION(form, accessToken)
        .then((response) => {
            console.log("response", response)
            props.history.push(`${PATHS.QUESTION}/${response.data.question.category.toLowerCase()}`)
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
        <div>
        <h2>Add a Question</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Category</label>
            <input type="category" name="category" 
            placeholder="Category" onChange={handleChange} value={form.category}/>
        </div>
        <div>
            <label>Question</label>
            <input type="question" name="question" 
            placeholder="question" onChange={handleChange} value={form.question}/>
        </div>
        <div>
            <label>Intention</label>
            <input type="intention" name="intention" 
            placeholder="intention" onChange={handleChange} value={form.intention}/>
        </div>
        <div>
            <label>Answer</label>
            <input type="Answer" name="Answer" 
            placeholder="Answer" onChange={handleChange} value={form.answer}/>
        </div>
        <button type="submit">Add Question</button>
        </form>  
        </div>
    )
}

export default AddQuestion