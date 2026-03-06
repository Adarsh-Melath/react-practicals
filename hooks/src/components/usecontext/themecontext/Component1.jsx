import { createContext } from "react"
import Component2 from "./Component2";



export const ThemeContext = createContext();
const Component1 = () => {
    return (
        <>
            <h1>Component 1</h1>
            <ThemeContext.Provider value={"light"}>
                <Component2 />
            </ThemeContext.Provider>
        </>
    )
}

export default Component1