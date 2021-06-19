import React from 'react'
import {Link} from 'react-router-dom'
//import axios from 'axios' 
import UpdatePassword from '../components/Profile/UpdatePassword'
import UpdateProfile from '../components/Profile/UpdateProfile'
import * as PATHS from "../utils/paths";

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
        <div>
            <h1>Hi, {user.username}</h1>
            <button onClick={profileToggle}>Update Profile</button>
            {displayUpdateProfile && <UpdateProfile user={user} authenticate={authenticate} />}  {/*if displayUpdateProfile is true, show UpdateProfile component */ }
            <br />
            <button onClick={passwordToggle}>Update Password</button>
            {displayUpdatePassword && <UpdatePassword />}
            <br />
            <button>Delete Account</button>
            <br />
            <Link to={PATHS.INTERVIEWLIST}>My Interviews</Link>
            <br />
            <Link to={PATHS.GENQUEST}>General Questionnaire</Link>
            <br />
            <Link to={PATHS.STARTQUEST}>Start Interview Questions</Link>
        </div>
    )
}



export default ProfilePage

