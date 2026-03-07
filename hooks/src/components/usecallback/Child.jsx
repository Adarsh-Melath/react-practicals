import React from "react"


const Child = ({printSomething}) => {
    console.log('child rendering')
    return (
        <>
            <h1>Child Component</h1>
        </>
    )
}

export default React.memo(Child)