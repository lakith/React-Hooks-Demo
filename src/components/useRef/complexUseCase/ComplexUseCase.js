import React,{useRef, useState, useEffect} from 'react'

function ComplexUseCase() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
    },[])

    return (
        <div>
            <h4> Hook Timer - {timer}</h4>
            <button onClick={() => clearInterval(intervalRef.current)}> Clear Hook Timer</button>
        </div>
    )
}

export default ComplexUseCase
