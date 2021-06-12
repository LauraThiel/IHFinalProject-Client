import React from 'react'

function Interviewlist() {
    React.useEffect(() => {
        console.log("We can run some code here, component was mounted")

        return () => console.log("Bye bye eeh");


    })
    return (
        <div>
            
        </div>
    )
}

export default Interviewlist
