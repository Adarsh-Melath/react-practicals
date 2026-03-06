import { useState } from "react"

/*
    TodoList Component
    -------------------
    This component implements a simple Todo List where users can:
    1. Add tasks
    2. Display tasks
    3. Delete tasks

    React Hook Used:
    - useState : used to manage component state
*/

const TodoList = () => {

    /*
        task  -> stores the current value typed in the input field
        setTask -> function used to update the task state
    */
    const [task, setTask] = useState('');

    /*
        tasks -> stores all tasks in an array
        setTasks -> function used to update the tasks list
    */
    const [tasks, setTasks] = useState([])

    /*
        addTask Function
        ----------------
        Purpose:
        Adds the current task to the tasks array.

        Logic:
        - Uses the previous state (previousTasks)
        - Creates a new array using the spread operator (...)
        - Adds the new task to the end of the array

        Why use previousTasks?
        Because state updates in React are asynchronous, so we rely
        on the previous state to safely update the new state.
    */
    const addTask = () => {
        setTasks(previousTasks => [...previousTasks, task])

        // Clear the input field after adding the task
        setTask('')
    }

    /*
        deleteTask Function
        -------------------
        Purpose:
        Removes a task from the tasks array.

        Parameters:
        index -> position of the task to be removed

        Logic:
        - filter() creates a new array
        - keeps all tasks except the one whose index matches
    */
    const deleteTask = (index) => {
        setTasks(previousTasks => previousTasks.filter((task, i) => i !== index))
    }

    return (
        <>
            {/* Input field for entering a new task */}
            <input
                type="text"
                value={task} // controlled input bound to task state
                onChange={(e) => setTask(e.target.value)} // update state when user types
            />

            {/* Button to add task to the list */}
            <button onClick={addTask}>Add Task</button>

            <h1>Task</h1>

            {
                /*
                    Rendering the task list

                    map() is used to iterate through the tasks array
                    and render each task with a Delete button
                */
                tasks.map((task, index) => (
                    <div key={index}>{/* actually it is bad practice to give index as key */}
                        <li>{task}</li>

                        {/* Delete button removes the selected task */}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default TodoList