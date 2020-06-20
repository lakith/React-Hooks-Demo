import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    data: {},
    error: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                data: {},
                error: action.error
            }
        default:
            return state
    }
}

function DataFetching() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                dispatch({type: 'FETCH_SUCCESS', payload: res.data})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_ERROR', error: 'Something Went Wrong'})
            })
    }, [])

    return (
        <div>
            <div>
                <p>
                    {state.loading ? 'Loading...' : (state.error ? state.error : state.data.title)}
                </p>
            </div>
        </div>
    )
}

export default DataFetching
