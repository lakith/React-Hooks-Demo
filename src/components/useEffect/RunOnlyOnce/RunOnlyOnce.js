import React, {useEffect, useState} from 'react'

const RunOnlyOnce = () => {
    
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMouseMovement = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('Updaing DOM 3')
        window.addEventListener('mousemove',logMouseMovement)
    }, [])

    return (
        <div>
            <h4> Position X - {x} Y - {y}</h4>
        </div>
    )
}

export default RunOnlyOnce
