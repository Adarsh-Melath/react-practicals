import { useEffect, useState } from 'react'

/*
Component: ValidationInInput

Purpose:
This component demonstrates how to perform simple email validation
in React using useState and useEffect.

Concepts Covered:
- Controlled input
- Form validation
- useEffect with dependency
- setInterval and cleanup
*/

const ValidationInInput = () => {

    // State to store the email input value
    const [email, setEmail] = useState('')

    // State to store validation error message
    const [error, setError] = useState('')

    /*
    useEffect runs whenever the email value changes.

    Logic:
    - After every email change, a validation check runs after 500ms
    - If email is empty → show "Email is required"
    - If email doesn't contain "@" → show invalid email error
    - Otherwise → clear the error
    */
    useEffect(() => {

        const intervalId = setInterval(() => {

            if (email.trim() === '') {
                setError('Email is required')
            }
            else if (!email.includes('@')) {
                setError('Please enter valid email')
            }
            else {
                setError('')
            }

        }, 500)

        // Cleanup function to prevent memory leaks
        return () => clearInterval(intervalId)

    }, [email])

    /*
    Form submit handler

    Prevents default form reload.
    If validation fails → stop submission.
    Otherwise → log the email (simulate form submission).
    */
    const handleSubmit = (e) => {
        e.preventDefault()

        if (email.trim() === '' || !email.includes('@')) {
            return
        }

        console.log('Form submitted', email)
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>

                {/* Controlled input field */}
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Show error message only if it exists */}
                {
                    error && <p style={{ color: 'red' }}>{error}</p>
                }

                <button>Login</button>
            </form>
        </>
    )
}

export default ValidationInInput