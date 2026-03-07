import { useCallback, useState } from "react"
import Child from "./Child";


const Parent = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('')
    console.log("parent rendering")

    const printSomething = useCallback(() => {
        console.log(message)
    }, [message])

    return (
        <>
            <h1>count:{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>

            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Child printSomething={printSomething}> </Child>
        </>
    )
}
export default Parent