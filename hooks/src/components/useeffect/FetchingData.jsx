import { useEffect, useState } from "react"

/**
 * FetchingData Component
 * -------------------------------------------------------------------
 * Demonstrates how to fetch data from an external API in React
 * based on dynamic user input.
 *
 * Responsibilities:
 * - Maintain the current user ID
 * - Fetch posts belonging to the selected user
 * - Store and render the fetched posts
 *
 * React Concepts Demonstrated:
 * - useState for managing component state
 * - useEffect for handling side effects (API calls)
 * - Fetch API for asynchronous data retrieval
 * - Rendering lists using map()
 *
 * Data Source:
 * https://jsonplaceholder.typicode.com
 * A public fake REST API commonly used for learning and testing.
 */

const FetchingData = () => {

    /**
     * userId
     * ----------------------------------------------------------------
     * Represents the ID of the user whose posts should be fetched.
     *
     * setUserId:
     * Updates the user ID when the user changes the input value.
     */
    const [userId, setUserId] = useState(1);

    /**
     * posts
     * ----------------------------------------------------------------
     * Stores the list of posts retrieved from the API.
     *
     * Each post object contains:
     * - id
     * - title
     * - body
     * - userId
     */
    const [posts, setPosts] = useState([])


    /**
     * useEffect
     * ----------------------------------------------------------------
     * Executes whenever `userId` changes.
     *
     * Purpose:
     * Fetch posts that belong to the specified user ID.
     *
     * Workflow:
     * 1. Construct API URL with query parameter userId
     * 2. Send HTTP request using fetch()
     * 3. Convert response to JSON
     * 4. Update the `posts` state with the received data
     *
     * Dependency:
     * - userId
     *
     * This ensures a new API request is made whenever the
     * user enters a different ID.
     */
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [userId])


    /**
     * Component Rendering
     * ----------------------------------------------------------------
     * UI consists of:
     *
     * 1. Input field to change the userId dynamically
     * 2. List of posts fetched from the API
     *
     * When userId changes:
     * - useEffect triggers a new API request
     * - posts state updates
     * - component re-renders with new posts
     */
    return (
        <>
            {/* Input field for entering userId */}
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />

            {/* Render posts returned from the API */}
            {
                posts.map((post) => (

                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </>
    )
}

export default FetchingData