import { useState } from 'react'

/**
 * LoginFormError Component
 * ----------------------------------------------------------------
 * A login form that demonstrates basic client-side validation
 * using React state.
 *
 * Responsibilities:
 * - Capture user input for email and password
 * - Validate input when the form is submitted
 * - Display validation error messages to the user
 *
 * React Concepts Demonstrated:
 * - useState for managing form state
 * - Controlled components (inputs controlled by React state)
 * - Form submission handling
 * - Conditional rendering for error messages
 *
 * Note:
 * This example focuses on learning validation logic using
 * simple React state rather than external form libraries.
 */

const LoginFormError = () => {

    /**
     * email
     * --------------------------------------------------------------
     * Stores the current value entered in the email input field.
     *
     * setEmail:
     * Updates the email state whenever the user types in the input.
     */
    const [email, setEmail] = useState('');

    /**
     * password
     * --------------------------------------------------------------
     * Stores the current value entered in the password input field.
     *
     * setPassword:
     * Updates the password state when the user modifies the input.
     */
    const [password, setPassword] = useState('');

    /**
     * emailError
     * --------------------------------------------------------------
     * Holds validation error messages related to the email field.
     *
     * Example errors:
     * - Email is required
     * - Please enter a valid email
     */
    const [emailError, setEmailError] = useState('')

    /**
     * passwordError
     * --------------------------------------------------------------
     * Holds validation error messages related to the password field.
     *
     * Example error:
     * - Password is required
     */
    const [passwordError, setPasswordError] = useState('')


    /**
     * handleSubmit
     * --------------------------------------------------------------
     * Handles form submission and performs validation checks.
     *
     * Steps:
     * 1. Prevent default browser form submission behavior
     * 2. Validate email input
     * 3. Validate password input
     * 4. Update error states if validation fails
     *
     * Validation Rules:
     * - Email cannot be empty
     * - Email must contain '@'
     * - Password cannot be empty
     */
    const handleSubmit = (e) => {

        // Prevents page reload on form submission
        e.preventDefault();

        /**
         * Email Validation
         */
        if (email.trim() === '') {
            setEmailError('Email is required')
        }
        else if (!email.includes('@')) {
            setEmailError('Please enter a valid email')
        }

        /**
         * Password Validation
         */
        if (password.trim() === '') {
            setPasswordError('Password is required')
        }
    }

    /**
     * Component Rendering
     * --------------------------------------------------------------
     * UI Structure:
     *
     * - Email input field
     * - Email validation message (if any)
     * - Password input field
     * - Password validation message (if any)
     * - Login button
     *
     * Error messages are conditionally rendered using the
     * logical AND (&&) operator.
     *
     * Example:
     * If emailError contains a message, it will be displayed
     * below the email input.
     */
    return (
        <>
            <form action="" onSubmit={handleSubmit}>

                {/* Email Input Field */}
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='email'
                />

                {/* Display email validation error if it exists */}
                {emailError && <p>{emailError}</p>}

                {/* Password Input Field */}
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='password'
                />

                {/* Display password validation error if it exists */}
                {passwordError && <p>{passwordError}</p>}

                {/* Submit button triggers form validation */}
                <button>Login</button>

            </form>
        </>
    )
}

export default LoginFormError