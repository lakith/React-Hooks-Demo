import React, {useEffect, useState} from 'react'
import axios from 'axios'

function FetchOne() {

    const [inputId, setInputId] = useState(0)
    const [selectedPost, setSelectedPost] = useState({})
    const [submitid,setSubmitID] = useState(0)

    const onButtonClick = () => {
        setSubmitID(inputId)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + submitid)
            .then((res) => {
                setSelectedPost(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [submitid])

    return (
        <div>
            <div>
                <input 
                    type='text'
                    onChange = {(e) => setInputId(e.target.value)}
                    value = {inputId}
                />
                &nbsp;
                &nbsp;
                <button onClick={onButtonClick}>Select</button>
            </div>
            <div>
                <p>{selectedPost.title}</p>
            </div>
        </div>
    )
}

export default FetchOne
