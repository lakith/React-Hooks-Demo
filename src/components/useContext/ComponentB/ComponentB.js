import React, {useContext} from 'react'
import {UserCotext, ProjectCotext} from '../index'

function ComponentB() {

    const user = useContext(UserCotext)
    const project = useContext(ProjectCotext)

    return (
        <div>
            <h4>User - {user} | Project - {project}</h4>
        </div>
    )
}

export default ComponentB
