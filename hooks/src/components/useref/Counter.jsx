import { useRef, useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
    const renderCount = useRef(0);

    renderCount.current += 1;

    return (
        <>
            <h1>Count:{count}</h1>
            <h1>Rendering count: {renderCount.current}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </>
    )
}
export default Counter