import React, {useReducer} from 'react'

const initialState =  {
    firstCounter: 0,
    secondCounter: 10,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state , firstCounter : state.firstCounter + action.value}
        case 'decrement':
            return {...state , firstCounter : state.firstCounter - action.value}
        case 'increment2':
            return {...state , secondCounter : state.secondCounter + action.value}
        case 'decrement2':
            return {...state , secondCounter : state.secondCounter - action.value}
        case 'reset':
            return initialState
        default :
            return state
    }
}

const ComplexState = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
        <center>
         <div>
             <h4>Counter One - [ {count.firstCounter} ] </h4>
             <h4>Counter Two - [ {count.secondCounter} ]</h4>
         </div>
         <br />
         <br />
         <div>
             <button onClick={() => dispatch({type: 'reset'})}> Reset Count </button>
             <div>
                <button onClick={() => dispatch({type: 'increment', value: 1})}> Increment Count </button>
                &nbsp;
                <button onClick={() => dispatch({type: 'decrement', value: 1})}> Decrement Count </button>
             </div>
             <div>
                <button onClick={() => dispatch({type: 'increment2', value: 5})}> Increment Count </button>
                &nbsp;
                <button onClick={() => dispatch({type: 'decrement2', value: 5})}> Decrement Count </button>
             </div>
         </div>
        </center>
     </div>
    )
}

export default ComplexState
