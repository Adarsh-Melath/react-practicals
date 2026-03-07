import { useReducer } from "react"
import { countReducer } from "./countReducer"


const Counter = () => {
    const [count, dispatch] = useReducer(countReducer, 0)

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => dispatch('increment')}>+</button>
            <button onClick={() => dispatch('decrement')}>-</button>
        </>
    )
}

export default Counter