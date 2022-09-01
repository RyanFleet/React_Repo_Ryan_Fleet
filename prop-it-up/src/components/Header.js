import React from 'react'


const Header = (props) => {
    const {firstName, lastName, age, hair} = props;
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
        </div>
    )
}

export default Header