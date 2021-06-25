import React from 'react'
import { Button, Container } from '@material-ui/core'

function UpdatePassword() {
    return (
        <Container
        maxWidth="lg"
        >
        <form>
            <div>
                <label>Current Password</label>
                <input style={{width:"40%"}} name="password" placeholder="Current Password" />
            </div>
            <div>
                <label>New Password</label>
                <input style={{width:"40%"}} name="password" placeholder="New Password" />
            </div>
            <div>
                <label>Confirm New Password</label>
                <input style={{width:"40%"}} name="password" placeholder="Confirm New Password" />
            </div>
            <Button>Update Password</Button>
        </form>
        </Container>
    )
}

export default UpdatePassword