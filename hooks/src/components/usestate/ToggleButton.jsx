import { useState } from 'react'
//problem statement
// Toggle Button: Develop a toggle button that changes its state with the useState hook when clicked.It should change between "On" and "Off" states.

const ToggleButton = () => {
    const [state, setState] =
        useState(true)

    const toggleState = () => setState(state => !state)
    return (
        <>
            <button onClick={toggleState}>{state ? "ON" : "OFF"}</button>
        </>
    )
}

export default ToggleButton