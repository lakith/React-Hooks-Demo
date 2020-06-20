import React, {useState} from 'react'
import Base from './Base'

const CleanUp = () => {
    
    let [toggle,setToggle] = useState(true)

    return (
        <div>
            <button onClick={(() => setToggle(!toggle))}> Toggle Mouse Move</button>
            {
                toggle && <Base />
            }
        </div>
    )
}

export default CleanUp
