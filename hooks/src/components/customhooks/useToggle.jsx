import { useState } from "react"


const useToggle = (initialValue) => {
    const [toggleState, setToggleState] = useState(initialValue);

    const toggle = () => {
        setToggleState(!toggleState);
    }
    return [toggleState, toggle];
}

export default useToggle