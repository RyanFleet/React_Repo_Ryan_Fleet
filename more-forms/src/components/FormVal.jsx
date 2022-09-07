import React, { useState } from 'react'

const FormVal = (props) => {

    const [firstName, setFirstName] = useState("");
    const [firstError, setFirstError] = useState("")
    const firstNameValidate = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1){
            setFirstError("First name is required")
        } else if (e.target.value.length < 2){
            setFirstError("First Name must be 2 characters or more.")
        } else {
            setFirstError("")
        }
    };

    const [lastName, setLastName] = useState("");
    const [lastError, setLastError] = useState("")
    const lastNameValidate = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1){
            setLastError("Last name is required")
        } else if (e.target.value.length < 2){
            setLastError("Last Name must be 2 characters or more.")
        } else {
            setLastError("")
        }
    };

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    const emailValidate = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1){
            setEmailError("Email Address is required")
        } else if (e.target.value.length < 5){
            setEmailError("Email must be 5 characters or more.")
        } else {
            setEmailError("")
        }
    };
    
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const passwordValidate = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1){
            setPasswordError("Password is required")
        } else if (e.target.value.length < 8){
            setPasswordError("Password must be 8 characters or more.")
        } else {
            setPasswordError("")
        }
    };
    
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmError, setConfirmError] = useState("")
    const confirmValidate = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1){
            setConfirmError("Password Confirmation is required")
        } else if (e.target.value.length < 8){
            setConfirmError("Confirm Password must be 8 characters or more.")
        } else if (e.target.value !== password){
            setConfirmError("Passwords Must match!")
        } else {
            setConfirmError("")
        }
    };
    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        
        setHasBeenSubmitted(true);
    };
    
    // const allErrors = [firstError, lastError, emailError, passwordError, confirmError]

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
                        ''
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
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={passwordValidate} />
                {
                    passwordError ?
                        <p>{passwordError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={confirmValidate} />
                {
                    confirmError ?
                        <p>{confirmError}</p> :
                        ''
                }
            </div>
            {
            // coundn't seem to get the submit to be hidden until all inputs are filled
                (firstError, lastError, emailError, passwordError, confirmError) ?  
                <input type="submit" value="Create User" disabled /> :
                <input type="submit" value="Create User" />
            }
        </form>
    )
}

export default FormVal