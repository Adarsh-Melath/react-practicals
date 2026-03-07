import useFetch from "./useFetch"


const url = 'https://jsonplaceholder.typicode.com/users'
const UserList = () => {
    const [users] = useFetch(url)


    console.log(users);
    return (
        <>
            {
                users.map((user, index) => (
                    <h1 key={index}>{user.name}</h1>
                ))
            }
        </>
    )
}

export default UserList