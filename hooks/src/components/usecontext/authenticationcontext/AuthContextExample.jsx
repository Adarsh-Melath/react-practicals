import { createContext } from "react"
import Navbar from "./Navbar"


export const AuthContext = createContext()
const AuthContextExample = () => {

    return (
        <>
            <AuthContext.Provider value={{
                user: {
                    name: "adarsh",
                    password: 'adarshmelath1305',
                    isAuthenticated: true
                }
            }}>
                <Navbar>

                </Navbar>
            </AuthContext.Provider>
        </>
    )
}

export default AuthContextExample