import { useState } from 'react'

/**
 * CharacterCounter Component
 * -------------------------------------------------------------
 * A simple controlled input component that counts the number
 * of characters typed by the user in real time.
 *
 * Responsibilities:
 * - Capture user input from a text field
 * - Maintain the entered string in component state
 * - Compute and display the character count
 *
 * React Concepts Demonstrated:
 * - useState Hook for state management
 * - Controlled components (input value bound to state)
 * - Event handling with onChange
 * - Derived UI updates based on state changes
 *
 * Note:
 * In larger applications, the character count could be derived
 * directly from `string.length` instead of maintaining a
 * separate `count` state. Here it is stored explicitly for
 * learning purposes.
 */

const CharacterCounter = () => {

    /**
     * string state
     * ---------------------------------------------------------
     * Holds the current text entered by the user.
     *
     * string    -> current input value
     * setString -> function used to update the input value
     */
    const [string, setString] = useState("")

    /**
     * count state
     * ---------------------------------------------------------
     * Stores the number of characters in the input field.
     *
     * count    -> current character count
     * setCount -> function used to update the count
     */
    const [count, setCount] =
        useState(0)

    return (
        <>
            {/*
                Text Input Field
                -------------------------------------------------
                This is a controlled input element.

                value:
                    The displayed value is controlled by the
                    `string` state.

                onChange:
                    Triggered whenever the user types or edits
                    the text in the input field.

                    Actions performed:
                    1. Update the `string` state with the new value.
                    2. Update the `count` state using the length
                       of the new string.
            */}
            <input
                type="text"
                value={string}
                onChange={(e) => {
                    setString(e.target.value)
                    setCount(e.target.value.length)
                }}
            />

            {/*
                Character Count Display
                -------------------------------------------------
                Dynamically displays the number of characters
                currently entered by the user.
            */}
            <h1>Count: {count}</h1>
        </>
    )
}

export default CharacterCounter