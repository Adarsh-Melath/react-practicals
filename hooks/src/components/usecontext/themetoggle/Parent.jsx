import { createContext, useState } from "react"
import Child from "./Child"


export const ThemeContext = createContext()
const Parent = () => {

    const [theme, setTheme] = useState("light");
    const style = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div style={style}><Child></Child></div>
        </ThemeContext.Provider>
    )
}

export default Parent