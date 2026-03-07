import { useEffect, useState } from "react"
import useDebounce from "./useDebounce";


const SearchResults = () => {
    const [searchValue, setSearchValue] = useState('')
    const [users, setUsers] = useState([]);

    const [debouncedSearch] = useDebounce(searchValue, 500)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${debouncedSearch}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [debouncedSearch])


    return (
        <>
            <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />


            {
                users.map((user) => (
                    <h1 key={user.id}>{user.name}</h1>
                ))
            }
        </>
    )
}

export default SearchResults