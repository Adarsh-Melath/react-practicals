import { useContext } from "react"
import { AuthContext } from "./AuthContextExample"


const Navbar = () => {
    const { user } = useContext(AuthContext)

    return (
        <>
            {user.isAuthenticated ? <div>
                <h1>Welcome {user.name}</h1>
            </div> : <div>
                <h1>Welcome Guest</h1>
            </div>}
        </>
    )
}
export default Navbar