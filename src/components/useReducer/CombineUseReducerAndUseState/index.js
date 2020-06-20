import React, {useReducer} from 'react'
import ComponentC from './ComponentC/ComponentC'
import ComponentA from './ComponentA/ComponentA'
import ComponentB from './ComponentB/ComponentB'

export const CounterContext = React.createContext()  

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

const Index = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <CounterContext.Provider value={{countState: count, countDispatch: dispatch}} >
            <div>
                <ComponentA />
                <br/>
                <ComponentB />
                <br/>
                <ComponentC />
            </div>
        </CounterContext.Provider>
    
    )
}

export default Index