import React, {useState} from 'react'

const WithObjects = () => {

    const [name, setName] = useState({firstName: '', lastName: ''})

    const setFirstname = (e) => {
        setName({...name, firstName: e.target.value})
    }

    const setLastname = (e) => {
        setName({...name, lastName: e.target.value})
    }

    return (
        <div>
            <div>
                <input 
                    type = 'text'
                    value = {name.firstName}
                    onChange = {setFirstname} 
                />
                &nbsp;
                &nbsp;
                <input 
                    type = 'text'
                    value = {name.lastName}
                    onChange = {setLastname}                     
                />
            </div>
            <br />
            <br />
            <div>
                <h4>First name : {name.firstName}</h4>
                <h4>Last name : {name.lastName}</h4>
                <p>{JSON.stringify(name)}</p>
            </div>
        </div>
    )
}

export default WithObjects
