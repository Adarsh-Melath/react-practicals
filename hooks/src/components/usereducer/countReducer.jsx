

export const countReducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state > 0
                ? state - 1
                : 0
        case 'reset':
            return 0;
        default:
            return state
    }
}