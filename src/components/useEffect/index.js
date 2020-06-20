import React from 'react'
import FetchData from './FetchData'
import RunEveryTime from './RunEveryTime/RunEveryTime'
import RunConditionally from './RunConditionally/RunConditionally'
import RunOnlyOnce from './RunOnlyOnce/RunOnlyOnce'
import CleanUp from './CleanUp/CleanUp'


function index() {
    return (
        <div>
            <RunEveryTime />
            <br/>
            <br/>
            <RunConditionally />
            <br/>
            <br/>
            <RunOnlyOnce />
            <br/>
            <br/>
            <CleanUp />
            <br/>
            <br/>
            <FetchData />
        </div>
    )
}

export default index
