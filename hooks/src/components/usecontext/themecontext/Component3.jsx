import { useContext } from "react"
import { ThemeContext } from "./Component1"


const Component3 = () => {
    const themeContext = useContext(ThemeContext)
    return (
        <>
            <h1>Component3</h1>
            <h2>Context Value:{themeContext}</h2>
        </>
    )
}
export default Component3