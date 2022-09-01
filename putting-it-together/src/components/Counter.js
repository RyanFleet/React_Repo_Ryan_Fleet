import React, { useState } from 'react';

const Counter = props => {

    const [age, setAge] = useState(props.age)

    const {firstName, lastName, hair} = props;

    const increaseAge = () => {
        setAge(age + 1)
    }
    return (
        <div>
            <h1>
                {lastName}, {firstName}
            </h1>
            <h5>
                Age: {age}
            </h5>
            <h5>
                Hair Color: {hair}
            </h5>
            <button onClick={ (increaseAge) }>Increase Age by 1</button>
        </div>
    )
}

export default Counter
