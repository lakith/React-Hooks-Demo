import React, {useContext} from 'react'
import {CounterContext} from '../../../index'

function ComponentF() {
    const counetContext = useContext(CounterContext)

    return (
        <div>
            <center>
                <div>
                    <h3>Component F</h3>
                    <h4>{counetContext.countState}</h4>
                </div>
                <br />
                <div>
                    <button onClick={() => counetContext.countDispatch('reset')}> Reset Count </button>
                    &nbsp;
                    <button onClick={() => counetContext.countDispatch('increment')}> Increment Count </button>
                    &nbsp;
                    <button onClick={() => counetContext.countDispatch('decrement')}> Decrement Count </button>
                </div>
            </center>
        </div>
    )
}

export default ComponentF
