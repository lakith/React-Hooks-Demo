import React, {useEffect, useState} from 'react'
import axios from 'axios'

let FetchAll = () => {

    const [posts,setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setPosts(res.data)
            })
            .catch(e => {
                console.log(e)
            })
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default FetchAll
