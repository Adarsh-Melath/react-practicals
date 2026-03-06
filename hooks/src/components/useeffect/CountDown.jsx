import { useEffect, useState } from "react";

/**
 * CountDown Component
 * ------------------------------------------------------------------
 * A countdown timer component that decreases a numeric value every
 * second until it reaches zero.
 *
 * Responsibilities:
 * - Initialize countdown value from a prop
 * - Decrease the value every second
 * - Stop the countdown when it reaches zero
 * - Properly clean up the interval to avoid memory leaks
 *
 * React Concepts Demonstrated:
 * - useState for state management
 * - useEffect for handling side effects (timers)
 * - setInterval for repeated execution
 * - Cleanup functions inside useEffect
 *
 * Props:
 * - initialValue: starting value for the countdown timer
 */

const CountDown = ({ initalValue }) => {

    /**
     * value
     * --------------------------------------------------------------
     * Stores the current value of the countdown timer.
     *
     * It is initialized using the `initialValue` prop passed to the
     * component when it is rendered.
     *
     * setValue:
     * Function used to update the countdown value.
     */
    const [value, setValue] = useState(initalValue)

    /**
     * useEffect
     * --------------------------------------------------------------
     * Handles the timer logic responsible for decrementing the
     * countdown value.
     *
     * Execution Flow:
     * 1. Runs whenever the `value` state changes.
     * 2. If the value is already 0 or below, the effect exits early.
     * 3. Otherwise, a new interval is created.
     * 4. The interval runs every 1 second and decreases the value.
     * 5. Before the next effect execution, the previous interval
     *    is cleared via the cleanup function.
     *
     * Why cleanup is important:
     * Without cleanup, multiple intervals would accumulate and
     * run simultaneously, causing unexpected behavior and memory leaks.
     *
     * Dependency:
     * - value
     *
     * This ensures the timer updates correctly each second.
     */
    useEffect(() => {

        /**
         * Stop countdown if value reaches zero or below.
         * Prevents creating unnecessary intervals.
         */
        if (value <= 0) {
            return;
        }

        /**
         * setInterval
         * ----------------------------------------------------------
         * Executes the provided callback every 1000ms (1 second).
         *
         * The callback updates the state using the previous value
         * to ensure the update is based on the latest state.
         */
        const setIntervalId = setInterval(() => {
            setValue(previousValue => previousValue - 1)
        }, 1000);

        /**
         * Cleanup Function
         * ----------------------------------------------------------
         * Clears the interval before the next effect runs
         * or when the component unmounts.
         *
         * This ensures that only one interval exists at a time.
         */
        return () => clearInterval(setIntervalId);

    }, [value])

    /**
     * Debug Logging
     * --------------------------------------------------------------
     * Logs the current countdown value in the browser console.
     * Useful during development for observing state changes.
     */
    console.log(value);

    /**
     * Component Rendering
     * --------------------------------------------------------------
     * Displays the remaining countdown time to the user.
     */
    return (
        <>
            <p>Time Remaining: {value}</p>
        </>
    )
}

export default CountDown;