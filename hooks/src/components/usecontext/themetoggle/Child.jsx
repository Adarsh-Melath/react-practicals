import { useContext } from "react"
import { ThemeContext } from "./Parent"

const Child = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <>
            <button onClick={toggleTheme} style={{
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                background: "transparent"
            }}> {theme === "light" ? "⚫" : "⚪"}</button>
        </>
    )
}

export default Child