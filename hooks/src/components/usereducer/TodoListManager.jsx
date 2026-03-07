import { useReducer, useState } from "react"


const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add': {
            console.log('add method called')
            return { todos: [...state.todos, action.payload] }
        }
        case 'remove': {
            console.log('remove method called')
            return { todos: state.todos.filter((_, index) => index !== action.payload) }
        }
        default:
            return state;
    }
}
const TodoListManager = () => {
    const [tasks, dispatch] = useReducer(todoReducer, { todos: [] })
    const [title, setTitle] = useState('');


    console.log(tasks)
    console.log(tasks.todos)

    return (
        <>
            <h1>Todo List Manager</h1>

            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => dispatch({ type: 'add', payload: title })}>add task</button>

            {
                tasks.todos.map((task, index) => (
                    <div key={index}>
                        {task} <button onClick={() => dispatch({ type: 'remove', payload: index })}>remove</button>
                    </div>
                ))
            }
        </>
    )
}

export default TodoListManager