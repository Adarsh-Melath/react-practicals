import { useEffect, useState } from 'react'

/**
 * WindowResize Component
 * ------------------------------------------------------------------
 * A React component that tracks and displays the current size
 * of the browser window.
 *
 * Responsibilities:
 * - Store the current window width and height
 * - Listen for browser resize events
 * - Update the UI whenever the window size changes
 * - Properly clean up event listeners when the component unmounts
 *
 * React Concepts Demonstrated:
 * - useState for managing component state
 * - useEffect for handling side effects
 * - Browser event listeners
 * - Cleanup functions inside useEffect
 */

const WindowResize = () => {

    /**
     * windowSize State
     * --------------------------------------------------------------
     * Stores the current dimensions of the browser window.
     *
     * Structure:
     * {
     *   width: number,
     *   height: number
     * }
     *
     * Initial State:
     * The initial values are taken from the browser's `window`
     * object using:
     *
     * - window.innerWidth
     * - window.innerHeight
     *
     * These values represent the viewport size when the component
     * first renders.
     */
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })


    /**
     * useEffect
     * --------------------------------------------------------------
     * Handles the registration of the window resize event listener.
     *
     * Execution Behavior:
     * - Runs once when the component mounts.
     * - Attaches an event listener to the browser window.
     * - Cleans up the listener when the component unmounts.
     *
     * Dependency Array:
     * []
     *
     * This ensures the effect runs only once during the lifecycle
     * of the component.
     */
    useEffect(() => {

        /**
         * handleResize
         * ----------------------------------------------------------
         * Event handler function triggered whenever the browser
         * window is resized.
         *
         * It reads the latest window dimensions and updates
         * the component state.
         */
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        /**
         * Register Resize Event Listener
         * ----------------------------------------------------------
         * Adds a listener to the browser window that triggers
         * the handleResize function whenever the window is resized.
         */
        window.addEventListener('resize', handleResize)

        /**
         * Cleanup Function
         * ----------------------------------------------------------
         * Removes the resize event listener when the component
         * unmounts.
         *
         * This prevents:
         * - Memory leaks
         * - Duplicate event listeners
         * - Unnecessary updates after component removal
         */
        return () => window.removeEventListener('resize', handleResize)

    }, [])


    /**
     * Debug Logging
     * --------------------------------------------------------------
     * Logs the current window width and height to the console.
     * Useful during development to observe resize behavior.
     */
    console.log(window.innerWidth, window.innerHeight)


    /**
     * Component Rendering
     * --------------------------------------------------------------
     * Displays the current window dimensions stored in the
     * component state.
     *
     * The UI updates automatically whenever the state changes,
     * which happens whenever the window resize event occurs.
     */
    return (
        <>
            <div>
                <h2>Window Size</h2>
                <p>Width: {windowSize.width}</p>
                <p>Height: {windowSize.height}</p>
            </div>
        </>
    )
}

export default WindowResize