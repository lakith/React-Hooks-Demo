import React,{useState} from 'react'

let Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter(prevCounter => {
           return  prevCounter + 1
        })
    }

    const incrementByfive = () => {
        setCounter(prevCounter => {
           return  prevCounter + 5
        })
    }

    const decrementCounter = () => {
        setCounter(prevCounter => {
           return  prevCounter - 1
        })
    }

    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <div>
           <center>
            <div>
                <h4>{counter}</h4>
            </div>
            <br />
            <br />
            <div>
                <button onClick={resetCounter}> Reset Count </button>
                &nbsp;
                <button onClick={incrementCounter}> Increment Count </button>
                &nbsp;
                <button onClick={decrementCounter}> Decrement Count </button>
                &nbsp;
                <button onClick={incrementByfive}> Increment By 5 </button>
            </div>
           </center>
        </div>
    )
}

export default Counter
