import React, {useReducer} from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

export const PageTest = () => {

    const [count, dispatch] = useReducer(reducer, 0);
    
    const incrementCount = (e) => {
        e.preventDefault()
        dispatch({type: 'INCREMENT'})
    }

    const decrementCount = (e) => {
        e.preventDefault()
        dispatch({type: 'DECREMENT'})
    }

    return (
        <>
            <h2>Count it: {count}</h2>
            <form>
                <button style={{width: '50px', height: '50px'}} onClick={incrementCount}>+</button>
                <button style={{width: '50px', height: '50px'}} onClick={decrementCount}>-</button>
            </form>
        </>
    )
}
