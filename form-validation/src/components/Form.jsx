import React, { useState, useReducer } from 'react'

const Form = (props) => {

    const { users, setUsers } = props

    const [firstName, setFirstName] = useState("");
    const [firstError, setFirstError] = useState("")
    const firstNameValidate = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstError("First name is required")
        } else if (e.target.value.length < 2) {
            setFirstError("First Name must be 2 characters or more.")
        } else {
            setFirstError("")
        }
    };

    const [lastName, setLastName] = useState("");
    const [lastError, setLastError] = useState("")
    const lastNameValidate = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastError("Last name is required")
        } else if (e.target.value.length < 2) {
            setLastError("Last Name must be 2 characters or more.")
        } else {
            setLastError("")
        }
    };

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    const emailValidate = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email Address is required")
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or more.")
        } else {
            setEmailError("")
        }
    };

    const initialState = {
        firstName: '',
        lastName: '',
        email: ''
    }
//     const reducer = (state, action)=>{
//         switch (action.type) {
//             case "SET_EMAIL":
//                 return {
//                     ...state,
//                     email: action.payload
//                 }
//             case "SET_FIRSTNAME":
//                 return {
//                     ...state,
//                     firstName: action.payload
//                 }
//             case "SET_LASTNAME":
//                 return {
//                     ...state,
//                     lastName: action.payload
//                 }
//             default:
//                 return state;
//         }
//     }
// }

const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

const createUser = (e) => {
    e.preventDefault();

    setHasBeenSubmitted(true);
    const newUser = { firstName, lastName, email };
    setUsers([...users, newUser])
    console.log("Welcome", newUser);

};

return (
    <form onSubmit={createUser}>
        {
            hasBeenSubmitted ?
                <h3>Thank you for Submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>
        }
        <div>
            <label>First Name: </label>
            <input type="text" value={firstName} onChange={firstNameValidate} />
            {
                firstError ?
                    <p>{firstError}</p> :
                    ''
            }
        </div>
        <div>
            <label>Last Name: </label>
            <input type="text" value={lastName} onChange={lastNameValidate} />
            {
                lastError ?
                    <p>{lastError}</p> :
                    null
            }
        </div>
        <div>
            <label>Email Address: </label>
            <input type="email" value={email} onChange={emailValidate} />
            {
                emailError ?
                    <p>{emailError}</p> :
                    ''
            }
        </div>
        {
            // coundn't seem to get the submit to be hidden until all inputs are filled
            (firstError, lastError, emailError) ?
                <input type="submit" value="Create User" disabled /> :
                <input type="submit" value="Create User" />
        }
    </form>
)
}

export default Form