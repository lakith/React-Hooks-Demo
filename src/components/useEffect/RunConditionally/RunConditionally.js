import React, {useEffect, useState} from 'react'

const RunConditionally = () => {
    const [count, setCounter] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('Updaing DOM 2')
        document.title = 'You clicked ' + count + ' times'
    }, [count])

    return (
        <div>
            <input 
                type='text'
                onChange = {(e) => setName(e.target.value)}
                value = {name}
            />
            <button onClick={() => setCounter(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default RunConditionally