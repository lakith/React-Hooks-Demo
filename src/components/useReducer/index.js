import React from 'react'
import SimpleState from './SimpleState/SimpleState'
import ComplexState from './ComplexState/ComplexState'
import CombineUseReducerAndUseState from './CombineUseReducerAndUseState'
import DataFetching from './DataFetching/DataFetching'

function index() {
    return (
        <div>
            <SimpleState />
            <br/>
            <hr/>
            <ComplexState />
            <br/>
            <hr/>
            <CombineUseReducerAndUseState />
            <br/>
            <hr/>
            <DataFetching />
        </div>
    )
}

export default index