import React from 'react'
import * as SINGLEINTERVIEW_SERVICE from "../../services/singleinterview.service"
import * as CONSTS from "../../utils/consts"

function UpdateInterview(props) {
    const { interview } = props 
    console.log("props:", props);
    const [form, setForm] = React.useState({
        role: interview.role,
        company: interview.company,
        date: interview.date,
        description: interview.description,
    }); 

    function handleChange(event) {
        console.log(event.target.name)
        setForm({...form, [event.target.name]: event.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN)
        SINGLEINTERVIEW_SERVICE.UPDATE_SINGLEINTERVIEW(form, accessToken)
        .then((response) => {
            // not really sure what to add here
            ;
        })
        .catch(err => {
            console.error(err)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Role</label>
                <input name="role" placeholder="Role" value={form.role} onChange={handleChange}/>
            </div>
            <div>
                <label>Company</label>
                <input name="company" placeholder="Company" value={form.company} onChange={handleChange}/>
            </div>
            <div>
                <label>Date</label>
                <input name="date" placeholder="Date" value={form.date} onChange={handleChange}/>
            </div>
            <div>
                <label>Description</label>
                <input name="description" placeholder="Description" value={form.description} onChange={handleChange}/>
            </div>
            <button>Update Interview</button>
        </form>
    )
}

export default UpdateInterview