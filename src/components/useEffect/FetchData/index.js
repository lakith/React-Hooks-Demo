import React from 'react'
import FetchAll from './FetchAll/FetchAll'
import FetchOne from './FetchOne/FetchOne'

function index() {
    return (
        <div>
            <FetchAll />
            <br/>
            <br/>
            <FetchOne />
        </div>
    )
}

export default index