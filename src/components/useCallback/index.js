
import React, {useState, useCallback} from 'react'
import Title from './Title/Title'
import Counter from './Counter/Counter'
import Button from './Button/Button'

function Index() {

    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(0)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Counter text = 'Age' count = {age} />
            <Button handleClick={incrementAge} >Increment Age</Button>
            <Counter text = 'Salary' count = {salary} />
            <Button handleClick={incrementSalary} >Increment Salary</Button>
        </div>
    )
}

export default Index
