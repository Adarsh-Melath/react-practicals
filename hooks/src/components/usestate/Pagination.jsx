import { useEffect, useState } from 'react'

/**
 * Pagination Component
 * ------------------------------------------------------------------
 * Demonstrates a basic client-side pagination mechanism.
 *
 * Responsibilities:
 * - Maintain the currently active page
 * - Display only the posts belonging to the current page
 * - Allow navigation between pages using previous and next buttons
 *
 * React Concepts Demonstrated:
 * - useState for state management
 * - useEffect for reacting to state changes
 * - Array slicing for pagination logic
 * - Conditional page navigation
 *
 * Note:
 * This example uses static data. In real-world applications,
 * pagination is often implemented with server APIs where the
 * backend returns paginated results.
 */

const Pagination = () => {

    /**
     * currentPage
     * --------------------------------------------------------------
     * Represents the active page number currently displayed.
     *
     * setCurrentPage:
     * Updates the current page when the user navigates
     * forward or backward.
     */
    const [currentPage, setCurrentPage] = useState(1)

    /**
     * currentPagePosts
     * --------------------------------------------------------------
     * Stores the subset of posts that belong to the current page.
     *
     * This is derived from the `contents` array using slicing
     * based on the current page and the number of posts per page.
     */
    const [currentPagePosts, setCurrentPagePosts] = useState([])

    /**
     * contents
     * --------------------------------------------------------------
     * Static dataset representing posts to be paginated.
     *
     * Each object contains:
     * - id: unique identifier
     * - title: post title
     *
     * In production systems this data would typically be fetched
     * from an API or database.
     */
    const contents = [
        {
            id: 1,
            title: "hello"
        },
        {
            id: 2,
            title: "world"
        }
        ,
        {
            id: 3,
            title: "foo"
        },
        {
            id: 4,
            title: "bar"
        }
        , {
            id: 5,
            title: "baz"
        }, {
            id: 6,
            title: "qux"
        }, {
            id: 7,
            title: "quux"
        }
    ]

    /**
     * Pagination Configuration
     * --------------------------------------------------------------
     * totalPosts  -> total number of posts available
     * postsPerPage -> number of posts displayed per page
     * totalPages  -> total number of pages calculated based
     *                on total posts and posts per page
     */
    const totalPosts = contents.length;
    const postsPerPage = 3;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    /**
     * useEffect
     * --------------------------------------------------------------
     * Runs whenever the `currentPage` changes.
     *
     * Purpose:
     * Updates the list of posts that should be displayed
     * on the currently active page.
     *
     * Logic:
     * - Calculate the starting index of the posts
     * - Calculate the ending index
     * - Use Array.slice() to extract the posts
     *
     * Example:
     * If currentPage = 2 and postsPerPage = 3
     *
     * startIndex = (2 - 1) * 3 = 3
     * endIndex = 2 * 3 = 6
     *
     * Posts from index 3 to 5 will be displayed.
     */
    useEffect(() => {
        setCurrentPagePosts(
            contents.slice(
                (currentPage - 1) * postsPerPage,
                currentPage * postsPerPage
            )
        )
    }, [currentPage])

    /**
     * handlePrevious
     * --------------------------------------------------------------
     * Navigates to the previous page.
     *
     * Logic:
     * - If the current page is greater than 1, move back by one page.
     * - If the user is on the first page, wrap around to the last page.
     */
    const handlePrevious = () => {
        setCurrentPage(prev => prev > 1 ? prev - 1 : totalPages)
    }

    /**
     * handleNext
     * --------------------------------------------------------------
     * Navigates to the next page.
     *
     * Logic:
     * - If the current page is less than the total number of pages,
     *   move forward by one page.
     * - If the user is on the last page, wrap around to the first page.
     */
    const handleNext = () => {
        setCurrentPage(prev => prev < totalPages ? prev + 1 : 1)
    }

    /**
     * Component Rendering
     * --------------------------------------------------------------
     * UI Structure:
     *
     * 1. List of posts belonging to the current page
     * 2. Previous button for backward navigation
     * 3. Page indicator showing current page and total pages
     * 4. Next button for forward navigation
     */

    return (
        <>
            {/* Render posts for the current page */}
            {currentPagePosts.map(post =>
                <li key={post.id}>{post.title}</li>
            )}

            {/* Navigate to previous page */}
            <button onClick={handlePrevious}>previous</button>

            {/* Page indicator */}
            <span>{currentPage} / {totalPages}</span>

            {/* Navigate to next page */}
            <button onClick={handleNext}>next</button>
        </>
    )
}

export default Pagination