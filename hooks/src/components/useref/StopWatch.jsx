import { useRef, useState } from "react"

const StopWatch = () => {

    // State to store the current stopwatch time
    // Starts from 0 seconds
    const [time, setTime] = useState(0);

    // useRef is used to store the interval ID
    // This allows us to stop the interval later without causing re-renders
    const ref = useRef();


    // Reset the stopwatch time back to 0
    const onReset = () => {
        setTime(0)
    }

    // Start the stopwatch
    const onStart = () => {

        // Store the interval ID inside ref
        // The timer updates every 100ms (0.1 second)
        ref.current = setInterval(() => {

            // Functional state update ensures we always use the latest state value
            setTime((previousTime) => {

                // Increase time by 0.1 seconds
                const newTime = previousTime + 0.1;

                // toFixed(2) keeps the value to two decimal places
                // Number() converts the string result back to a number
                return Number((newTime).toFixed(2));
            })

        }, 100)
    }

    // Stop the stopwatch
    const onStop = () => {

        // Clear the interval using the stored interval ID
        clearInterval(ref.current)
    }

    return (
        <>
            {/* Display current stopwatch time */}
            <h1>time: {time} </h1>

            {/* Start the timer */}
            <button onClick={onStart}>Start</button>

            {/* Stop the timer */}
            <button onClick={onStop}>Stop</button>

            {/* Reset the timer */}
            <button onClick={onReset}>Reset</button>
        </>
    )
}

export default StopWatch