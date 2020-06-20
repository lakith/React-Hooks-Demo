import React, {useEffect, useState} from 'react'

const RunEveryTime = () => {
    const [count, setCounter] = useState(0);

    useEffect(() => {
        console.log('Updaing DOM 1')
        document.title = 'You clicked ' + count + ' times'
    }, [count])

    return (
        <div>
            <button onClick={() => setCounter(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default RunEveryTime