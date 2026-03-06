//problem

import { useState } from "react"

//User Input Form: Build a form with useState to capture and display user input. For example, capture the user's name and display a greeting.

const Greeting = () => {

    const [name, setName] = useState("")
    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <h1>Hello {name}</h1>
        </>
    )
}

export default Greeting