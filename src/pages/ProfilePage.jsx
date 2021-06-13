import React from 'react'
import axios from 'axios' 


function ProfilePage({ user }) {
    const [displayUpdateProfile, setDisplayUpdateProfile] = React.useState(false);
    const [displayUpdatePassword, setDisplayUpdatePassword] = React.useState(false);

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
        {displayUpdateProfile && <UpdateProfile user={user} />}  {/*if displayUpdateProfile is true, show UpdateProfile component */ }
        <br />
        <button onClick={passwordToggle}>Update Password</button>
        {displayUpdatePassword && <UpdatePassword />}
        <br />
        <button>Delete Account</button>
        </div>
    )
}

function UpdatePassword() {
    return (
        <form>
            <div>
                <label>Current Password</label>
                <input name="password" placeholder="Current Password" />
            </div>
            <div>
                <label>New Password</label>
                <input name="password" placeholder="New Password" />
            </div>
            <div>
                <label>Confirm New Password</label>
                <input name="password" placeholder="Confirm New Password" />
            </div>
            <button>Update Password</button>
        </form>
    )
}


function UpdateProfile(props) {
    const { user } = props
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
        const accessToken = localStorage.getItem("accessToken")
        axios.put(`http://localhost:5005/api/profile/update`, form, {
            headers: {
                authorization: accessToken,
            }
        }).then((response) => {
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
            <button>Update Profile</button>
        </form>
    )
}



export default ProfilePage

