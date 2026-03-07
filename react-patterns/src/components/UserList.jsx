import WithLoading from "./WithLoading"

const UserList = ({ props }) => {
    return (
        <>
            <h1>User List</h1>
        </>
    )
}


const UserWithLoading = WithLoading(UserList)
export default UserWithLoading