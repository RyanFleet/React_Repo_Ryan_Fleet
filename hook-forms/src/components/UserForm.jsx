import React, { useState } from  'react';


    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();

        const newUser = { 
            firstName,
            lastName, 
            email, 
            password ,
            confirmPassword
        };

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("")
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={firstName} />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value)} value={lastName} />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}  />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password}  />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value={confirmPassword}  />
            </div>
            <input type="submit" value="Create User" />
            <div>
                <p>Your Form Data:</p>
                <p>__________________________________________</p>
            </div>
            <div>
                <h3 style={{color: 'blue'}} >First Name: {firstName}</h3>
                <h3 style={{color: 'blue'}} >Last Name: {lastName}</h3>
                <p>________________</p>
                <h5 style={{color: 'purple'}} >Email: {email}</h5>
                <p>________________</p>
                <p style={{color: 'lightpink'}} >Password: {password}</p>
                <p style={{color: 'lightpink'}} >Confirm Password: {confirmPassword}</p>
            </div>
        </form>
    );
};
    
export default UserForm;
