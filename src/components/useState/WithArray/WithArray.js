import React, {useState} from 'react'

const WithArray = () => {

    const [items, setItem] = useState([])

    const addNewItem = () => {
        setItem([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    } 

    return (
        <div>
            <div>
               <button onClick={addNewItem}>Add New Item</button>
            </div>
            <br />
            <br />
            <div>
                {
                    items.map(item => {
                    return <li key={item.id}>{item.value}</li>
                    })
                }
            </div>
        </div>
    )
}

export default WithArray
