import { useState } from "react"

const Child = ({ greet }) => {
    const [name, setName] = useState('')
    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => greet(name)}>send</button>
        </>
    )
}

export default Child