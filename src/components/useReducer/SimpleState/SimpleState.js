import React, {useReducer} from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default :
            return state
    }
}

const SimpleState = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <center>
            <div>
                <h4>{count}</h4>
            </div>
            <br />
            <br />
            <div>
                <button onClick={() => dispatch('reset')}> Reset Count </button>
                &nbsp;
                <button onClick={() => dispatch('increment')}> Increment Count </button>
                &nbsp;
                <button onClick={() => dispatch('decrement')}> Decrement Count </button>
            </div>
            </center>
        </div>
    )
}

export default SimpleState
