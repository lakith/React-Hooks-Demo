import React from 'react'
import ComponentA from './ComponentA/ComponentA'

export const UserCotext = React.createContext()
export const ProjectCotext = React.createContext() 

function index() {
    return (
        <div>
            <UserCotext.Provider value={'Lakith'}>
                <ProjectCotext.Provider value={'Umbrella'}>
                    <ComponentA /> 
                </ProjectCotext.Provider>
            </UserCotext.Provider>
        </div>
    )
}

export default index
