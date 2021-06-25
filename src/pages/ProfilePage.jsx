import React from 'react'
import {Link} from 'react-router-dom'
//import axios from 'axios' 
import UpdatePassword from '../components/Profile/UpdatePassword'
import UpdateProfile from '../components/Profile/UpdateProfile'
import * as PATHS from "../utils/paths";
import { Button, Typography, Container } from '@material-ui/core'

function ProfilePage(props) {
    const [displayUpdateProfile, setDisplayUpdateProfile] = React.useState(false);
    const [displayUpdatePassword, setDisplayUpdatePassword] = React.useState(false);
    const { user, authenticate } = props

    function profileToggle(){
        setDisplayUpdateProfile(!displayUpdateProfile)
    }

    function passwordToggle(){
        setDisplayUpdatePassword(!displayUpdatePassword)
    }


    return (
        <Container
        maxWidth="lg"
        >
        <div>
            <br />
            <br />
            <Typography variant="h5">Welcome, {user.username}</Typography>
            <br />
            <br />
            <Button variant="contained" color="secondary" onClick={profileToggle}>Update Profile</Button>
            <br />
            {displayUpdateProfile && <UpdateProfile user={user} authenticate={authenticate} />}  {/*if displayUpdateProfile is true, show UpdateProfile component */ }
            <br />
            <br />
            <Button variant="contained" color="secondary" onClick={passwordToggle}>Update Password</Button>
            <br />
            {displayUpdatePassword && <UpdatePassword />}
            <br />
            <br />
            <Button variant="contained" color="secondary" >Delete Account</Button>
            <br />
            <br />
            <Link to={PATHS.INTERVIEWLIST}>My Interviews</Link>
            <br />
            <br />
            <Link to={PATHS.GENQUEST}>General Questionnaire</Link>
            <br />
            <br />
            <Link to={PATHS.STARTQUEST}>Start Interview Questions</Link>
        </div>
        </Container>
    )
}



export default ProfilePage

