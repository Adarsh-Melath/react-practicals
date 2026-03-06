import { useState } from "react"


const Counter = () => {
    const [count, setCounter] = useState(0);//count state with initial value as 0

    const increment = () => {
        setCounter(count => count + 1)
    }

    const decrement = () => {
        setCounter(count => count > 0 ? count - 1 : 0)
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter