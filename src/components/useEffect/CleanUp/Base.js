import React, {useEffect, useState} from 'react'

const Base = () => {
    
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMouseMovement = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('Updaing DOM 4')
        window.addEventListener('mousemove',logMouseMovement)

        //Component Will unmount
        return () => {
            console.log('Component Unmounting')
            window.removeEventListener('mousemove',logMouseMovement)
        }

    }, [])

    return (
        <div>
            <h4> Position X - {x} Y - {y}</h4>
        </div>
    )
}

export default Base
