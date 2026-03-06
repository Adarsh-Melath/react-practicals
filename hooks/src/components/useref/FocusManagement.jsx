
import { useEffect, useRef } from "react";


const FocusManagement = () => {
    const reference = useRef();

    useEffect(() => {
        reference.current.focus()
    }, [])

    const handleClick = () => {
        reference.current.focus()
    }

    return (
        <>
            <input type="text" ref={reference} />
            <button onClick={handleClick}>click</button>
        </>
    )
}

export default FocusManagement