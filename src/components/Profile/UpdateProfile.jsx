import React from 'react'
import * as PROFILE_SERVICE from "../../services/profile.service"
import * as CONSTS from "../../utils/consts"
import { Button } from '@material-ui/core'

function UpdateProfile(props) {
    const { user, authenticate } = props
    console.log("props:", props);
    const [form, setForm] = React.useState({
        username: user.username
    }); 

    function handleChange(event) {
        console.log(event.target.name)
        setForm({...form, [event.target.name]: event.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN)
        PROFILE_SERVICE.UPDATE_PROFILE(form, accessToken)
        .then((response) => {
            authenticate(response.data.user);
        })
        .catch(err => {
            console.error(err)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input name="username" placeholder="Username" value={form.username} onChange={handleChange}/>
            </div>
            <Button>Update Profile</Button>
        </form>
    )
}

export default UpdateProfile